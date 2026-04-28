#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import socketserver
import threading
import time
from http import HTTPStatus
from http.server import SimpleHTTPRequestHandler
from pathlib import Path
from typing import Any

from status_store import 数据目录, 默认状态, 中文状态文件 as 状态文件, 写入状态, 读取状态

项目根目录 = Path(__file__).resolve().parent
网页目录 = 项目根目录 / 'web'
默认主机 = '127.0.0.1'
默认端口 = 8876
轮询间隔秒 = 2.1

默认轮播序列 = [
    {'情绪': '待机中', '标题': '待机中', '文案': '我在这里，安安静静陪你等下一句。'},
    {'情绪': '思考中', '标题': '思考中', '文案': '我在顺着上下文想，想把下一句接得更稳。'},
    {'情绪': '执行中', '标题': '执行中', '文案': '我正在忙这件事，手边的小工具还没完全放下。'},
    {'情绪': '调皮中', '标题': '调皮中', '文案': '我先在旁边晃一晃，眨眨眼等你继续点我。'},
    {'情绪': '困困的', '标题': '困困的', '文案': '我有点软绵绵的，不过还是在这里陪着你。'},
    {'情绪': '开心中', '标题': '开心中', '文案': '这一小段节奏挺顺，我带着好心情看着你。'},
    {'情绪': '惊讶中', '标题': '惊讶中', '文案': '这个变化让我精神了一下，我正多看两眼。'},
    {'情绪': '需注意', '标题': '需注意', '文案': '刚刚有点小波动，我会先稳一下再继续。'},
]


class 多线程TCP服务器(socketserver.ThreadingMixIn, socketserver.TCPServer):
    allow_reuse_address = True
    daemon_threads = True


class 小窗请求处理器(SimpleHTTPRequestHandler):
    def __init__(self, *args: Any, **kwargs: Any) -> None:
        super().__init__(*args, directory=str(网页目录), **kwargs)

    def do_GET(self) -> None:
        请求路径 = self.path.split('?', 1)[0]
        if 请求路径 in {'/接口/状态', '/api/status'}:
            self.返回状态()
            return
        # 新增：返回会话列表供前端检测新消息
        if 请求路径 in {'/接口/会话列表', '/api/sessions'}:
            self.返回会话列表()
            return
        if 请求路径 == '/':
            self.path = '/dashboard.html'
        elif 请求路径 == '/widget':
            self.path = '/index.html'
        super().do_GET()

    def 返回状态(self) -> None:
        载荷 = 读取状态()
        body = json.dumps(载荷, ensure_ascii=False).encode('utf-8')
        self.send_response(HTTPStatus.OK)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        self.send_header('Content-Length', str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def 返回会话列表(self) -> None:
        """返回会话列表，包含最新消息摘要，供前端展示"""
        会话目录 = Path.home() / '.openclaw' / 'agents' / 'main' / 'sessions'
        结果 = []
        try:
            文件列表 = sorted(会话目录.glob('*.jsonl'), key=lambda x: x.stat().st_mtime, reverse=True)[:5]
            for f in 文件列表:
                try:
                    行们 = f.read_text(encoding='utf-8', errors='ignore').strip().split('\n')
                    最新消息时间 = None
                    最新角色 = None
                    最新摘要 = ''
                    消息总数 = 0
                    for line in reversed(行们):
                        if not line.strip():
                            continue
                        try:
                            obj = json.loads(line)
                            if obj.get('type') != 'message':
                                continue
                            消息体 = obj.get('message', {})
                            角色 = 消息体.get('role', '')
                            if 角色 == 'toolResult':
                                continue
                            消息总数 += 1
                            内容 = 消息体.get('content', '')
                            if isinstance(内容, list):
                                文本片段 = [p.get('text', '') for p in 内容 if isinstance(p, dict) and p.get('type') in ('text', 'input_text', 'output_text')]
                                内容 = ' '.join(文本片段)
                            if isinstance(内容, str) and 内容.strip() and not 最新摘要:
                                最新摘要 = 内容.strip()[:60]
                                最新消息时间 = obj.get('timestamp')
                                最新角色 = 角色
                            if 消息总数 >= 6:
                                break
                        except (json.JSONDecodeError, AttributeError):
                            continue
                    结果.append({
                        'id': f.stem,
                        'lastMessage': {'time': 最新消息时间, 'role': 最新角色, 'summary': 最新摘要},
                        'messageCount': 消息总数,
                    })
                except Exception:
                    continue
        except Exception:
            pass
        body = json.dumps(结果, ensure_ascii=False, default=str).encode('utf-8')
        self.send_response(HTTPStatus.OK)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        self.send_header('Content-Length', str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def log_message(self, fmt: str, *args: Any) -> None:
        print(f'[服务] {self.address_string()} - {fmt % args}')


class 模拟状态写入器(threading.Thread):
    def __init__(self, interval: float, enabled: bool) -> None:
        super().__init__(daemon=True)
        self.interval = interval
        self.enabled = enabled
        self.stop_event = threading.Event()

    def run(self) -> None:
        if not self.enabled:
            写入状态(默认状态)
            return
        序号 = 读取状态().get('轮播序号', 0)
        while not self.stop_event.wait(self.interval):
            当前步骤 = 默认轮播序列[序号 % len(默认轮播序列)]
            写入状态({
                **当前步骤,
                '更新时间': time.strftime('%Y-%m-%d %H:%M:%S'),
                '轮播序号': (序号 + 1) % len(默认轮播序列),
                '来源': '模拟轮播',
            })
            序号 += 1

    def stop(self) -> None:
        self.stop_event.set()



def 解析参数() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description='启动小谢本地表情小窗服务。')
    parser.add_argument('--host', default=默认主机)
    parser.add_argument('--port', type=int, default=默认端口)
    parser.add_argument('--关闭模拟轮播', action='store_true', help='保持 data/状态.json 静态，不自动轮播模拟状态。')
    parser.add_argument('--轮播间隔', type=float, default=轮询间隔秒, help='模拟状态轮播间隔，单位秒。')
    return parser.parse_args()



def 主程序() -> None:
    args = 解析参数()
    写入器 = 模拟状态写入器(interval=max(args.轮播间隔, 0.5), enabled=not args.关闭模拟轮播)
    写入器.start()
    try:
        with 多线程TCP服务器((args.host, args.port), 小窗请求处理器) as httpd:
            地址 = f'http://{args.host}:{args.port}'
            print(f'小谢表情小窗已启动：{地址}')
            print(f'状态文件：{状态文件}')
            print(f'数据目录：{数据目录}')
            print('按 Ctrl+C 可停止服务。')
            try:
                httpd.serve_forever()
            except KeyboardInterrupt:
                print('\n正在停止服务。')
    except PermissionError as exc:
        print(f'无法启动服务：{exc}')
    finally:
        写入器.stop()


if __name__ == '__main__':
    主程序()
