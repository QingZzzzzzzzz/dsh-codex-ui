// 保留官方 sidebar/settings/composer 的所有者；导航在 shell.overlay 独立挂载。
// 二级侧栏复用同一内容与真实动作；收起态只改变呈现方式，不导航或展开宿主列。
const DEFAULT_SIDEBAR_WIDTH = 288;
// 「更多」是插件自有 main 面板；与技能页同模式，点击即切换布局页面，
// 历史、右侧内容与轨道高亮全部由 activePanelId 推导，不再使用侧栏局部状态。
const MORE_PANEL_ID = 'codex-style-more';

// 0.2.1-rc.2/rc.3 的 root store handle.create() 返回 AppFrame 已持有的同一布局实例。
// 仅将启动/重新展开时的默认值 280 改为 288；真实 grid、分隔条和宽度变量仍由宿主计算。
function initializeSidebarWidth(ctx) {
  const entry = ctx.slots.entriesOfSlot('root')[0];
  const store = entry?.store?.create();
  if (!store?.actions?.setSidebar || !store.getSnapshot().layoutInfo) {
    console.warn('codex-style: 当前 root 未提供已核实的侧栏宽度动作');
    return;
  }
  let previous = store.getSnapshot().layoutInfo.sidebar;
  let owned = false;
  const sync = initial => {
    const width = store.getSnapshot().layoutInfo.sidebar;
    const reopening = previous === 0 && width === 280;
    if (width !== previous) owned = false;
    previous = width;
    if (width !== 280 || (!initial && !reopening)) return;
    // 先更新本地记录，避免 setSidebar 的同步通知被误认为用户拖动。
    previous = DEFAULT_SIDEBAR_WIDTH;
    owned = true;
    store.actions.setSidebar(DEFAULT_SIDEBAR_WIDTH);
  };
  const unsubscribe = store.subscribe(() => sync(false));
  sync(true);
  return () => {
    // 卸载时只恢复本次仍在生效的默认值；保留用户后续拖动值和 0px 收起态。
    unsubscribe();
    if (owned && store.getSnapshot().layoutInfo.sidebar === DEFAULT_SIDEBAR_WIDTH) store.actions.setSidebar(280);
  };
}

function PrototypeIcon({ name, className = '' }) {
  return h('span', { className: 'dsc-proto-icon ' + className, 'aria-hidden': true, dangerouslySetInnerHTML: { __html: PROTOTYPE_ICONS[name] } });
}
function useSlotVersion(ctx, names) {
  const axis = names.join('|');
  const subscribe = useCallback(listener => {
    const disposers = names.map(name => ctx.slots.subscribe(name, listener));
    return () => disposers.forEach(dispose => dispose());
  }, [ctx, axis]);
  const snapshot = useCallback(() => names.map(name => ctx.slots.getVersion(name)).join(':'), [ctx, axis]);
  return useSyncExternalStore(subscribe, snapshot, snapshot);
}
function usePanelDirectory(ctx) {
  const version = useSlotVersion(ctx, ['main', 'sidebar.panellist']);
  const locale = useSource(ctx.locale);
  return useMemo(() => {
    const mains = new Set(ctx.slots.entriesOfSlot('main').map(entry => entry.options.key));
    return ctx.slots.entriesOfSlot('sidebar.panellist').map(({ options }) => ({
      id: options.id, order: options.order ?? 0,
      label: (typeof options.label === 'function' ? options.label() : options.label) ?? options.id,
      available: mains.has(options.id)
    })).sort((a, b) => a.order - b.order);
  }, [ctx, version, locale]);
}
// 导航分类只由当前 main 面板决定；「更多」注册为真实面板后与其他页面同源。
function navigationCategoryOf(panel) {
  const activePanelId = panel === null || panel === undefined || panel.activePanelId === undefined ? null : panel.activePanelId;
  if (activePanelId === MORE_PANEL_ID) return 'more';
  if (activePanelId === null) return 'home';
  if (activePanelId === 'plugins') return 'plugins';
  if (activePanelId === SKILLS_PANEL_ID) return 'skills';
  if (activePanelId === 'schedules') return 'tasks';
  return 'extension';
}
// 侧栏二级区域：第三方页沿用最近的常规区域；「更多」只在它自己的页面显示，
// 从「更多」后退到第三方页时不残留「更多」菜单。
function sidebarSectionOf(category, last, hasMore) {
  if (category !== 'extension' && category !== 'more') last.current = category;
  return category === 'more' && hasMore ? 'more' : last.current;
}
function useNavigationDirectory(ctx, sidebar) {
  const panel = useSource(ctx.layout.panelInfo);
  const panels = usePanelDirectory(ctx);
  const pins = useSource(sidebar.pins.store);
  const moreVersion = useSlotVersion(ctx, ['sidebar.panellist.actions']);
  const entryActions = useMemo(() => ctx.slots.entriesOfSlot('sidebar.panellist.actions'), [ctx, moreVersion]);
  const hasMore = entryActions.some(entry => entry.options.id === 'entry-customization');
  const hasEntryActions = entryActions.length > 0;
  // 官方分组只按已核实的 main id 识别；社区入口的名称不能决定它属于自定义。
  const pluginRows = panels.filter(row => row.available && row.id === 'plugins').concat([{ id: SKILLS_PANEL_ID, order: 90, label: '技能', available: true }]);
  const taskRows = panels.filter(row => row.available && row.id === 'schedules');
  // 目录继续保留所有页面；只有轨道可见性跟随宿主的同一份固定状态。
  const pinnedTaskRows = taskRows.filter(row => !pins.available || !hasEntryActions || !pins.unpinned.includes(row.id));
  const moreRows = pins.available ? panels.filter(row => row.available && row.id !== 'plugins').map(row => ({ ...row, pinned: !pins.unpinned.includes(row.id) })) : [];
  const category = navigationCategoryOf(panel);
  return { panel, panels, pluginRows, taskRows, pinnedTaskRows, moreRows, pins, category, hasMore, hasEntryActions };
}

