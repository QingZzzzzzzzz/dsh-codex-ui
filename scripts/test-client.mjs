import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { Script } from 'node:vm';
import { Context, Service } from '@deepseek-ai/cordis';

// 运行实际 bundle 和 Cordis 生命周期，检查固定效果与可选组件的生命周期。
async function presentationFixture(t) {
  let plugin;
  const attributes = new Map(), styles = new Set(), events = new Map(), entries = new Set();
  const document = {
    body: { getAttribute: () => null, setAttribute: (key, value) => attributes.set(key, value), removeAttribute: key => attributes.delete(key) },
    head: { appendChild: style => styles.add(style) },
    createElement: () => { const node = { dataset: {}, remove() { styles.delete(node); } }; return node; },
    documentElement: { hasAttribute: () => false },
    querySelector: () => null,
    querySelectorAll: () => []
  };
  const window = { __ModuleLoader__: { load: definition => {
    plugin = definition.factory(name => {
      if (name === 'react') return { Component: class {} };
      if (name === '@deepseek-ai/dsh-client-store') return { createSnapshotStore: value => ({ getSnapshot: () => value, set: next => { value = next; } }) };
      return {};
    });
  } }, localStorage: { getItem: () => null }, addEventListener() {}, removeEventListener() {} };
  const bundle = (await readFile(new URL('../lib/client.js', import.meta.url), 'utf8')).replace('    return module.exports;', 'module.exports.fixture = { watchCodexPresentation }; return module.exports;');
  new Script(bundle).runInNewContext({ window, document, console: { warn() {}, error() {} }, queueMicrotask, requestAnimationFrame: () => 1, cancelAnimationFrame() {}, getComputedStyle: () => ({ position: 'static' }) });
  const ctx = new Context();
  class Slots extends Service {
    constructor(scope) { super(scope, 'slots'); }
    entries() { return [{ options: { key: 'turn-process', priority: 0 } }]; }
    inject(name, callback) { return this.ctx.effect(callback); }
    register(options, component) { const entry = { options, component }; entries.add(entry); return () => entries.delete(entry); }
  }
  await ctx.plugin(Slots).await();
  let inventory = [], nextReply;
  const fibers = [];
  ctx.on('internal/plugin', fiber => { fibers.push(fiber); });
  ctx.provide('remote', {
    pluginInventory: { list: () => nextReply ? nextReply() : Promise.resolve({ ok: true, value: { entries: inventory } }) },
    $on: (name, callback) => { events.set(name, callback); return () => events.delete(name); }
  });
  const observable = value => ({ getSnapshot: () => value, subscribe: () => () => {} });
  ctx.provide('layout', { panelInfo: observable({ activePanelId: null }), beginNavigation() { return { aborted: false }; }, selectPanel() {} });
  ctx.provide('sessions', { list: observable({ ids: ['a'], byId: { a: { retainedBy: { mainView: 1 } } } }) });
  ctx.provide('uiWorkspace', { openSession() {} });
  ctx.provide('shortcuts', { catalog: observable([]), register: () => () => {} });
  ctx.effect(() => plugin.fixture.watchCodexPresentation(ctx));
  t.after(() => ctx.fiber.dispose());
  const flush = () => new Promise(setImmediate);
  const set = async (navigation, phase = 'active') => {
    inventory = [{ moduleName: '@qinova-ai/dsh-codex-style/navigation', enabled: navigation, fiberPhase: navigation ? phase : null }];
    await events.get('plugin-manager/changed')(); await flush();
    for (const fiber of fibers) await fiber.await();
  };
  const state = () => ({ navigation: attributes.has('data-dsc-codex-navigation'), styles: styles.size, slots: entries.size });
  await flush();
  return { ctx, set, stop: () => ctx.fiber.dispose(), state, events, reply: fn => { nextReply = fn; }, flush };
}

test('navigation mounts only while its component stays enabled in the inventory', async t => {
  const f = await presentationFixture(t);
  assert.deepEqual(f.state(), { navigation: false, styles: 0, slots: 0 });
  await f.set(true);
  assert.deepEqual(f.state(), { navigation: true, styles: 1, slots: 1 });
  await f.set(true, 'loading');
  assert.deepEqual(f.state(), { navigation: false, styles: 0, slots: 0 }, 'loading 阶段不挂载');
  await f.set(true);
  assert.deepEqual(f.state(), { navigation: true, styles: 1, slots: 1 });
  await f.set(false);
  assert.deepEqual(f.state(), { navigation: false, styles: 0, slots: 0 });
  await f.stop(); await f.flush();
  assert.deepEqual(f.state(), { navigation: false, styles: 0, slots: 0 });
  assert.equal(f.events.size, 0);
});

test('inventory errors and stale replies leave navigation disabled', async t => {
  const f = await presentationFixture(t);
  await f.set(true);
  assert.equal(f.state().navigation, true);
  f.reply(() => Promise.resolve({ ok: false, error: { message: 'fixture disconnected' } }));
  await f.events.get('plugin-manager/changed')(); await f.flush();
  assert.equal(f.state().navigation, false);
  const replies = [];
  f.reply(() => new Promise(resolve => replies.push(resolve)));
  const refresh = f.events.get('plugin-manager/changed');
  const old = refresh(), latest = refresh();
  replies[1]({ ok: true, value: { entries: [] } }); await latest;
  replies[0]({ ok: true, value: { entries: [{ moduleName: '@qinova-ai/dsh-codex-style/navigation', enabled: true, fiberPhase: 'active' }] } }); await old; await f.flush();
  assert.equal(f.state().navigation, false);
});

