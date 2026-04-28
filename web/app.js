const 情绪配置表 = {
  待机中: { 标题: '待机中', 颜色: '#8fd8ff', 文案: '我在这里，安静陪着你。', 左眼:{x:76,y:70,w:56,h:78,px:28,py:39,pr:15}, 右眼:{x:148,y:70,w:56,h:78,px:28,py:39,pr:15}, 嘴巴:'M120 176 Q140 182 160 176', 提示:'' },
  等待回复中: { 标题: '等待回复中', 颜色: '#a8dbff', 文案: '收到啦，我在等你下一句。', 左眼:{x:76,y:72,w:56,h:74,px:28,py:37,pr:10}, 右眼:{x:148,y:72,w:56,h:74,px:28,py:37,pr:10}, 嘴巴:'M122 176 Q140 178 158 176', 提示:'' },
  思考中: { 标题: '思考中', 颜色: '#b6c2ff', 文案: '我在顺着你的意思想。', 左眼:{x:76,y:72,w:54,h:72,px:24,py:38,pr:11}, 右眼:{x:150,y:68,w:58,h:80,px:33,py:41,pr:13}, 嘴巴:'M122 178 Q140 170 158 178', 提示:'…' },
  执行中: { 标题: '执行中', 颜色: '#89e4c6', 文案: '我正在处理这件事。', 左眼:{x:78,y:70,w:52,h:80,px:28,py:39,pr:9}, 右眼:{x:150,y:70,w:52,h:80,px:24,py:39,pr:9}, 嘴巴:'M124 178 Q140 180 156 178', 提示:'' },
  开心中: { 标题: '开心中', 颜色: '#97efff', 文案: '这会儿气氛不错。', 左眼:{x:74,y:72,w:58,h:76,px:28,py:36,pr:15}, 右眼:{x:148,y:72,w:58,h:76,px:30,py:36,pr:15}, 嘴巴:'M116 172 Q140 190 164 172', 提示:'' },
  调皮中: { 标题: '调皮中', 颜色: '#c0a0ff', 文案: '我先在旁边轻轻晃一下。', 左眼:{x:74,y:70,w:58,h:78,px:32,py:39,pr:15}, 右眼:{x:148,y:70,w:56,h:78,px:20,py:39,pr:10}, 嘴巴:'M118 174 Q140 186 162 174', 提示:'?' },
  困困的: { 标题: '困困的', 颜色: '#8bc2f0', 文案: '有点犯困，不过还在。', 左眼:{x:76,y:88,w:56,h:20,px:28,py:10,pr:0}, 右眼:{x:148,y:88,w:56,h:20,px:28,py:10,pr:0}, 嘴巴:'M122 180 Q140 186 158 180', 提示:'z' },
  需注意: { 标题: '需注意', 颜色: '#ffb0c1', 文案: '刚刚有点波动，我先稳一下。', 左眼:{x:78,y:78,w:52,h:58,px:28,py:28,pr:7}, 右眼:{x:150,y:78,w:52,h:58,px:24,py:28,pr:7}, 嘴巴:'M122 182 Q140 170 158 182', 提示:'!' },
  得意中: { 标题: '得意中', 颜色: '#ffc7dc', 文案: '嘿，被你夸得有点开心。', 左眼:{x:74,y:70,w:58,h:78,px:28,py:38,pr:15}, 右眼:{x:148,y:72,w:56,h:74,px:24,py:34,pr:12}, 嘴巴:'M116 172 Q140 188 164 172', 提示:'' },
  心疼中: { 标题: '心疼中', 颜色: '#cbb6ff', 文案: '辛苦啦，我在这里。', 左眼:{x:76,y:76,w:56,h:68,px:28,py:38,pr:11}, 右眼:{x:148,y:76,w:56,h:68,px:28,py:38,pr:11}, 嘴巴:'M122 182 Q140 188 158 182', 提示:'' },
  倾听中: { 标题: '倾听中', 颜色: '#afe1cf', 文案: '你说，我听着。', 左眼:{x:76,y:74,w:56,h:72,px:28,py:38,pr:11}, 右眼:{x:148,y:74,w:56,h:72,px:28,py:38,pr:11}, 嘴巴:'M122 178 Q140 182 158 178', 提示:'' },
  好奇中: { 标题: '好奇中', 颜色: '#ffd5ad', 文案: '这个有点意思。', 左眼:{x:72,y:68,w:60,h:82,px:30,py:36,pr:17}, 右眼:{x:148,y:70,w:56,h:78,px:28,py:39,pr:14}, 嘴巴:'M120 176 Q140 184 160 176', 提示:'?' },
  清醒中: { 标题: '清醒中', 颜色: '#9df0a6', 文案: '状态挺清醒，随时可以继续。', 左眼:{x:74,y:68,w:58,h:80,px:28,py:39,pr:15}, 右眼:{x:148,y:68,w:58,h:80,px:28,py:39,pr:15}, 嘴巴:'M120 176 Q140 182 160 176', 提示:'' },
};

