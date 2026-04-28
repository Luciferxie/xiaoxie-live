// Enhanced emotion config with eyebrows, blush, ears
const 情绪配置表 = {
  待机中: {
    颜色: '#8fd8ff',
    文案: '我在这里，安静陪着你。',
    左眼: { x: 82, y: 82, w: 56, h: 78, px: 28, py: 39, pr: 15 },
    右眼: { x: 162, y: 82, w: 56, h: 78, px: 28, py: 39, pr: 15 },
    嘴巴: 'M120 180 Q150 190 180 180',
    左眉: 'M88 72 Q110 64 132 72',
    右眉: 'M168 72 Q190 64 212 72',
    腮红: 0,
    提示: '',
  },
  等待回复中: {
    颜色: '#a8dbff',
    文案: '收到啦，我在等你下一句。',
    左眼: { x: 82, y: 84, w: 56, h: 74, px: 28, py: 37, pr: 10 },
    右眼: { x: 162, y: 84, w: 56, h: 74, px: 28, py: 37, pr: 10 },
    嘴巴: 'M124 180 Q150 186 176 180',
    左眉: 'M88 74 Q110 68 132 74',
    右眉: 'M168 74 Q190 68 212 74',
    腮红: 0,
    提示: '',
  },
  思考中: {
    颜色: '#b6c2ff',
    文案: '我在顺着你的意思想。',
    左眼: { x: 82, y: 84, w: 54, h: 72, px: 24, py: 38, pr: 11 },
    右眼: { x: 164, y: 80, w: 58, h: 80, px: 33, py: 41, pr: 13 },
    嘴巴: 'M126 184 Q150 176 174 184',
    左眉: 'M86 72 Q108 60 132 72',
    右眉: 'M168 78 Q190 72 212 78',
    腮红: 0,
    提示: '…',
  },
  执行中: {
    颜色: '#89e4c6',
    文案: '我正在处理这件事。',
    左眼: { x: 84, y: 82, w: 52, h: 80, px: 28, py: 39, pr: 9 },
    右眼: { x: 164, y: 82, w: 52, h: 80, px: 24, py: 39, pr: 9 },
    嘴巴: 'M128 182 Q150 186 172 182',
    左眉: 'M86 78 Q110 70 132 78',
    右眉: 'M168 78 Q190 70 212 78',
    腮红: 0,
    提示: '',
  },
  开心中: {
    颜色: '#97efff',
    文案: '这会儿气氛不错。',
    左眼: { x: 80, y: 84, w: 58, h: 76, px: 28, py: 36, pr: 15 },
    右眼: { x: 162, y: 84, w: 58, h: 76, px: 30, py: 36, pr: 15 },
    嘴巴: 'M116 174 Q150 198 184 174',
    左眉: 'M86 66 Q110 52 134 66',
    右眉: 'M166 66 Q190 52 214 66',
    腮红: 0.4,
    提示: '',
  },
  调皮中: {
    颜色: '#c0a0ff',
    文案: '我先在旁边轻轻晃一下。',
    左眼: { x: 80, y: 82, w: 58, h: 78, px: 32, py: 39, pr: 15 },
    右眼: { x: 162, y: 82, w: 56, h: 78, px: 20, py: 39, pr: 10 },
    嘴巴: 'M120 176 Q150 190 180 176',
    左眉: 'M86 70 Q108 58 132 70',
    右眉: 'M168 76 Q190 72 212 76',
    腮红: 0.25,
    提示: '?',
  },
  困困的: {
    颜色: '#8bc2f0',
    文案: '有点犯困，不过还在。',
    左眼: { x: 82, y: 100, w: 56, h: 20, px: 28, py: 10, pr: 0 },
    右眼: { x: 162, y: 100, w: 56, h: 20, px: 28, py: 10, pr: 0 },
    嘴巴: 'M128 184 Q150 190 172 184',
    左眉: 'M90 88 Q110 84 130 88',
    右眉: 'M170 88 Q190 84 210 88',
    腮红: 0,
    提示: 'z',
  },
  惊讶中: {
    颜色: '#ffd5ad',
    文案: '哇，让我看看。',
    左眼: { x: 78, y: 78, w: 58, h: 82, px: 29, py: 38, pr: 16 },
    右眼: { x: 164, y: 78, w: 58, h: 82, px: 29, py: 38, pr: 16 },
    嘴巴: 'M134 182 Q150 192 166 182',
    左眉: 'M82 64 Q110 48 138 64',
    右眉: 'M162 64 Q190 48 218 64',
    腮红: 0,
    提示: '!',
  },
  需注意: {
    颜色: '#ffb0c1',
    文案: '刚刚有点波动，我先稳一下。',
    左眼: { x: 84, y: 88, w: 52, h: 58, px: 28, py: 28, pr: 7 },
    右眼: { x: 164, y: 88, w: 52, h: 58, px: 24, py: 28, pr: 7 },
    嘴巴: 'M128 186 Q150 174 172 186',
    左眉: 'M86 78 Q98 86 110 78 Q122 70 134 78',
    右眉: 'M166 78 Q178 70 190 78 Q202 86 214 78',
    腮红: 0,
    提示: '!',
  },
  得意中: {
    颜色: '#ffc7dc',
    文案: '嘿，被你夸得有点开心。',
    左眼: { x: 80, y: 82, w: 58, h: 78, px: 28, py: 38, pr: 15 },
    右眼: { x: 162, y: 84, w: 56, h: 74, px: 24, py: 34, pr: 12 },
    嘴巴: 'M116 176 Q150 194 184 176',
    左眉: 'M86 70 Q108 62 132 70',
    右眉: 'M168 72 Q190 66 214 72',
    腮红: 0.5,
    提示: '',
  },
  心疼中: {
    颜色: '#cbb6ff',
    文案: '辛苦啦，我在这里。',
    左眼: { x: 82, y: 86, w: 56, h: 68, px: 28, py: 38, pr: 11 },
    右眼: { x: 162, y: 86, w: 56, h: 68, px: 28, py: 38, pr: 11 },
    嘴巴: 'M128 186 Q150 192 172 186',
    左眉: 'M90 82 Q110 76 130 84',
    右眉: 'M170 84 Q190 76 210 82',
    腮红: 0.15,
    提示: '',
  },
  倾听中: {
    颜色: '#afe1cf',
    文案: '你说，我听着。',
    左眼: { x: 82, y: 84, w: 56, h: 72, px: 28, py: 38, pr: 11 },
    右眼: { x: 162, y: 84, w: 56, h: 72, px: 28, py: 38, pr: 11 },
    嘴巴: 'M128 182 Q150 188 172 182',
    左眉: 'M86 74 Q110 68 132 74',
    右眉: 'M168 74 Q190 68 212 74',
    腮红: 0.1,
    提示: '',
  },
  好奇中: {
    颜色: '#ffd5ad',
    文案: '这个有点意思。',
    左眼: { x: 78, y: 78, w: 60, h: 82, px: 30, py: 36, pr: 17 },
    右眼: { x: 162, y: 82, w: 56, h: 78, px: 28, py: 39, pr: 14 },
    嘴巴: 'M122 182 Q150 190 178 182',
    左眉: 'M82 66 Q110 50 138 66',
    右眉: 'M162 66 Q190 52 218 66',
    腮红: 0.15,
    提示: '?',
  },
  清醒中: {
    颜色: '#9df0a6',
    文案: '状态挺清醒，随时可以继续。',
    左眼: { x: 80, y: 78, w: 58, h: 80, px: 28, py: 39, pr: 15 },
    右眼: { x: 162, y: 78, w: 58, h: 80, px: 28, py: 39, pr: 15 },
    嘴巴: 'M122 180 Q150 188 178 180',
    左眉: 'M86 70 Q110 60 134 70',
    右眉: 'M166 70 Q190 60 214 70',
    腮红: 0.2,
    提示: '',
  },
};