// 右键与 Shift+F10 共用真实固定动作；普通左键仍由原生页面按钮处理。
function openSidebarPinContext(event, sidebar, row, anchor) {
  if (!row || !sidebar.pins.canPin(row.id)) return false;
  event.preventDefault();
  event.stopPropagation();
  sidebar.hide();
  sidebar.pinMenu.open({ id: row.id, label: row.label, anchor, ...(event.type === 'contextmenu' ? { x: event.clientX, y: event.clientY } : {}) });
  return true;
}

// 原 sidebar entry 拥有 panellist 的 renderSlot 授权。保留原按钮、图标及注入，
// 仅以公开 slot 锚点定位原 nav，给第三方行添加可释放标记并用 CSS 呈现在轨道中。
// 不复制 component、不借用私有 renderer、不搬移 React 所拥有的 DOM。
function useNativeExtensionNavigation(sidebar, target, panels, pins, hasMore, hasEntryActions) {
  useLayoutEffect(() => {
    const host = document.querySelector('[data-slot="sidebar"]');
    if (!host || !target.current) return;
    const attributes = new Map();
    const properties = new Map();
    let nav;
    let frame;
    let buttonRows = new Map();
    const mark = (node, name, value) => {
      let saved = attributes.get(node);
      if (!saved) attributes.set(node, saved = new Map());
      if (!saved.has(name)) saved.set(name, node.getAttribute(name));
      if (value === null) node.removeAttribute(name);
      else if (node.getAttribute(name) !== value) node.setAttribute(name, value);
    };
    const property = (node, name, value) => {
      let saved = properties.get(node);
      if (!saved) properties.set(node, saved = new Map());
      if (!saved.has(name)) saved.set(name, [node.style.getPropertyValue(name), node.style.getPropertyPriority(name)]);
      node.style.setProperty(name, value);
    };
    const hidePreview = () => sidebar.hide();
    const followNative = () => sidebar.hide();
    const contextMenu = event => {
      const button = event.target.closest?.('button[data-dsc-extension-row]');
      if (button && hasMore) openSidebarPinContext(event, sidebar, buttonRows.get(button), button);
    };
    const contextKey = event => {
      if (event.key !== 'F10' || !event.shiftKey) return;
      contextMenu(event);
    };
    const detach = () => {
      nav?.removeEventListener('pointerenter', hidePreview);
      nav?.removeEventListener('focusin', hidePreview);
      nav?.removeEventListener('click', followNative, true);
      nav?.removeEventListener('contextmenu', contextMenu);
      nav?.removeEventListener('keydown', contextKey);
    };
    const sync = () => {
      frame = undefined;
      const glyphs = [...host.querySelectorAll('[data-slot="sidebar.panellist"]')];
      const buttons = glyphs.map(glyph => glyph.closest('button'));
      // rc.3 按相同目录顺序过滤未固定项；全段数量和标签相符时按索引对应，
      // 避免两个同名插件在另一项取消固定后被误认成同一个页面。
      const visiblePanels = pins.available && hasEntryActions ? panels.filter(row => row.id === 'plugins' || !pins.unpinned.includes(row.id)) : panels;
      const aligned = buttons.length === visiblePanels.length && buttons.every((button, i) => button && visiblePanels[i]?.label === button.getAttribute('aria-label'));
      const rows = buttons.map((button, i) => {
        if (!button) return null;
        const label = button.getAttribute('aria-label');
        if (aligned) return visiblePanels[i];
        const retained = visiblePanels.find(row => row.id === button.getAttribute('data-dsc-extension-row') && row.label === label);
        if (retained) return retained;
        const matches = visiblePanels.filter(row => row.label === label);
        return matches.length === 1 ? matches[0] : null;
      });
      // 同名或提交时序不同的行保留原生入口，不让单行识别失败隐藏整个导航。
      if (!buttons.length || buttons.some(button => !button)) return;
      const nextNav = buttons[0].closest('nav');
      if (!nextNav || buttons.some(button => button.closest('nav') !== nextNav)) return;
      if (nextNav !== nav) {
        detach();
        nav = nextNav;
        nav.addEventListener('pointerenter', hidePreview);
        nav.addEventListener('focusin', hidePreview);
        nav.addEventListener('click', followNative, true);
        nav.addEventListener('contextmenu', contextMenu);
        nav.addEventListener('keydown', contextKey);
      }
      mark(nav, 'data-dsc-extension-nav', '');
      buttonRows = new Map();
      buttons.forEach((button, i) => {
        const row = rows[i];
        const extension = !row || (row.available && row.id !== 'plugins' && row.id !== 'schedules');
        // 新版主按钮和取消固定按钮是同一 panelEntry 的兄弟；以 nav 的直接子行
        // 为呈现单位，避免只缩主按钮后，原生 pin 仍压在图标中心。
        let entry = button;
        while (entry.parentElement && entry.parentElement !== nav) entry = entry.parentElement;
        if (entry.parentElement !== nav) entry = button;
        mark(entry, 'data-dsc-extension-entry', '');
        mark(entry, 'data-dsc-extension-hidden', extension ? null : '');
        mark(button, 'data-dsc-extension-row', row?.id ?? '');
        mark(button, 'data-dsc-extension-hidden', extension ? null : '');
        if (row && extension) buttonRows.set(button, row);
        if (entry !== button) for (const pin of entry.querySelectorAll('button')) {
          if (pin === button) continue;
          mark(pin, 'data-dsc-extension-pin', pins.available && hasMore && row && sidebar.pins.canPin(row.id) ? '' : null);
        }
        if (!extension) return;
        mark(button, 'title', row?.label ?? button.getAttribute('aria-label'));
        const glyph = [...button.children].find(child => child === glyphs[i] || child.contains(glyphs[i])) || glyphs[i].parentElement;
        mark(glyph, 'data-dsc-extension-glyph', '');
        [...button.children].filter(child => child !== glyph).forEach(child => mark(child, 'data-dsc-extension-label', ''));
      });
      // rc.3「更多」由自有导航与二级侧栏呈现；隐藏旧入口，原宿主注册与生命周期继续保留。
      for (const button of nav.querySelectorAll('button[aria-haspopup="menu"]')) {
        if (button.querySelector('[data-slot="sidebar.panellist"]')) continue;
        mark(button, 'data-dsc-extension-hidden', '');
      }
      const box = target.current.getBoundingClientRect();
      property(nav, '--dsc-extension-left', box.left + 'px');
      property(nav, '--dsc-extension-top', box.top + 'px');
      property(nav, '--dsc-extension-width', box.width + 'px');
      property(nav, '--dsc-extension-height', Math.max(0, box.height) + 'px');
    };
    const schedule = () => { if (frame === undefined) frame = requestAnimationFrame(sync); };
    const content = new MutationObserver(schedule);
    content.observe(host, { childList: true, characterData: true, attributes: true, attributeFilter: ['aria-label'], subtree: true });
    const size = new ResizeObserver(schedule);
    size.observe(target.current);
    window.addEventListener('resize', schedule);
    schedule();
    return () => {
      cancelAnimationFrame(frame);
      content.disconnect(); size.disconnect();
      window.removeEventListener('resize', schedule);
      detach();
      for (const [node, saved] of attributes) for (const [name, value] of saved) {
        if (value === null) node.removeAttribute(name); else node.setAttribute(name, value);
      }
      for (const [node, saved] of properties) for (const [name, [value, priority]] of saved) {
        if (value) node.style.setProperty(name, value, priority); else node.style.removeProperty(name);
      }
    };
  }, [sidebar, target, panels, pins, hasMore, hasEntryActions]);
}

