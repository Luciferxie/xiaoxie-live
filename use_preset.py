#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import subprocess
from pathlib import Path

项目根目录 = Path(__file__).resolve().parent
预设文件 = 项目根目录 / 'mood_presets.json'
写入脚本 = 项目根目录 / 'set_mood.py'


def main() -> None:
    parser = argparse.ArgumentParser(description='按预设写入小谢情绪')
    parser.add_argument('名称', nargs='?', help='预设名称，例如：回答问题 / 调工具 / 完成收尾')
    parser.add_argument('--列出', action='store_true', help='列出所有可用预设')
    args = parser.parse_args()

    presets = json.loads(预设文件.read_text(encoding='utf-8'))
    if args.列出 or not args.名称:
        print('可用预设：')
        for name in presets:
            print(f'- {name}')
        return

    preset = presets.get(args.名称)
    if not preset:
        raise SystemExit(f'未找到预设：{args.名称}')

    命令 = ['python3', str(写入脚本), str(preset['情绪']), str(preset['文案'])]
    if preset.get('常驻'):
        命令.append('--常驻')
    else:
        命令.extend(['--持续秒数', str(preset.get('持续秒数', 15))])
    subprocess.run(命令, check=True)


if __name__ == '__main__':
    main()