const 情绪颜色映射 = {
  待机中: '#8fd8ff', 思考中: '#b6c2ff', 执行中: '#89e4c6',
  开心中: '#97efff', 调皮中: '#c0a0ff', 困困的: '#8bc2f0',
  惊讶中: '#ffd5ad', 需注意: '#ffb0c1', 等待回复中: '#a8dbff',
  得意中: '#ffc7dc', 心疼中: '#cbb6ff', 倾听中: '#afe1cf',
  好奇中: '#ffd5ad', 清醒中: '#9df0a6',
};

// DOM refs
const 根元素 = document.documentElement;
const faceStage = document.getElementById('face-stage');
const 左眼组 = document.getElementById('eye-left-group');
const 右眼组 = document.getElementById('eye-right-group');
const 左眼球 = document.getElementById('eye-left-pupil');
const 右眼球 = document.getElementById('eye-right-pupil');
const 左眼壳 = 左眼组.querySelector('.eye-shell');
const 右眼壳 = 右眼组.querySelector('.eye-shell');
const 嘴巴 = document.getElementById('mouth');
const 提示文字 = document.getElementById('hint-text');
const 左眉 = document.getElementById('eyebrow-left');
const 右眉 = document.getElementById('eyebrow-right');
const 左腮红 = document.getElementById('blush-left');
const 右腮红 = document.getElementById('blush-right');
const 标题元素 = document.getElementById('status-title');
const 文案元素 = document.getElementById('status-message');
const 标签元素 = document.getElementById('status-mood');
const 时间元素 = document.getElementById('status-updated');
const 工具提示 = document.getElementById('tool-hint');
const 步骤提示 = document.getElementById('step-hint');
const 连接状态 = document.getElementById('conn-status');
const 时间段 = document.getElementById('time-period');
const 时钟 = document.getElementById('clock');
const 活动列表 = document.getElementById('activity-list');
const 会话列表 = document.getElementById('session-list');
const 会话计数 = document.getElementById('session-count');
const 时间线条 = document.getElementById('emotion-timeline');