// 导航与二级侧栏共享呈现状态；悬停计时不调用 layout，也不发起模型请求。
function createSidebarPresentation() {
  const store = createSnapshotStore({ collapsed: true, preview: null });
  let opening;
  let closing;
  const cancel = () => { clearTimeout(opening); clearTimeout(closing); };
  const hide = () => { cancel(); if (store.getSnapshot().preview !== null) store.set({ ...store.getSnapshot(), preview: null }); };
  const show = category => {
    cancel();
    if (store.getSnapshot().collapsed) store.set({ ...store.getSnapshot(), preview: category });
  };
  return {
    store, hide, show, hold: cancel, dispose: cancel,
    setCollapsed(collapsed) {
      if (store.getSnapshot().collapsed === collapsed) return;
      cancel();
      store.set({ ...store.getSnapshot(), collapsed, preview: null });
    },
    enter(category) {
      cancel();
      if (!store.getSnapshot().collapsed || store.getSnapshot().preview === category) return;
      opening = setTimeout(() => show(category), category === 'home' ? 300 : 100);
    },
    leave() {
      cancel();
      closing = setTimeout(hide, 140);
    }
  };
}

// 点击「更多」= 选中插件自有 main 面板；失败只回显错误，不改变当前页面。
function openMorePanel(ctx, sidebar, setError) {
  setError('');
  sidebar.hide();
  try { ctx.layout.selectPanel(MORE_PANEL_ID); } catch (e) { setError(errorText(e)); return false; }
  if (sidebar.store.getSnapshot().collapsed) ctx.layout.toggleSidebar();
  return true;
}

function makeNavigationRail(ctx, sidebar) {
  return function NavigationRail() {
    const { panels, pluginRows, pinnedTaskRows, pins, category, hasMore, hasEntryActions } = useNavigationDirectory(ctx, sidebar);
    const { collapsed, preview } = useSource(sidebar.store);
    const [error, setError] = useState('');
    const extensions = useRef(null);
    useNativeExtensionNavigation(sidebar, extensions, panels, pins, hasMore, hasEntryActions);
    const pick = id => {
      sidebar.hide();
      setError('');
      try { ctx.layout.selectPanel(id); } catch (e) { setError(errorText(e)); }
    };
    const openMore = () => { openMorePanel(ctx, sidebar, setError); };
    const item = (id, name, icon, action, active, pinRow) => h('button', {
      key: id, type: 'button', className: 'dsc-rail__item' + ((active === true || category === id) ? ' dsc-rail__item--active' : ''),
      title: collapsed ? undefined : name, 'data-tip': name, 'data-dsc-preview-trigger': id, 'data-preview-enabled': collapsed,
      'aria-label': name, 'aria-current': (active === true || category === id) ? 'page' : undefined,
      'aria-haspopup': collapsed ? 'dialog' : undefined, 'aria-expanded': collapsed ? preview === id : undefined,
      'aria-controls': collapsed ? 'dsc-sidebar-card' : undefined,
      onPointerEnter: e => { if (e.pointerType !== 'touch') sidebar.enter(id); }, onPointerLeave: sidebar.leave,
      onFocus: () => sidebar.enter(id), onBlur: sidebar.leave,
      onContextMenu: e => { if (hasMore && pinRow) openSidebarPinContext(e, sidebar, pinRow, e.currentTarget); },
      onKeyDown: e => {
        if (hasMore && pinRow && e.key === 'F10' && e.shiftKey && openSidebarPinContext(e, sidebar, pinRow, e.currentTarget)) return;
        if (e.key === 'Escape') { sidebar.hide(); e.preventDefault(); }
      }, onClick: action
    }, icon === 'more' ? h(Icon, { name: 'more', size: 20 }) : h(PrototypeIcon, { name: icon }));
    return createPortal(h(React.Fragment, null,
      h('nav', { className: 'dsc-ui dsc-rail dsc-independent-rail', 'aria-label': '主导航' },
        item('home', '首页', 'home', () => pick(null)),
        pinnedTaskRows.length > 0 && item('tasks', '定时任务', 'tasks', () => pick(pinnedTaskRows[0].id), undefined, pinnedTaskRows[0]),
        pluginRows.length > 0 && item('plugins', '自定义', 'plugins', () => pick(pluginRows.some(row => row.id === 'plugins') ? 'plugins' : SKILLS_PANEL_ID), category === 'skills'),
        hasMore && item('more', '更多', 'more', openMore),
        h('div', { ref: extensions, className: 'dsc-extension-navigation-anchor', 'aria-hidden': true }),
        h('span', { className: 'dsc-rail-hitblock', 'aria-hidden': true })),
      error && h('div', { className: 'dsc-ui dsc-navigation-error' }, h(ErrorLine, { text: error })),
      h(SidebarPinContextMenu, { sidebar })), document.body);
  };
}

// 「更多」main 页面：只是深色空白正文；入口动作全部在左侧二级菜单。
function MoreMain() {
  return h('div', { className: 'dsc-ui dsc-more-page', 'aria-label': '更多' });
}

