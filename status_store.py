#!/usr/bin/env python3
from __future__ import annotations

import json
import time
from pathlib import Path
from typing import Any

项目根目录 = Path(__file__).resolve().parent
数据目录 = 项目根目录 / 'data'
中文状态文件 = 数据目录 / '状态.json'
兼容状态文件 = 数据目录 / 'status.json'
情绪注入文件 = 数据目录 / '情绪注入.json'

允许情绪 = [
    '待机中',
    '思考中',
    '执行中',
    '开心中',
    '调皮中',
    '困困的',
    '惊讶中',
    '需注意',
    '等待回复中',
    '得意中',  # 新增：被表扬/得意状态
    '心疼中',  # 新增：用户疲惫/困扰时的心疼陪伴
    '倾听中',  # 新增：用户倾诉/抱怨时认真倾听
    '好奇中',  # 新增：遇到新知识、新工具时的好奇探索
    '清醒中',  # 新增：早晨清醒/元气状态
]

默认状态: dict[str, Any] = {
    '情绪': '待机中',
    '标题': '待机中',
    '文案': '我在这里，安安静静陪你等下一句。',
    '更新时间': '',
    '轮播序号': 0,
    '来源': '自动判断',
    '执行中工具': '',  # 新增：当前正在执行的工具名称
    '执行步骤': '',    # 新增：当前执行步骤（如"第3步/共5步"）
}


def 确保数据目录() -> None:
    数据目录.mkdir(parents=True, exist_ok=True)



def 标准化状态(payload: dict[str, Any] | None = None) -> dict[str, Any]:
    原始 = {**默认状态, **(payload or {})}
    情绪 = str(原始.get('情绪', 默认状态['情绪']))
    if 情绪 not in 允许情绪:
        情绪 = 默认状态['情绪']
    执行中工具 = str(原始.get('执行中工具', ''))[:32]  # 限制长度
    执行步骤 = str(原始.get('执行步骤', ''))[:24]  # 限制长度
    更新时间 = str(原始.get('更新时间') or '')
    if not 更新时间:
        更新时间 = time.strftime('%Y-%m-%d %H:%M:%S')
    return {
        '情绪': 情绪,
        '标题': str(原始.get('标题') or 情绪),
        '文案': str(原始.get('文案') or 默认状态['文案'])[:48],
        '更新时间': 更新时间,
        '轮播序号': int(原始.get('轮播序号', 0) or 0),
        '来源': str(原始.get('来源') or 默认状态['来源']),
        '执行中工具': 执行中工具,  # 新增：当前正在执行的工具名称
        '执行步骤': 执行步骤,      # 新增：当前执行步骤
    }



def 读取状态() -> dict[str, Any]:
    确保数据目录()
    if not 中文状态文件.exists():
        写入状态(默认状态)
        return 标准化状态(默认状态)
    try:
        数据 = json.loads(中文状态文件.read_text(encoding='utf-8'))
        if isinstance(数据, dict):
            return 标准化状态(数据)
    except (OSError, json.JSONDecodeError):
        pass
    return 标准化状态(默认状态)



def 写入状态(payload: dict[str, Any]) -> dict[str, Any]:
    状态 = 标准化状态(payload)
    确保数据目录()
    中文状态文件.write_text(json.dumps(状态, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    兼容状态 = {
        'mood': 状态['情绪'],
        'title': 状态['标题'],
        'message': 状态['文案'],
        'updated_at': 状态['更新时间'],
        'cycle_index': 状态['轮播序号'],
        'source': 状态['来源'],
    }
    兼容状态文件.write_text(json.dumps(兼容状态, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    return 状态



def 读取情绪注入() -> dict[str, Any] | None:
    if not 情绪注入文件.exists():
        return None
    try:
        数据 = json.loads(情绪注入文件.read_text(encoding='utf-8'))
        if not isinstance(数据, dict):
            return None
        情绪 = str(数据.get('情绪') or '').strip()
        文案 = str(数据.get('文案') or '').strip()
        截止时间 = float(数据.get('截止时间', 0) or 0)
        if not 情绪 or not 文案 or 情绪 not in 允许情绪:
            return None
        if 截止时间 and time.time() > 截止时间:
            清理情绪注入()
            return None
        return {'情绪': 情绪, '标题': 情绪, '文案': 文案[:48], '来源': '手动注入'}
    except (OSError, json.JSONDecodeError, ValueError):
        return None



def 写入情绪注入(情绪: str, 文案: str, 持续秒数: float = 18.0, 常驻: bool = False) -> dict[str, Any]:
    if 情绪 not in 允许情绪:
        raise ValueError(f'不支持的情绪：{情绪}')
    payload = {
        '情绪': 情绪,
        '文案': 文案[:48],
        '截止时间': 0 if 常驻 else time.time() + max(持续秒数, 1.0),
    }
    确保数据目录()
    情绪注入文件.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    return payload



def 清理情绪注入() -> None:
    try:
        情绪注入文件.unlink(missing_ok=True)
    except OSError:
        pass