// State
let 当前情绪 = '待机中';
let 眨眼定时器 = null;
let 轮询定时器 = null;
let 连接正常 = false;

// Client-side history
const 情绪历史 = [];
const 活动记录 = [];
const 最大活动数 = 15;
const 最大历史分钟 = 30;
let 当前任务 = null;

// ─── Face rendering ───

function 应用单眼(group, shell, pupil, cfg) {
  group.setAttribute('transform', `translate(${cfg.x} ${cfg.y})`);
  shell.setAttribute('width', cfg.w);
  shell.setAttribute('height', cfg.h);
  shell.setAttribute('rx', Math.min(20, cfg.w / 2.4));
  shell.setAttribute('ry', Math.min(20, cfg.h / 2.4));
  pupil.setAttribute('cx', cfg.px);
  pupil.setAttribute('cy', cfg.py);
  pupil.setAttribute('r', cfg.pr);
  pupil.style.opacity = cfg.pr > 0 ? '1' : '0';
  const highlight = group.querySelector('.eye-highlight');
  if (highlight) highlight.style.opacity = cfg.pr > 0 ? '1' : '0';
}

function 应用情绪(情绪, 状态 = {}) {
  const cfg = 情绪配置表[情绪] || 情绪配置表['待机中'];
  const prev = 当前情绪;
  当前情绪 = 情绪;

  // Theme color
  const color = cfg.颜色;
  根元素.style.setProperty('--face', color);
  根元素.style.setProperty('--face-glow', color + '25');
  根元素.style.setProperty('--face-soft', color + '18');

  // Eyes
  应用单眼(左眼组, 左眼壳, 左眼球, cfg.左眼);
  应用单眼(右眼组, 右眼壳, 右眼球, cfg.右眼);

  // Mouth
  嘴巴.setAttribute('d', cfg.嘴巴);

  // Eyebrows
  左眉.setAttribute('d', cfg.左眉);
  右眉.setAttribute('d', cfg.右眉);

  // Blush
  左腮红.style.opacity = cfg.腮红;
  右腮红.style.opacity = cfg.腮红;

  // Hint
  提示文字.textContent = cfg.提示 || ' ';

  // Face class
  faceStage.className = `screen-face ${情绪}`;

  // Text
  标题元素.textContent = 状态.标题 || cfg.标题 || 情绪;
  文案元素.textContent = 状态.文案 || cfg.文案;
  标签元素.textContent = 情绪;
  标签元素.style.background = color + '20';
  标签元素.style.color = color;
  时间元素.textContent = 状态.更新时间 ? `更新于 ${状态.更新时间}` : '等待中';

  // Tool info
  if (状态.执行中工具) {
    工具提示.style.display = '';
    工具提示.textContent = `正在处理：${状态.执行中工具}`;
  } else {
    工具提示.style.display = 'none';
  }
  if (状态.执行步骤) {
    步骤提示.style.display = '';
    步骤提示.textContent = 状态.执行步骤;
  } else {
    步骤提示.style.display = 'none';
  }

  // Track history
  if (prev !== 情绪) {
    情绪历史.push({ 情绪, 时间: Date.now(), 颜色: color });
    记录活动(情绪 === '执行中' ? `开始执行任务` : `情绪变为「${情绪}」`, 状态.执行中工具 || 情绪, 情绪 === '执行中' ? 'running' : 'done');
    更新时间线();
  }

  // Track task transitions
  if (状态.执行中工具 && 状态.执行中工具 !== (当前任务 && 当前任务.名称)) {
    if (当前任务 && 当前任务.状态 === 'running') {
      当前任务.状态 = 'done';
    }
    当前任务 = { 名称: 状态.执行中工具, 步骤: 状态.执行步骤, 时间: Date.now(), 状态: 'running' };
    记录活动(`执行 ${状态.执行中工具}`, 状态.执行步骤, 'running');
  } else if (!状态.执行中工具 && 当前任务 && 当前任务.状态 === 'running') {
    当前任务.状态 = 'done';
    记录活动(`完成 ${当前任务.名称}`, '', 'done');
    当前任务 = null;
  }
}