// 面板无条件注册；侧栏「更多」入口的显示仍由原宿主 entry-customization 判定。
function registerMorePage(ctx) {
  return ctx.slots.inject('main', () => ctx.slots.register({ name: 'main', key: MORE_PANEL_ID }, function MoreMainPage() {
    return h(MoreMain);
  }));
}

function makeSidebarChrome(ctx, sidebar, archiveNotice) {
  const completions = createSessionCompletionTracker(ctx);
  ctx.effect(() => completions.start(), 'codex-style: unread session completions');
  ctx.effect(() => registerMorePage(ctx), 'codex-style: more page');
  const Tree = makeWorkspaceTree(ctx, completions.store, archiveNotice);
  return function SidebarChrome() {
    const { panel, pluginRows, taskRows, moreRows, category: selectedCategory, hasMore } = useNavigationDirectory(ctx, sidebar);
    const { collapsed, preview } = useSource(sidebar.store);
    const [searchOpen, setSearchOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [error, setError] = useState('');
    const [geometry, setGeometry] = useState(null);
    const marker = useRef(null);
    const insidePointer = useRef(null);
    const lastWidth = useRef(DEFAULT_SIDEBAR_WIDTH);
    const lastSection = useRef('home');
    const section = sidebarSectionOf(selectedCategory, lastSection, hasMore);
    const presentation = useRef({ category: section, mode: 'docked' });
    const search = useRef(null);
    const searchAnchor = useRef(null);
    useLayoutEffect(() => {
      const column = marker.current?.closest('[data-slot="sidebar"]')?.parentElement;
      const frame = column?.parentElement;
      if (!column || !frame) return;
      const measure = () => {
        const isCollapsed = frame.hasAttribute('data-sidebar-collapsed');
        const box = column.getBoundingClientRect();
        const targetWidth = parseFloat(getComputedStyle(frame).getPropertyValue('--dsh-windows-sidebar-width')) || box.width;
        if (!isCollapsed && targetWidth >= 264) lastWidth.current = targetWidth;
        // 退场仍保留完整内容宽度；不让宿主收起的 0px 列裁掉淡出过程。
        setGeometry({ left: box.left, top: box.top, height: box.height, width: lastWidth.current });
        sidebar.setCollapsed(isCollapsed);
      };
      measure();
      const size = new ResizeObserver(measure);
      size.observe(column);
      const state = new MutationObserver(measure);
      state.observe(frame, { attributes: true, attributeFilter: ['data-sidebar-collapsed'] });
      window.addEventListener('resize', measure);
      return () => { size.disconnect(); state.disconnect(); window.removeEventListener('resize', measure); };
    }, []);
    // 第三方直接打开原 main，保留最近的二级区域，不给它再造一层目录。
    const visibleCategory = collapsed ? preview : section;
    const shown = geometry !== null && visibleCategory !== null;
    if (shown) presentation.current = { category: visibleCategory, mode: collapsed ? 'floating' : 'docked' };
    const { category, mode } = presentation.current;
    useEffect(() => { if (shown && searchOpen && category === 'home') search.current?.focus(); }, [shown, searchOpen, category]);
    useEffect(() => {
      if (!collapsed || !preview) return;
      const outside = e => {
        // React 的 capture 会沿 portal 祖先传播，项目菜单/详情卡也属于侧栏。
        if (insidePointer.current !== e && !e.target.closest?.('[data-dsc-preview-trigger]')) sidebar.hide();
      };
      const blur = () => sidebar.hide();
      const escape = e => { if (e.key === 'Escape' && !e.defaultPrevented) { sidebar.hide(); e.preventDefault(); } };
      document.addEventListener('pointerdown', outside);
      document.addEventListener('keydown', escape);
      window.addEventListener('blur', blur);
      return () => { document.removeEventListener('pointerdown', outside); document.removeEventListener('keydown', escape); window.removeEventListener('blur', blur); };
    }, [collapsed, preview]);
    const run = async action => { setError(''); try { await action(); } catch (e) { setError(errorText(e)); } };
    const pick = id => run(() => { ctx.layout.selectPanel(id); sidebar.hide(); });
    const moreAction = action => run(() => {
      action();
      sidebar.hide();
    });
    const openSearch = () => { if (collapsed) sidebar.show('home'); else pick(null); setSearchOpen(true); };
    const closeSearch = () => { setSearchOpen(false); setQuery(''); searchAnchor.current?.focus(); };
    const pageRows = category === 'tasks' ? taskRows : pluginRows;
    const inset = mode === 'floating' ? 4 : 0;
    const style = geometry ? { left: geometry.left + inset, top: geometry.top + inset, width: Math.min(geometry.width, Math.max(0, window.innerWidth - geometry.left - inset - 8)), height: Math.max(0, geometry.height - inset * 2) } : { visibility: 'hidden' };
    const shell = h('div', {
      ref: node => { if (node) node.inert = !shown; }, id: 'dsc-sidebar-card', className: 'dsc-ui dsc-sidebar-shell', style,
      'data-mode': mode, 'data-section': category, 'data-open': shown, 'aria-hidden': !shown,
      role: mode === 'floating' ? 'dialog' : undefined, 'aria-label': mode === 'floating' ? (category === 'home' ? '首页侧栏' : category === 'tasks' ? '定时任务侧栏' : category === 'more' ? '更多侧栏' : category === 'skills' ? '技能侧栏' : '自定义侧栏') : undefined,
      onPointerEnter: sidebar.hold, onPointerLeave: sidebar.leave,
      onPointerDownCapture: e => { insidePointer.current = e.nativeEvent; },
      onFocusCapture: sidebar.hold, onBlurCapture: sidebar.leave,
      onKeyDown: e => { if (collapsed && e.key === 'Escape' && !e.defaultPrevented) { sidebar.hide(); e.preventDefault(); } }
    },
      h('aside', { key: category, className: 'dsc-sidebar', 'aria-label': category === 'home' ? '项目与对话' : category === 'tasks' ? '定时任务' : category === 'more' ? '更多' : category === 'skills' ? '技能' : '自定义' },
        h('div', { className: 'dsc-sidebar__header' }, h('strong', { className: 'dsc-section-page-title' }, category === 'home' ? '项目与对话' : category === 'tasks' ? '定时任务' : category === 'more' ? '更多' : '自定义'),
          h('div', { className: 'dsc-sidebar__header-actions' }, h('button', { type: 'button', ref: searchAnchor, className: 'dsc-icon-button', title: '搜索对话与项目', 'aria-label': '搜索对话与项目', 'aria-expanded': searchOpen, onClick: openSearch }, h(Icon, { name: 'search' })))),
        category === 'home' && h('button', { type: 'button', className: 'dsc-new-chat', title: '新聊天', onClick: () => { setSearchOpen(false); setQuery(''); run(() => { ctx.uiWorkspace.startSession(); sidebar.hide(); }); } }, h(PrototypeIcon, { name: 'newChat' }), h('span', null, '新聊天')),
        category === 'home' && searchOpen && h('label', { className: 'dsc-search dsc-sidebar-search' }, h(Icon, { name: 'search' }), h('input', { ref: search, value: query, onChange: e => setQuery(e.target.value), onKeyDown: e => { if (e.key === 'Escape') { e.preventDefault(); closeSearch(); } }, placeholder: '搜索标题或项目', 'aria-label': '搜索标题或项目' }), h('button', { type: 'button', onClick: closeSearch, 'aria-label': '关闭搜索' }, '×')),
        h(ErrorLine, { text: error }),
        category === 'home' ? h(Tree, { query, tools: false, active: shown, onNavigate: sidebar.hide }) : category === 'more' ? h('div', { className: 'dsc-secondary-nav' },
          h('p', { className: 'dsc-more-hint' }, '点击名称打开页面，点击图钉管理固定。', h('br'), '也可右键导航图标快捷取消固定。'),
          moreRows.length > 0 && [false, true].map(pinned => {
            const rows = moreRows.filter(row => row.pinned === pinned);
            const label = pinned ? '已固定' : '未固定';
            return h('section', { key: label, className: 'dsc-more-group', 'aria-label': label },
              h('h3', { className: 'dsc-more-group-title' }, label),
              rows.length ? rows.map(row => h('div', { key: row.id, className: 'dsc-more-entry' },
                h('button', { type: 'button', className: 'dsc-secondary-item' + (row.id === panel.activePanelId ? ' is-active' : ''), 'aria-current': row.id === panel.activePanelId ? 'page' : undefined, onClick: () => pick(row.id) }, h(PrototypeIcon, { name: row.id === 'schedules' ? 'tasks' : 'plugins' }), h('span', { className: 'dsc-more-entry-label' }, row.label)),
                h('button', { type: 'button', className: 'dsc-more-pin-button', title: pinned ? '从左侧栏取消固定' : '固定到左侧栏', 'aria-label': pinned ? '取消固定“' + row.label + '”' : '固定“' + row.label + '”到左侧栏', 'aria-pressed': pinned, onClick: () => run(() => sidebar.pins.setPinned(row.id, !pinned)) }, h(Icon, { name: 'pin', size: 16, fill: pinned ? 'currentColor' : 'none' }))))
                : h('p', { className: 'dsc-more-empty' }, pinned ? '暂无已固定项' : '所有导航项均已固定'));
          }),
          h('div', { className: 'dsc-more-separator', role: 'separator' }),
          h('button', { type: 'button', className: 'dsc-secondary-item', onClick: () => moreAction(() => ctx.pluginNavigation.openList()) }, h(PrototypeIcon, { name: 'plugins' }), '浏览更多插件'),
          h('button', { type: 'button', className: 'dsc-secondary-item', onClick: () => moreAction(() => ctx.uiWorkspace.startSession(undefined, { agentPreset: 'cordis', prompt: ctx.locale.bind('entryCustomization')('createPrompt.sidebar'), whenDraftExists: 'append' })) }, h(Icon, { name: 'plus' }), '创建你的插件'))
          : h('div', { className: 'dsc-secondary-nav' }, pageRows.map(row => h('button', { key: row.id, type: 'button', className: 'dsc-secondary-item' + (row.id === panel.activePanelId ? ' is-active' : ''), 'aria-current': row.id === panel.activePanelId ? 'page' : undefined, onClick: () => pick(row.id) }, h(Icon, { name: category === 'tasks' ? 'tasks' : row.id === SKILLS_PANEL_ID ? 'skill' : 'plugins' }), row.label)))));
    return h(React.Fragment, null, h('span', { ref: marker, 'aria-hidden': true }), createPortal(shell, document.body));
  };
}

function makeShellChrome(ctx, sidebar) {
  const Navigation = makeNavigationRail(ctx, sidebar);
  const Toggle = makeSidebarToggle(ctx);
  return function ShellChrome() {
    const marker = useRef(null);
    useLayoutEffect(() => {
      // 由公开 overlay/slot 锚点找到它们所属的列，
      // 外壳仅增加插件标记；宽度通过已有布局动作初始化，不改写 grid 或搬移 DOM。
      const overlay = marker.current?.closest('[data-shell-overlay]');
      const frame = overlay?.parentElement;
      if (!frame) return;
      const saved = [];
      const mark = (element, name, value = '') => {
        if (!element) return;
        saved.push([element, name, element.getAttribute(name)]);
        element.setAttribute(name, value);
      };
      // main 插槽外还有 MainPanel；圆角裁剪属于 frame 的直接子列，不能标到内层。
      const columnFor = slot => {
        let element = frame.querySelector(`[data-slot="${slot}"]`);
        while (element && element.parentElement !== frame) element = element.parentElement;
        return element;
      };
      mark(document.body, 'data-dsh-codex-chrome', PLUGIN_VERSION);
      mark(frame, 'data-dsc-frame');
      mark(columnFor('sidebar'), 'data-dsc-sidebar-column');
      mark(columnFor('main'), 'data-dsc-center-column');
      const restoreWidth = initializeSidebarWidth(ctx);
      return () => {
        restoreWidth?.();
        saved.reverse().forEach(([element, name, previous]) => {
          if (previous === null) element.removeAttribute(name); else element.setAttribute(name, previous);
        });
      };
    }, []);
    return h(React.Fragment, null, h('span', { ref: marker, hidden: true }), h(Navigation), h(Toggle));
  };
}

// 此常驻入口不替换 AppFrame，也不修改系统标题栏；collapsed 时仍可重新打开侧栏。
function makeSidebarToggle(ctx) {
  return function SidebarToggle() {
    return createPortal(h('div', { className: 'dsc-ui dsc-window-sidebar-toggle' }, h('button', { type: 'button', className: 'dsc-icon-button', title: '显示或隐藏侧边栏', 'aria-label': '显示或隐藏侧边栏', onClick: () => ctx.layout.toggleSidebar() }, h('svg', { viewBox: '0 0 16 16', width: 16, height: 16, fill: 'none', stroke: 'currentColor', strokeWidth: 1.2, 'aria-hidden': true }, h('rect', { x: 2, y: 3, width: 12, height: 10, rx: 1.5 }), h('path', { d: 'M6 3v10' })))), document.body);
  };
}

// 公开 sidebar.footer.action 的第三方入口：只在齿轮菜单打开时把宿主原生节点呈现为菜单上方独立分组。
// 只读公开 data-slot 锚点与 entries 计数；不重渲染、不复制、不搬移、不代发点击。
function footerActionRoot(documentRef) {
  const slot = documentRef && typeof documentRef.querySelector === 'function' ? documentRef.querySelector('[data-slot="sidebar.footer.action"]') : null;
  if (!slot || typeof slot.closest !== 'function') return null;
  if (!slot.closest('[data-slot="sidebar"]')) return null;
  // 抽屉布局里宿主列自带 transform 与裁剪，固定定位不可靠；按约定跳过。
  if (slot.closest('[data-sidebar-drawer]')) return null;
  const host = slot.parentElement;
  if (!host) return null;
  return { slot, host, base: host.parentElement };
}
// 分组紧贴菜单上方：0 个入口、抽屉布局或菜单尚未定位时不占空间。
function footerActionPlan({ entries, drawer, menuRect, viewportHeight }) {
  if (!(Number(entries) > 0) || drawer) return null;
  if (!menuRect || !(menuRect.width > 0)) return null;
  const height = Number(viewportHeight) > 0 ? Number(viewportHeight) : 0;
  const bottom = Math.max(8, Math.round(Math.max(0, height - menuRect.top) + 4));
  return {
    left: Math.max(8, Math.round(menuRect.left)),
    width: Math.max(0, Math.round(menuRect.width)),
    bottom,
    // 面板底边距视口底部 bottom，上方可用高度 = 视口高 - bottom - 顶部 8px 安全距。
    maxHeight: Math.max(48, height - bottom - 8)
  };
}
// 注册数大于 0 不代表已有可渲染入口：Cordis 无 inventory、插件返回 null、
// 渲染失败留下的 data-slot-error 空占位、display:none 的入口都可能是空的。
// 检查入口内的控件/文字及隐藏状态；不依赖侧栏祖先的布局矩形或 visibility，
// 因为收起态宿主会隐藏整个 footArea，而呈现器需要重新显示真实入口。
function footerActionHasContent(slot) {
  if (!slot || typeof slot.querySelectorAll !== 'function') return false;
  const available = node => {
    let current = node;
    while (current && current !== slot) {
      if (typeof current.hasAttribute === 'function' && (current.hasAttribute('hidden') || current.getAttribute('aria-hidden') === 'true')) return false;
      const view = current.ownerDocument && current.ownerDocument.defaultView;
      if (view && typeof view.getComputedStyle === 'function' && view.getComputedStyle(current).display === 'none') return false;
      current = current.parentElement;
    }
    return current === slot;
  };
  const isControl = node => {
    const tag = String((node && node.tagName) || '').toUpperCase();
    if (tag === 'BUTTON' || tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA') return true;
    if (tag === 'A') return !!(typeof node.hasAttribute === 'function' && node.hasAttribute('href'));
    if (tag === 'SVG' || tag === 'IMG' || tag === 'CANVAS' || tag === 'VIDEO') return true;
    return !!(node && typeof node.getAttribute === 'function' && node.getAttribute('role') === 'button');
  };
  const ownText = node => {
    if (!node || typeof node.textContent !== 'string') return false;
    if (node.childNodes && node.childNodes.length > 0) {
      for (const child of node.childNodes) if (child && child.nodeType === 3 && String(child.textContent || '').trim() !== '') return true;
      return false;
    }
    return node.textContent.trim() !== '';
  };
  for (const entry of slot.children ? [...slot.children] : []) {
    if (!entry) continue;
    if (typeof entry.hasAttribute === 'function' && entry.hasAttribute('hidden')) continue;
    const nodes = [entry];
    if (typeof entry.querySelectorAll === 'function') nodes.push(...entry.querySelectorAll('*'));
    for (const node of nodes) {
      if (!available(node)) continue;
      if (isControl(node) || ownText(node)) return true;
    }
  }
  return false;
}
// 可脱离 React 测试的 DOM 呈现器：加可释放标记/变量并把原生按钮移出 Tab 序列（方向键仍可达）。
function createFooterActionPresenter({ document: doc, window: win, readEntries, readPanelRect, onRoot = () => {} }) {
  const attributes = new Map();
  const properties = new Map();
  const tabIndexes = new Map();
  const clearMarked = new Map();
  let rootElement = null;
  let disposed = false;
  const rememberAttribute = (node, name) => {
    let saved = attributes.get(node);
    if (!saved) attributes.set(node, saved = new Map());
    if (!saved.has(name)) saved.set(name, node.getAttribute(name));
  };
  const mark = (node, name, value = '') => {
    if (!node) return;
    rememberAttribute(node, name);
    if (node.getAttribute(name) !== value) node.setAttribute(name, value);
  };
  const rememberProperty = (node, name) => {
    let saved = properties.get(node);
    if (!saved) properties.set(node, saved = new Map());
    if (saved.has(name) || !node.style) return;
    saved.set(name, [node.style.getPropertyValue(name), typeof node.style.getPropertyPriority === 'function' ? node.style.getPropertyPriority(name) : '']);
  };
  const applyProperty = (node, name, value) => {
    if (!node || !node.style) return;
    rememberProperty(node, name);
    if (node.style.getPropertyValue(name) !== value) node.style.setProperty(name, value);
  };
  const restoreProperty = (node, name) => {
    const saved = properties.get(node);
    if (!saved || !saved.has(name)) return;
    const [value, priority] = saved.get(name);
    if (node.isConnected && node.style) {
      if (value) node.style.setProperty(name, value, priority); else node.style.removeProperty(name);
    }
    saved.delete(name);
    if (saved.size === 0) properties.delete(node);
  };
  const unmark = (node, name) => {
    const saved = attributes.get(node);
    if (saved && saved.has(name)) {
      const value = saved.get(name);
      if (node.isConnected) {
        if (value === null) node.removeAttribute(name); else node.setAttribute(name, value);
      }
      saved.delete(name);
      if (saved.size === 0) attributes.delete(node);
    }
    clearMarked.delete(node);
  };
  // 分组落在宿主侧栏列层叠上下文内、低于自有 rail；菜单打开期间只让 rail 与分组
  // 竖向重叠的区段放行点击，其余 rail 面积由透明命中层继续阻挡，重叠的 rail 图标临时隐藏。
  const syncClear = (plan, host) => {
    const rail = doc && typeof doc.querySelector === 'function' ? doc.querySelector('.dsc-independent-rail') : null;
    const next = new Map();
    let clearTop = null;
    if (rail && typeof rail.getBoundingClientRect === 'function' && typeof host.getBoundingClientRect === 'function') {
      const railRect = rail.getBoundingClientRect();
      const hostRect = host.getBoundingClientRect();
      const horizontal = plan.left < railRect.right && plan.left + plan.width > railRect.left;
      const vertical = hostRect.bottom > railRect.top && hostRect.top < railRect.bottom;
      if (horizontal && vertical) {
        clearTop = Math.max(0, Math.min(railRect.height, Math.round(hostRect.top - railRect.top)));
        next.set(rail, 'data-dsc-app-footer-clear');
        if (typeof rail.querySelectorAll === 'function') {
          for (const item of rail.querySelectorAll('.dsc-rail__item')) {
            const box = typeof item.getBoundingClientRect === 'function' ? item.getBoundingClientRect() : null;
            if (box && box.bottom > hostRect.top && box.top < hostRect.bottom) next.set(item, 'data-dsc-app-footer-clear-item');
          }
        }
      }
    }
    for (const [node, marker] of [...clearMarked]) {
      if (next.get(node) === marker) continue;
      unmark(node, marker);
      if (marker === 'data-dsc-app-footer-clear') restoreProperty(node, '--dsc-app-footer-clear-top');
    }
    for (const [node, marker] of next) {
      if (clearMarked.get(node) !== marker) { mark(node, marker); clearMarked.set(node, marker); }
    }
    if (clearTop !== null) {
      for (const [node, marker] of next) {
        if (marker === 'data-dsc-app-footer-clear') applyProperty(node, '--dsc-app-footer-clear-top', clearTop + 'px');
      }
    }
  };
  const publishRoot = node => {
    if (rootElement === node) return;
    rootElement = node;
    onRoot(node);
  };
  const restore = () => {
    if (disposed && attributes.size === 0 && properties.size === 0 && tabIndexes.size === 0) return;
    for (const [node, saved] of attributes) {
      if (!node.isConnected) continue;
      for (const [name, value] of saved) {
        if (value === null) node.removeAttribute(name); else node.setAttribute(name, value);
      }
    }
    attributes.clear();
    for (const [node, saved] of properties) {
      if (!node.isConnected) continue;
      for (const [name, [value, priority]] of saved) {
        if (value) node.style.setProperty(name, value, priority); else node.style.removeProperty(name);
      }
    }
    properties.clear();
    for (const [node, value] of tabIndexes) if (node.isConnected) node.tabIndex = value;
    tabIndexes.clear();
    clearMarked.clear();
    publishRoot(null);
  };
  const sync = () => {
    if (disposed) return;
    let entries = 0;
    try { entries = Number(readEntries && readEntries()) || 0; } catch (_error) { entries = 0; }
    const target = footerActionRoot(doc);
    const menuRect = target ? readPanelRect && readPanelRect() : null;
    const plan = target ? footerActionPlan({ entries, drawer: false, menuRect, viewportHeight: win && win.innerHeight }) : null;
    // 注册数只说明“有人登记”，不足以证明已渲染；空 slot 不占样式、不改宿主布局。
    if (!target || !plan || !footerActionHasContent(target.slot)) { restore(); return; }
    const { slot, host, base } = target;
    mark(host, 'data-dsc-app-footer-host');
    mark(base, 'data-dsc-app-footer-base');
    applyProperty(host, '--dsc-app-footer-left', plan.left + 'px');
    applyProperty(host, '--dsc-app-footer-width', plan.width + 'px');
    applyProperty(host, '--dsc-app-footer-bottom', plan.bottom + 'px');
    applyProperty(host, '--dsc-app-footer-max-height', plan.maxHeight + 'px');
    for (const child of slot.children ? [...slot.children] : []) {
      if (!child || typeof child.tagName !== 'string') continue;
      mark(child, 'data-dsc-app-footer-entry');
      // 宿主收起态只给这些入口渲染图标（第三方按 wide=false 省略文字节点）；
      // 分组里用按钮的无障碍名称补一个可见标签，展开态已有原生文字时自动不生效。
      const button = typeof child.querySelectorAll === 'function' ? child.querySelectorAll('button')[0] : null;
      const text = typeof child.textContent === 'string' ? child.textContent.replace(/\s+/g, '') : '';
      const label = button ? String(button.getAttribute('aria-label') || button.getAttribute('title') || '').trim() : '';
      if (button && text === '' && label) mark(button, 'data-dsc-app-footer-label', label);
      else if (button) unmark(button, 'data-dsc-app-footer-label');
    }
    if (typeof host.querySelectorAll === 'function') {
      for (const node of host.querySelectorAll('button, a[href], input, select, textarea, [tabindex]')) {
        if (!tabIndexes.has(node)) tabIndexes.set(node, node.tabIndex);
        if (node.tabIndex !== -1) node.tabIndex = -1;
      }
    }
    syncClear(plan, host);
    publishRoot(host);
  };
  return {
    sync,
    root: () => rootElement,
    dispose() {
      disposed = true;
      restore();
    }
  };
}
// 入口可能在菜单打开期间返回 null、被隐藏或整组替换：只监听 slot 自身的子节点与
// 显示相关属性；本组件写入的 data-*/tabindex/CSS 变量不在观察范围内，不会自激。
function watchFooterActionSlot(schedule, documentRef, Observer = typeof MutationObserver === 'function' ? MutationObserver : null) {
  if (!documentRef || typeof Observer !== 'function') return () => {};
  let observer = null;
  let target = null;
  const bind = () => {
    const slot = documentRef.querySelector('[data-slot="sidebar.footer.action"]');
    if (slot === target) return;
    if (observer) observer.disconnect();
    target = slot;
    observer = slot ? new Observer(() => { bind(); schedule(); }) : null;
    if (observer) observer.observe(slot, { childList: true, subtree: true, attributes: true, attributeFilter: ['style', 'hidden', 'class', 'aria-hidden'] });
  };
  bind();
  const disconnect = () => {
    if (observer) observer.disconnect();
    observer = null;
    target = null;
  };
  disconnect.refresh = bind;
  return disconnect;
}
// 菜单打开期间跟踪公开 footer 入口；关闭时恢复属性并把焦点送回齿轮。
function useHostFooterActions(ctx, open, menuRef, anchorRef) {
  const [groupRoot, setGroupRoot] = useState(null);
  useLayoutEffect(() => {
    if (!open || typeof document === 'undefined') { setGroupRoot(null); return undefined; }
    let frame = 0;
    const presenter = createFooterActionPresenter({
      document,
      window,
      readEntries: () => {
        try { return ctx.slots.entriesOfSlot('sidebar.footer.action').length; } catch (_error) { return 0; }
      },
      readPanelRect: () => (menuRef.current && typeof menuRef.current.getBoundingClientRect === 'function' ? menuRef.current.getBoundingClientRect() : null),
      onRoot: element => { setGroupRoot(previous => (previous === element ? previous : element)); }
    });
    const schedule = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => { frame = 0; disconnectContent.refresh?.(); presenter.sync(); });
    };
    const disconnectContent = watchFooterActionSlot(schedule, document);
    presenter.sync();
    const sidebar = document.querySelector('[data-slot="sidebar"]');
    const observer = sidebar && typeof MutationObserver === 'function' ? new MutationObserver(schedule) : null;
    if (observer && sidebar) observer.observe(sidebar, { childList: true, subtree: true });
    let unsubscribe = () => {};
    try {
      if (ctx.slots && typeof ctx.slots.subscribe === 'function') unsubscribe = ctx.slots.subscribe('sidebar.footer.action', schedule);
    } catch (_error) { unsubscribe = () => {}; }
    const size = menuRef.current && typeof ResizeObserver === 'function' ? new ResizeObserver(schedule) : null;
    if (size && menuRef.current) size.observe(menuRef.current);
    const panel = menuRef.current;
    if (panel && typeof panel.addEventListener === 'function') panel.addEventListener('animationend', schedule);
    window.addEventListener('resize', schedule);
    return () => {
      if (frame) { cancelAnimationFrame(frame); frame = 0; }
      if (observer) observer.disconnect();
      disconnectContent();
      if (size) size.disconnect();
      if (panel && typeof panel.removeEventListener === 'function') panel.removeEventListener('animationend', schedule);
      unsubscribe();
      window.removeEventListener('resize', schedule);
      const host = presenter.root();
      if (host && typeof host.contains === 'function' && host.contains(document.activeElement)) anchorRef.current?.focus();
      presenter.dispose();
      setGroupRoot(null);
    };
  }, [ctx, open, menuRef, anchorRef]);
  return groupRoot;
}

