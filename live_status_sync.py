#!/usr/bin/env python3
from __future__ import annotations

import json
import time

from pet_emotion_engine import 陪伴型宠物情绪引擎
from status_store import 写入状态

轮询秒数 = 2.0


def 主程序() -> None:
    引擎 = 陪伴型宠物情绪引擎()
    轮播序号 = 0
    上次写入签名 = ''

    while True:
        当前时间 = time.time()
        try:
            快照 = 引擎.读取会话快照()
            决策结果 = 引擎.决策(快照, 当前时间)
            稳定情绪, 稳定文案, 来源 = 引擎.应用防抖(决策结果, 当前时间)
            状态 = {
                '情绪': 稳定情绪,
                '标题': 稳定情绪,
                '文案': 稳定文案,
                '更新时间': time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(当前时间)),
                '轮播序号': 轮播序号,
                '来源': 来源,
                '执行中工具': 决策结果.执行中工具,  # 传递当前执行中的工具名称
                '执行步骤': 决策结果.执行步骤,      # 传递当前执行步骤
            }
        except Exception:
            状态 = {
                '情绪': '需注意',
                '标题': '需注意',
                '文案': '同步器刚刚打了个盹，我已经在醒过来继续重试。',
                '更新时间': time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(当前时间)),
                '轮播序号': 轮播序号,
                '来源': '自动判断',
            }

        签名 = json.dumps(状态, ensure_ascii=False, sort_keys=True)
        if 签名 != 上次写入签名:
            写入状态(状态)
            上次写入签名 = 签名
        轮播序号 = (轮播序号 + 1) % 100000
        time.sleep(轮询秒数)


if __name__ == '__main__':
    主程序()