// ─── Blinking ───

function 执行眨眼() {
  if (当前情绪 === '困困的') return;
  const 左原高 = +左眼壳.getAttribute('height');
  const 右原高 = +右眼壳.getAttribute('height');
  const 左原Y = +左眼球.getAttribute('cy');
  const 右原Y = +右眼球.getAttribute('cy');
  左眼壳.setAttribute('height', 12);
  右眼壳.setAttribute('height', 12);
  左眼球.setAttribute('cy', 6);
  右眼球.setAttribute('cy', 6);
  setTimeout(() => {
    左眼壳.setAttribute('height', 左原高);
    右眼壳.setAttribute('height', 右原高);
    左眼球.setAttribute('cy', 左原Y);
    右眼球.setAttribute('cy', 右原Y);
  }, 140);
}

function 安排眨眼() {
  clearTimeout(眨眼定时器);
  const delay = 2200 + Math.random() * 3600;
  眨眼定时器 = setTimeout(() => {
    执行眨眼();
    安排眨眼();
  }, delay);
}

// ─── Activity tracking ───

function 记录活动(名称, 详情, 状态) {
  活动记录.unshift({
    名称,
    详情,
    状态,
    时间: Date.now(),
  });
  if (活动记录.length > 最大活动数) 活动记录.length = 最大活动数;
  渲染活动();
}

function 渲染活动() {
  if (活动记录.length === 0) {
    活动列表.innerHTML = '<div class="empty-hint">等待活动中...</div>';
    return;
  }
  活动列表.innerHTML = 活动记录.map(a => `
    <div class="activity-item">
      <div class="activity-dot ${a.状态}"></div>
      <div class="activity-content">
        <div class="activity-name">${esc(a.名称)}</div>
        <div class="activity-time">${时间格式化(a.时间)}</div>
      </div>
    </div>
  `).join('');
}

// ─── Session display ───

async function 拉取会话() {
  try {
    const res = await fetch('/api/sessions', { cache: 'no-store' });
    if (!res.ok) return;
    const data = await res.json();
    渲染会话(data);
  } catch {}
}