// 「更多」不再由侧栏局部状态旁路；点击必须切换真实 main 面板。
async function moreFixture() {
  let plugin;
  const window = { __ModuleLoader__: { load: definition => {
    plugin = definition.factory(name => {
      if (name === 'react') return { Component: class {} };
      if (name === '@deepseek-ai/dsh-client-store') return { createSnapshotStore: value => ({ getSnapshot: () => value, set: next => { value = next; } }) };
      return {};
    });
  } }, localStorage: { getItem: () => null } };
  const document = {
    body: { getAttribute: () => null, setAttribute() {}, removeAttribute() {} },
    head: { appendChild() {} },
    createElement: () => ({ dataset: {}, remove() {} }),
    documentElement: { hasAttribute: () => false },
    querySelector: () => null,
    querySelectorAll: () => []
  };
  const bundle = (await readFile(new URL('../lib/client.js', import.meta.url), 'utf8')).replace('    return module.exports;', 'module.exports.fixture = { navigationCategoryOf, openMorePanel, registerMorePage, MORE_PANEL_ID, sidebarSectionOf }; return module.exports;');
  new Script(bundle).runInNewContext({ window, document, console: { warn() {}, error() {} }, queueMicrotask, requestAnimationFrame: () => 1, cancelAnimationFrame() {} });
  return plugin.fixture;
}

test('more entry selects the plugin main panel and derives its category from activePanelId', async () => {
  const fixture = await moreFixture();
  assert.equal(fixture.MORE_PANEL_ID, 'codex-style-more');
  // 页面以插件自有 main 面板注册；侧栏入口是否显示仍由原生 entry-customization 决定。
  const registered = [];
  const slots = {
    inject: (name, callback) => { assert.equal(name, 'main'); return callback(); },
    register: (options, component) => { registered.push({ options, component }); return () => {}; }
  };
  fixture.registerMorePage({ slots });
  // vm 内对象与宿主不同 realm，逐字段比较原语。
  assert.equal(registered.length, 1);
  assert.equal(registered[0].options.name, 'main');
  assert.equal(registered[0].options.key, 'codex-style-more');
  assert.equal(typeof registered[0].component, 'function');
  const calls = [];
  const errors = [];
  const rail = { hide: () => calls.push('hide'), store: { getSnapshot: () => ({ collapsed: true, preview: null }) } };
  const layout = { selectPanel: id => calls.push(['selectPanel', id]), toggleSidebar: () => calls.push('toggleSidebar') };
  assert.equal(fixture.openMorePanel({ layout }, rail, text => errors.push(text)), true);
  // 先收起预览、再切换页面、最后在收起态展开侧栏（保持原「点更多会展开」行为）。
  assert.deepEqual(calls, ['hide', ['selectPanel', 'codex-style-more'], 'toggleSidebar']);
  assert.deepEqual(errors, ['']);
  calls.length = 0;
  const expanded = { hide: () => calls.push('hide'), store: { getSnapshot: () => ({ collapsed: false, preview: null }) } };
  fixture.openMorePanel({ layout }, expanded, text => errors.push(text));
  assert.deepEqual(calls, ['hide', ['selectPanel', 'codex-style-more']]);
  // 失败只回显错误，不展开侧栏，也不伪造分类。
  calls.length = 0;
  const failing = { layout: { selectPanel: () => { throw new Error('boom'); }, toggleSidebar: () => calls.push('toggleSidebar') } };
  assert.equal(fixture.openMorePanel(failing, rail, text => errors.push(text)), false);
  assert.deepEqual(calls, ['hide']);
  assert.deepEqual(errors.slice(-1), ['boom']);
  // 分类只由 activePanelId 决定，与侧栏 section 无关。
  assert.equal(fixture.navigationCategoryOf({ activePanelId: 'codex-style-more' }), 'more');
  assert.equal(fixture.navigationCategoryOf({ activePanelId: null }), 'home');
  assert.equal(fixture.navigationCategoryOf({ activePanelId: 'plugins' }), 'plugins');
  assert.equal(fixture.navigationCategoryOf({ activePanelId: 'codex-style-skills' }), 'skills');
  assert.equal(fixture.navigationCategoryOf({ activePanelId: 'schedules' }), 'tasks');
  assert.equal(fixture.navigationCategoryOf({ activePanelId: 'community-third-party' }), 'extension');
  assert.equal(fixture.navigationCategoryOf(null), 'home');
  // 侧栏区域：首页→市场→更多→后退（市场），侧栏回到首页，不残留「更多」菜单。
  const last = { current: 'home' };
  assert.equal(fixture.sidebarSectionOf('home', last, true), 'home');
  assert.equal(fixture.sidebarSectionOf('extension', last, true), 'home');
  assert.equal(fixture.sidebarSectionOf('more', last, true), 'more');
  assert.equal(fixture.sidebarSectionOf('extension', last, true), 'home');
  assert.equal(fixture.sidebarSectionOf('plugins', last, true), 'plugins');
  assert.equal(fixture.sidebarSectionOf('more', last, false), 'plugins');
});

