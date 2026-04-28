#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

HOST="0.0.0.0"
PORT="8876"
URL="http://127.0.0.1:${PORT}"

echo "正在启动小谢表情小窗服务..."
echo "浏览器打开：${URL}"
echo "正在接入陪伴型宠物情绪引擎..."
echo

pkill -f "python3 live_status_sync.py" >/dev/null 2>&1 || true
nohup python3 live_status_sync.py >/tmp/xiaoxie-live-sync.out 2>/tmp/xiaoxie-live-sync.err < /dev/null &

python3 set_mood.py 待机中 "我已经在线，在这里安静等你。" --持续秒数 2 >/dev/null 2>&1 || true

echo "情绪注入示例：python3 set_mood.py 思考中 '我在顺着你的意思认真想一想。' --持续秒数 15"
python3 server.py --host "$HOST" --port "$PORT" --关闭模拟轮播 "$@"