function 渲染会话(data) {
  if (!data || !data.length) {
    会话列表.innerHTML = '<div class="empty-hint">暂无活跃会话</div>';
    会话计数.textContent = '0 个活跃会话';
    return;
  }
  会话列表.innerHTML = data.map((s, i) => {
    const msg = s.lastMessage || {};
    const time = msg.time ? 时间格式化字符串(msg.time) : '--';
    const summary = msg.summary ? esc(msg.summary) : '';
    const roleLabel = msg.role === 'user' ? '用户' : msg.role === 'assistant' ? '助手' : '';
    return `
      <div class="session-item">
        <div class="session-avatar">${i === 0 ? '🤖' : '💬'}</div>
        <div class="session-info">
          <div class="session-name">会话 ${s.id ? s.id.slice(-6) : i + 1}</div>
          ${summary ? `<div class="session-summary">${roleLabel ? esc(roleLabel) + '：' : ''}${summary}</div>` : ''}
          <div class="session-last">${time}${s.messageCount ? ` · ${s.messageCount} 条消息` : ''}</div>
        </div>
        <div class="session-status ${i === 0 ? '' : 'idle'}"></div>
      </div>
    `;
  }).join('');
  会话计数.textContent = `${data.length} 个活跃会话`;
}

// ─── Timeline ───

function 更新时间线() {
  const now = Date.now();
  const windowMs = 最大历史分钟 * 60 * 1000;
  const recent = 情绪历史.filter(e => now - e.时间 < windowMs);
  if (recent.length < 2) {
    时间线条.innerHTML = '<div class="timeline-empty">情绪变化将在这里显示</div>';
    return;
  }

  const total = now - recent[0].时间;
  let html = '';
  for (let i = 0; i < recent.length; i++) {
    const e = recent[i];
    const next = recent[i + 1] || { 时间: now };
    const dur = next.时间 - e.时间;
    const pct = Math.max(2, (dur / total) * 100);
    html += `<div class="timeline-segment" style="width:${pct}%;background:${e.颜色}" data-label="${e.情绪}"></div>`;
  }
  时间线条.innerHTML = html;
}

// ─── Clock & time period ───

function 更新时钟() {
  const now = new Date();
  时钟.textContent = now.toLocaleTimeString('zh-CN', { hour12: false });
  const h = now.getHours();
  if (h >= 0 && h < 6) 时间段.textContent = '深夜';
  else if (h < 12) 时间段.textContent = '上午';
  else if (h < 18) 时间段.textContent = '下午';
  else 时间段.textContent = '晚上';
}

// ─── Polling ───

async function 拉取状态() {
  try {
    const res = await fetch('/api/status', { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    应用情绪(data.情绪 || '待机中', data);
    if (!连接正常) {
      连接正常 = true;
      连接状态.className = 'conn-status connected';
      连接状态.querySelector('.conn-text').textContent = '已连接';
    }
  } catch {
    if (连接正常) {
      连接正常 = false;
      连接状态.className = 'conn-status error';
      连接状态.querySelector('.conn-text').textContent = '重连中';
    }
    应用情绪('需注意', { 文案: '状态同步出了点小岔子，我在重试。' });
  }
}

// ─── Helpers ───

function 时间格式化(ts) {
  const diff = Math.floor((Date.now() - ts) / 1000);
  if (diff < 5) return '刚刚';
  if (diff < 60) return `${diff} 秒前`;
  if (diff < 3600) return `${Math.floor(diff / 60)} 分钟前`;
  return `${Math.floor(diff / 3600)} 小时前`;
}

function 时间格式化字符串(str) {
  if (!str) return '--';
  try {
    const d = new Date(str);
    if (isNaN(d)) return str;
    return d.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
  } catch { return str; }
}

function esc(s) {
  const d = document.createElement('div');
  d.textContent = s;
  return d.innerHTML;
}

// ─── Init ───

function 启动() {
  应用情绪('待机中');
  安排眨眼();
  拉取状态();
  拉取会话();
  更新时钟();
  setInterval(拉取状态, 2000);
  setInterval(拉取会话, 10000);
  setInterval(更新时钟, 1000);
  setInterval(更新时间线, 15000);
  setInterval(渲染活动, 10000);
}

启动();