// 社区版提醒：真实发行 bundle + 宿主生命周期桩，验证每次主 apply 至多一次、官方不显示、异步卸载安全。
function createElement(type, props, ...children) {
  const element = { type, props: { ...(props || {}) } };
  if (children.length) element.props.children = children.length === 1 ? children[0] : children;
  return element;
}
// 记录组件挂载时返回的 effect 清理函数，用于模拟 React 在重渲染/卸载时执行清理。
const pendingEffectCleanups = [];
const reactStub = {
  Component: class {},
  Fragment: 'Fragment',
  createElement,
  createPortal: element => element,
  useCallback: fn => fn,
  useEffect: fn => { const cleanup = fn(); if (typeof cleanup === 'function') pendingEffectCleanups.push(cleanup); return cleanup; },
  useLayoutEffect: fn => { const cleanup = fn(); if (typeof cleanup === 'function') pendingEffectCleanups.push(cleanup); return cleanup; },
  useMemo: fn => fn(),
  useRef: value => ({ current: value }),
  useState: value => [value, () => {}],
  useId: () => 'fixture-id',
  useSyncExternalStore: (subscribe, getSnapshot) => getSnapshot()
};
function renderElement(element) {
  let node = element;
  while (node && typeof node === 'object' && typeof node.type === 'function') node = node.type(node.props);
  return node;
}

// DSH 本体更新：只转交 preload 的 status/subscribe/open，状态呈现与原生指示器一致。
async function desktopUpdateFixture() {
  let plugin;
  const window = { __ModuleLoader__: { load: definition => {
    plugin = definition.factory(name => {
      if (name === 'react') return { Component: class {} };
      if (name === '@deepseek-ai/dsh-client-store') return { createSnapshotStore: value => ({ getSnapshot: () => value, set: next => { value = next; } }) };
      return {};
    });
  } }, localStorage: { getItem: () => null } };
  const bundle = (await readFile(new URL('../lib/client.js', import.meta.url), 'utf8')).replace('    return module.exports;', 'module.exports.fixture = { createDesktopUpdateSource, desktopUpdateView }; return module.exports;');
  new Script(bundle).runInNewContext({ window, console: { warn() {}, error() {} } });
  return plugin.fixture;
}
function desktopCarrier(initial) {
  const listeners = new Set();
  const carrier = { protocolVersion: 1, updates: {
    opens: 0,
    status: async () => initial,
    open: async () => { carrier.updates.opens++; },
    subscribe: listener => { listeners.add(listener); return () => listeners.delete(listener); }
  } };
  return { carrier, push: state => listeners.forEach(listener => listener(state)), listeners };
}

test('desktop update source follows preload pushes and releases its subscription', async () => {
  const { createDesktopUpdateSource } = await desktopUpdateFixture();
  const source = createDesktopUpdateSource();
  assert.equal(source.start(undefined), undefined);
  assert.equal(source.start({ protocolVersion: 2, updates: {} }), undefined);
  assert.equal(source.store.getSnapshot().available, false);
  const fake = desktopCarrier({ phase: 'available', version: '0.2.2' });
  const stop = source.start(fake.carrier);
  await new Promise(setImmediate);
  assert.equal(source.store.getSnapshot().presentation.phase, 'available');
  fake.push({ phase: 'downloading', version: '0.2.2', percent: 42 });
  assert.equal(source.store.getSnapshot().presentation.percent, 42);
  stop();
  assert.equal(fake.listeners.size, 0);
  assert.equal(source.store.getSnapshot().available, false);
});

test('desktop update clicks reach the host only outside busy phases', async () => {
  const { createDesktopUpdateSource } = await desktopUpdateFixture();
  const source = createDesktopUpdateSource();
  const fake = desktopCarrier({ phase: 'ready', version: '0.2.2' });
  source.start(fake.carrier);
  await new Promise(setImmediate);
  source.open(); source.open();
  await new Promise(setImmediate);
  assert.equal(fake.carrier.updates.opens, 1);
  for (const phase of ['checking', 'downloading', 'verifying', 'installing']) { fake.push({ phase, percent: 10 }); source.open(); }
  await new Promise(setImmediate);
  assert.equal(fake.carrier.updates.opens, 1);
  fake.push({ phase: 'error', failure: 'download-network' });
  source.open();
  await new Promise(setImmediate);
  assert.equal(fake.carrier.updates.opens, 2);
});

