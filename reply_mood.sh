#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

PHASE="${1:-}"
shift || true

case "$PHASE" in
  收到问题)
    python3 use_preset.py 回答问题
    ;;
  查资料)
    python3 use_preset.py 查资料
    ;;
  调工具)
    python3 use_preset.py 调工具
    ;;
  修问题)
    python3 use_preset.py 修问题
    ;;
  写内容)
    python3 use_preset.py 写内容
    ;;
  完成)
    python3 use_preset.py 完成收尾
    ;;
  待机)
    python3 use_preset.py 待机
    ;;
  自定义)
    MOOD="${1:-思考中}"
    TEXT="${2:-我在整理这件事。}"
    SECONDS="${3:-15}"
    python3 set_mood.py "$MOOD" "$TEXT" --持续秒数 "$SECONDS"
    ;;
  "")
    echo "用法: ./reply_mood.sh 收到问题|查资料|调工具|修问题|写内容|完成|待机|自定义 [情绪] [文案] [秒数]"
    exit 1
    ;;
  *)
    echo "未知阶段: $PHASE"
    exit 1
    ;;
esac