function makeGearLauncher(ctx) {
  return function GearLauncher({ openSettings, settingsOpen }) {
    const [open, setOpen] = useState(false);
    const [profile, setProfile] = useState(null);
    const [failed, setFailed] = useState(false);
    const [avatarFailed, setAvatarFailed] = useState(false);
    const anchor = useRef(null);
    const menuRef = useRef(null);
    const footerRoot = useHostFooterActions(ctx, open, menuRef, anchor);
    useEffect(() => { if (settingsOpen) setOpen(false); }, [settingsOpen]);
    useEffect(() => {
      if (!open) return;
      let active = true;
      setProfile(null); setFailed(false); setAvatarFailed(false);
      const version = ctx.modules.manifest.release?.version;
      if (!version) { setFailed(true); return; }
      const client = { version, locale: ctx.locale.getSnapshot().active, timezoneOffsetSeconds: -new Date().getTimezoneOffset() * 60 };
      ctx.remote.account.getProfile(client).then(result => {
        if (!result.ok) throw result.error;
        if (active) { setProfile(result.value?.status === 'ready' ? result.value.value : null); setFailed(result.value?.status !== 'ready'); }
      }).catch(() => { if (active) setFailed(true); });
      return () => { active = false; };
    }, [open]);
    const showSettings = () => { setOpen(false); openSettings(); };
    return createPortal(h('div', { className: 'dsc-ui dsc-gear-launcher' },
      h('button', { ref: anchor, type: 'button', className: 'dsc-gear-button', 'aria-label': '设置', 'aria-haspopup': 'menu', 'aria-expanded': open, onClick: () => setOpen(!open) }, h(PrototypeIcon, { name: 'settings' })),
      open && h(Popover, { anchor, onClose: () => setOpen(false), label: '设置与账号', width: 228, className: 'dsc-app-menu', panelRef: menuRef, extraRoots: footerRoot ? [footerRoot] : [] },
        h('button', { type: 'button', className: 'dsc-account-row', role: 'menuitem', onClick: showSettings, title: '在账号子页面中管理' }, profile?.avatarUrl && !avatarFailed ? h('img', { src: profile.avatarUrl, alt: '', onError: () => setAvatarFailed(true) }) : h('span', { className: 'dsc-account-avatar' }, h(Icon, { name: 'chat' })), h('span', null, h('strong', null, profile?.name || profile?.contact || '账号'), h('small', null, profile ? '账号与设置' : failed ? '打开账号设置' : '正在读取账号…'))),
        h('div', { className: 'dsc-menu-separator', role: 'separator' }),
        h(Option, { title: '设置', icon: 'settings', onClick: showSettings }))), document.body);
  };
}