// 自研插件更新退役：真实发行 bundle 不再注册更新 UI、Remote 命名空间或定时网络查询；
// DSH 本体更新入口保留。此断言直接运行构建产物，不依赖源码字符串位置。
test('retired self-update registers no update UI, namespace or network polling', async () => {
  let plugin;
  const network = [];
  const window = { __ModuleLoader__: { load: definition => { plugin = definition.factory(name => {
    if (name === 'react') return { Component: class {} };
    if (name === '@deepseek-ai/dsh-client-store') return { createSnapshotStore: value => ({ getSnapshot: () => value, set: next => { value = next; } }) };
    return {};
  }); } }, localStorage: { getItem: () => null }, addEventListener() {}, removeEventListener() {} };
  const document = {
    body: { getAttribute: () => null, setAttribute() {}, removeAttribute() {} },
    head: { appendChild() {} },
    createElement: () => ({ dataset: {}, remove() {} }),
    documentElement: { hasAttribute: () => false },
    querySelector: () => null, querySelectorAll: () => [],
    addEventListener() {}, removeEventListener() {}, visibilityState: 'visible'
  };
  new Script(await readFile(new URL('../lib/client.js', import.meta.url), 'utf8')).runInNewContext({
    window, document, console: { warn() {}, error() {} },
    fetch: (...args) => { network.push(args); return Promise.reject(new Error('no network expected')); },
    setTimeout: () => ({}), clearTimeout() {}, setInterval: () => ({}), clearInterval() {},
    queueMicrotask, requestAnimationFrame: () => 1, cancelAnimationFrame() {}, getComputedStyle: () => ({ position: 'static' })
  });
  const injections = [], slotNames = [], registered = [];
  const slots = {
    entries: () => [],
    inject: (name, factory) => { slotNames.push(name); try { factory(); } catch { /* 组件渲染由原生前端夹具负责 */ } return () => {}; },
    register: options => { registered.push(options?.id); return () => {}; }
  };
  const ctx = {
    inject: (dependencies, callback) => { injections.push(dependencies); return () => {}; },
    effect: () => () => {}, slots, plugin: () => {}, provide() {}, on: () => () => {}, get: () => undefined
  };
  plugin.apply(ctx);
  await new Promise(setImmediate);
  assert.equal(injections.some(dependencies => dependencies.includes('remote.codexStyleUpdates')), false);
  assert.equal(slotNames.includes('plugins.detail.actions'), false);
  assert.equal(registered.includes('codex-style:check-update'), false);
  assert.equal(registered.includes('codex-style:update-notice'), false);
  assert.equal(registered.includes('codex-style:desktop-update'), true);
  assert.deepEqual(network, []);
});

test('desktop update view maps every phase to the rail glyph and hover copy', async () => {
  const { desktopUpdateView } = await desktopUpdateFixture();
  assert.equal(desktopUpdateView({ presentation: { phase: 'idle' } }), null);
  assert.equal(desktopUpdateView({}), null);
  assert.equal(desktopUpdateView({ presentation: { phase: 'available', version: '0.2.2' } }).kind, 'download');
  const progress = desktopUpdateView({ presentation: { phase: 'downloading', version: '0.2.2', percent: 42.7 } });
  assert.deepEqual([progress.kind, progress.percent, progress.label, progress.detail], ['progress', 42, '正在下载更新 42%', '目标版本 v0.2.2']);
  assert.equal(desktopUpdateView({ presentation: { phase: 'verifying' } }).kind, 'busy');
  assert.equal(desktopUpdateView({ presentation: { phase: 'ready', version: '0.2.2' } }).detail, 'v0.2.2 已下载，点击安装并重启');
  assert.equal(desktopUpdateView({ presentation: { phase: 'error', failure: 'tasks-changed' } }).detail, '有新任务开始运行，请重新确认是否停止任务并更新。');
  assert.equal(desktopUpdateView({ failed: true }).kind, 'error');
  assert.equal(desktopUpdateView({ presentation: { phase: 'available' }, opening: true }).kind, 'busy');
});

// 齿轮菜单的第三方分组：只消费公开 sidebar.footer.action，绝不写死 Remote，也不读取内部 entry.component。
async function footerActionsFixture() {
  let plugin;
  const window = { __ModuleLoader__: { load: definition => { plugin = definition.factory(name => {
    if (name === 'react') return { Component: class {} };
    if (name === 'react-dom') return { createPortal: node => node };
    if (name === '@deepseek-ai/dsh-client-store') return { createSnapshotStore: value => ({ getSnapshot: () => value, set: next => { value = next; } }) };
    if (name === '@deepseek-ai/dsh-client-ui-primitives') return new Proxy({}, { get: () => () => null });
    return {};
  }); } }, localStorage: { getItem: () => null }, addEventListener() {}, removeEventListener() {}, innerHeight: 900 };
  const document = {
    body: { getAttribute: () => null, setAttribute() {}, removeAttribute() {} },
    head: { appendChild() {} },
    createElement: () => ({ dataset: {}, remove() {} }),
    documentElement: { hasAttribute: () => false },
    querySelector: () => null, querySelectorAll: () => [],
    activeElement: null, addEventListener() {}, removeEventListener() {}
  };
  const bundle = (await readFile(new URL('../lib/client.js', import.meta.url), 'utf8')).replace('    return module.exports;', 'module.exports.fixture = { footerActionRoot, footerActionPlan, footerActionHasContent, watchFooterActionSlot, createFooterActionPresenter, isInsideMenuTarget, menuFocusItems }; return module.exports;');
  new Script(bundle).runInNewContext({ window, document, console: { warn() {}, error() {} }, queueMicrotask, requestAnimationFrame: () => 1, cancelAnimationFrame() {}, getComputedStyle: () => ({ position: 'static' }) });
  return plugin.fixture;
}