const 根元素 = document.documentElement;
const 表情舞台 = document.getElementById('face-stage');
const 左眼组 = document.getElementById('eye-left-group');
const 右眼组 = document.getElementById('eye-right-group');
const 左眼球 = document.getElementById('eye-left-pupil');
const 右眼球 = document.getElementById('eye-right-pupil');
const 左眼壳 = 左眼组.querySelector('.eye-shell');
const 右眼壳 = 右眼组.querySelector('.eye-shell');
const 嘴巴元素 = document.getElementById('mouth');
const 提示文字元素 = document.getElementById('hint-text');
const 标题元素 = document.getElementById('status-title');
const 文案元素 = document.getElementById('status-message');
const 标签元素 = document.getElementById('status-mood');
const 时间元素 = document.getElementById('status-updated');
const 工具提示元素 = document.getElementById('tool-hint');
const 步骤提示元素 = document.getElementById('step-hint');

let 眨眼定时器;
let 轮询定时器;
let 当前情绪 = '待机中';

function 应用单眼(组元素, 壳元素, 球元素, 配置) {
  组元素.setAttribute('transform', `translate(${配置.x} ${配置.y})`);
  壳元素.setAttribute('width', 配置.w);
  壳元素.setAttribute('height', 配置.h);
  壳元素.setAttribute('rx', Math.min(20, 配置.w / 2.4));
  壳元素.setAttribute('ry', Math.min(20, 配置.h / 2.4));
  球元素.setAttribute('cx', 配置.px);
  球元素.setAttribute('cy', 配置.py);
  球元素.setAttribute('r', 配置.pr);
  球元素.style.opacity = 配置.pr > 0 ? '1' : '0';
}

function 应用情绪(情绪, 状态 = {}) {
  const 配置 = 情绪配置表[情绪] || 情绪配置表['待机中'];
  当前情绪 = 情绪;
  根元素.style.setProperty('--face', 配置.颜色);
  根元素.style.setProperty('--face-soft', `${配置.颜色}2a`);

  应用单眼(左眼组, 左眼壳, 左眼球, 配置.左眼);
  应用单眼(右眼组, 右眼壳, 右眼球, 配置.右眼);
  嘴巴元素.setAttribute('d', 配置.嘴巴);
  提示文字元素.textContent = 配置.提示 || ' ';

  表情舞台.className = `screen-face face-stage ${情绪}`;
  标题元素.textContent = 状态.标题 || 配置.标题;
  文案元素.textContent = 状态.文案 || 配置.文案;
  标签元素.textContent = 情绪;
  时间元素.textContent = 状态.更新时间 ? `更新于 ${状态.更新时间}` : '等待中';

  if (状态.执行中工具) {
    工具提示元素.style.display = 'block';
    工具提示元素.textContent = `正在处理：${状态.执行中工具}`;
  } else {
    工具提示元素.style.display = 'none';
  }
  if (状态.执行步骤) {
    步骤提示元素.style.display = 'block';
    步骤提示元素.textContent = 状态.执行步骤;
  } else {
    步骤提示元素.style.display = 'none';
  }
}

function 执行眨眼() {
  if (当前情绪 === '困困的' || 当前情绪 === '执行中') return;
  const 左原高 = Number(左眼壳.getAttribute('height'));
  const 右原高 = Number(右眼壳.getAttribute('height'));
  const 左原球Y = Number(左眼球.getAttribute('cy'));
  const 右原球Y = Number(右眼球.getAttribute('cy'));
  左眼壳.setAttribute('height', 12);
  右眼壳.setAttribute('height', 12);
  左眼球.setAttribute('cy', 6);
  右眼球.setAttribute('cy', 6);
  setTimeout(() => {
    左眼壳.setAttribute('height', 左原高);
    右眼壳.setAttribute('height', 右原高);
    左眼球.setAttribute('cy', 左原球Y);
    右眼球.setAttribute('cy', 右原球Y);
  }, 140);
}

function 安排随机眨眼() {
  clearTimeout(眨眼定时器);
  const 延迟 = 2400 + Math.random() * 3200;
  眨眼定时器 = setTimeout(() => {
    执行眨眼();
    安排随机眨眼();
  }, 延迟);
}

async function 拉取状态() {
  try {
    const 响应 = await fetch('/api/status', { cache: 'no-store' });
    if (!响应.ok) throw new Error(`HTTP ${响应.status}`);
    const 状态 = await 响应.json();
    应用情绪(状态.情绪 || '待机中', 状态);
  } catch (error) {
    应用情绪('需注意', { 文案: '状态同步出了点小岔子，我在重试。' });
  }
}

function 启动() {
  应用情绪('待机中');
  安排随机眨眼();
  拉取状态();
  clearInterval(轮询定时器);
  轮询定时器 = setInterval(拉取状态, 2000);
}

启动();
