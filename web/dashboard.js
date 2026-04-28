// LOOI-style emotion config — ellipse eyes, happy-arc support, body color
const 情绪配置表 = {
  待机中: {
    身体色: '#c8e6ff',
    耳色: '#a8d4f0',
    眼白: '#f8fbff',
    瞳孔色: '#2a3a52',
    文案: '我在这里，安静陪着你。',
    快乐眼: false,
    左眼: { rx: 22, ry: 24, pcx: 88, pcy: 120, pr: 12 },
    右眼: { rx: 22, ry: 24, pcx: 152, pcy: 120, pr: 12 },
    嘴巴: 'M108 148 Q120 158 132 148',
    左眉: 'M65 96 Q88 86 111 96',
    右眉: 'M129 96 Q152 86 175 96',
    腮红: 0,
    粒子: 'none',
  },
  等待回复中: {
    身体色: '#c8e6ff',
    耳色: '#a8d4f0',
    眼白: '#f8fbff',
    瞳孔色: '#2a3a52',
    文案: '收到啦，我在等你下一句。',
    快乐眼: false,
    左眼: { rx: 22, ry: 26, pcx: 88, pcy: 119, pr: 10 },
    右眼: { rx: 22, ry: 26, pcx: 152, pcy: 119, pr: 10 },
    嘴巴: 'M108 148 Q120 155 132 148',
    左眉: 'M65 94 Q88 86 111 94',
    右眉: 'M129 94 Q152 86 175 94',
    腮红: 0,
    粒子: 'none',
  },
  思考中: {
    身体色: '#d4d8ff',
    耳色: '#b8bef0',
    眼白: '#f8fbff',
    瞳孔色: '#3a3568',
    文案: '我在顺着你的意思想。',
    快乐眼: false,
    左眼: { rx: 20, ry: 24, pcx: 86, pcy: 118, pr: 11 },
    右眼: { rx: 24, ry: 28, pcx: 154, pcy: 116, pr: 13 },
    嘴巴: 'M112 150 Q120 142 128 150',
    左眉: 'M65 94 Q88 82 111 94',
    右眉: 'M129 98 Q152 92 175 98',
    腮红: 0,
    粒子: 'dots',
  },
  执行中: {
    身体色: '#b8f0d8',
    耳色: '#90dabc',
    瞳孔色: '#1e4a3a',
    眼白: '#f8fbff',
    文案: '我正在处理这件事。',
    快乐眼: false,
    左眼: { rx: 20, ry: 26, pcx: 88, pcy: 118, pr: 9 },
    右眼: { rx: 20, ry: 26, pcx: 152, pcy: 118, pr: 9 },
    嘴巴: 'M110 150 Q120 156 130 150',
    左眉: 'M65 94 Q88 84 111 94',
    右眉: 'M129 94 Q152 84 175 94',
    腮红: 0,
    粒子: 'dots',
  },
  开心中: {
    身体色: '#c0f0ff',
    耳色: '#90daf0',
    瞳孔色: '#2a5a70',
    眼白: '#f8fbff',
    文案: '这会儿气氛不错。',
    快乐眼: true,
    左眼: { rx: 22, ry: 24, pcx: 88, pcy: 120, pr: 12 },
    右眼: { rx: 22, ry: 24, pcx: 152, pcy: 120, pr: 12 },
    嘴巴: 'M104 146 Q120 166 136 146',
    左眉: 'M65 92 Q88 78 111 92',
    右眉: 'M129 92 Q152 78 175 92',
    腮红: 0.45,
    粒子: 'hearts',
  },
  调皮中: {
    身体色: '#dcc8ff',
    耳色: '#c0a8f0',
    瞳孔色: '#4a3570',
    眼白: '#f8fbff',
    文案: '我先在旁边轻轻晃一下。',
    快乐眼: false,
    左眼: { rx: 22, ry: 24, pcx: 90, pcy: 118, pr: 13 },
    右眼: { rx: 20, ry: 22, pcx: 150, pcy: 120, pr: 9 },
    嘴巴: 'M108 148 Q120 160 132 150',
    左眉: 'M65 94 Q88 82 111 94',
    右眉: 'M129 98 Q152 94 175 98',
    腮红: 0.3,
    粒子: 'stars',
  },
  困困的: {
    身体色: '#b8d8f0',
    耳色: '#90b8d8',
    瞳孔色: '#2a4a62',
    眼白: '#f8fbff',
    文案: '有点犯困，不过还在。',
    快乐眼: false,
    左眼: { rx: 22, ry: 4, pcx: 88, pcy: 118, pr: 0 },
    右眼: { rx: 22, ry: 4, pcx: 152, pcy: 118, pr: 0 },
    嘴巴: 'M112 152 Q120 158 128 152',
    左眉: 'M70 108 Q88 104 106 108',
    右眉: 'M134 108 Q152 104 170 108',
    腮红: 0,
    粒子: 'zzz',
  },
  惊讶中: {
    身体色: '#ffe8c8',
    耳色: '#f0d0a0',
    瞳孔色: '#5a4020',
    眼白: '#f8fbff',
    文案: '哇，让我看看。',
    快乐眼: false,
    左眼: { rx: 26, ry: 28, pcx: 86, pcy: 116, pr: 16 },
    右眼: { rx: 26, ry: 28, pcx: 154, pcy: 116, pr: 16 },
    嘴巴: 'M114 152 Q120 164 126 152',
    左眉: 'M60 90 Q88 72 116 90',
    右眉: 'M124 90 Q152 72 180 90',
    腮红: 0,
    粒子: 'stars',
  },
  需注意: {
    身体色: '#ffc8d4',
    耳色: '#f0a0b4',
    瞳孔色: '#5a2a3a',
    眼白: '#f8fbff',
    文案: '刚刚有点波动，我先稳一下。',
    快乐眼: false,
    左眼: { rx: 18, ry: 20, pcx: 88, pcy: 120, pr: 8 },
    右眼: { rx: 18, ry: 20, pcx: 152, pcy: 120, pr: 8 },
    嘴巴: 'M112 148 Q120 140 128 148',
    左眉: 'M65 100 Q80 110 95 100 Q110 90 125 100',
    右眉: 'M135 100 Q150 90 165 100 Q180 110 195 100',
    腮红: 0,
    粒子: 'none',
  },
  得意中: {
    身体色: '#ffd8e8',
    耳色: '#f0b8d0',
    瞳孔色: '#5a2a48',
    眼白: '#f8fbff',
    文案: '嘿，被你夸得有点开心。',
    快乐眼: true,
    左眼: { rx: 22, ry: 24, pcx: 88, pcy: 120, pr: 12 },
    右眼: { rx: 22, ry: 24, pcx: 152, pcy: 120, pr: 12 },
    嘴巴: 'M104 146 Q120 164 136 146',
    左眉: 'M65 92 Q88 82 111 92',
    右眉: 'M129 94 Q152 86 175 94',
    腮红: 0.5,
    粒子: 'sparkles',
  },
  心疼中: {
    身体色: '#d8c8ff',
    耳色: '#c0a8f0',
    瞳孔色: '#3a2a68',
    眼白: '#f8fbff',
    文案: '辛苦啦，我在这里。',
    快乐眼: false,
    左眼: { rx: 20, ry: 22, pcx: 88, pcy: 118, pr: 11 },
    右眼: { rx: 20, ry: 22, pcx: 152, pcy: 118, pr: 11 },
    嘴巴: 'M110 150 Q120 156 130 150',
    左眉: 'M65 100 Q88 108 111 100',
    右眉: 'M129 100 Q152 108 175 100',
    腮红: 0.15,
    粒子: 'none',
  },
  倾听中: {
    身体色: '#c0e8d8',
    耳色: '#98d0b8',
    瞳孔色: '#1e4a3a',
    眼白: '#f8fbff',
    文案: '你说，我听着。',
    快乐眼: false,
    左眼: { rx: 22, ry: 24, pcx: 88, pcy: 118, pr: 11 },
    右眼: { rx: 22, ry: 24, pcx: 152, pcy: 118, pr: 11 },
    嘴巴: 'M110 150 Q120 156 130 150',
    左眉: 'M65 96 Q88 88 111 96',
    右眉: 'M129 96 Q152 88 175 96',
    腮红: 0.1,
    粒子: 'none',
  },
  好奇中: {
    身体色: '#ffe8c8',
    耳色: '#f0d0a0',
    瞳孔色: '#5a4020',
    眼白: '#f8fbff',
    文案: '这个有点意思。',
    快乐眼: false,
    左眼: { rx: 26, ry: 28, pcx: 84, pcy: 116, pr: 15 },
    右眼: { rx: 22, ry: 26, pcx: 154, pcy: 118, pr: 13 },
    嘴巴: 'M108 150 Q120 158 132 150',
    左眉: 'M60 90 Q88 74 116 90',
    右眉: 'M124 92 Q152 78 180 92',
    腮红: 0.15,
    粒子: 'dots',
  },
  清醒中: {
    身体色: '#b8f0c0',
    耳色: '#90d8a0',
    瞳孔色: '#1e5a28',
    眼白: '#f8fbff',
    文案: '状态挺清醒，随时可以继续。',
    快乐眼: false,
    左眼: { rx: 22, ry: 26, pcx: 88, pcy: 118, pr: 13 },
    右眼: { rx: 22, ry: 26, pcx: 152, pcy: 118, pr: 13 },
    嘴巴: 'M108 148 Q120 158 132 148',
    左眉: 'M65 92 Q88 80 111 92',
    右眉: 'M129 92 Q152 80 175 92',
    腮红: 0.2,
    粒子: 'sparkles',
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
const characterEl = document.querySelector('.character');
const 左眼白 = document.getElementById('eye-left-white');
const 右眼白 = document.getElementById('eye-right-white');
const 左眼球 = document.getElementById('eye-left-pupil');
const 右眼球 = document.getElementById('eye-right-pupil');
const 左眼组 = document.getElementById('eye-left-group');
const 右眼组 = document.getElementById('eye-right-group');
const 快乐眼 = document.getElementById('happy-eyes');
const 嘴巴 = document.getElementById('mouth');
const 左眉 = document.getElementById('eyebrow-left');
const 右眉 = document.getElementById('eyebrow-right');
const 左腮红 = document.getElementById('blush-left');
const 右腮红 = document.getElementById('blush-right');
const 粒子容器 = document.getElementById('particles');
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
let 瞳孔漫游定时器 = null;
let 连接正常 = false;

const 情绪历史 = [];
const 活动记录 = [];
const 最大活动数 = 15;
const 最大历史分钟 = 30;
let 当前任务 = null;

// ─── Face rendering ───

function 应用单眼(眼白, 瞳孔, cfg) {
  眼白.setAttribute('rx', cfg.rx);
  眼白.setAttribute('ry', cfg.ry);
  瞳孔.setAttribute('cx', cfg.pcx);
  瞳孔.setAttribute('cy', cfg.pcy);
  瞳孔.setAttribute('r', Math.max(0, cfg.pr));
  瞳孔.style.opacity = cfg.pr > 0 ? '1' : '0';
}

function 应用情绪(情绪, 状态 = {}) {
  const cfg = 情绪配置表[情绪] || 情绪配置表['待机中'];
  const prev = 当前情绪;
  当前情绪 = 情绪;

  const faceColor = 情绪颜色映射[情绪] || '#8fd8ff';

  // Theme variables
  根元素.style.setProperty('--face', faceColor);
  根元素.style.setProperty('--face-glow', faceColor + '25');
  根元素.style.setProperty('--face-soft', faceColor + '18');
  根元素.style.setProperty('--face-body', cfg.身体色);
  根元素.style.setProperty('--face-body-dark', cfg.耳色);
  根元素.style.setProperty('--pupil', cfg.瞳孔色);

  // Eyes
  应用单眼(左眼白, 左眼球, cfg.左眼);
  应用单眼(右眼白, 右眼球, cfg.右眼);

  // Happy eyes toggle
  if (cfg.快乐眼) {
    左眼组.style.opacity = '0';
    右眼组.style.opacity = '0';
    快乐眼.style.display = '';
  } else {
    左眼组.style.opacity = '1';
    右眼组.style.opacity = '1';
    快乐眼.style.display = 'none';
  }

  // Mouth
  嘴巴.setAttribute('d', cfg.嘴巴);

  // Eyebrows
  左眉.setAttribute('d', cfg.左眉);
  右眉.setAttribute('d', cfg.右眉);

  // Blush
  左腮红.style.opacity = cfg.腮红;
  右腮红.style.opacity = cfg.腮红;

  // Character animation class
  if (characterEl) {
    characterEl.className = `character ${情绪}`;
  }

  // Text
  标题元素.textContent = 状态.标题 || 情绪;
  文案元素.textContent = 状态.文案 || cfg.文案;
  标签元素.textContent = 情绪;
  标签元素.style.background = faceColor + '20';
  标签元素.style.color = faceColor;
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

  // Particles on emotion change
  if (prev !== 情绪) {
    情绪历史.push({ 情绪, 时间: Date.now(), 颜色: faceColor });
    记录活动(情绪 === '执行中' ? '开始执行任务' : `情绪变为「${情绪}」`, 状态.执行中工具 || 情绪, 情绪 === '执行中' ? 'running' : 'done');
    更新时间线();
    生成粒子(cfg.粒子);
  }

  // Task tracking
  if (状态.执行中工具 && 状态.执行中工具 !== (当前任务 && 当前任务.名称)) {
    if (当前任务 && 当前任务.状态 === 'running') 当前任务.状态 = 'done';
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
  const cfg = 情绪配置表[当前情绪] || 情绪配置表['待机中'];
  if (cfg.快乐眼) return;

  const 左原RY = +左眼白.getAttribute('ry');
  const 右原RY = +右眼白.getAttribute('ry');
  左眼白.setAttribute('ry', 3);
  右眼白.setAttribute('ry', 3);
  左眼球.style.opacity = '0';
  右眼球.style.opacity = '0';

  setTimeout(() => {
    左眼白.setAttribute('ry', 左原RY);
    右眼白.setAttribute('ry', 右原RY);
    左眼球.style.opacity = '1';
    右眼球.style.opacity = '1';
  }, 130);
}

function 安排眨眼() {
  clearTimeout(眨眼定时器);
  const delay = 2500 + Math.random() * 4000;
  眨眼定时器 = setTimeout(() => {
    执行眨眼();
    安排眨眼();
  }, delay);
}

// ─── Pupil wandering ───

function 瞳孔漫游() {
  const cfg = 情绪配置表[当前情绪];
  if (!cfg || cfg.快乐眼 || 当前情绪 === '困困的') return;

  const dx = (Math.random() - 0.5) * 6;
  const dy = (Math.random() - 0.5) * 4;
  左眼球.setAttribute('cx', cfg.左眼.pcx + dx);
  左眼球.setAttribute('cy', cfg.左眼.pcy + dy);
  右眼球.setAttribute('cx', cfg.右眼.pcx + dx);
  右眼球.setAttribute('cy', cfg.右眼.pcy + dy);
}

// ─── Particles ───

const 粒子符号 = {
  hearts: ['♥', '♡'],
  stars: ['✦', '✧', '★'],
  sparkles: ['✨', '·', '•'],
  dots: ['·', '•', '∘'],
  zzz: ['z', 'Z'],
};

function 生成粒子(类型) {
  if (!类型 || 类型 === 'none') return;
  const 符号们 = 粒子符号[类型] || ['·'];
  const count = 类型 === 'zzz' ? 3 : 5;

  for (let i = 0; i < count; i++) {
    const el = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    el.setAttribute('class', 'particle');
    el.setAttribute('x', 60 + Math.random() * 120);
    el.setAttribute('y', 50 + Math.random() * 80);
    el.setAttribute('font-size', 类型 === 'zzz' ? '14' : '10');
    el.setAttribute('fill', 情绪颜色映射[当前情绪] || '#8fd8ff');
    el.setAttribute('opacity', '0.8');
    el.setAttribute('text-anchor', 'middle');
    el.textContent = 符号们[Math.floor(Math.random() * 符号们.length)];

    const dx = (Math.random() - 0.5) * 40;
    const dy = -(20 + Math.random() * 30);
    el.style.setProperty('--dx', dx + 'px');
    el.style.setProperty('--dy', dy + 'px');
    el.style.animation = `particle-float ${1.2 + Math.random() * 0.8}s ease-out forwards`;
    el.style.animationDelay = (i * 0.15) + 's';

    粒子容器.appendChild(el);
    setTimeout(() => el.remove(), 2500);
  }
}

// ─── Activity ───

function 记录活动(名称, 详情, 状态) {
  活动记录.unshift({ 名称, 详情, 状态, 时间: Date.now() });
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

// ─── Sessions ───

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

// ─── Clock ───

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
  setInterval(瞳孔漫游, 3000);
}

启动();