function fakeNode(tagName, attributes = {}, rect = null) {
  const node = {
    tagName: String(tagName).toUpperCase(),
    attributes: new Map(Object.entries(attributes)),
    children: [], parentElement: null, isConnected: true, tabIndex: 0, rect,
    listeners: new Map(),
    style: {
      values: new Map(), priorities: new Map(),
      setProperty(name, value, priority = '') { this.values.set(name, String(value)); this.priorities.set(name, priority); },
      getPropertyValue(name) { return this.values.has(name) ? this.values.get(name) : ''; },
      getPropertyPriority(name) { return this.priorities.get(name) || ''; },
      removeProperty(name) { this.values.delete(name); this.priorities.delete(name); }
    }
  };
  node.getAttribute = name => (node.attributes.has(name) ? node.attributes.get(name) : null);
  node.setAttribute = (name, value) => { node.attributes.set(name, String(value)); };
  node.removeAttribute = name => { node.attributes.delete(name); };
  node.hasAttribute = name => node.attributes.has(name);
  node.appendChild = child => { child.parentElement = node; child.isConnected = true; node.children.push(child); return child; };
  node.removeChild = child => { const index = node.children.indexOf(child); if (index >= 0) node.children.splice(index, 1); child.parentElement = null; child.isConnected = false; return child; };
  node.contains = target => { let current = target; while (current) { if (current === node) return true; current = current.parentElement; } return false; };
  node.closest = selector => { let current = node; while (current) { if (fakeMatches(current, selector)) return current; current = current.parentElement; } return null; };
  node.matches = selector => fakeMatches(node, selector);
  node.querySelectorAll = selector => {
    const found = [];
    const walk = current => { for (const child of current.children) { if (fakeMatches(child, selector)) found.push(child); walk(child); } };
    walk(node);
    return found;
  };
  node.getBoundingClientRect = () => (node.rect ? { ...node.rect } : { left: 12, top: 400, width: 240, height: 120, right: 252, bottom: 520 });
  node.addEventListener = (type, handler) => { if (!node.listeners.has(type)) node.listeners.set(type, new Set()); node.listeners.get(type).add(handler); };
  node.removeEventListener = (type, handler) => { node.listeners.get(type)?.delete(handler); };
  node.dispatch = type => { for (const handler of [...(node.listeners.get(type) || [])]) handler({ type, target: node }); };
  return node;
}
function fakeMatches(node, selector) {
  return String(selector).split(',').some(part => {
    const rule = part.trim();
    if (!rule) return false;
    if (rule.startsWith('.') && !rule.includes('[')) {
      const classes = String(node.getAttribute('class') || '').split(/\s+/);
      return classes.includes(rule.slice(1));
    }
    if (rule.startsWith('[') && rule.endsWith(']')) {
      const inner = rule.slice(1, -1);
      const equal = inner.indexOf('=');
      if (equal < 0) return node.hasAttribute(inner);
      return node.getAttribute(inner.slice(0, equal)) === inner.slice(equal + 1).replace(/^"|"$/g, '');
    }
    if (rule === '*') return true;
    if (rule === 'button') return node.tagName === 'BUTTON';
    if (rule === 'a[href]') return node.tagName === 'A' && node.hasAttribute('href');
    if (rule === 'input') return node.tagName === 'INPUT';
    if (rule === 'select') return node.tagName === 'SELECT';
    if (rule === 'textarea') return node.tagName === 'TEXTAREA';
    return false;
  });
}

test('gear third-party group uses only the public footer slot and no Remote specifics', async () => {
  const bundle = await readFile(new URL('../lib/client.js', import.meta.url), 'utf8');
  assert.equal(bundle.includes('sidebar.footer.action'), true);
  assert.equal(bundle.includes('data-dsc-app-footer'), true);
  assert.equal(bundle.includes('data-dsc-app-footer-clear'), true);
  assert.equal(bundle.includes('dsc-rail-hitblock'), true);
  assert.equal(bundle.includes('var(--dsc-app-footer-max-height'), true);
  assert.equal(bundle.includes('100vh - var(--dsc-app-footer-bottom) - 8px'), true);
  assert.equal(bundle.includes('calc(var(--dsc-app-footer-bottom) - 16px)'), false);
  for (const marker of ['ds-harness-remote', 'dshRemote', 'entry.component']) assert.equal(bundle.includes(marker), false, marker);
});

test('footer group plan stays out of the way with zero entries or drawer layout', async () => {
  const { footerActionPlan } = await footerActionsFixture();
  assert.equal(footerActionPlan({ entries: 0, menuRect: { left: 12, top: 400, width: 240 }, viewportHeight: 900 }), null);
  assert.equal(footerActionPlan({ entries: 2, drawer: true, menuRect: { left: 12, top: 400, width: 240 }, viewportHeight: 900 }), null);
  assert.equal(footerActionPlan({ entries: 2, menuRect: null, viewportHeight: 900 }), null);
  const plan = footerActionPlan({ entries: 2, menuRect: { left: 12, top: 400, width: 240 }, viewportHeight: 900 });
  // maxHeight 必须按“视口高 - 底边距 - 顶部 8px”计算，不能用底边距本身。
  assert.deepEqual([plan.left, plan.width, plan.bottom, plan.maxHeight], [12, 240, 504, 388]);
  const short = footerActionPlan({ entries: 1, menuRect: { left: 12, top: 200, width: 240 }, viewportHeight: 240 });
  assert.deepEqual([short.bottom, short.maxHeight], [44, 188]);
  assert.equal(footerActionPlan({ entries: 2, menuRect: { left: 4, top: 100, width: 0 }, viewportHeight: 900 }), null);
});

