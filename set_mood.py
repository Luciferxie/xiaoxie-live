#!/usr/bin/env python3
from __future__ import annotations

import argparse

from status_store import 写入情绪注入, 允许情绪


def main() -> None:
    parser = argparse.ArgumentParser(description='写入小谢表情小窗的情绪注入文件')
    parser.add_argument('情绪', choices=允许情绪, help='例如：思考中 / 执行中 / 开心中 / 待机中')
    parser.add_argument('文案', help='显示在小窗里的动态提示文字')
    parser.add_argument('--持续秒数', type=float, default=18.0, help='情绪持续时间，默认 18 秒')
    parser.add_argument('--常驻', action='store_true', help='常驻生效，不自动过期')
    args = parser.parse_args()

    写入情绪注入(args.情绪, args.文案, 持续秒数=args.持续秒数, 常驻=args.常驻)
    print(f'已写入情绪：{args.情绪}')


if __name__ == '__main__':
    main()
