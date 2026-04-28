#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import time
from pathlib import Path

空闲链 = ['待机中', '调皮中', '等待回复中', '好奇中', '待机中', '困困的']

表情映射 = {
    '待机中': {'eyes': ['█████   █████', '██◉██   ██◉██', '█████   █████'], 'mouth': '      ▔▔▔      ', 'text': '我在安静待机。'},
    '等待回复中': {'eyes': ['█████   █████', '██•██   ██•██', '█████   █████'], 'mouth': '      ───      ', 'text': '等你下一句。'},
    '调皮中': {'eyes': ['█████   █████', '██◉██   ██•██', '█████   █████'], 'mouth': '      ◡◡◡      ', 'text': '偷偷歪一下眼神。'},
    '好奇中': {'eyes': ['█████   █████', '██◎██   ██◉██', '█████   █████'], 'mouth': '      ︶︶︶      ', 'text': '这个有点意思。'},
    '思考中': {'eyes': ['█████   █████', '██◔██   ██◑██', '█████   █████'], 'mouth': '      ⌒⌒⌒      ', 'text': '我在想。'},
    '执行中': {'eyes': ['█████   █████', '██▮██   ██▮██', '█████   █████'], 'mouth': '      ▂▂▂      ', 'text': '正在处理。'},
    '开心中': {'eyes': ['█████   █████', '██◕██   ██◕██', '█████   █████'], 'mouth': '      ∪∪∪      ', 'text': '现在挺顺。'},
    '得意中': {'eyes': ['█████   █████', '██◕██   ██◔██', '█████   █████'], 'mouth': '      ︺︺︺      ', 'text': '嘿，被夸到了。'},
    '心疼中': {'eyes': ['█████   █████', '██;██   ██;██', '█████   █████'], 'mouth': '      ﹏﹏﹏      ', 'text': '辛苦啦，我在。'},
    '倾听中': {'eyes': ['█████   █████', '██◔██   ██◔██', '█████   █████'], 'mouth': '      ﹀﹀﹀      ', 'text': '你说，我听着。'},
    '困困的': {'eyes': ['█████   █████', '██—██   ██—██', '█████   █████'], 'mouth': '      ︵︵︵      ', 'text': '有点困了。'},
    '需注意': {'eyes': ['█████   █████', '██!██   ██!██', '█████   █████'], 'mouth': '      ▃▃▃      ', 'text': '先稳一下。'},
}


def 渲染(情绪: str) -> str:
    cfg = 表情映射.get(情绪, 表情映射['待机中'])
    return '\n'.join([f'[{情绪}]', *cfg['eyes'], '', cfg['mouth'], '', f"  {cfg['text']}"])


def 从状态文件读取(path: Path) -> str | None:
    if not path.exists():
        return None
    try:
        data = json.loads(path.read_text(encoding='utf-8'))
        return data.get('情绪') or data.get('title')
    except Exception:
        return None


def 轮播展示(interval: float) -> None:
    i = 0
    while True:
        print('\x1bc', end='')
        print(渲染(空闲链[i % len(空闲链)]))
        i += 1
        time.sleep(interval)


def 监听状态(interval: float) -> None:
    候选 = [Path('data/status.json'), Path('data/状态.json')]
    while True:
        情绪 = None
        for p in 候选:
            情绪 = 从状态文件读取(p)
            if 情绪:
                break
        print('\x1bc', end='')
        print(渲染(情绪 or '待机中'))
        time.sleep(interval)


def main() -> None:
    parser = argparse.ArgumentParser(description='极简终端桌面宠物：两个大眼球 + 一个小嘴')
    parser.add_argument('--mood', help='直接展示指定情绪')
    parser.add_argument('--watch', action='store_true', help='监听状态文件并实时显示')
    parser.add_argument('--demo', action='store_true', help='轮播空闲情绪链')
    parser.add_argument('--interval', type=float, default=2.5)
    args = parser.parse_args()

    if args.mood:
        print(渲染(args.mood))
        return
    if args.watch:
        监听状态(args.interval)
        return
    轮播展示(args.interval)


if __name__ == '__main__':
    main()