test('footer group presenter marks the native footer, restores it and follows dynamic entries', async () => {
  const { footerActionRoot, createFooterActionPresenter } = await footerActionsFixture();
  const sidebar = fakeNode('div', { 'data-slot': 'sidebar' });
  const base = fakeNode('div', { class: 'footArea' });
  sidebar.appendChild(base);
  const host = fakeNode('div', { 'data-keep': 'host' }, { left: 12, right: 252, top: 500, bottom: 620, width: 240, height: 120 });
  base.appendChild(host);
  const slot = fakeNode('div', { 'data-slot': 'sidebar.footer.action' });
  host.appendChild(slot);
  const first = fakeNode('div', { class: 'first' });
  const firstButton = fakeNode('button');
  first.appendChild(firstButton); slot.appendChild(first);
  const rail = fakeNode('nav', { class: 'dsc-independent-rail' }, { left: 0, right: 52, top: 0, bottom: 900, width: 52, height: 900 });
  const topItem = fakeNode('button', { class: 'dsc-rail__item' }, { left: 0, right: 52, top: 20, bottom: 56, width: 52, height: 36 });
  const bottomItem = fakeNode('button', { class: 'dsc-rail__item' }, { left: 0, right: 52, top: 520, bottom: 556, width: 52, height: 36 });
  rail.appendChild(topItem); rail.appendChild(bottomItem);
  let menuRect = { left: 12, top: 400, width: 240, height: 120 };
  let clicks = 0;
  firstButton.addEventListener('click', () => { clicks += 1; });
  const documentRef = { querySelector: selector => (selector.includes('sidebar.footer.action') ? slot : selector === '.dsc-independent-rail' ? rail : null) };
  const root = footerActionRoot(documentRef);
  assert.equal(root.host, host);
  assert.equal(root.base, base);
  host.style.setProperty('--dsc-app-footer-left', '7px');
  let entries = 1, published = [];
  const presenter = createFooterActionPresenter({
    document: documentRef,
    window: { innerHeight: 900 },
    readEntries: () => entries,
    readPanelRect: () => menuRect,
    onRoot: element => published.push(element)
  });
  presenter.sync();
  assert.equal(host.getAttribute('data-dsc-app-footer-host'), '');
  assert.equal(first.getAttribute('data-dsc-app-footer-entry'), '');
  assert.equal(host.style.getPropertyValue('--dsc-app-footer-left'), '12px');
  assert.equal(host.style.getPropertyValue('--dsc-app-footer-width'), '240px');
  assert.equal(host.style.getPropertyValue('--dsc-app-footer-bottom'), '504px');
  assert.equal(host.style.getPropertyValue('--dsc-app-footer-max-height'), '388px');
  assert.equal(firstButton.tabIndex, -1);
  // 宿主收起态只渲染图标：用按钮的无障碍名称补可见标签；出现原生文字后自动撤掉。
  firstButton.setAttribute('aria-label', '远程连接');
  presenter.sync();
  assert.equal(firstButton.getAttribute('data-dsc-app-footer-label'), '远程连接');
  first.textContent = '远程连接';
  presenter.sync();
  assert.equal(firstButton.hasAttribute('data-dsc-app-footer-label'), false);
  first.textContent = '';
  presenter.sync();
  assert.equal(firstButton.getAttribute('data-dsc-app-footer-label'), '远程连接');
  // 与分组竖向重叠的 rail 区段放行；上方按钮保持原样。
  assert.equal(rail.getAttribute('data-dsc-app-footer-clear'), '');
  assert.equal(rail.style.getPropertyValue('--dsc-app-footer-clear-top'), '500px');
  assert.equal(bottomItem.getAttribute('data-dsc-app-footer-clear-item'), '');
  assert.equal(topItem.hasAttribute('data-dsc-app-footer-clear-item'), false);
  // 原生 click handler 仍由第三方节点自持：呈现器不注册、也不代发 click。
  assert.equal(host.listeners.size, 0);
  firstButton.dispatch('click');
  assert.equal(clicks, 1);
  assert.equal(host.getAttribute('data-dsc-app-footer-host'), '');
  // 面板不再与 rail 横向重叠时，rail 放行标记和变量恢复。
  menuRect = { left: 60, top: 400, width: 240, height: 120 };
  presenter.sync();
  assert.equal(rail.hasAttribute('data-dsc-app-footer-clear'), false);
  assert.equal(rail.style.getPropertyValue('--dsc-app-footer-clear-top'), '');
  assert.equal(bottomItem.hasAttribute('data-dsc-app-footer-clear-item'), false);
  menuRect = { left: 12, top: 400, width: 240, height: 120 };
  presenter.sync();
  // 动态新增入口：下一次 sync 标记新节点，旧节点保持。
  const second = fakeNode('div', { class: 'second' });
  second.appendChild(fakeNode('button')); slot.appendChild(second);
  entries = 2;
  presenter.sync();
  assert.equal(second.getAttribute('data-dsc-app-footer-entry'), '');
  assert.equal(first.getAttribute('data-dsc-app-footer-entry'), '');
  // 0 个入口：全部标记和变量恢复，Tab 序列恢复。
  entries = 0;
  presenter.sync();
  assert.equal(host.hasAttribute('data-dsc-app-footer-host'), false);
  assert.equal(first.hasAttribute('data-dsc-app-footer-entry'), false);
  assert.equal(host.style.getPropertyValue('--dsc-app-footer-left'), '7px');
  assert.equal(host.style.getPropertyValue('--dsc-app-footer-max-height'), '');
  assert.equal(firstButton.tabIndex, 0);
  assert.equal(rail.hasAttribute('data-dsc-app-footer-clear'), false);
  assert.equal(published.at(-1), null);
  assert.equal(host.getAttribute('data-keep'), 'host');
  presenter.dispose();
});

test('footer group stays dormant until a registration renders visible content', async () => {
  const { createFooterActionPresenter } = await footerActionsFixture();
  const sidebar = fakeNode('div', { 'data-slot': 'sidebar' });
  const base = fakeNode('div', { class: 'footArea' });
  sidebar.appendChild(base);
  const host = fakeNode('div', { class: 'footerActions' }, { left: 12, right: 252, top: 500, bottom: 620, width: 240, height: 120 });
  base.appendChild(host);
  const slot = fakeNode('div', { 'data-slot': 'sidebar.footer.action' });
  host.appendChild(slot);
  const rail = fakeNode('nav', { class: 'dsc-independent-rail' }, { left: 0, right: 52, top: 0, bottom: 900, width: 52, height: 900 });
  const zero = { left: 0, top: 0, width: 0, height: 0, right: 0, bottom: 0 };
  const buttonRect = { left: 12, right: 252, top: 500, width: 240, height: 36, bottom: 536 };
  const documentRef = {
    querySelector: selector => (selector.includes('sidebar.footer.action') ? slot : selector === '.dsc-independent-rail' ? rail : null)
  };
  let entries = 2;
  const presenter = createFooterActionPresenter({
    document: documentRef,
    window: { innerHeight: 900 },
    readEntries: () => entries,
    readPanelRect: () => ({ left: 12, top: 400, width: 240, height: 120 }),
    onRoot: () => {}
  });

  // Cordis 在无 inventory 时返回 null：注册数仍是 2，但 DOM 没有入口。
  presenter.sync();
  assert.equal(slot.children.length, 0);
  assert.equal(host.hasAttribute('data-dsc-app-footer-host'), false, '空 slot 不应出现分组');
  assert.equal(base.hasAttribute('data-dsc-app-footer-base'), false, '空 slot 不应改写宿主 foot 布局');
  assert.equal(host.style.getPropertyValue('--dsc-app-footer-left'), '');

  // 空包装：React/宿主只留下一层没有按钮、文字和高度的 div。
  const emptyWrap = fakeNode('div', { class: 'empty' }, zero);
  emptyWrap.appendChild(fakeNode('span', {}, zero));
  slot.appendChild(emptyWrap);
  presenter.sync();
  assert.equal(emptyWrap.hasAttribute('data-dsc-app-footer-entry'), false, '空包装不应被标记为入口');
  assert.equal(host.hasAttribute('data-dsc-app-footer-host'), false);

  // 宿主 slot 错误边界：入口渲染崩溃时留下空的 data-slot-error 占位。
  slot.appendChild(fakeNode('div', { 'data-slot-error': 'sidebar.footer.action' }, zero));
  presenter.sync();
  assert.equal(host.hasAttribute('data-dsc-app-footer-host'), false, '错误占位不应产生空白分组');

  // display:none/hidden 的入口：包装有 36px 高，但按钮自身没有矩形。
  const hiddenWrap = fakeNode('div', { class: 'hidden' }, buttonRect);
  const hiddenButton = fakeNode('button', { 'aria-label': '远程连接', hidden: '' }, zero);
  hiddenWrap.appendChild(hiddenButton);
  slot.appendChild(hiddenWrap);
  presenter.sync();
  assert.equal(hiddenButton.hasAttribute('data-dsc-app-footer-entry'), false, '隐藏按钮不应被标记');
  assert.equal(host.hasAttribute('data-dsc-app-footer-host'), false, '隐藏入口不应保留分组');
  hiddenButton.removeAttribute('hidden');
  hiddenButton.ownerDocument = { defaultView: { getComputedStyle: () => ({ display: 'none' }) } };
  presenter.sync();
  assert.equal(host.hasAttribute('data-dsc-app-footer-host'), false, 'CSS display:none 也不应产生分组');

  // 真实按钮出现：分组生效，标签/Tab/原生尺寸约定不变。
  const realWrap = fakeNode('div', { class: 'real' }, buttonRect);
  const realButton = fakeNode('button', { 'aria-label': '远程连接' }, buttonRect);
  realWrap.appendChild(realButton);
  slot.appendChild(realWrap);
  presenter.sync();
  assert.equal(host.hasAttribute('data-dsc-app-footer-host'), true);
  assert.equal(realWrap.getAttribute('data-dsc-app-footer-entry'), '');
  assert.equal(realButton.getAttribute('data-dsc-app-footer-label'), '远程连接');
  assert.equal(realButton.tabIndex, -1);
  assert.equal(host.style.getPropertyValue('--dsc-app-footer-width'), '240px');

  // 宿主祖先在过渡中本来是 visibility:hidden：不能把所有入口误判为空。
  sidebar.style.setProperty('visibility', 'hidden');
  presenter.sync();
  assert.equal(host.hasAttribute('data-dsc-app-footer-host'), true, '祖先 visibility 不应否定已渲染入口');

  // 动态卸载全部入口：注册数不变，分组必须撤销并恢复旧样式值。
  for (const child of [...slot.children]) slot.removeChild(child);
  presenter.sync();
  assert.equal(host.hasAttribute('data-dsc-app-footer-host'), false, '动态卸载后分组应撤销');
  assert.equal(host.style.getPropertyValue('--dsc-app-footer-left'), '');
  assert.equal(host.style.getPropertyValue('--dsc-app-footer-width'), '');
  assert.equal(host.style.getPropertyValue('--dsc-app-footer-max-height'), '');
  presenter.dispose();
});

test('footer group ignores a hidden or zero-size wrapper but accepts a text-only entry', async () => {
  const { createFooterActionPresenter } = await footerActionsFixture();
  const sidebar = fakeNode('div', { 'data-slot': 'sidebar' });
  const base = fakeNode('div', { class: 'footArea' });
  sidebar.appendChild(base);
  const host = fakeNode('div', { class: 'footerActions' }, { left: 12, right: 252, top: 500, bottom: 620, width: 240, height: 120 });
  base.appendChild(host);
  const slot = fakeNode('div', { 'data-slot': 'sidebar.footer.action' });
  host.appendChild(slot);
  const documentRef = { querySelector: selector => (selector.includes('sidebar.footer.action') ? slot : null) };
  const presenter = createFooterActionPresenter({
    document: documentRef,
    window: { innerHeight: 900 },
    readEntries: () => 1,
    readPanelRect: () => ({ left: 12, top: 400, width: 240, height: 120 }),
    onRoot: () => {}
  });
  // 纯文字入口（没有 button）只要自身有矩形仍算可用内容。
  const textEntry = fakeNode('div', { class: 'text' }, { left: 12, right: 252, top: 500, width: 240, height: 36, bottom: 536 });
  textEntry.textContent = '远程连接';
  slot.appendChild(textEntry);
  presenter.sync();
  assert.equal(host.hasAttribute('data-dsc-app-footer-host'), true, '纯文字入口应生效');
  // 但只有尺寸、没有文字和控件的外壳不算内容。
  textEntry.textContent = '';
  presenter.sync();
  assert.equal(host.hasAttribute('data-dsc-app-footer-host'), false, '只有尺寸的空壳不算内容');
  presenter.dispose();
});

test('footer group watches only the slot subtree and release disconnects it', async () => {
  const { watchFooterActionSlot } = await footerActionsFixture();
  const slot = fakeNode('div', { 'data-slot': 'sidebar.footer.action' });
  let current = slot;
  const documentRef = { querySelector: selector => (selector.includes('sidebar.footer.action') ? current : null) };
  const created = [];
  class FakeObserver {
    constructor(callback) { this.callback = callback; this.disconnected = false; created.push(this); }
    observe(target, options) { this.target = target; this.options = options; }
    disconnect() { this.disconnected = true; }
  }
  let scheduled = 0;
  const release = watchFooterActionSlot(() => { scheduled += 1; }, documentRef, FakeObserver);
  assert.equal(created.length, 1);
  assert.equal(created[0].target, slot);
  // 观察选项来自 bundle 的 vm realm，用 JSON 归一化后比较。
  assert.deepEqual(JSON.parse(JSON.stringify(created[0].options)), {
    childList: true, subtree: true, attributes: true,
    attributeFilter: ['style', 'hidden', 'class', 'aria-hidden']
  });
  // 同一 slot 的变化只调度一次同步。
  created[0].callback();
  assert.equal(scheduled, 1);
  assert.equal(created.length, 1);
  // slot 被替换时重新绑定，旧观察器断开。
  current = fakeNode('div', { 'data-slot': 'sidebar.footer.action' });
  // 替换 slot 的 mutation 发生在它的父节点，旧 slot 观察器不会收到通知；
  // 宿主 sidebar 的调度必须主动重新绑定。
  release.refresh();
  assert.equal(scheduled, 1);
  assert.equal(created.length, 2);
  assert.equal(created[0].disconnected, true);
  assert.equal(created[1].target, current);
  release();
  assert.equal(created[1].disconnected, true);
});

test('footer group presenter skips drawer layout instead of clipping the panel', async () => {
  const { createFooterActionPresenter } = await footerActionsFixture();
  const frame = fakeNode('div', { 'data-sidebar-drawer': '' });
  const sidebar = fakeNode('div', { 'data-slot': 'sidebar' });
  frame.appendChild(sidebar);
  const host = fakeNode('div');
  sidebar.appendChild(host);
  const slot = fakeNode('div', { 'data-slot': 'sidebar.footer.action' });
  host.appendChild(slot);
  const documentRef = { querySelector: selector => (selector.includes('sidebar.footer.action') ? slot : null) };
  const presenter = createFooterActionPresenter({
    document: documentRef,
    window: { innerHeight: 900 },
    readEntries: () => 1,
    readPanelRect: () => ({ left: 12, top: 400, width: 240, height: 120 }),
    onRoot: () => {}
  });
  presenter.sync();
  assert.equal(host.hasAttribute('data-dsc-app-footer-host'), false);
  presenter.dispose();
});

test('menu range helpers treat the hosted group as inside and order it before menu items', async () => {
  const { isInsideMenuTarget, menuFocusItems } = await footerActionsFixture();
  const child = { id: 'third-party' };
  const group = { contains: target => target === child, querySelectorAll: () => [{ id: 'third' }] };
  const menu = { contains: target => target === menuChild, querySelectorAll: () => [{ id: 'menu-a' }, { id: 'menu-b' }] };
  const menuChild = { id: 'menu' };
  assert.equal(isInsideMenuTarget(child, menu, [group]), true);
  assert.equal(isInsideMenuTarget({ id: 'outside' }, menu, [group]), false);
  assert.equal(isInsideMenuTarget(child, menu, []), false);
  assert.deepEqual(Array.from(menuFocusItems(menu, [group]), item => item.id), ['third', 'menu-a', 'menu-b']);
});
