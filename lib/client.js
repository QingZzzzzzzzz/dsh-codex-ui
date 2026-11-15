window.__ModuleLoader__.load({
  id: "@qinova-ai/dsh-codex-ui",
  factory: function(require) {
    'use strict';
    const CSS_TEXT = "/* 界面令牌：颜色全部映射宿主 --dsw-* 原生令牌；几何、动效与阴影为自有布局参数。 */\nbody[data-dsh-codex-style] {\n  /* ---- 间距 ---- */\n  --cx-spacing: 4px;\n  --cx-space-1: 4px;\n  --cx-space-2: 8px;\n  --cx-space-3: 12px;\n  --cx-space-4: 16px;\n  --cx-space-5: 20px;\n  --cx-space-6: 24px;\n  --cx-space-8: 32px;\n\n  /* ---- 圆角阶梯 ---- */\n  --cx-radius-2xs: 2px;\n  --cx-radius-xs: 4px;\n  --cx-radius-sm: 6px;\n  --cx-radius-md: 8px;\n  --cx-radius-lg: 10px;\n  --cx-radius-xl: 12px;\n  --cx-radius-2xl: 16px;\n  --cx-radius-3xl: 20px;\n  --cx-radius-4xl: 24px;\n  --cx-radius-composer: 24px;\n  --cx-radius-full: 9999px;\n\n  /* ---- 面 ---- */\n  --cx-window: var(--dsw-alias-bg-module-platform);\n  --cx-sidebar: var(--dsw-specific-sidebar-fill);\n  --cx-surface: var(--dsw-alias-bg-base);\n  --cx-thread: var(--dsw-alias-bg-layer-1);\n  --cx-nested: var(--dsw-alias-bg-layer-2);\n  --cx-elevated: var(--dsw-alias-bg-layer-3);\n  --cx-summary: var(--dsw-alias-bg-overlay);\n  --cx-hover: var(--dsw-alias-interactive-bg-hover);\n  --cx-active: var(--dsw-alias-interactive-bg-hover-solid);\n\n  /* ---- 边框 ---- */\n  --cx-border-l1: var(--dsw-alias-border-l1);\n  --cx-border-l2: var(--dsw-alias-border-l2);\n  --cx-border-l3: var(--dsw-alias-border-l3);\n  --cx-border-strong: var(--dsw-alias-border-l4);\n  --cx-sidebar-divider: var(--dsw-alias-border-l2);\n  --cx-sidebar-divider-hover: var(--dsw-alias-border-l3);\n  --cx-frame-line: var(--dsw-alias-border-l1);\n  --cx-frame-line-width: 0.667px;\n  --cx-frame-radius: 16px;\n\n  /* ---- 文本 ---- */\n  --cx-text: var(--dsw-alias-label-primary);\n  --cx-text-2: var(--dsw-alias-label-secondary);\n  --cx-text-3: var(--dsw-alias-label-tertiary);\n  --cx-text-4: var(--dsw-alias-label-dimmed);\n  --cx-text-inverse: var(--dsw-alias-label-primary-inverted);\n\n  /* ---- 侧栏语义 ---- */\n  --cx-nav-icon: var(--dsw-alias-label-tertiary);\n  --cx-sidebar-text: var(--dsw-alias-label-primary);\n  --cx-sidebar-muted: var(--dsw-alias-label-tertiary);\n  --cx-sidebar-selected: var(--dsw-specific-sidebar-nav-item-active);\n\n  /* ---- 强调 / 状态 ---- */\n  --cx-accent: var(--dsw-alias-brand-primary);\n  --cx-accent-soft: var(--dsw-alias-state-business-primary);\n  --cx-link: var(--dsw-alias-link);\n  --cx-focus: var(--dsw-alias-brand-primary);\n  --cx-success: var(--dsw-alias-state-success-primary);\n  --cx-danger: var(--dsw-alias-state-error-primary);\n  --cx-warning: var(--dsw-alias-state-warn-primary);\n  --cx-attention: var(--dsw-alias-state-business-primary);\n\n  /* ---- 浮层 ---- */\n  --cx-picker-fill: var(--dsw-specific-menu);\n  --cx-composer-fill: var(--dsw-specific-input-major);\n  --cx-popover-fill: var(--dsw-menu-surface-fill);\n\n  /* ---- 字体（族跟随宿主设置） ---- */\n  --cx-font-sans: var(--dsw-font-family);\n  --cx-font-mono: var(--ds-font-family-code);\n\n  /* ---- 字重 ---- */\n  --cx-weight-regular: 400;\n  --cx-weight-medium: 500;\n  --cx-weight-semibold: 600;\n  --cx-weight-bold: 700;\n\n  /* ---- 动效 ---- */\n  --cx-dur-fast: 120ms;\n  --cx-dur: 150ms;\n  --cx-dur-relaxed: 300ms;\n  --cx-ease: ease;\n  --cx-ease-out: cubic-bezier(0.2, 0.8, 0.2, 1);\n  --cx-ease-scroll: cubic-bezier(0.22, 1, 0.36, 1);\n\n  /* ---- 布局几何 ---- */\n  --cx-titlebar-h: 44px;\n  --cx-rail-w: 52px;\n  --cx-sidebar-w: 288px;\n  --cx-thread-max: 768px;\n  --cx-right-w: 667px;\n  --cx-header-h: 48px;\n  --cx-row-h: 30px;\n  --cx-control-h: 28px;\n  --cx-send-h: 32px;\n  --cx-composer-stack-w: 768px;\n  --cx-composer-h: 98px;\n  --cx-picker-h: 38px;\n  --cx-app-w: 1325px;\n  --cx-app-h: 861px;\n\n  /* ---- 阴影 ---- */\n  --cx-shadow-sm: 0 1px 2px -1px rgb(0 0 0 / 0.08);\n  --cx-shadow-md: 0 2px 4px -1px rgb(0 0 0 / 0.08);\n  --cx-shadow-lg: 0 4px 8px -2px rgb(0 0 0 / 0.1);\n  --cx-shadow-xl: 0 8px 16px -4px rgb(0 0 0 / 0.12);\n  --cx-shadow-2xl: 0 16px 32px -8px rgb(0 0 0 / 0.19);\n  --cx-composer-shadow:\n    0 0 0 0.5px var(--cx-border-strong),\n    0 3px 7.5px rgb(0 0 0 / 0.04),\n    0 0 20px rgb(0 0 0 / 0.05);\n\n  /* ---- z 轴 ---- */\n  --cx-z-ground: 0;\n  --cx-z-panel: 10;\n  --cx-z-floating: 20;\n  --cx-z-drawer: 40;\n  --cx-z-popover: 50;\n  --cx-z-overlay: 70;\n}\n\n/* ============ 导航栏 ============ */\n.dsc-rail {\n  grid-area: rail;\n  position: relative;\n  z-index: 30;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  background: var(--cx-window);\n  border-right: 1px solid var(--cx-border-l2);\n}\n.dsc-rail__spacer { flex: 1; }\n.dsc-rail__item {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border-radius: var(--cx-radius-md);\n  color: var(--cx-nav-icon);\n  transition: background-color var(--cx-dur-fast) var(--cx-ease), color var(--cx-dur-fast) var(--cx-ease);\n}\n.dsc-rail__item:hover { background: var(--cx-hover); color: var(--cx-text); }\n.dsc-rail__item--active { background: var(--cx-active); color: var(--cx-text); }\n/* 插头先以浅灰 #efefef 统一描边，再整体降低透明度，避免相交线段叠色发亮。 */\n.dsc-rail__plugin-icon { color: var(--cx-text); opacity: .5; stroke-width: 1.5; transition: opacity var(--cx-dur-fast) var(--cx-ease); }\n.dsc-rail__item:hover .dsc-rail__plugin-icon,\n.dsc-rail__item--active .dsc-rail__plugin-icon { opacity: 1; color: var(--cx-text); }\n.dsc-rail__item::after {\n  content: attr(data-tip);\n  position: absolute;\n  left: 44px;\n  top: 50%;\n  z-index: var(--cx-z-popover);\n  padding: 4px 8px;\n  border-radius: var(--cx-radius-sm);\n  border: 1px solid var(--cx-border-l1);\n  background: #2b2b2b;\n  color: var(--cx-text);\n\n  line-height: 16px;\n  white-space: nowrap;\n  box-shadow: var(--cx-shadow-lg);\n  opacity: 0;\n  transform: translateY(-50%) translateX(-2px);\n  pointer-events: none;\n  transition: opacity var(--cx-dur-fast) var(--cx-ease), transform var(--cx-dur-fast) var(--cx-ease);\n}\n.dsc-rail__item:hover::after { opacity: 1; transform: translateY(-50%) translateX(0); }\n\n/* ============ 侧栏 ============ */\n.dsc-sidebar {\n  grid-area: sidebar;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding: 8px;\n  background: var(--cx-sidebar);\n  border-right: 1px solid var(--cx-border-l2);\n  overflow: hidden;\n}\n.dsc-sidebar__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 44px;\n  margin: -8px -8px 6px;\n  padding: 0 6px 0 10px;\n}\n.dsc-sidebar__header-actions { display: flex; align-items: center; gap: 2px; }\n.dsc-new-chat {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  height: 32px;\n  padding: 0 8px;\n  border-radius: var(--cx-radius-md);\n\n  font-weight: var(--cx-weight-medium);\n  color: var(--cx-sidebar-text);\n  background: var(--cx-active);\n  transition: background-color var(--cx-dur-fast) var(--cx-ease);\n}\n.dsc-new-chat:hover { background: rgba(255, 255, 255, 0.12); }\n.dsc-new-chat kbd { margin-left: auto; color: var(--cx-sidebar-muted); }\n\n/* 浅色导航的插件线条保留原图形，深色提示仍为黑底白字。 */\n\n/* 自有组件与公开 slot/region 锚点；外壳几何适配通过自有 data-dsc-* 标记集中处理。 */\nbody[data-dsh-codex-style] { background: var(--cx-window); color-scheme: dark; }\n/* 整个三列外壳实际缩窄 52px，让宿主 ResizeObserver、右栏与拖拽使用同一可用宽度。\n   不能用 padding-left 代替：宿主测量的是 getBoundingClientRect().width。 */\nbody[data-dsh-codex-chrome] [data-dsc-frame] { margin-left: var(--cx-rail-w); width: calc(100% - var(--cx-rail-w)); }\n/* 全屏右栏原本按 100vw 展开；扣掉独立导航后，继续尊重宿主二级侧栏的真实宽度。 */\nhtml[data-windows-titlebar] body[data-dsh-codex-chrome] [data-dsc-frame] [data-sidebar-right-panel=\"fullscreen\"] { max-width: max(0px, calc(100vw - var(--cx-rail-w) - var(--dsh-windows-sidebar-width, 0px))); }\n/* data-slot 与公开 data-* 标记作为外观边界；编辑器、输入状态和动作仍由宿主持有。 */\n/* 正文字体颜色：第 134 轮按新版 Codex 默认主题取 #fcfcfc（原 #dfdfdf 偏暗）。仅覆盖对话内容区，不影响按钮、菜单等其它主文本。 */\n/* 正文列随输入卡宽度对齐，隐藏宿主两侧的宽度拖拽柄及其整条命中区域。 */\n/* 原 sidebar/settings 父级继续挂载以保留原生页面与子槽位所有权；只隐藏其旧外观。 */\n/* 项目/会话列表交还宿主原生渲染：原生侧栏可见，插件只在其左侧保留 52px 窄栏。 */\nbody[data-dsh-codex-chrome] [data-slot=\"sidebar\"] { visibility: visible; }\n/* 两侧等量保留原生滚动条空间，使空态与会话中的输入卡共用同一中线。 */\n\n.dsc-ui { color: var(--cx-text); box-sizing: border-box; }\n.dsc-ui *, .dsc-ui *::before, .dsc-ui *::after { box-sizing: border-box; }\n.dsc-ui button, .dsc-ui input { font: inherit; color: inherit; }\n.dsc-ui button { border: 0; cursor: pointer; background: none; }\n.dsc-ui button:disabled { cursor: default; opacity: .45; }\n.dsc-ui button:focus-visible, .dsc-ui [role=slider]:focus-visible { outline: 2px solid var(--cx-focus); outline-offset: 2px; }\n.dsc-ui svg { flex: none; }\n.dsc-update-control { display: inline-flex; align-items: center; gap: 12px; -webkit-app-region: no-drag; }\n.dsc-update-download { display: inline-flex; align-items: center; gap: 8px; }\n.dsc-update-progress { display: block; width: 112px; height: 5px; overflow: hidden; border-radius: 999px; background: #ffffff1f; }\n.dsc-update-progress-fill { display: block; width: 100%; height: 100%; border-radius: inherit; background: #72b4ff; transform-origin: left; transition: transform 180ms ease; }\n.dsc-update-progress[data-indeterminate=true] .dsc-update-progress-fill { width: 32%; animation: dsc-update-download 1.2s ease-in-out infinite; }\n.dsc-update-progress-label { min-width: 34px; color: var(--cx-text-2); font-variant-numeric: tabular-nums; }\n@keyframes dsc-update-download { from { transform: translateX(-110%); } to { transform: translateX(410%); } }\n.dsc-update-notice { position: fixed; right: 24px; bottom: 24px; width: 320px; max-width: calc(100vw - 32px); padding: 14px; z-index: 10000; background: var(--cx-popover-fill); border: 1px solid var(--cx-border-l1); border-radius: 14px; box-shadow: 0 12px 36px #0007; animation: dsc-pop-in 130ms ease both; -webkit-app-region: no-drag; }\n/* 归档成功提示：顶部居中；入场 160ms，退场 1000ms（与 client.js ARCHIVE_NOTICE_FADE_MS 对应）。 */\n.dsc-ui.dsc-archive-notice { position: fixed; top: 40px; left: 50%; z-index: 10001; display: flex; align-items: center; gap: 8px; width: max-content; max-width: calc(100vw - 32px); padding: 7px 8px 7px 12px; border: 1px solid var(--cx-border-l1); border-radius: var(--cx-radius-lg); background: var(--cx-popover-fill); color: var(--cx-text); line-height: 18px; box-shadow: var(--cx-shadow-2xl); transform: translate(-50%, 0); animation: dsc-archive-notice-in 160ms ease both; -webkit-app-region: no-drag; }\n.dsc-ui.dsc-archive-notice[data-phase=leaving] { animation: dsc-archive-notice-out 1000ms ease both; }\n.dsc-archive-notice-body { display: flex; flex-direction: column; gap: 1px; min-width: 0; }\n.dsc-archive-notice-text { color: var(--cx-text); white-space: nowrap; }\n.dsc-archive-notice-error { color: var(--cx-danger); line-height: 17px; overflow-wrap: anywhere; }\n.dsc-ui .dsc-archive-notice-undo { display: inline-flex; align-items: center; flex: none; height: 24px; padding: 0 9px; border-radius: var(--cx-radius-sm); color: var(--cx-accent-soft); }\n.dsc-ui .dsc-archive-notice-undo:hover:not(:disabled) { background: var(--cx-active); color: var(--cx-text); }\n.dsc-ui .dsc-archive-notice-close { display: inline-flex; align-items: center; justify-content: center; flex: none; width: 24px; height: 24px; padding: 0; border-radius: var(--cx-radius-sm); color: var(--cx-text-3); }\n.dsc-ui .dsc-archive-notice-close:hover, .dsc-ui .dsc-archive-notice-close:focus-visible { background: var(--cx-hover); color: var(--cx-text); }\n@keyframes dsc-archive-notice-in { from { opacity: 0; transform: translate(-50%, -6px); } to { opacity: 1; transform: translate(-50%, 0); } }\n@keyframes dsc-archive-notice-out { from { opacity: 1; transform: translate(-50%, 0); } to { opacity: 0; transform: translate(-50%, -6px); } }\n@media (prefers-reduced-motion: reduce) { .dsc-ui.dsc-archive-notice, .dsc-ui.dsc-archive-notice[data-phase=leaving] { animation: none; } }\n.dsc-ui.dsc-update-panel { padding: 14px; }\n.dsc-update-heading { display: flex; align-items: center; justify-content: space-between; gap: 12px; }\n.dsc-ui .dsc-update-close { display: grid; place-items: center; width: 24px; height: 24px; padding: 0; border-radius: 6px; color: var(--cx-text-2); }\n.dsc-update-close:hover { background: var(--cx-hover); color: var(--cx-text); }\n.dsc-update-message { margin: 14px 0 10px; font-weight: 500; }\n.dsc-update-message[data-state=update] { color: var(--cx-accent); }\n.dsc-update-message[data-state=error] { color: var(--cx-danger); }\n.dsc-update-versions { display: grid; grid-template-columns: auto 1fr; gap: 4px 16px; margin: 0; }\n.dsc-update-versions dt { color: var(--cx-text-2); }\n.dsc-update-versions dd { margin: 0; text-align: right; overflow-wrap: anywhere; }\n.dsc-update-note { margin: 10px 0 0; color: var(--cx-text-2); line-height: 18px; overflow-wrap: anywhere; }\n.dsc-update-note > span { display: block; color: var(--cx-text-3); }\n.dsc-ui .dsc-update-retry { margin-top: 14px; padding: 5px 10px; border: 1px solid var(--cx-border-l3); border-radius: 7px; }\n.dsc-update-retry:hover { background: var(--cx-hover); }\n.dsc-update-spin { animation: dsc-update-spin .9s linear infinite; }\n@keyframes dsc-update-spin { to { transform: rotate(360deg); } }\n@media (prefers-reduced-motion: reduce) { .dsc-update-spin, .dsc-update-progress-fill { animation: none !important; transition: none; } }\n/* 同一内容 portal 到 body：常驻时跟随宿主列，退场与浮卡不受 0px 列裁剪。只动画透明度和位移。 */\n.dsc-sidebar-shell { visibility: hidden; position: fixed; z-index: 20; min-width: 0; min-height: 0; display: flex; opacity: 0; transform: translateX(-24px); pointer-events: none; transition: opacity 180ms ease, transform 240ms var(--cx-ease-out), visibility 0s 240ms; -webkit-app-region: no-drag; }\n.dsc-sidebar-shell[data-open=true] { visibility: visible; opacity: 1; transform: translateX(0); pointer-events: auto; transition: opacity 180ms ease, transform 260ms var(--cx-ease-out), visibility 0s; }\n.dsc-sidebar-shell[data-mode=docked] > .dsc-sidebar { border-top-left-radius: var(--cx-frame-radius); border-bottom-left-radius: var(--cx-frame-radius); border-right-color: transparent; corner-shape: round; }\n/* rc.2/rc.3 原生 DragHandle 的公开 data-side 保留指针捕获与宽度动作。\n   热区仍为原生 8px；抬到常驻侧栏 portal 之上，避免左半边被遮住。\n   只绘制伪元素，不增加占位；悬停/拖动用 transform 加粗，移出恢复。 */\nbody[data-dsh-codex-chrome] [data-dsc-frame] > [data-side=\"sidebar\"] { z-index: 21; }\nbody[data-dsh-codex-chrome] [data-dsc-frame] > [data-side=\"sidebar\"]::after { content: ''; position: absolute; top: 0; bottom: 0; left: calc(50% - 1px); width: 1px; background: var(--cx-sidebar-divider); transform: scaleX(1); transform-origin: right center; pointer-events: none; transition: background-color var(--cx-dur-fast) var(--cx-ease), transform var(--cx-dur-fast) var(--cx-ease); }\nbody[data-dsh-codex-chrome] [data-dsc-frame] > [data-side=\"sidebar\"]:is(:hover,[data-dragging])::after { background: var(--cx-sidebar-divider-hover); transform: scaleX(1.5); }\n@media (prefers-reduced-motion: reduce) {\n  body[data-dsh-codex-chrome] [data-dsc-frame] > [data-side=\"sidebar\"]::after { transition: none; }\n}\n.dsc-sidebar-shell[data-mode=floating] { z-index: 40; transform: translateX(-12px); transition: opacity 150ms ease, transform 180ms var(--cx-ease-out), visibility 0s 180ms; }\n.dsc-sidebar-shell[data-mode=floating][data-open=true] { transform: translateX(0); transition-delay: 0s; }\n.dsc-sidebar-shell[data-mode=floating]::before { content: ''; position: absolute; top: 0; bottom: 0; left: -12px; width: 12px; }\n.dsc-sidebar-shell[data-mode=floating] > .dsc-sidebar { --cx-sidebar: #2c2c2c; border: 1px solid var(--cx-border-l1); border-radius: 12px; box-shadow: 0 0 0 3px #18181880, 0 8px 28px #0005; }\n.dsc-sidebar-shell[data-mode=floating][data-open=true] > .dsc-sidebar { animation: dsc-sidebar-content-in 150ms var(--cx-ease-out) both; }\n@keyframes dsc-sidebar-content-in { from { opacity: 0; transform: translateX(-6px); } to { opacity: 1; transform: translateX(0); } }\n.dsc-independent-rail { visibility: visible; position: fixed; top: var(--dsh-frame-chrome-top, 0px); bottom: 0; left: 0; width: var(--cx-rail-w); z-index: 25; min-height: 0; box-sizing: border-box; padding: 8px 8px 56px; -webkit-app-region: no-drag; }\n/* 外框左缘由常驻 frame 的单条描边统一绘制；原生 1px 边框保留宽度但不再着色，避免出现第二条线。 */\nbody[data-dsh-codex-chrome] .dsc-independent-rail { border-right-color: transparent; background-clip: padding-box; }\n.dsc-extension-navigation-anchor { flex: 1; align-self: stretch; min-height: 0; }\n/* 原生 panellist 继续负责图标注入、选中态、点击和卸载；只重排其可见区域。\n   位置来自自有轨道的剩余空间，超高时独立滚动，不覆盖底部齿轮。\n   Windows 原样式在 collapsed 时 display:none，并在开合时淡出，故明确覆盖这两项。 */\nbody[data-dsh-codex-chrome] [data-dsc-extension-nav] { visibility: visible; display: flex !important; position: fixed; left: var(--dsc-extension-left); top: var(--dsc-extension-top); width: var(--dsc-extension-width); max-height: var(--dsc-extension-height); min-height: 0; z-index: 26; flex-direction: column; align-items: center; gap: 4px !important; padding: 0; margin: 0 !important; box-sizing: border-box; overflow-x: hidden; overflow-y: auto; scrollbar-width: thin; scrollbar-color: #ffffff26 transparent; opacity: 1 !important; transform: none !important; animation: none !important; transition: none !important; -webkit-app-region: no-drag; }\nbody[data-dsh-codex-chrome] [data-dsc-extension-nav] [data-dsc-extension-hidden] { display: none !important; }\n/* rc.3 的主入口和取消固定是同一行中的兄弟按钮；窄轨道按整行排布，操作改由右键菜单承接。 */\nbody[data-dsh-codex-chrome] [data-dsc-extension-nav] [data-dsc-extension-entry] { box-sizing: border-box; flex: none; display: flex; align-items: center; justify-content: center; width: 36px; min-width: 36px; height: 36px; padding: 0; margin: 0; border: 0; border-radius: var(--cx-radius-md); background: transparent; }\nbody[data-dsh-codex-chrome] [data-dsc-extension-nav] [data-dsc-extension-pin] { display: none !important; }\nbody[data-dsh-codex-chrome] [data-dsc-extension-nav] [data-dsc-extension-row] { flex: none; display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; min-height: 36px; padding: 0; margin: 0; border: 0; border-radius: var(--cx-radius-md); background: transparent; color: var(--cx-nav-icon); cursor: pointer; }\nbody[data-dsh-codex-chrome] [data-dsc-extension-nav] [data-dsc-extension-row]:hover { color: var(--cx-text); background: var(--cx-hover); }\nbody[data-dsh-codex-chrome] [data-dsc-extension-nav] [data-dsc-extension-row][aria-current=page] { color: var(--cx-text); background: var(--cx-active); }\nbody[data-dsh-codex-chrome] [data-dsc-extension-nav] [data-dsc-extension-row]:focus-visible { outline: 2px solid var(--cx-focus); outline-offset: -2px; }\nbody[data-dsh-codex-chrome] [data-dsc-extension-nav] [data-dsc-extension-label] { display: none; }\nbody[data-dsh-codex-chrome] [data-dsc-extension-nav] [data-dsc-extension-glyph] { display: inline-flex; align-items: center; justify-content: center; line-height: 1; }\nbody[data-dsh-codex-chrome] [data-dsc-extension-nav] [data-dsc-extension-glyph] svg { display: block; max-width: 20px; max-height: 20px; }\n.dsc-navigation-error { position: fixed; left: calc(var(--cx-rail-w) + 8px); top: var(--dsh-frame-overlay-top, 20px); z-index: 50; max-width: 320px; }\n.dsc-rail .dsc-rail__item { color: var(--cx-nav-icon); background: transparent; flex: none; padding: 0; }\n.dsc-rail .dsc-rail__item:hover { color: var(--cx-text); background: var(--cx-hover); }\n.dsc-rail .dsc-rail__item--active { color: var(--cx-text); background: var(--cx-active); }\n.dsc-rail__item[data-preview-enabled=true]::after { display: none; }\n.dsc-rail__item[data-dsc-preview-trigger=more]::after { display: block; }\n.dsc-rail__item[data-dsc-preview-trigger=more]:focus-visible::after { opacity: 1; transform: translateY(-50%) translateX(0); }\n.dsc-sidebar { flex: 1; min-width: 0; min-height: 0; overflow: hidden; }\n.dsc-sidebar .dsc-sidebar__header { flex: none; }\n.dsc-sidebar .dsc-sidebar__header-actions { margin-left: auto; }\n/* Codex：新聊天默认无底色、不显示快捷键，仅悬停时出现灰色背景。 */\n.dsc-sidebar .dsc-new-chat { flex: none; justify-content: flex-start; width: 100%; font-weight: var(--cx-weight-medium); background: transparent; color: var(--cx-sidebar-text); margin-bottom: 8px; }\n.dsc-sidebar .dsc-new-chat:hover { background: rgba(255,255,255,.08); }\n.dsc-sidebar .dsc-workspaces { flex: 1; min-height: 0; height: auto; }\n/* 同时限定两个自有类，避免后面的通用 .dsc-search 把它重新变成伸展项。 */\n.dsc-search.dsc-sidebar-search { flex: none; height: 32px; margin: 2px 0 8px; min-height: 32px; }\n.dsc-sidebar-search button { padding: 0 3px; }\n/* 搜索图标与清除键：恢复被 `.dsc-ui button {color: inherit}` 覆盖的自有灰阶。 */\n.dsc-sidebar .dsc-sidebar-search button { color: var(--cx-sidebar-muted); }\n.dsc-sidebar .dsc-sidebar-search button:hover, .dsc-sidebar .dsc-sidebar-search button:focus-visible { color: var(--cx-sidebar-text); }\n.dsc-sidebar .dsc-tree-tools { justify-content: space-between; padding: 12px 0 4px 8px; }\n.dsc-tree-tools-label { color: var(--cx-sidebar-muted); }\n.dsc-projects-toggle { display: flex; align-items: center; gap: 4px; height: 28px; padding: 0; }\n.dsc-projects-toggle svg { color: var(--cx-sidebar-muted); transform: rotate(-90deg); transition: transform 180ms ease; }\n.dsc-projects-toggle[aria-expanded=true] svg { transform: rotate(0); }\n.dsc-sidebar .dsc-tree-scroll { padding: 0; scrollbar-color: #ffffff26 transparent; scrollbar-width: thin; }\n.dsc-section-page-title { font-weight: 600; }\n/* 品牌头部不能再向上越过侧栏裁切边界：Windows 标题栏/圆角裁剪同时存在时，\n   原先 -8px 的 margin 会截掉 FishLogo 与 BrandWordmark 的笔画。 */\n.dsc-sidebar .dsc-sidebar__header { min-height: 48px; height: auto; margin: 0 -8px 4px; padding: 8px 6px 6px 10px; overflow: visible; }\n/* 直接使用宿主 FishLogo + BrandWordmark。两个 wrapper 防止 flex 算法压缩 SVG 的可视区域，\n   因而鲸鱼、deepseek 文字和 HARNESS 徽章始终作为完整的原生组件呈现。 */\n.dsc-brand-native { display: flex; align-items: center; gap: 5px; min-width: 0; height: 24px; overflow: visible; color: var(--dsw-alias-label-primary); white-space: nowrap; }\n.dsc-brand-native__mark, .dsc-brand-native__wordmark { display: inline-flex; align-items: center; flex: 0 0 auto; min-width: max-content; height: 24px; overflow: visible; line-height: 0; }\n.dsc-brand-native svg { display: block; flex: none; max-width: none; overflow: visible; }\n/* 项目行文件夹图标沿用宿主语义：常态 label-tertiary，当前工作区用 business-primary。 */\n.dsc-project-main > svg { color: var(--dsw-alias-label-tertiary); }\n.dsc-project.is-current .dsc-project-main > svg { color: var(--dsw-alias-state-business-primary); }\n.dsc-secondary-nav { display: flex; flex-direction: column; gap: 4px; min-height: 0; overflow: auto; padding-top: 6px; }\n.dsc-secondary-nav .dsc-secondary-item { display: flex; align-items: center; gap: 8px; min-height: 32px; width: 100%; padding: 0 8px; border-radius: var(--cx-radius-md); text-align: left; color: var(--cx-text-2); }\n.dsc-secondary-nav .dsc-secondary-item.is-active, .dsc-secondary-nav .dsc-secondary-item:hover { background: var(--cx-active); color: var(--cx-text); }\n.dsc-more-hint { margin: 0 8px 8px; color: var(--cx-text-3); line-height: 1.6; }\n.dsc-more-group { display: flex; flex-direction: column; gap: 4px; flex: none; }\n.dsc-more-group-title { margin: 4px 8px 0; color: var(--cx-text-3); font-weight: 500; }\n.dsc-more-empty { margin: 4px 8px 8px; color: var(--cx-text-3); }\n.dsc-more-entry { display: flex; align-items: center; gap: 2px; min-width: 0; min-height: 32px; }\n.dsc-secondary-nav .dsc-more-entry > .dsc-secondary-item { flex: 1; min-width: 0; width: auto; }\n.dsc-more-entry-label { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n.dsc-more-separator { flex: none; height: 1px; margin: 4px 8px; background: var(--cx-border-l1); }\n.dsc-ui .dsc-more-pin-button { flex: none; display: inline-flex; align-items: center; justify-content: center; width: 28px; height: 28px; margin-right: 2px; padding: 0; border-radius: var(--cx-radius-sm); color: var(--cx-text-3); }\n.dsc-ui .dsc-more-pin-button[aria-pressed=true] { color: var(--cx-text-2); }\n.dsc-more-pin-button:hover, .dsc-more-pin-button:focus-visible { background: var(--cx-active); color: var(--cx-text); }\n.dsc-ui .dsc-more-pin-button:focus-visible { outline-offset: -2px; }\n.dsc-pin-context-menu { position: fixed; z-index: 10002; box-sizing: border-box; min-width: 184px; max-width: calc(100vw - 16px); max-height: calc(100vh - 16px); overflow: auto; padding: 6px; border: 1px solid var(--cx-border-l1); border-radius: var(--cx-radius-lg); background: var(--cx-popover-fill); color: var(--cx-text); box-shadow: var(--cx-shadow-2xl); -webkit-app-region: no-drag; }\n.dsc-pin-context-menu [role=menuitem] { display: flex; align-items: center; gap: 8px; width: 100%; min-height: 32px; padding: 6px 8px; border-radius: var(--cx-radius-sm); text-align: left; white-space: nowrap; }\n.dsc-pin-context-menu [role=menuitem]:hover, .dsc-pin-context-menu [role=menuitem]:focus-visible { background: var(--cx-active); }\n.dsc-pin-context-menu [role=menuitem]:focus-visible { outline-offset: -2px; }\n/* 「更多」main 页面：与正文同色的空白页。 */\n.dsc-more-page { box-sizing: border-box; width: 100%; height: 100%; min-height: 100%; background: var(--cx-surface); }\n.dsc-window-sidebar-toggle { visibility: visible; position: fixed; top: 6px; left: 12px; z-index: 35; -webkit-app-region: no-drag; }\n.dsc-gear-launcher { visibility: visible; position: fixed; left: 8px; bottom: 12px; z-index: 35; }\n.dsc-gear-launcher .dsc-gear-button { display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; padding: 0; border-radius: var(--cx-radius-md); color: var(--cx-sidebar-muted); }\n.dsc-gear-launcher .dsc-gear-button:hover, .dsc-gear-launcher .dsc-gear-button[aria-expanded=true] { background: var(--cx-hover); color: var(--cx-sidebar-text); }\n/* 自绘悬停提示，避免系统 title 突然出现；菜单打开时不叠加提示。 */\n.dsc-gear-launcher .dsc-gear-button { position: relative; isolation: isolate; transition: color 150ms ease; }\n.dsc-gear-launcher .dsc-gear-button:hover, .dsc-gear-launcher .dsc-gear-button[aria-expanded=true] { background: none; }\n.dsc-gear-button::before { content: ''; position: absolute; inset: 0; z-index: -1; border-radius: inherit; background: var(--cx-hover); opacity: 0; transition: opacity 150ms ease; pointer-events: none; }\n.dsc-gear-button:hover::before, .dsc-gear-button[aria-expanded=true]::before, .dsc-gear-button:focus-visible::before { opacity: 1; }\n.dsc-gear-button::after { content: attr(aria-label); position: absolute; left: calc(100% + 8px); top: 50%; padding: 5px 9px; border: 1px solid var(--cx-border-l1); border-radius: 7px; background: var(--cx-popover-fill); color: var(--cx-text); line-height: 18px; white-space: nowrap; box-shadow: 0 4px 12px #0004; pointer-events: none; opacity: 0; transform: translate(-3px, -50%); transition: opacity 150ms ease, transform 150ms ease; }\n.dsc-gear-button[aria-expanded=false]:hover::after, .dsc-gear-button[aria-expanded=false]:focus-visible::after { opacity: 1; transform: translate(0, -50%); }\n/* DSH 本体更新：齿轮正上方 36px 透明按钮内嵌 24px 蓝圆；仅在插件外壳生效时出现，原生侧栏指示器随宿主侧栏一同隐藏。 */\n.dsc-desktop-update-launcher { display: none; position: fixed; left: 8px; bottom: 52px; z-index: 35; -webkit-app-region: no-drag; }\nbody[data-dsh-codex-chrome] .dsc-desktop-update-launcher { display: block; }\nbody[data-dsh-codex-chrome]:has(.dsc-desktop-update) .dsc-independent-rail { padding-bottom: 96px; }\n.dsc-desktop-update { position: relative; }\n.dsc-ui .dsc-desktop-update-button { display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; padding: 0; border-radius: var(--cx-radius-md); transition: background-color 150ms ease; }\n.dsc-ui .dsc-desktop-update-button:hover, .dsc-ui .dsc-desktop-update-button:focus-visible { background: var(--cx-hover); }\n.dsc-ui .dsc-desktop-update-button[aria-disabled=true] { cursor: default; }\n.dsc-desktop-update-dot { display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px; border-radius: 50%; background: var(--cx-accent-soft); color: var(--cx-text); }\n.dsc-desktop-update-ring { transition: stroke-dasharray 240ms ease; }\n.dsc-desktop-update-tip { position: absolute; left: calc(100% + 8px); top: 50%; display: flex; flex-direction: column; gap: 2px; min-width: max-content; padding: 6px 10px; border: 1px solid var(--cx-border-l1); border-radius: 10px; background: var(--cx-popover-fill); color: var(--cx-text-2); line-height: 18px; white-space: nowrap; box-shadow: 0 4px 12px #0004; pointer-events: none; opacity: 0; transform: translate(-3px, -50%); transition: opacity 150ms ease, transform 150ms ease; }\n.dsc-desktop-update-tip strong { color: var(--cx-text); font-weight: 500; font-variant-numeric: tabular-nums; }\n.dsc-desktop-update-tip .dsc-update-progress { margin-top: 5px; }\n.dsc-desktop-update:hover .dsc-desktop-update-tip, .dsc-desktop-update:focus-within .dsc-desktop-update-tip { opacity: 1; transform: translate(0, -50%); }\n@media (prefers-reduced-motion: reduce) { .dsc-desktop-update-ring, .dsc-desktop-update-tip { transition: none; } }\n.dsc-app-menu { padding: 5px; }\n.dsc-menu-separator { height: 1px; margin: 4px 6px; background: var(--cx-border-l1); }\n.dsc-app-menu .dsc-account-row { display: flex; align-items: center; gap: 9px; width: 100%; padding: 8px; text-align: left; border-radius: var(--cx-radius-md); }\n.dsc-account-row:hover { background: var(--cx-active); }\n.dsc-account-row > img, .dsc-account-avatar { display: inline-flex; align-items: center; justify-content: center; flex: none; width: 28px; height: 28px; border-radius: 50%; background: var(--cx-active); object-fit: cover; }\n.dsc-account-row > span:last-child { display: flex; flex-direction: column; min-width: 0; }\n.dsc-account-row strong { font-weight: 500; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n.dsc-account-row small { color: var(--cx-text-3); }\n/* 齿轮菜单上方的第三方入口分组：宿主 footer.action 原生节点原样呈现；关闭后标记/变量全部移除。 */\nbody[data-dsh-codex-chrome] [data-dsc-app-footer-base] { display: flex !important; flex-direction: column; }\nbody[data-dsh-codex-chrome] [data-dsc-app-footer-host] {\n  visibility: visible !important;\n  position: fixed !important;\n  left: var(--dsc-app-footer-left);\n  bottom: var(--dsc-app-footer-bottom);\n  width: var(--dsc-app-footer-width);\n  max-height: max(48px, var(--dsc-app-footer-max-height, calc(100vh - var(--dsc-app-footer-bottom) - 8px)));\n  box-sizing: border-box;\n  display: flex !important;\n  flex-direction: column;\n  gap: 2px;\n  margin: 0 !important;\n  padding: 5px !important;\n  overflow-x: hidden;\n  overflow-y: auto;\n  background: var(--cx-popover-fill);\n  border: 1px solid var(--cx-border-l1);\n  border-radius: 14px;\n  box-shadow: 0 12px 36px #0007;\n  z-index: 9999;\n  scrollbar-width: thin;\n  scrollbar-color: #ffffff26 transparent;\n  -webkit-app-region: no-drag;\n}\nbody[data-dsh-codex-chrome] [data-dsc-app-footer-host] [data-dsc-app-footer-entry] { flex: none; width: 100% !important; min-width: 0; }\nbody[data-dsh-codex-chrome] [data-dsc-app-footer-host] [data-dsc-app-footer-entry] button { width: 100% !important; min-width: 0; justify-content: flex-start !important; }\n/* 宿主收起态对 footer 入口只渲染图标（第三方按 wide=false 省略文字节点）；\n   分组里用按钮的无障碍名称补一个可见标签，展开态有原生文字时不会命中。 */\nbody[data-dsh-codex-chrome] [data-dsc-app-footer-host] [data-dsc-app-footer-entry] button[data-dsc-app-footer-label]::after {\n  content: attr(data-dsc-app-footer-label);\n  min-width: 0;\n  margin-left: 8px;\n  overflow: hidden;\n  color: inherit;\n\n  line-height: 20px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n/* 分组位于宿主侧栏列层叠上下文（z-index:21）内，低于自有 rail（25）。\n   菜单打开期间只让 rail 中与分组重叠的竖向区段放行，其余区域仍由透明命中层挡住，\n   避免点击穿透到下面的侧栏内容；按钮本身保持可点，重叠的图标临时隐藏。 */\n.dsc-rail-hitblock { display: none; position: absolute; inset: 0; z-index: 0; pointer-events: auto; }\nbody[data-dsh-codex-chrome] .dsc-independent-rail[data-dsc-app-footer-clear] { pointer-events: none; }\nbody[data-dsh-codex-chrome] .dsc-independent-rail[data-dsc-app-footer-clear] .dsc-rail-hitblock { display: block; clip-path: inset(0 0 calc(100% - var(--dsc-app-footer-clear-top, 100%)) 0); }\nbody[data-dsh-codex-chrome] .dsc-independent-rail[data-dsc-app-footer-clear] .dsc-rail__item { position: relative; z-index: 1; pointer-events: auto; }\nbody[data-dsh-codex-chrome] .dsc-independent-rail [data-dsc-app-footer-clear-item] { opacity: 0 !important; pointer-events: none !important; }\n.dsc-settings-trigger { display: inline-flex; gap: 8px; align-items: center; }\n.dsc-workspaces { height: 100%; min-height: 0; width: 100%; display: flex; flex-direction: column; background: var(--cx-sidebar); }\n.dsc-tree-tools { display: flex; gap: 4px; align-items: center; padding: 6px 8px 12px; }\n.dsc-search { flex: 1; display: flex; align-items: center; gap: 6px; min-width: 0; border-radius: 8px; background: #ffffff08; padding: 3px 8px; color: var(--cx-sidebar-muted); }\n.dsc-search input { min-width: 0; width: 100%; border: 0; outline: none; background: none; }\n.dsc-search:focus-within { box-shadow: 0 0 0 1px var(--cx-border-l3); }\n.dsc-search input::placeholder { color: var(--cx-sidebar-muted); }\n.dsc-icon-button { width: 28px; height: 28px; display: grid; place-items: center; border-radius: 7px; color: var(--cx-text-2); }\n.dsc-icon-button:hover { background: var(--cx-active); }\n/* 用户截图灰度：自有侧栏图标常态 #8f8f8f、悬停/键盘聚焦 #b4b4b4；禁用沿用父级透明度。 */\n.dsc-sidebar .dsc-icon-button { color: var(--cx-sidebar-muted); }\n.dsc-sidebar .dsc-icon-button:hover, .dsc-sidebar .dsc-icon-button:focus-visible { color: var(--cx-sidebar-text); }\n.dsc-ui.dsc-window-sidebar-toggle .dsc-icon-button { color: var(--cx-sidebar-muted); }\n.dsc-ui.dsc-window-sidebar-toggle .dsc-icon-button:hover, .dsc-ui.dsc-window-sidebar-toggle .dsc-icon-button:focus-visible { color: var(--cx-sidebar-text); }\n.dsc-tree-scroll { flex: 1; min-height: 0; overflow: auto; scrollbar-width: thin; padding: 0 8px; }\n.dsc-section-title { padding: 12px 8px 6px; font-weight: 500; color: var(--cx-sidebar-muted); }\n.dsc-thread, .dsc-project { display: flex; align-items: center; height: 30px; border-radius: 7px; position: relative; }\n.dsc-thread:hover, .dsc-project:hover, .dsc-thread.is-active { background: #ffffff0d; }\n.dsc-thread.is-active { background: var(--cx-sidebar-selected); }\n.dsc-ui .dsc-thread-main, .dsc-ui .dsc-project-main { display: flex; flex: 1; align-items: center; gap: 7px; min-width: 0; height: 100%; padding: 0 8px; text-align: left; color: var(--cx-sidebar-text); }\n.dsc-thread-title, .dsc-project-main > span { min-width: 0; flex: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.dsc-ui .dsc-thread-main { padding-right: 62px; }\n.dsc-thread-title-text { display: inline-block; width: max-content; max-width: none; vertical-align: top; }\n.dsc-thread-title[data-overflow=true] { text-overflow: clip; mask-image: linear-gradient(to right, #000 calc(100% - 16px), transparent); }\n.dsc-thread:hover .dsc-thread-title[data-overflow=true] .dsc-thread-title-text,\n.dsc-thread-main:focus-visible .dsc-thread-title[data-overflow=true] .dsc-thread-title-text { animation: dsc-title-scroll var(--dsc-title-duration) linear 250ms infinite alternate; }\n@keyframes dsc-title-scroll { from { transform: translateX(0); } to { transform: translateX(var(--dsc-title-shift)); } }\n.dsc-thread-time { position: absolute; right: 9px; color: var(--cx-sidebar-muted); transition: opacity 120ms ease; }\n.dsc-thread-completion { position: absolute; right: 9px; top: 50%; width: 8px; height: 8px; border-radius: 50%; background: #4c9bfe; transform: translateY(-50%); pointer-events: none; }\n.dsc-thread-running { position: absolute; right: 9px; top: 50%; display: grid; place-items: center; width: 12px; height: 12px; color: var(--cx-sidebar-muted); transform: translateY(-50%); pointer-events: none; }\n.dsc-running-spinner { display: inline-flex; line-height: 0; animation: dsc-session-spin 1.9s linear infinite; }\n.dsc-thread:hover .dsc-thread-time, .dsc-thread:has(:focus-visible) .dsc-thread-time { display: none; }\n.dsc-thread:hover .dsc-thread-completion, .dsc-thread:has(:focus-visible) .dsc-thread-completion { opacity: 0; }\n.dsc-thread:hover .dsc-thread-running, .dsc-thread:has(:focus-visible) .dsc-thread-running { opacity: 0; }\n.dsc-thread .dsc-state[data-state=idle] { display: none; }\n.dsc-thread-actions { position: absolute; top: 0; right: 4px; height: 100%; display: flex; align-items: center; gap: 1px; opacity: 0; pointer-events: none; transition: opacity 150ms ease; }\n.dsc-thread:hover .dsc-thread-actions, .dsc-thread:has(:focus-visible) .dsc-thread-actions { opacity: 1; pointer-events: auto; }\n.dsc-ui .dsc-thread-action { display: grid; place-items: center; flex: none; width: 25px; height: 26px; padding: 0; border-radius: 5px; color: var(--cx-sidebar-muted); transition: color 120ms ease; }\n.dsc-ui .dsc-thread-action:hover, .dsc-ui .dsc-thread-action:focus-visible { color: var(--cx-sidebar-text); }\n.dsc-thread-action svg { width: 14px; height: 14px; }\n.dsc-row-tooltip { position: fixed; z-index: 10001; pointer-events: none; padding: 5px 11px; border: 1px solid #ffffff08; border-radius: 13px; color: var(--cx-text); background: var(--cx-summary); line-height: 18px; white-space: nowrap; box-shadow: 0 2px 5px #0002; opacity: 0; visibility: hidden; transform: translateY(3px); transition: opacity 80ms ease, transform 80ms ease, visibility 0s 80ms; }\n.dsc-row-tooltip[data-open=true] { opacity: 1; visibility: visible; transform: translateY(0); transition: opacity 120ms ease 350ms, transform 120ms ease 350ms, visibility 0s 350ms; }\n.dsc-state { color: var(--cx-sidebar-muted); flex: none; display: flex; align-items: center; }\n.dsc-state[data-state=pending] { color: var(--cx-warning); }\n.dsc-row-action { display: flex; opacity: 0; pointer-events: none; transition: opacity 150ms ease; width: 25px; height: 25px; align-items: center; justify-content: center; border-radius: 5px; padding: 0; margin-right: 3px; color: var(--cx-sidebar-muted); }\n.dsc-ui .dsc-row-action { color: var(--cx-sidebar-muted); }\n.dsc-thread:hover .dsc-row-action, .dsc-project:hover .dsc-row-action, .dsc-thread:has(:focus-visible) .dsc-row-action, .dsc-project:has(:focus-visible) .dsc-row-action { opacity: 1; pointer-events: auto; }\n.dsc-row-action:hover { color: var(--cx-sidebar-text); background: var(--cx-active); }\n/* 本轮按用户录像为项目内容局部开放布局动画；外壳与其他面板的尺寸规则保持原约定。 */\n.dsc-project-fold { display: grid; grid-template-rows: 0fr; opacity: 0; transition: grid-template-rows 180ms cubic-bezier(.2,.8,.2,1), opacity 150ms ease; }\n.dsc-project-fold[data-open=true] { grid-template-rows: 1fr; opacity: 1; }\n.dsc-project-clip { min-height: 0; overflow: hidden; }\n.dsc-project-children { padding-left: 14px; }\n.dsc-project-children, .dsc-project-list { transform: translateY(-4px); transition: transform 180ms cubic-bezier(.2,.8,.2,1); }\n.dsc-project-fold[data-open=true] > .dsc-project-clip > :is(.dsc-project-children, .dsc-project-list) { transform: translateY(0); }\n.dsc-project-children .dsc-state { display: none; }\n/* 项目内“显示更多/收起”：真实按钮，缩进随项目子列表，颜色与行文字一致；不引入额外布局动画。 */\n.dsc-ui .dsc-project-more { display: flex; align-items: center; width: 100%; height: 26px; padding: 0 8px; border-radius: 7px; text-align: left; color: var(--cx-sidebar-muted); }\n.dsc-ui .dsc-project-more:hover, .dsc-ui .dsc-project-more:focus-visible { color: var(--cx-sidebar-text); background: #ffffff0d; }\n.dsc-ui .dsc-project-more:focus-visible { outline: 2px solid var(--cx-focus); outline-offset: -2px; }\n.dsc-empty { display: block; color: var(--cx-sidebar-muted); padding: 10px 12px; }\n.dsc-archive-toggle { padding: 8px 12px; display: flex; gap: 6px; align-items: center; color: var(--cx-sidebar-muted); }\n.dsc-archive-toggle input { accent-color: var(--cx-accent); }\n.dsc-thread.is-archived { opacity: .55; }\n.dsc-error { padding: 4px 8px; color: var(--cx-danger); white-space: normal; max-width: 310px; }\n.dsc-menu { z-index: 10000; padding: 6px; background: var(--cx-popover-fill); border: 1px solid var(--cx-border-l1); border-radius: 14px; box-shadow: 0 12px 36px #0007; overflow: auto; animation: dsc-pop-in 130ms ease both; }\n.dsc-menu-heading { color: var(--cx-text-3); padding: 5px 8px 8px; }\n.dsc-option { width: 100%; display: flex; gap: 9px; align-items: center; text-align: left; padding: 7px 8px; border-radius: 7px; min-height: 32px; }\n.dsc-option:hover, .dsc-option:focus-visible { background: #ffffff12; }\n.dsc-option-copy { display: flex; flex: 1; min-width: 0; flex-direction: column; line-height: 20px; }\n.dsc-option-copy small { color: var(--cx-text-3); line-height: 17px; }\n/* 行悬停详情卡：几何按原型实测（项目卡 321×130、右侧 5px；会话卡 470 宽、右侧 12px、上移 6px）。 */\n.dsc-row-pop { position: fixed; z-index: 10000; max-width: calc(100vw - 32px); padding: 6px; border-radius: var(--cx-radius-xl); border: 1px solid var(--cx-border-l1); background: var(--cx-popover-fill); box-shadow: var(--cx-shadow-2xl); animation: dsc-row-pop-in 120ms var(--cx-ease-out) both; }\n.dsc-row-pop--project { width: 321px; padding: 8px; }\n.dsc-row-pop--thread { width: 470px; }\n.dsc-row-pop__head { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; padding: 8px 8px 10px; border-bottom: 1px solid var(--cx-border-l2); }\n.dsc-row-pop--project .dsc-row-pop__head { align-items: center; height: 28px; padding: 0 8px; border-bottom: 0; }\n.dsc-row-pop__name { display: flex; align-items: center; gap: 8px; min-width: 0; font-weight: var(--cx-weight-regular); color: var(--cx-text); }\n.dsc-row-pop__name > span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n.dsc-row-pop__pin { display: inline-flex; align-items: center; flex: none; color: var(--cx-text-3); }\n.dsc-row-pop__excerpt { margin: 0; line-height: 20px; color: var(--cx-text); display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }\n.dsc-row-pop__meta { display: flex; align-items: center; gap: 6px; flex: none; color: var(--cx-text-3); white-space: nowrap; }\n.dsc-row-pop__line { display: flex; align-items: center; gap: 8px; width: 100%; height: 32px; padding: 0 8px; border-radius: var(--cx-radius-md); color: var(--cx-text-2); text-align: left; }\n.dsc-row-pop__line svg { flex: none; color: var(--cx-text-3); }\n.dsc-row-pop--project .dsc-row-pop__line { height: 28px; color: var(--cx-text); }\n.dsc-row-pop--project .dsc-row-pop__line svg { color: var(--cx-text-2); }\n.dsc-row-pop__line--path, .dsc-row-pop__line--action { cursor: pointer; }\n.dsc-row-pop__line--path:hover, .dsc-row-pop__line--action:hover { background: var(--cx-hover); color: var(--cx-text); }\n.dsc-row-pop__line--path:focus-visible, .dsc-row-pop__line--action:focus-visible { outline: 2px solid var(--cx-focus); outline-offset: -2px; }\n.dsc-row-pop__path { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n.dsc-row-pop--project .dsc-row-pop__path { color: var(--cx-text); }\n.dsc-row-pop__arrow { margin-left: auto; opacity: 0; transition: opacity 120ms var(--cx-ease); }\n.dsc-row-pop__line--path:hover .dsc-row-pop__arrow, .dsc-row-pop__line--path:focus-visible .dsc-row-pop__arrow { opacity: 1; }\n.dsc-row-pop__sep { height: 1px; background: var(--cx-border-l1); }\n@keyframes dsc-row-pop-in { from { opacity: 0; } to { opacity: 1; } }\n/* 「编辑项目」对话框：按参考图（面板 #2d2d2d、16 圆角、保存白底、移除暗红底）；源文件夹只读展示。 */\n.dsc-modal { position: fixed; inset: 0; z-index: 11000; display: flex; align-items: center; justify-content: center; padding: 24px; }\n.dsc-modal__mask { position: absolute; inset: 0; background: rgba(0,0,0,.12); }\n.dsc-modal__panel { position: relative; display: flex; flex-direction: column; width: min(520px, calc(100vw - 32px)); padding: 24px; border-radius: 16px; background: var(--cx-popover-fill); box-shadow: var(--cx-shadow-2xl); color: var(--cx-text); }\n.dsc-modal__head { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; }\n.dsc-modal__head h2 { margin: 0; line-height: 28px; font-weight: 600; }\n.dsc-modal__close { display: inline-flex; align-items: center; justify-content: center; width: 28px; height: 28px; padding: 0; border-radius: var(--cx-radius-sm); color: var(--cx-text-2); }\n.dsc-modal__close:hover { background: var(--cx-hover); color: var(--cx-text); }\n.dsc-modal__field { display: flex; align-items: center; gap: 10px; height: 44px; margin-top: 20px; padding: 0 12px; border: 1px solid var(--cx-border-strong); border-radius: var(--cx-radius-md); color: var(--cx-text-2); }\n.dsc-modal__field:focus-within { border-color: var(--cx-focus); }\n.dsc-modal__input { flex: 1; min-width: 0; height: 100%; border: 0; outline: none; background: none; color: var(--cx-text); }\n.dsc-modal__input::placeholder { color: var(--cx-text-3); }\n.dsc-modal__label { margin: 20px 0 8px; line-height: 18px; color: var(--cx-text-3); }\n.dsc-modal__source { display: flex; align-items: center; gap: 10px; height: 48px; padding: 0 12px; border: 1px solid var(--cx-border-strong); border-radius: var(--cx-radius-md); color: var(--cx-text-2); }\n.dsc-modal__path { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n.dsc-modal .dsc-error { margin-top: 12px; }\n.dsc-modal__actions { display: flex; align-items: center; gap: 8px; margin-top: 24px; }\n.dsc-modal__spacer { flex: 1; }\n.dsc-modal__remove { height: 36px; padding: 0 16px; border-radius: 999px; background: rgba(250,102,101,.14); color: var(--cx-danger); }\n.dsc-modal__remove:hover:not(:disabled) { background: rgba(250,102,101,.22); }\n.dsc-modal__cancel { height: 36px; padding: 0 14px; border-radius: 999px; color: var(--cx-text-2); }\n.dsc-modal__cancel:hover:not(:disabled) { background: var(--cx-hover); color: var(--cx-text); }\n.dsc-modal__save { height: 36px; padding: 0 20px; border-radius: 999px; background: #dfdfdf; color: var(--cx-text-inverse); font-weight: 500; }\n.dsc-modal__save:hover:not(:disabled) { background: #fff; }\n.dsc-modal__save:disabled, .dsc-modal__remove:disabled, .dsc-modal__cancel:disabled { opacity: .6; cursor: default; }\n/* 编辑项目底部按钮：优先于 .dsc-ui button 的重置；不改变源文件夹和其他弹窗。 */\n.dsc-modal__panel[aria-labelledby=\"dsc-edit-workspace-title\"] .dsc-modal__actions > button { height: 32px; border-radius: 10px; corner-shape: round; }\n.dsc-modal__panel[aria-labelledby=\"dsc-edit-workspace-title\"] .dsc-modal__save,\n.dsc-modal__panel[aria-labelledby=\"dsc-edit-workspace-title\"] .dsc-modal__save:hover:not(:disabled) { padding: 0 16px; background: #dfdfdf; color: var(--cx-text-2); }\n.dsc-modal__panel[aria-labelledby=\"dsc-edit-workspace-title\"] .dsc-modal__remove { background: #403030; color: var(--cx-danger); }\n.dsc-modal__panel[aria-labelledby=\"dsc-edit-workspace-title\"] .dsc-modal__remove:hover:not(:disabled) { background: #4b3333; color: var(--cx-danger); }\n.dsc-control-status { display: inline-flex; align-items: center; gap: 5px; padding: 0 7px; color: var(--cx-text-3); }\n.dsc-control-status button { padding: 2px 4px; text-decoration: underline; }\n.dsc-control-status button:hover { color: var(--cx-text); }\n.dsc-pill { height: 28px; display: inline-flex; align-items: center; gap: 6px; padding: 0 10px; border-radius: 999px; corner-shape: round; white-space: nowrap; color: var(--cx-text-2); }\n.dsc-pill:hover, .dsc-pill[aria-expanded=true] { background: #ffffff12; color: white; }\n.dsc-pill[data-warning=true] { color: var(--cx-warning); }\n/* 右下角触发器：模型名偏白、思维强度灰色（参考图 4）。 */\n/* 「修改模型」面板：标题与列表样式明确区别于宿主原生菜单。 */\n.dsc-back { display: flex; align-items: center; gap: 4px; color: var(--cx-text-3); border-radius: 5px; }\n.dsc-back:hover { color: var(--cx-text); }\n/* 滑条弹层裁掉横向溢出：Max/Low/High 档的撒点动画会向右超出边界，触发多余的水平滚动条。 */\n/* rc.3 的全局 superellipse 会把 full/50% 圆角画成方圆形；仅恢复本控件的圆形轮廓。 */\n/* 提交期间保持原有视觉：只禁用拖拽，不切换光标/透明度，避免切换档位时闪变。 */\n.dsc-stars { position: absolute; inset: 0; opacity: 0; pointer-events: none; transition: opacity 180ms ease; }\n.dsc-stars i { position: absolute; border-radius: 50%; background: #fff; box-shadow: 0 0 3px #e0d6ff8c; animation: dsc-star-drift var(--pdur) linear var(--pdelay) infinite; animation-play-state: paused; }\n.dsc-tick { position: absolute; top: 50%; width: 24px; height: 24px; transform: translate(-50%,-50%); transition: opacity 150ms ease; }\n.dsc-tick::after { content: ''; position: absolute; top: 50%; left: 50%; width: 5px; height: 5px; border-radius: 50%; background: #ffffff38; transform: translate(-50%,-50%); transition: transform 120ms ease,background-color 120ms ease; pointer-events: none; }\n.dsc-tick.is-on::after { background: #ffffff4d; }\n/* 固定白色滑块为正圆，避免宿主全局圆角规则覆盖插件外形。 */\n.dsc-sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; border: 0; }\n/* 权限风险弹窗：按用户 Codex 截图换算 1.5 倍显示缩放，约 520px 宽；不影响宿主其他确认框。 */\n.dsc-burst { position: absolute; left: 14px; top: 50%; pointer-events: none; }\n/* 等 140ms 节点移动落定后，从白球边缘扩散；反复进入 Max 会由原有 key 重播。 */\n.dsc-burst i { position: absolute; width: 3px; height: 3px; border-radius: 50%; background: #b98cff; box-shadow: 0 0 3px #b98cff40; animation: dsc-burst 280ms ease-out 140ms both; }\n@keyframes dsc-pop-in { from { opacity: 0; transform: translateY(3px); } to { opacity: 1; transform: none; } }\n/* 退场淡出：关闭弹层时先播放 160ms，再卸载 DOM。 */\n@keyframes dsc-pop-out { from { opacity: 1; transform: none; } to { opacity: 0; transform: translateY(3px); } }\n.dsc-menu.dsc-menu-closing { animation: dsc-pop-out 160ms ease both; pointer-events: none; }\n@keyframes dsc-session-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }\n/* 两层亮带和星点均向左单程流动，出场淡去后从右侧开始下一轮。 */\n@keyframes dsc-max-flow { 0% { transform: translateX(65%) scale(.82,1); opacity: 0; } 12% { opacity: .95; } 88% { opacity: .8; } 100% { transform: translateX(-65%) scale(1.02,1); opacity: 0; } }\n@keyframes dsc-max-bloom { 0% { transform: translateX(65%) scale(.7,1); opacity: 0; } 12% { opacity: .9; } 88% { opacity: 1; } 100% { transform: translateX(-65%) scale(1,1); opacity: 0; } }\n@keyframes dsc-star-drift { 0% { transform: translate(-50%,-50%) translate(calc(var(--dx)*.5),calc(var(--dy)*-.5)); opacity: 0; } 20% { opacity: .7; } 80% { opacity: .8; } 100% { transform: translate(-50%,-50%) translate(calc(var(--dx)*-.5),calc(var(--dy)*.5)); opacity: 0; } }\n@keyframes dsc-burst { 0% { transform: translate(-50%,-50%) translate(calc(var(--bx)*.45),calc(var(--by)*.45)) scale(.5); opacity: 0; } 18% { transform: translate(-50%,-50%) translate(calc(var(--bx)*.72),calc(var(--by)*.72)) scale(1); opacity: .65; } 100% { transform: translate(-50%,-50%) translate(var(--bx),var(--by)) scale(.5); opacity: 0; } }\n@media (prefers-reduced-motion: reduce) {\n  .dsc-sidebar-shell, .dsc-row-tooltip, .dsc-ui *, .dsc-ui *::before, .dsc-ui *::after { animation: none !important; transition: none !important; }\n  .dsc-burst { display: none; }\n}\n\n/* Codex 几何（第 48 轮）：侧边栏列左上角圆角、对话列左上角直角（与 Codex 蓝框/红框一致）。 */\n/* BOUNDARY-20261106：导航右侧的单一外框。\n   1) 常驻 frame 上一个不占位、不可拦截指针的伪元素描边；顶部从 40px 标题栏下沿开始，\n      经侧栏左上真圆弧连续走到右侧与下沿，外侧底色仍是 frame 的 #0f0f0f。\n   2) 各列只做内容裁剪：侧栏列左上/左下、正文列右上/右下（右栏收起时）；\n      侧栏收起时正文列接管左上/左下。接缝处不重复圆角。\n   3) 宿主全局 corner-shape:superellipse(1.5) 会削弱圆弧，这里显式恢复 round。\n   4) 0.667px × 150% = 1 设备像素；不改变列宽、顶部高度或控件坐标。 */\nhtml[data-windows-titlebar] body[data-dsh-codex-chrome] [data-dsc-frame]::after {\n  content: '';\n  position: absolute;\n  inset: var(--dsh-windows-titlebar-height, 40px) 0 0;\n  z-index: 24;\n  border-radius: var(--cx-frame-radius);\n  box-shadow: inset 0 0 0 var(--cx-frame-line-width) var(--cx-frame-line);\n  corner-shape: round;\n  pointer-events: none;\n}\nhtml[data-windows-titlebar] body[data-dsh-codex-chrome] [data-dsc-sidebar-column] {\n  border-top-left-radius: var(--cx-frame-radius);\n  border-bottom-left-radius: var(--cx-frame-radius);\n  corner-shape: round;\n}\nhtml[data-windows-titlebar] body[data-dsh-codex-chrome] [data-dsc-center-column] {\n  border-radius: 0;\n  corner-shape: round;\n}\nhtml[data-windows-titlebar] body[data-dsh-codex-chrome] [data-dsc-frame][data-rightbar-collapsed] [data-dsc-center-column] {\n  border-top-right-radius: var(--cx-frame-radius);\n  border-bottom-right-radius: var(--cx-frame-radius);\n}\nhtml[data-windows-titlebar] body[data-dsh-codex-chrome] [data-dsc-frame][data-sidebar-collapsed] [data-dsc-center-column] {\n  border-top-left-radius: var(--cx-frame-radius);\n  border-bottom-left-radius: var(--cx-frame-radius);\n}\n\n/* 浅色呈现只覆盖颜色；深色规则、几何与动作保持不变。 */\n";
    const SKILLS_CSS_TEXT = "/* 技能页：只作用于自有 .dsc-skills-* 结构，不改宿主令牌与布局。 */\n.dsc-skills-page {\n  box-sizing: border-box;\n  min-height: 100%;\n  padding: 30px 30px 56px;\n  color: var(--cx-text);\n  background: var(--cx-surface);\n\n  overflow: auto;\n}\n.dsc-skills-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 20px; flex-wrap: wrap; }\n.dsc-skills-heading h1 { margin: 0; line-height: 30px; font-weight: 600; letter-spacing: -.01em; }\n.dsc-skills-heading p { margin: 4px 0 0; color: var(--cx-text-3); line-height: 22px; }\n.dsc-skills-toolbar { display: flex; align-items: center; gap: 10px; }\n.dsc-skills-scope {\n  max-width: 220px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\n  padding: 4px 10px; border: 1px solid #ffffff14; border-radius: 999px; color: var(--cx-text-3);\n}\n.dsc-skills-search {\n  display: inline-flex; align-items: center; gap: 6px; width: 240px; height: 32px; padding: 0 12px;\n  border: 1px solid #ffffff14; border-radius: 999px; color: var(--cx-text-3); background: transparent;\n}\n.dsc-skills-search:focus-within { border-color: #ffffff2e; color: var(--cx-text); }\n.dsc-skills-search input { flex: 1; min-width: 0; border: 0; outline: 0; background: transparent; color: var(--cx-text); font: inherit; }\n.dsc-skills-search input::placeholder { color: var(--cx-text-3); }\n.dsc-skills-toolbar .dsc-icon-button { width: 32px; height: 32px; border-radius: 999px; color: var(--cx-text-3); }\n.dsc-skills-toolbar .dsc-icon-button:hover { background: #222; color: var(--cx-text); }\n\n.dsc-skills-section { margin-top: 26px; }\n.dsc-skills-section-title {\n  margin: 0 0 12px; padding-bottom: 8px; border-bottom: 1px solid #ffffff14;\n line-height: 22px; font-weight: 600; color: var(--cx-text);\n}\n.dsc-skills-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px 28px; }\n.dsc-skill-card {\n  display: flex; align-items: center; gap: 12px; width: 100%; height: 60px; padding: 8px 10px;\n  border: 0; border-radius: 10px; background: transparent; color: inherit; text-align: left; cursor: pointer;\n  transition: background-color 150ms ease;\n}\n.dsc-skill-card:hover { background: #222; }\n.dsc-skill-card:focus-visible { outline: 2px solid #ffffff2e; outline-offset: -2px; }\n.dsc-skill-card-icon { display: inline-flex; flex: none; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 10px; background: #141414; }\n.dsc-skill-card-copy { display: flex; flex-direction: column; min-width: 0; flex: 1; gap: 2px; }\n.dsc-skill-card-title { line-height: 20px; font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n.dsc-skill-card-desc { line-height: 20px; color: var(--cx-text-3); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n.dsc-skill-card-flag { flex: none; display: inline-flex; color: var(--cx-text-3); }\n.dsc-ui .dsc-skills-more {\n  margin-top: 6px; padding: 4px 2px; border: 0; background: transparent; color: var(--cx-text-3);\n  font: inherit; cursor: pointer; text-align: left;\n}\n.dsc-skills-more:hover { color: var(--cx-text); }\n\n.dsc-skills-state { padding: 22px 2px; color: var(--cx-text-3); }\n.dsc-skills-state button { margin-left: 10px; padding: 2px 10px; border: 1px solid #ffffff14; border-radius: 6px; background: #202020; color: var(--cx-text); font: inherit; cursor: pointer; }\n.dsc-skills-state-error { color: var(--cx-danger); }\n.dsc-skills-state-warn { color: var(--cx-warning); }\n\n.dsc-skills-overlay {\n  position: fixed; inset: 0; z-index: 900; display: flex; align-items: center; justify-content: center;\n  padding: 36px 24px; background: #00000026;\n}\n.dsc-skills-dialog {\n  display: flex; flex-direction: column; box-sizing: border-box; overflow: hidden;\n  width: min(600px, calc(100vw - 48px)); max-height: calc(100vh - 72px); padding: 20px;\n  border: 1px solid #ffffff14; border-radius: 20px;\n  background: linear-gradient(180deg, #2b2a2a, #2c2b2b);\n  color: var(--cx-text); box-shadow: 0 18px 48px #00000059;\n}\n.dsc-skills-dialog-headrow { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; }\n.dsc-skills-dialog-icon { display: inline-flex; flex: none; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 10px; background: #141414; }\n.dsc-skills-dialog-headactions { display: flex; align-items: center; gap: 4px; }\n.dsc-skills-dialog-headactions .dsc-icon-button { width: 30px; height: 30px; border-radius: 8px; color: var(--cx-text-3); }\n.dsc-skills-dialog-headactions .dsc-icon-button:hover { background: #ffffff14; color: var(--cx-text); }\n.dsc-skills-dialog-title { display: flex; align-items: baseline; gap: 8px; flex-wrap: wrap; margin-top: 14px; }\n.dsc-skills-dialog-title h2 { margin: 0; line-height: 26px; font-weight: 600; }\n.dsc-skills-dialog-kind { color: var(--cx-text-3); }\n.dsc-skills-dialog-desc {\n  margin: 8px 0 14px; color: var(--cx-text-4); line-height: 24px;\n  max-height: 28vh; overflow: auto; overflow-wrap: anywhere;\n}\n.dsc-skills-preview {\n  flex: 1 1 auto; min-height: 96px; max-height: 160px; overflow: auto; padding: 12px 14px;\n  border-radius: 12px; background: #232222; color: var(--cx-text-4); line-height: 20px;\n}\n.dsc-skills-preview-note { color: var(--cx-text-3); }\n.dsc-skills-plain { margin: 0; white-space: pre-wrap; overflow-wrap: anywhere; }\n.dsc-skills-dialog-foot { display: flex; align-items: center; justify-content: flex-end; gap: 12px; flex: none; margin-top: 14px; }\n.dsc-skills-dialog-notice { margin-right: auto; color: var(--cx-danger); line-height: 18px; }\n.dsc-ui .dsc-skills-try {\n  display: inline-flex; align-items: center; gap: 5px; corner-shape: round;\n  padding: 6px 14px; border: 0; border-radius: 999px; background: #dfdfdf; color: var(--cx-text-inverse);\n  font: inherit; font-weight: 600; cursor: pointer;\n  transition: background-color 120ms ease;\n}\n.dsc-ui .dsc-skills-try:hover { background: #f0f0f0; }\n.dsc-skills-try:disabled { opacity: .6; cursor: default; }\n.dsc-skills-search, .dsc-skills-scope { corner-shape: round; }\n.dsc-skills-preview :is(h1, h2, h3, h4, h5, h6) { margin: 12px 0 8px; }\n.dsc-skills-preview :is(h1, h2, h3):first-child { margin-top: 0; }\n.dsc-skills-preview p { margin: 8px 0; }\n\n@media (max-width: 900px) {\n  .dsc-skills-page { padding: 22px 18px 40px; }\n  .dsc-skills-grid { grid-template-columns: minmax(0, 1fr); }\n  .dsc-skills-search { width: 200px; }\n}\n@media (max-width: 620px) {\n  .dsc-skills-header { flex-direction: column; }\n  .dsc-skills-toolbar { width: 100%; }\n  .dsc-skills-search { flex: 1; width: auto; }\n  .dsc-skills-overlay { padding: 16px; }\n  .dsc-skills-dialog { padding: 16px; border-radius: 16px; max-height: calc(100vh - 32px); }\n  .dsc-skills-dialog-desc { line-height: 22px; max-height: 22vh; }\n  .dsc-skills-preview { max-height: 34vh; }\n}\n@media (max-height: 560px) {\n  .dsc-skills-dialog { overflow-y: auto; }\n  .dsc-skills-dialog > * { flex-shrink: 0; }\n  .dsc-skills-dialog-desc { max-height: 20vh; }\n  .dsc-skills-preview { flex: none; min-height: 64px; max-height: 20vh; }\n}\n@media (prefers-reduced-motion: reduce) {\n  .dsc-skill-card, .dsc-skills-try { transition: none; }\n}\n\n/* 技能目录与详情继承同一个浅色状态，不改变数据、预览与打开动作。 */\n";
    const NAVIGATION_CSS_TEXT = "/* 页面前进后退：只在导航组件启用时生效；关闭后侧栏按钮回到原位置与尺寸。 */\nbody[data-dsc-codex-navigation] {\n  --dsc-navigation-native-shift: 0px;\n  /* 宿主 Windows 捕获菜单由 preload 按 left: var(--dsh-windows-menu-start, 48px) 定位。\n     收起态宿主会把它抬到 84px 给原生新建会话键让位，但本插件收起态用自有 rail，那个键不可见。\n     两态统一按“展开默认 48px + 位移”定位，菜单始终紧接折叠键右缘 8px。 */\n  --dsh-windows-menu-start: 48px;\n}\n\n/* 后退 / 前进：两个 32px 按钮，left 8，gap 2；中心约 24 / 58。 */\n/* 前进/后退放到 52px 窄栏底部竖排，避开原生侧栏顶部图标。 */\nbody[data-dsc-codex-navigation] .dsc-nav-controls {\n  position: fixed;\n  bottom: 96px;\n  left: 8px;\n  flex-direction: column;\n  z-index: 36;\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  -webkit-app-region: no-drag;\n}\n\n.dsc-nav-controls .dsc-nav-button {\n  box-sizing: border-box;\n  width: 32px;\n  height: 32px;\n  display: grid;\n  place-items: center;\n  padding: 0;\n  border: 0;\n  border-radius: 8px;\n  background: transparent;\n  color: var(--cx-text-3);\n  cursor: default;\n  -webkit-app-region: no-drag;\n  transition: background-color 120ms ease, color 120ms ease;\n}\n\n.dsc-nav-controls .dsc-nav-button[aria-disabled='true'] {\n  color: var(--cx-text-2);\n}\n\n.dsc-nav-controls .dsc-nav-button:not([aria-disabled='true']) {\n  cursor: pointer;\n}\n\n.dsc-nav-controls .dsc-nav-button:not([aria-disabled='true']):hover,\n.dsc-nav-controls .dsc-nav-button:not([aria-disabled='true']):focus-visible {\n  background: #ffffff14;\n  color: var(--cx-text-3);\n}\n\n.dsc-nav-controls .dsc-nav-button:focus-visible {\n  outline: 1px solid #ffffff40;\n  outline-offset: -1px;\n}\n\n/* 复用的侧栏按钮移到第三位：中心约 92；内部按钮同步 32px / 8px 圆角。 */\nbody[data-dsc-codex-navigation] .dsc-window-sidebar-toggle {\n  top: 4px;\n  left: 76px;\n}\n\nbody[data-dsc-codex-navigation] .dsc-window-sidebar-toggle .dsc-icon-button {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n}\n\n/* 悬停/键盘聚焦提示：深灰圆角；portal 到 body 且高于标题栏拖拽区。 */\n.dsc-nav-tooltip {\n  position: fixed;\n  z-index: 10002;\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  max-width: calc(100vw - 16px);\n  padding: 6px 10px;\n  border-radius: 12px;\n  background: #303030;\n  color: var(--cx-text);\n\n  line-height: 18px;\n  white-space: nowrap;\n  box-shadow: 0 6px 20px #0006;\n  pointer-events: none;\n  -webkit-app-region: no-drag;\n}\n\n.dsc-nav-tooltip__keys {\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n  margin-left: 8px;\n}\n\n.dsc-nav-tooltip__key {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 5px;\n  border-radius: 6px;\n  background: #505050;\n  color: #ededed;\n\n  line-height: 18px;\n}\n\n.dsc-nav-tooltip__plus {\n  padding: 0 1px;\n  color: var(--cx-text-3);\n\n  line-height: 18px;\n}\n\n/* 原生固定按钮右移：只标记最小宿主按钮；右上窗口按钮与标题栏拖拽区不移动。 */\nbody[data-dsc-codex-navigation] [data-dsc-navigation-native-shift] {\n  transform: translateX(var(--dsc-navigation-native-shift));\n}\n\n/* 自绘侧栏按钮覆盖原生旧位置；原生切换键隐藏，避免两套按钮露出或重叠。 */\n/* 原生侧栏可见后，折叠键交还宿主，插件不再隐藏它。 */\nbody[data-dsc-codex-navigation] [data-dsc-navigation-native-toggle] {\n  visibility: visible;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .dsc-nav-controls .dsc-nav-button {\n    transition: none;\n  }\n}\n\n";
    const PLUGIN_VERSION = "0.2.7";
    const PLUGIN_PACKAGE = "@qinova-ai/dsh-codex-ui";
    const module = { exports: {} };
    const exports = module.exports;
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

// 轨道级图标同样使用宿主产品图标；home 无原生房子图标，沿用宿主 Layers。
// 图标组件在主客户端源码中才解构，这里必须在调用时解析，避免顶层引用早于初始化。
function PrototypeIcon({ name, className = '' }) {
  const component = {
    home: IconLayersOutlineRegular, tasks: IconAlarmClockOutlineRegular,
    plugins: IconCordisPluginOutlineRegular, settings: IconSettingsOutlineRegular, newChat: IconNewChatOutlineRegular
  }[name] || IconLayersOutlineRegular;
  return h(component, { size: 16, className });
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
        h('div', { className: 'dsc-sidebar__header' }, category === 'home'
          ? h('div', { className: 'dsc-brand-native', 'aria-label': 'DeepSeek Harness' },
            h('span', { className: 'dsc-brand-native__mark', 'aria-hidden': true }, h(FishLogo, { size: 24 })),
            h('span', { className: 'dsc-brand-native__wordmark', 'aria-hidden': true }, h(BrandWordmark, { size: 24, includeMark: false })))
          : h('strong', { className: 'dsc-section-page-title' }, category === 'tasks' ? '定时任务' : category === 'more' ? '更多' : '自定义'),
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
    return h(React.Fragment, null, h('span', { ref: marker, hidden: true }), h(Navigation));
  };
}

// 此常驻入口不替换 AppFrame，也不修改系统标题栏；collapsed 时仍可重新打开侧栏。
function makeSidebarToggle(ctx) {
  return function SidebarToggle() {
    return createPortal(h('div', { className: 'dsc-ui dsc-window-sidebar-toggle' }, h('button', { type: 'button', className: 'dsc-icon-button', title: '显示或隐藏侧边栏', 'aria-label': '显示或隐藏侧边栏', onClick: () => ctx.layout.toggleSidebar() }, h(IconPanelLeftOutlineRegular, { size: 16 }))), document.body);
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
      h('button', { ref: anchor, type: 'button', className: 'dsc-gear-button', 'aria-label': '账号与设置', 'aria-haspopup': 'menu', 'aria-expanded': open, onClick: () => setOpen(!open) }, h(IconUserOutlineRegular, { size: 18 })),
      open && h(Popover, { anchor, onClose: () => setOpen(false), label: '设置与账号', width: 228, className: 'dsc-app-menu', panelRef: menuRef, extraRoots: footerRoot ? [footerRoot] : [] },
        h('button', { type: 'button', className: 'dsc-account-row', role: 'menuitem', onClick: showSettings, title: '在账号子页面中管理' }, profile?.avatarUrl && !avatarFailed ? h('img', { src: profile.avatarUrl, alt: '', onError: () => setAvatarFailed(true) }) : h('span', { className: 'dsc-account-avatar' }, h(Icon, { name: 'chat' })), h('span', null, h('strong', null, profile?.name || profile?.contact || '账号'), h('small', null, profile ? '账号与设置' : failed ? '打开账号设置' : '正在读取账号…'))),
        h('div', { className: 'dsc-menu-separator', role: 'separator' }),
        h(Option, { title: '设置', icon: 'settings', onClick: showSettings }))), document.body);
  };
}

// DSH 0.2.2-rc.3 兼容边界：固定状态尚未公开为 ctx service。
// 只调用原 sidebar 注册的注入工厂，复用其闭包中的状态和动作；不创建第二份 pin 状态。
function createSidebarPinAdapter(ctx) {
  const empty = { available: false, unpinned: [] };
  const store = createSnapshotStore(empty);
  let source;
  let setPinned;
  let unsubscribe;
  let owner;
  const publish = () => {
    const unpinned = source?.getSnapshot();
    const previous = store.getSnapshot();
    const available = Array.isArray(unpinned) && typeof setPinned === 'function';
    const ids = available ? unpinned : empty.unpinned;
    if (previous.available !== available || previous.unpinned !== ids) store.set({ available, unpinned: ids });
  };
  const detach = () => {
    unsubscribe?.(); unsubscribe = undefined;
    owner = source = setPinned = undefined;
  };
  const sync = () => {
    // single slot 只返回当前生效注册；StoredEntry 的 inject/children 在顶层。
    const current = ctx.slots.entriesOfSlot('sidebar')[0];
    const entry = current?.children?.['sidebar.panellist.actions'] && typeof current.inject === 'function' ? current : undefined;
    if (entry === owner) return;
    detach();
    if (entry) {
      try {
        const injected = entry.inject();
        const candidate = injected?.hooks?.entryPins;
        if (typeof candidate?.getSnapshot === 'function' && typeof candidate.subscribe === 'function' && typeof injected.setPinned === 'function') {
          source = candidate;
          setPinned = injected.setPinned;
          owner = entry;
          unsubscribe = source.subscribe(publish);
        }
      } catch (error) {
        console.warn('codex-style: 无法接入当前 sidebar 固定状态', error);
      }
    }
    publish();
  };
  return {
    store,
    canPin: id => store.getSnapshot().available && id !== 'plugins',
    setPinned(id, pinned) {
      if (!store.getSnapshot().available) throw new Error('当前宿主未提供导航固定接口');
      if (id !== 'plugins') setPinned(id, pinned);
    },
    start() {
      const stop = ctx.slots.subscribe('sidebar', sync);
      sync();
      return () => { stop(); detach(); publish(); };
    }
  };
}

function createSidebarPinMenu() {
  const store = createSnapshotStore(null);
  return {
    store,
    open: entry => store.set(entry),
    close(restoreFocus = false) {
      const previous = store.getSnapshot();
      store.set(null);
      if (restoreFocus && previous) queueMicrotask(() => {
        const target = previous.anchor?.isConnected ? previous.anchor : document.querySelector('[data-dsc-preview-trigger="more"]');
        target?.focus({ preventScroll: true });
      });
    }
  };
}

function SidebarPinContextMenu({ sidebar }) {
  const menu = useSource(sidebar.pinMenu.store);
  const pins = useSource(sidebar.pins.store);
  const ref = useRef(null);
  const [error, setError] = useState('');
  useLayoutEffect(() => {
    if (!menu || !ref.current) return;
    const box = menu.anchor.getBoundingClientRect();
    const element = ref.current;
    const x = menu.x ?? box.right + 4;
    const y = menu.y ?? box.top;
    element.style.left = Math.max(8, Math.min(x, window.innerWidth - element.offsetWidth - 8)) + 'px';
    element.style.top = Math.max(8, Math.min(y, window.innerHeight - element.offsetHeight - 8)) + 'px';
    element.querySelector('button')?.focus({ preventScroll: true });
    setError('');
  }, [menu]);
  useEffect(() => {
    if (!menu) return;
    const outside = event => { if (!ref.current?.contains(event.target)) sidebar.pinMenu.close(); };
    const key = event => {
      if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); sidebar.pinMenu.close(true); }
      else if (event.key === 'Tab') sidebar.pinMenu.close();
    };
    const dismiss = () => sidebar.pinMenu.close();
    document.addEventListener('pointerdown', outside, true);
    document.addEventListener('keydown', key, true);
    window.addEventListener('resize', dismiss);
    window.addEventListener('blur', dismiss);
    return () => {
      document.removeEventListener('pointerdown', outside, true);
      document.removeEventListener('keydown', key, true);
      window.removeEventListener('resize', dismiss);
      window.removeEventListener('blur', dismiss);
    };
  }, [menu, sidebar]);
  useEffect(() => {
    if (menu && (!pins.available || pins.unpinned.includes(menu.id))) sidebar.pinMenu.close(true);
  }, [menu, pins, sidebar]);
  if (!menu || !pins.available) return null;
  return createPortal(h('div', {
    ref, className: 'dsc-ui dsc-pin-context-menu', role: 'menu', 'aria-label': menu.label + '导航操作',
    onKeyDown: event => { if (event.key === 'ArrowDown' || event.key === 'ArrowUp' || event.key === 'Home' || event.key === 'End') { event.preventDefault(); ref.current?.querySelector('button')?.focus(); } }
  }, h('button', {
    type: 'button', role: 'menuitem', onClick: () => {
      try { sidebar.pins.setPinned(menu.id, false); sidebar.pinMenu.close(true); }
      catch (reason) { setError(errorText(reason)); }
    }
  }, h(Icon, { name: 'pin' }), '从左侧栏取消固定'), error && h('div', { role: 'alert' }, error)), document.body);
}

const React = require('react');
const { createPortal } = require('react-dom');
const {
  Button, IconRefreshOutlineRegular,
  IconFolderCloseRegular, IconFolderOpenRegular, IconNewChatOutlineRegular, IconEditOutlineRegular,
  IconSearchOutlineRegular, IconPlusOutlineRegular, IconAppsAddOutlineRegular, IconChevronDownOutlineRegular,
  IconChevronLeftOutlineRegular, IconChevronRightOutlineRegular, IconCheckOutlineRegular,
  IconPinOutlineRegular, IconPinFillRegular, IconArchiveOutlineRegular, IconInfoOutlineRegular,
  IconRightUpOutlineRegular, IconCloseOutlineRegular, IconSettingsOutlineRegular, IconSkillOutlineRegular,
  IconLayersOutlineRegular, IconAlarmClockOutlineRegular, IconCordisPluginOutlineRegular,
  IconPanelLeftOutlineRegular, IconDownloadOutlineRegular, IconEllipsisOutlineRegular, IconLoadingOutlineRegular, IconUserOutlineRegular,
  FishLogo, BrandWordmark
} = require('@deepseek-ai/dsh-client-ui-primitives');
const { createSnapshotStore } = require('@deepseek-ai/dsh-client-store');
const h = React.createElement;
const { useState, useEffect, useLayoutEffect, useRef, useMemo, useCallback, useSyncExternalStore, useId } = React;
const PLUGIN_ID = 'dsh-codex-ui';

// 图标统一使用宿主产品图标（宿主 sprite 渲染、描边网格与 DSH 原生一致、继承 currentColor）。
// 无直接对应的沿用宿主语义最近项：chat→NewChat、monitor→Info、more→AppsAdd。
const NATIVE_ICONS = {
  folder: IconFolderCloseRegular, folderOpen: IconFolderOpenRegular, chat: IconNewChatOutlineRegular,
  pencil: IconEditOutlineRegular, search: IconSearchOutlineRegular, plus: IconPlusOutlineRegular,
  more: IconAppsAddOutlineRegular, chevron: IconChevronDownOutlineRegular, check: IconCheckOutlineRegular,
  pin: IconPinOutlineRegular, archive: IconArchiveOutlineRegular, monitor: IconInfoOutlineRegular,
  arrowUpRight: IconRightUpOutlineRegular, close: IconCloseOutlineRegular,
  settings: IconSettingsOutlineRegular, skill: IconSkillOutlineRegular
};
function Icon({ name, size = 16, className }) {
  return h(NATIVE_ICONS[name] || NATIVE_ICONS.chat, { size, className });
}
// 以页面时间轴零点对齐，错开开始、等待恢复和重新挂载的运行圈保持同一转角。
function syncSessionSpinner(svg) {
  if (!svg) return;
  for (const animation of svg.getAnimations()) {
    if (animation.animationName === 'dsc-session-spin') animation.startTime = 0;
  }
}
function useSource(source) {
  const subscribe = useCallback(fn => source.subscribe(fn), [source]);
  const snapshot = useCallback(() => source.getSnapshot(), [source]);
  return useSyncExternalStore(subscribe, snapshot, snapshot);
}
// 归档成功提示：顶部居中「已归档」+ 真实撤销/关闭；停留 6 秒后用 1 秒原路淡出。
const ARCHIVE_NOTICE_HOLD_MS = 6000;
const ARCHIVE_NOTICE_FADE_MS = 1000;
function createArchiveNotice(unarchive) {
  const store = createSnapshotStore(null);
  let seq = 0;
  const show = sessionId => {
    seq += 1;
    store.set({ id: seq, sessionId, phase: 'visible', pending: false, error: '' });
  };
  const leave = id => {
    const current = store.getSnapshot();
    if (!current || current.id !== id || current.phase !== 'visible') return;
    store.set({ ...current, phase: 'leaving' });
  };
  const clear = id => {
    const current = store.getSnapshot();
    if (current && current.id === id) store.set(null);
  };
  const close = id => {
    const current = store.getSnapshot();
    if (!current || current.id !== id) return;
    store.set({ ...current, phase: 'leaving', pending: false });
  };
  const undo = async id => {
    const current = store.getSnapshot();
    if (!current || current.id !== id || current.pending || current.phase !== 'visible') return;
    store.set({ ...current, pending: true, error: '' });
    try {
      const result = await unarchive(current.sessionId);
      if (result?.ok === false) throw result.error || new Error('取消归档失败');
      const latest = store.getSnapshot();
      if (latest && latest.id === id) store.set({ ...latest, pending: false, phase: 'leaving' });
    } catch (error) {
      const latest = store.getSnapshot();
      if (latest && latest.id === id) store.set({ ...latest, pending: false, error: errorText(error) });
    }
  };
  // 停用插件时清空并推进序号，让在途的撤销/关闭完成回调失效。
  const dispose = () => { seq += 1; store.set(null); };
  return { store, show, leave, clear, close, undo, dispose };
}
function ArchiveNotice({ notice }) {
  const current = useSource(notice.store);
  const id = current?.id;
  const phase = current?.phase;
  const pending = current?.pending === true;
  const error = current?.error || '';
  useEffect(() => {
    if (id === undefined) return undefined;
    if (phase === 'leaving') {
      const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true;
      const timer = setTimeout(() => notice.clear(id), reduced ? 0 : ARCHIVE_NOTICE_FADE_MS);
      return () => clearTimeout(timer);
    }
    if (pending || error) return undefined;
    const timer = setTimeout(() => notice.leave(id), ARCHIVE_NOTICE_HOLD_MS);
    return () => clearTimeout(timer);
  }, [id, phase, pending, error, notice]);
  if (!current) return null;
  return createPortal(h('div', { key: current.id, className: 'dsc-ui dsc-archive-notice', 'data-phase': current.phase, role: 'status', 'aria-live': 'polite' },
    h('div', { className: 'dsc-archive-notice-body' },
      h('span', { className: 'dsc-archive-notice-text' }, '已归档'),
      error && h('span', { className: 'dsc-archive-notice-error' }, '撤销失败：' + error)),
    h('button', { type: 'button', className: 'dsc-archive-notice-undo', disabled: pending, onClick: () => notice.undo(id) }, '撤销'),
    h('button', { type: 'button', className: 'dsc-archive-notice-close', 'aria-label': '关闭归档提示', onClick: () => notice.close(id) }, h(Icon, { name: 'close', size: 14 }))), document.body);
}
function errorText(error) { return error?.message || String(error); }
function ErrorLine({ text }) { return text ? h('div', { className: 'dsc-error', role: 'alert' }, text) : null; }
// 用 aria-disabled 代替原生 disabled：避免全局 `.dsc-ui button:disabled { opacity: .45 }` 在提交瞬间造成变暗闪烁。
function Option({ title, detail, icon, selected, onClick, disabled, warning }) {
  return h('button', { type: 'button', className: 'dsc-option', role: 'menuitemradio', 'aria-checked': !!selected, 'aria-disabled': disabled ? 'true' : undefined, 'data-warning': !!warning, onClick: e => { if (disabled) return; onClick?.(e); } },
    icon && h(Icon, { name: icon }),
    h('span', { className: 'dsc-option-copy' }, h('span', null, title), detail && h('small', null, detail)),
    selected && h(Icon, { name: 'check' }));
}

// 齿轮菜单会把公开 sidebar.footer.action 的原生节点作为“菜单上方分组”一并显示；
// 这些节点不在 Popover 的 DOM 子树内，因此把“点内/键盘范围”判定独立出来，供菜单与测试复用。
function isInsideMenuTarget(target, primary, extras) {
  if (!target) return false;
  const inside = node => Boolean(node && typeof node.contains === 'function' && node.contains(target));
  return inside(primary) || (extras || []).some(inside);
}
// 视觉顺序：外部分组在菜单上方，先参与方向键循环；菜单自身按钮随后。
function menuFocusItems(primary, extras) {
  const items = [];
  for (const root of [...(extras || []), primary]) {
    if (!root || typeof root.querySelectorAll !== 'function') continue;
    for (const node of root.querySelectorAll('button:not(:disabled)')) items.push(node);
  }
  return items;
}

// 所有浮层位于自己的 portal 根；只读取 anchor 与自己的 DOM，不查宿主私有选择器。
// placement: 'top' 为默认（上方优先、右缘对齐），'top-start' 为左缘对齐，'right' 用于行尾菜单。
function Popover({ anchor, point, onClose, label, width = 300, children, className = '', autoFocus = true, role = 'menu', placement = 'top', extraRoots = [], panelRef }) {
  const localRef = useRef(null);
  const ref = panelRef || localRef;
  const extras = useRef(extraRoots);
  extras.current = extraRoots;
  const [position, setPosition] = useState({ visibility: 'hidden' });
  useLayoutEffect(() => {
    const place = () => {
      if (!anchor.current || !ref.current) return;
      const box = anchor.current.getBoundingClientRect();
      const w = Math.min(width, window.innerWidth - 24);
      const size = ref.current.getBoundingClientRect();
      if (point) {
        setPosition({ position: 'fixed', left: Math.max(12, Math.min(point.x, window.innerWidth - w - 12)), top: Math.max(12, Math.min(point.y, window.innerHeight - size.height - 12)), width: w, maxHeight: Math.max(100, window.innerHeight - 24) });
        return;
      }
      if (placement === 'bottom') {
        const left = Math.max(12, Math.min(window.innerWidth - w - 12, box.right - w));
        const top = Math.max(12, Math.min(box.bottom + 9, window.innerHeight - size.height - 12));
        setPosition({ position: 'fixed', left, top, width: w, maxHeight: Math.max(100, window.innerHeight - 24) });
        return;
      }
      if (placement === 'right') {
        const spaceRight = window.innerWidth - box.right - 12;
        const left = spaceRight >= w ? box.right + 6 : Math.max(12, box.left - w - 6);
        const top = Math.max(12, Math.min(window.innerHeight - size.height - 12, box.top - 4));
        setPosition({ position: 'fixed', left, top, width: w, maxHeight: Math.max(100, window.innerHeight - 24) });
        return;
      }
      const left = Math.max(12, Math.min(window.innerWidth - w - 12, placement === 'top-start' ? box.left : box.right - w));
      const top = box.top - size.height - 9 >= 12 ? box.top - size.height - 9 : Math.max(12, Math.min(box.bottom + 9, window.innerHeight - size.height - 12));
      setPosition({ position: 'fixed', left, top, width: w, maxHeight: Math.max(100, window.innerHeight - 24) });
    };
    place();
    const observer = new ResizeObserver(place);
    if (ref.current) observer.observe(ref.current);
    window.addEventListener('resize', place);
    window.addEventListener('scroll', place, true);
    return () => { observer.disconnect(); window.removeEventListener('resize', place); window.removeEventListener('scroll', place, true); };
  }, [anchor, point, width, placement]);
  useEffect(() => {
    // 首次定位前菜单 visibility:hidden；等位置就绪再聚焦，冷启动从输入卡打开也能用 Escape。
    if (autoFocus && position.visibility !== 'hidden') (ref.current?.querySelector('input, [aria-checked="true"], button, [role="slider"]'))?.focus({ preventScroll: true });
  }, [autoFocus, position.visibility]);
  useEffect(() => {
    const pointer = e => { if (!isInsideMenuTarget(e.target, ref.current, extras.current) && !anchor.current?.contains(e.target)) onClose(); };
    const key = e => {
      if (e.key === 'Escape') {
        const active = typeof document !== 'undefined' ? document.activeElement : null;
        // 焦点已进入第三方自己的弹窗时，不抢它的 Escape；菜单/分组内或焦点丢失时才关闭。
        const within = isInsideMenuTarget(active, ref.current, extras.current) || isInsideMenuTarget(e.target, ref.current, extras.current) || anchor.current?.contains(active) || active === null || (typeof document !== 'undefined' && active === document.body);
        if (!within) return;
        e.preventDefault(); e.stopPropagation(); onClose(); anchor.current?.focus(); return;
      }
      if (e.key === 'Tab') {
        const active = typeof document !== 'undefined' ? document.activeElement : null;
        const inExtras = (extras.current || []).some(root => root && typeof root.contains === 'function' && root.contains(active));
        if (!inExtras) return;
        const items = menuFocusItems(ref.current, []);
        if (!items.length) return;
        e.preventDefault();
        items[e.shiftKey ? items.length - 1 : 0].focus();
        return;
      }
      if (!isInsideMenuTarget(e.target, ref.current, extras.current) || e.target.matches('input, [role="slider"]') || !['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(e.key)) return;
      const items = menuFocusItems(ref.current, extras.current);
      if (!items.length) return;
      e.preventDefault();
      const index = items.indexOf(document.activeElement);
      const next = e.key === 'Home' ? 0 : e.key === 'End' ? items.length - 1 : (index + (e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length;
      items[next]?.focus();
    };
    document.addEventListener('pointerdown', pointer, true);
    document.addEventListener('keydown', key, true);
    return () => { document.removeEventListener('pointerdown', pointer, true); document.removeEventListener('keydown', key, true); };
  }, [anchor, onClose, autoFocus]);
  return createPortal(h('div', { ref, className: 'dsc-ui dsc-menu ' + className, style: position, role, 'aria-label': label }, children), document.body);
}

// 行悬停详情卡：按原型实测放置（右侧、与行顶对齐），不复用菜单的向上翻转定位。
// 项目卡 321×130：名称+图钉 / 聊天数 / 分隔线 / 路径 / 分隔线 / 编辑项目；会话卡 470 宽与行顶差 6px。
function HoverCard({ anchor, kind, onClose, onEnter, onLeave, children }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ visibility: 'hidden' });
  useLayoutEffect(() => {
    const place = () => {
      if (!anchor.current || !ref.current) return;
      const box = anchor.current.getBoundingClientRect();
      const width = ref.current.offsetWidth;
      const height = ref.current.offsetHeight;
      const gap = kind === 'project' ? 5 : 12;
      let left = box.right + gap;
      if (left + width > window.innerWidth - 8) left = Math.max(8, Math.min(box.left - gap - width, window.innerWidth - width - 8));
      let top = kind === 'project' ? box.top : box.top - 6;
      if (top + height > window.innerHeight - 8) top = Math.max(8, window.innerHeight - height - 8);
      if (top < 8) top = 8;
      setPosition({ position: 'fixed', left: Math.round(left), top: Math.round(top), visibility: 'visible' });
    };
    place();
    const observer = new ResizeObserver(place);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [anchor, kind]);
  useEffect(() => {
    const onKey = event => { if (event.key === 'Escape') { event.preventDefault(); onClose(); } };
    window.addEventListener('resize', onClose);
    window.addEventListener('scroll', onClose, true);
    document.addEventListener('keydown', onKey, true);
    return () => { window.removeEventListener('resize', onClose); window.removeEventListener('scroll', onClose, true); document.removeEventListener('keydown', onKey, true); };
  }, [onClose]);
  return createPortal(h('div', { ref, className: 'dsc-ui dsc-row-pop dsc-row-pop--' + kind, style: position, role: 'dialog', 'aria-label': kind === 'project' ? '项目详情' : '对话详情', onPointerEnter: onEnter, onPointerLeave: onLeave }, children), document.body);
}
// 图钉为真实状态指示：DSH 只有会话置顶、没有工作区置顶，因此工作区始终显示空心「未置顶」。
function PinMark({ filled }) {
  return filled ? h(IconPinFillRegular, { size: 14 }) : h(IconPinOutlineRegular, { size: 14 });
}
function ProjectHoverCard({ data, anchor, onReveal, onEdit, ...root }) {
  return h(HoverCard, { anchor, kind: 'project', ...root },
    h('div', { className: 'dsc-row-pop__head' },
      h('span', { className: 'dsc-row-pop__name' }, h(Icon, { name: 'folder', size: 15 }), h('span', null, data.title)),
      h('span', { className: 'dsc-row-pop__pin', role: 'img', title: data.pinned ? '已置顶' : '未置顶（DSH 暂不支持工作区置顶）', 'aria-label': data.pinned ? '已置顶' : '未置顶' }, h(PinMark, { filled: data.pinned }))),
    h('div', { className: 'dsc-row-pop__line' }, h(Icon, { name: 'chat', size: 15 }), h('span', null, `${data.count} 次聊天`)),
    data.path && h('div', { className: 'dsc-row-pop__sep' }),
    data.path && h('button', { type: 'button', className: 'dsc-row-pop__line dsc-row-pop__line--path', title: '在文件资源管理器中显示', onClick: onReveal },
      h(Icon, { name: 'folder', size: 15 }), h('span', { className: 'dsc-row-pop__path' }, data.path), h(Icon, { name: 'arrowUpRight', size: 14, className: 'dsc-row-pop__arrow' })),
    h('div', { className: 'dsc-row-pop__sep' }),
    h('button', { type: 'button', className: 'dsc-row-pop__line dsc-row-pop__line--action', onClick: onEdit }, h(Icon, { name: 'settings', size: 15 }), h('span', null, '编辑项目')));
}
function ThreadHoverCard({ data, anchor, ...root }) {
  return h(HoverCard, { anchor, kind: 'thread', ...root },
    h('div', { className: 'dsc-row-pop__head' },
      h('p', { className: 'dsc-row-pop__excerpt' }, data.title),
      h('span', { className: 'dsc-row-pop__meta' }, h(Icon, { name: 'monitor', size: 14 }), data.status)),
    data.workspaceTitle && h('div', { className: 'dsc-row-pop__line' }, h(Icon, { name: 'folder', size: 15 }), h('span', null, data.workspaceTitle)),
    data.path && h('div', { className: 'dsc-row-pop__line' }, h(Icon, { name: 'folder', size: 15 }), h('span', { className: 'dsc-row-pop__path' }, data.path)));
}

// 「编辑项目」对话框：名称输入接真实工作区重命名，底部「移除本地项目」接真实工作区删除；
// 源文件夹只读展示当前路径，不提供添加/更换文件夹（DSH 无该能力）。
function EditWorkspaceDialog({ workspace, onClose, onRename, onDelete }) {
  const [name, setName] = useState(workspace.title || '');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState('');
  const input = useRef(null);
  useEffect(() => { input.current?.focus(); input.current?.select(); }, []);
  useEffect(() => {
    const onKey = event => { if (event.key === 'Escape') { event.preventDefault(); onClose(); } };
    document.addEventListener('keydown', onKey, true);
    return () => document.removeEventListener('keydown', onKey, true);
  }, [onClose]);
  const save = async () => {
    const title = name.trim();
    if (!title) { setError('项目名称不能为空'); return; }
    if (busy) return;
    if (title === (workspace.title || '')) { onClose(); return; }
    setBusy('save'); setError('');
    try { await onRename(title); onClose(); } catch (e) { setError(errorText(e)); setBusy(''); }
  };
  const remove = async () => {
    if (busy) return;
    if (!window.confirm(`移除本地项目「${workspace.title || ''}」？项目中的对话会保留在项目分组中。`)) return;
    setBusy('remove'); setError('');
    try { await onDelete(); onClose(); } catch (e) { setError(errorText(e)); setBusy(''); }
  };
  return createPortal(h('div', { className: 'dsc-ui dsc-modal', role: 'presentation' },
    h('div', { className: 'dsc-modal__mask', 'aria-hidden': true, onClick: onClose }),
    h('div', { className: 'dsc-modal__panel', role: 'dialog', 'aria-modal': 'true', 'aria-labelledby': 'dsc-edit-workspace-title' },
      h('div', { className: 'dsc-modal__head' },
        h('h2', { id: 'dsc-edit-workspace-title' }, '编辑项目'),
        h('button', { type: 'button', className: 'dsc-modal__close', title: '关闭', 'aria-label': '关闭', onClick: onClose }, h(Icon, { name: 'close', size: 16 }))),
      h('div', { className: 'dsc-modal__field' },
        h(Icon, { name: 'folder', size: 16 }),
        h('input', { ref: input, className: 'dsc-modal__input', value: name, onChange: e => setName(e.target.value), onKeyDown: e => { if (e.key === 'Enter') { e.preventDefault(); save(); } }, 'aria-label': '项目名称', placeholder: '项目名称' })),
      h('div', { className: 'dsc-modal__label' }, '源文件夹'),
      h('div', { className: 'dsc-modal__source' }, h(Icon, { name: 'folder', size: 16 }), h('span', { className: 'dsc-modal__path', title: workspace.path || '' }, workspace.path || '未记录路径')),
      h(ErrorLine, { text: error }),
      h('div', { className: 'dsc-modal__actions' },
        h('button', { type: 'button', className: 'dsc-modal__remove', onClick: remove, disabled: !!busy }, busy === 'remove' ? '正在移除…' : '移除本地项目'),
        h('div', { className: 'dsc-modal__spacer' }),
        h('button', { type: 'button', className: 'dsc-modal__cancel', onClick: onClose, disabled: !!busy }, '取消'),
        h('button', { type: 'button', className: 'dsc-modal__save', onClick: save, disabled: !!busy }, busy === 'save' ? '保存中…' : '保存')))), document.body);
}

function RenameThreadDialog({ thread, onClose, onRename }) {
  const [name, setName] = useState(thread.title || '未命名对话');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const panel = useRef(null);
  const input = useRef(null);
  const submitting = useRef(false);
  useEffect(() => {
    const previous = document.activeElement;
    input.current?.focus(); input.current?.select();
    return () => { if (previous?.isConnected) previous.focus({ preventScroll: true }); };
  }, []);
  const close = () => { if (!submitting.current) onClose(); };
  const save = async event => {
    event.preventDefault();
    if (submitting.current) return;
    const title = name.trim();
    if (!title) { setError('对话名称不能为空'); input.current?.focus(); return; }
    if (title === thread.title) { onClose(); return; }
    submitting.current = true; setBusy(true); setError('');
    try { await onRename(title); onClose(); }
    catch (e) { submitting.current = false; setBusy(false); setError(errorText(e)); }
  };
  const keyDown = event => {
    if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); close(); }
    if (event.key !== 'Tab') return;
    const items = [...panel.current.querySelectorAll('input:not(:disabled), button:not(:disabled)')];
    const first = items[0], last = items[items.length - 1];
    if (!first) { event.preventDefault(); return; }
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  };
  return createPortal(h('div', { className: 'dsc-ui dsc-modal', onKeyDown: keyDown },
    h('div', { className: 'dsc-modal__mask', 'aria-hidden': true, onClick: close }),
    h('form', { ref: panel, className: 'dsc-modal__panel', role: 'dialog', 'aria-modal': true, 'aria-label': '重命名对话', 'aria-busy': busy, onSubmit: save },
      h('div', { className: 'dsc-modal__head' }, h('h2', null, '重命名对话'),
        h('button', { type: 'button', className: 'dsc-modal__close', 'aria-label': '关闭重命名', disabled: busy, onClick: close }, h(Icon, { name: 'close' }))),
      h('div', { className: 'dsc-modal__field' }, h(Icon, { name: 'pencil' }),
        h('input', { ref: input, className: 'dsc-modal__input', 'aria-label': '对话名称', value: name, disabled: busy, onChange: e => setName(e.target.value), onKeyDown: e => { if (e.key === 'Enter' && (e.nativeEvent.isComposing || e.keyCode === 229)) e.preventDefault(); } })),
      h(ErrorLine, { text: error }),
      h('div', { className: 'dsc-modal__actions' }, h('div', { className: 'dsc-modal__spacer' }),
        h('button', { type: 'button', className: 'dsc-modal__cancel', disabled: busy, onClick: close }, '取消'),
        h('button', { type: 'submit', className: 'dsc-modal__save', disabled: busy }, busy ? '保存中…' : '保存')))), document.body);
}

function relativeTime(value) {
  const timestamp = typeof value === 'number' ? value : Date.parse(value);
  if (!Number.isFinite(timestamp)) return '';
  const minutes = Math.max(0, Math.floor((Date.now() - timestamp) / 60000));
  return minutes < 1 ? '刚刚' : minutes < 60 ? minutes + '分钟前' : minutes < 1440 ? Math.floor(minutes / 60) + '小时前' : Math.floor(minutes / 1440) + '天前';
}

// 测量标题当前可用宽度；侧栏拖宽、重命名都会重新计算。
function ThreadTitle({ title }) {
  const viewport = useRef(null);
  const text = useRef(null);
  useLayoutEffect(() => {
    const measure = () => {
      const overflow = Math.max(0, text.current.scrollWidth - viewport.current.clientWidth);
      viewport.current.dataset.overflow = String(overflow > 1);
      viewport.current.style.setProperty('--dsc-title-shift', -overflow + 'px');
      // 按距离计算时长，使轻微溢出与长标题都以录像约 30 CSS px/s 的速度移动。
      viewport.current.style.setProperty('--dsc-title-duration', overflow / 30 + 's');
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(viewport.current);
    observer.observe(text.current);
    return () => observer.disconnect();
  }, [title]);
  return h('span', { ref: viewport, className: 'dsc-thread-title' }, h('span', { ref: text, className: 'dsc-thread-title-text' }, title));
}

// 提示 portal 到 body，避免被滚动区或正在开合的项目裁掉；延迟和进退由 CSS 控制。
function RowTooltip({ anchor, open, label, onClose }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({});
  useLayoutEffect(() => {
    if (!open) return;
    const box = anchor.current.getBoundingClientRect();
    const tip = ref.current.getBoundingClientRect();
    setPosition({ left: Math.max(8, Math.min(box.left + (box.width - tip.width) / 2, window.innerWidth - tip.width - 8)), top: box.top - tip.height - 7 >= 8 ? box.top - tip.height - 7 : box.bottom + 7 });
    window.addEventListener('resize', onClose);
    window.addEventListener('scroll', onClose, true);
    return () => { window.removeEventListener('resize', onClose); window.removeEventListener('scroll', onClose, true); };
  }, [anchor, open, label, onClose]);
  return createPortal(h('div', { ref, className: 'dsc-ui dsc-row-tooltip', role: 'tooltip', 'aria-hidden': !open, 'data-open': open, style: position }, label), document.body);
}

function ThreadAction({ label, active, onIntent, onClick, className = '', pressed, children }) {
  const anchor = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const close = useCallback(() => { setHovered(false); setFocused(false); }, []);
  useEffect(() => { if (!active) close(); }, [active, close]);
  return h(React.Fragment, null,
    h('button', { ref: anchor, type: 'button', className: 'dsc-thread-action ' + className, 'aria-label': label, 'aria-pressed': pressed,
      onPointerEnter: () => { onIntent(); setHovered(true); }, onPointerLeave: () => setHovered(false),
      onFocus: e => { if (e.currentTarget.matches(':focus-visible')) { onIntent(); setFocused(true); } }, onBlur: () => setFocused(false),
      onClick: () => { close(); onIntent(); onClick(); } }, children),
    h(RowTooltip, { anchor, open: active && (hovered || focused), label, onClose: close }));
}

function ProjectFold({ open, children, className = '' }) {
  return h('div', { className: 'dsc-project-fold ' + className, 'data-open': open, 'aria-hidden': !open, ref: node => { if (node) node.inert = !open; } },
    h('div', { className: 'dsc-project-clip' }, children));
}

// 宿主完成提醒仅检查 mainView；此处补上窗口焦点和真实主区，状态只属于当前插件页面。
function createSessionCompletionTracker(ctx) {
  const store = createSnapshotStore(new Set());
  let previousRunning = new Map();
  let previousHostUnread = new Set();
  let windowFocused = false;
  const reconcile = () => {
    const catalog = ctx.sessions.list.getSnapshot();
    const status = ctx.uiSession.sessionStatus.getSnapshot();
    const panel = ctx.layout.panelInfo.getSnapshot();
    const viewingConversation = windowFocused && document.visibilityState === 'visible' && panel.activePanelId === null;
    const viewedId = viewingConversation ? catalog.ids.find(id => (catalog.byId[id]?.retainedBy?.mainView ?? 0) > 0) : undefined;
    const next = new Set(store.getSnapshot());
    const running = new Map();
    const hostUnread = new Set();
    for (const id of new Set([...catalog.ids, ...status.keys()])) {
      const state = status.get(id);
      const isRunning = state?.running ?? catalog.byId[id]?.running;
      running.set(id, isRunning);
      if (state?.completionUnread) hostUnread.add(id);
      const justCompleted = previousRunning.get(id) === true && isRunning === false;
      const hostCompleted = state?.completionUnread && !previousHostUnread.has(id);
      if (isRunning || id === viewedId) next.delete(id);
      else if (justCompleted || hostCompleted) next.add(id);
    }
    if (catalog.phase === 'ready') for (const id of next) if (!catalog.byId[id]) next.delete(id);
    previousRunning = running;
    previousHostUnread = hostUnread;
    const before = store.getSnapshot();
    if (next.size !== before.size || [...next].some(id => !before.has(id))) store.set(next);
  };
  const start = () => {
    windowFocused = document.hasFocus();
    const focus = () => { windowFocused = true; reconcile(); };
    const blur = () => { windowFocused = false; reconcile(); };
    const visibility = () => { windowFocused = document.hasFocus(); reconcile(); };
    const disposers = [ctx.sessions.list, ctx.uiSession.sessionStatus, ctx.layout.panelInfo].map(source => source.subscribe(reconcile));
    window.addEventListener('focus', focus);
    window.addEventListener('blur', blur);
    document.addEventListener('visibilitychange', visibility);
    reconcile();
    return () => {
      disposers.forEach(dispose => dispose());
      window.removeEventListener('focus', focus);
      window.removeEventListener('blur', blur);
      document.removeEventListener('visibilitychange', visibility);
    };
  };
  return { store, start };
}

// 项目内默认只显示最近 6 条；活动行位于后方时按需放宽，置顶、最近与搜索结果不受影响。
const PROJECT_SESSION_LIMIT = 6;

function makeWorkspaceTree(ctx, completionStore, archiveNotice) {
  return function WorkspaceTree({ query = '', tools = true, active = true, onNavigate }) {
    const catalog = useSource(ctx.sessions.list);
    const workspaces = useSource(ctx.workspaces.list);
    const status = useSource(ctx.uiSession.sessionStatus);
    const completions = useSource(completionStore);
    const panel = useSource(ctx.layout.panelInfo);
    const [expanded, setExpanded] = useState({});
    const [moreExpanded, setMoreExpanded] = useState({});
    const [projectsOpen, setProjectsOpen] = useState(true);
    const [showArchived, setShowArchived] = useState(false);
    const [message, setMessage] = useState('');
    const [adding, setAdding] = useState(false);
    const [menu, setMenu] = useState(null);
    const [projectMenu, setProjectMenu] = useState(null);
    const [hover, setHover] = useState(null);
    const [editing, setEditing] = useState(null);
    const [renaming, setRenaming] = useState(null);
    const menuAnchor = useRef(null);
    const projectAnchor = useRef(null);
    const hoverAnchor = useRef(null);
    const hoverTimer = useRef(null);
    const alive = useRef(true);
    useEffect(() => { alive.current = true; return () => { alive.current = false; clearTimeout(hoverTimer.current); }; }, []);
    useEffect(() => {
      if (active) return;
      clearTimeout(hoverTimer.current);
      setHover(null); setMenu(null); setProjectMenu(null); setEditing(null); setRenaming(null);
    }, [active]);
    const run = async action => { setMessage(''); try { await action(); } catch (e) { if (alive.current) setMessage(errorText(e)); } };
    const archived = useMemo(() => new Set(workspaces.archivedSessionIds), [workspaces.archivedSessionIds]);
    const pinned = useMemo(() => new Set(workspaces.pinnedSessionIds), [workspaces.pinnedSessionIds]);
    // 一次建立归属索引；保留多项目引用时的旧呈现，以及搜索/详情使用首个项目的语义。
    const memberships = useMemo(() => {
      const index = new Map();
      for (const workspace of workspaces.items) for (const id of new Set(workspace.sessionIds)) {
        if (!index.has(id)) index.set(id, []);
        index.get(id).push(workspace);
      }
      return index;
    }, [workspaces.items]);
    const workspaceOf = id => memberships.get(id)?.[0];
    const ordered = useMemo(() => catalog.ids.map(id => catalog.byId[id])
      .filter(s => s && s.origin !== 'subagent' && !s.blank)
      .map(s => ({ ...s, sessionId: s.id, title: s.title || s.displayTitle }))
      .sort((a, b) => (Number(b.updatedAt) || Date.parse(b.updatedAt) || 0) - (Number(a.updatedAt) || Date.parse(a.updatedAt) || 0)), [catalog.ids, catalog.byId]);
    const currentId = useMemo(() => catalog.ids.find(id => (catalog.byId[id]?.retainedBy?.mainView ?? 0) > 0), [catalog.ids, catalog.byId]);
    const searchText = query.trim().toLowerCase();
    const visible = useMemo(() => ordered.filter(s => (showArchived || !archived.has(s.sessionId)) &&
      (!searchText || `${s.title || ''} ${memberships.get(s.sessionId)?.[0]?.title || ''}`.toLowerCase().includes(searchText))), [ordered, archived, showArchived, searchText, memberships]);
    const groups = useMemo(() => {
      const projects = new Map(), pins = [];
      for (const session of visible) {
        if (pinned.has(session.sessionId)) { pins.push(session); continue; }
        const owners = memberships.get(session.sessionId);
        if (!owners) continue;
        for (const workspace of owners) {
          if (!projects.has(workspace.workspaceId)) projects.set(workspace.workspaceId, []);
          projects.get(workspace.workspaceId).push(session);
        }
      }
      return { projects, pins };
    }, [visible, pinned, memberships]);
    // 归属只读宿主公开目录：首次发现当前会话所属项目时固化为展开，避免切换会话后按 currentId 实时派生把它误折叠。
    // 已有记录（含用户显式收起）一律保留；空白会话或目录异步到达时，等 currentId / memberships 更新再补记。
    useLayoutEffect(() => {
      if (currentId === undefined) return;
      const owners = memberships.get(currentId);
      if (!owners?.length) return;
      setExpanded(previous => {
        if (owners.every(workspace => previous[workspace.workspaceId] !== undefined)) return previous;
        const next = { ...previous };
        for (const workspace of owners) if (next[workspace.workspaceId] === undefined) next[workspace.workspaceId] = true;
        return next;
      });
    }, [currentId, memberships]);
    // 活动判据沿用现有状态源：当前会话、等待处理、父会话运行（live 优先，目录行只兜底）、子代理仍在运行、未读完成。
    const sessionActive = session => {
      if (session.sessionId === currentId) return true;
      const state = status.get(session.sessionId);
      if (state?.pendingInteraction) return true;
      // 父会话自身运行：live 状态优先，避免目录行旧的 running=true 压过 live false。
      if ((state?.running ?? session.running) === true) return true;
      // 子代理运行不并入父 running；沿宿主公开快照的 subagentCatalog 逐个子会话核对，任一仍在运行即视为活动。
      const subagents = catalog.projectionsBySession?.[session.sessionId]?.values?.subagentCatalog;
      if (Array.isArray(subagents) && subagents.some(child => (status.get(child.id)?.running ?? catalog.byId[child.id]?.running) === true)) return true;
      return completions.has(session.sessionId);
    };
    // 每个项目独立截断：默认前 6 条，后方有活动行时放宽到包含该行；手动展开后显示全部。
    const projectSessions = (workspaceId, children) => {
      if (moreExpanded[workspaceId] === true) return children;
      let count = Math.min(PROJECT_SESSION_LIMIT, children.length);
      for (let index = PROJECT_SESSION_LIMIT; index < children.length; index += 1) if (sessionActive(children[index])) count = index + 1;
      return children.slice(0, count);
    };
    const cancelHover = () => clearTimeout(hoverTimer.current);
    const hideHover = () => { clearTimeout(hoverTimer.current); setHover(null); };
    const closeHover = () => { cancelHover(); hoverTimer.current = setTimeout(() => setHover(null), 140); };
    const enterHover = (target, data) => {
      cancelHover();
      hoverAnchor.current = target;
      if (hover) setHover(data);
      else hoverTimer.current = setTimeout(() => setHover(data), 300);
    };
    const revealWorkspace = hoverData => {
      hideHover();
      run(async () => {
        const sessionRemote = ctx.remote?.session;
        if (typeof sessionRemote?.openWorkspacePath !== 'function') throw new Error('当前宿主不支持在文件管理器中显示文件夹');
        const result = await sessionRemote.openWorkspacePath({ path: hoverData.path, action: 'reveal' });
        if (result?.ok === false) throw result.error;
      });
    };
    const editWorkspace = workspace => {
      hideHover();
      setEditing(workspace);
    };
    const rename = async (row, title) => {
      const result = await ctx.sessions.using(row.sessionId, { source: 'workspaceOperation' }, reference => reference.binding.session.rename(title));
      if (result?.ok === false) throw result.error;
    };
    const togglePin = s => run(() => pinned.has(s.sessionId) ? ctx.uiWorkspace.unpinSession(s.sessionId) : ctx.uiWorkspace.pinSession(s.sessionId));
    // 归档成功才提示；取消归档仍走原动作且不提示。失败沿用 run/ErrorLine，不把失败当成功。
    const toggleArchive = s => {
      hideHover();
      if (archived.has(s.sessionId)) return run(() => ctx.uiWorkspace.unarchiveSession(s.sessionId));
      return run(async () => {
        const result = await ctx.uiWorkspace.archiveSession(s.sessionId);
        if (result?.ok === false) throw result.error || new Error('归档失败');
        archiveNotice.show(s.sessionId);
      });
    };
    // 继续使用原来的菜单与动作，只把入口改为整行右键（含 Shift+F10 / 菜单键）。
    const openThreadMenu = (event, s) => {
      event.preventDefault(); event.stopPropagation();
      menuAnchor.current = event.currentTarget.querySelector('.dsc-thread-main');
      const box = menuAnchor.current.getBoundingClientRect();
      const point = event.type === 'contextmenu' && (event.clientX || event.clientY) ? { x: event.clientX, y: event.clientY } : { x: box.left + 16, y: box.bottom };
      hideHover(); setProjectMenu(null); setMenu({ ...s, point });
    };
    const row = (s, rowActive = active) => {
      const state = status.get(s.sessionId);
      const actionsActive = rowActive && !menu && !projectMenu && !editing && !renaming;
      const pending = state?.pendingInteraction;
      const running = state?.running && !pending;
      const completed = completions.has(s.sessionId) && !pending && !state?.running;
      const activity = pending ? '等待处理' : state?.running ? '运行中' : completed ? '已完成' : relativeTime(s.updatedAt);
      return h('div', { key: s.sessionId, className: 'dsc-thread' + (s.sessionId === currentId && panel.activePanelId === null ? ' is-active' : '') + (archived.has(s.sessionId) ? ' is-archived' : '') + (pinned.has(s.sessionId) ? ' is-pinned' : ''),
        onContextMenu: e => openThreadMenu(e, s), onKeyDown: e => { if (e.key === 'ContextMenu' || (e.shiftKey && e.key === 'F10')) openThreadMenu(e, s); },
        onPointerEnter: e => enterHover(e.currentTarget, { kind: 'thread', id: s.sessionId, title: s.title || '未命名对话', status: activity, workspaceTitle: workspaceOf(s.sessionId)?.title, path: workspaceOf(s.sessionId)?.path }), onPointerLeave: closeHover },
        h('button', { type: 'button', className: 'dsc-thread-main', 'aria-haspopup': 'menu', onClick: () => { if (archived.has(s.sessionId)) run(() => ctx.uiWorkspace.unarchiveSession(s.sessionId)); else { ctx.uiWorkspace.openSession(s.sessionId); onNavigate?.(); } } },
          h('span', { className: 'dsc-state', 'data-state': pending ? 'pending' : 'idle' }, pending && h(Icon, { name: 'chat', size: 14 })),
          h(ThreadTitle, { title: s.title || '未命名对话' }),
          running ? h('span', { className: 'dsc-thread-running', role: 'img', 'aria-label': '对话进行中', title: '对话进行中' },
            h('span', { className: 'dsc-running-spinner', ref: syncSessionSpinner, onAnimationStart: event => syncSessionSpinner(event.currentTarget), 'aria-hidden': true },
              h(IconLoadingOutlineRegular, { size: 12 })))
            : completed ? h('span', { className: 'dsc-thread-completion', role: 'img', 'aria-label': '对话已完成，未读', title: '对话已完成，未读' }) : h('small', { className: 'dsc-thread-time' }, activity)),
        h('div', { className: 'dsc-thread-actions' },
          h(ThreadAction, { label: pinned.has(s.sessionId) ? '取消置顶聊天' : '置顶聊天', className: 'dsc-pin-action', pressed: pinned.has(s.sessionId), active: actionsActive, onIntent: hideHover, onClick: () => togglePin(s) }, h(PinMark, { filled: pinned.has(s.sessionId) })),
          h(ThreadAction, { label: archived.has(s.sessionId) ? '取消归档聊天' : '归档聊天', active: actionsActive, onIntent: hideHover, onClick: () => toggleArchive(s) }, h(Icon, { name: 'archive', size: 14 }))));
    };
    const addWorkspace = async () => {
      setAdding(true);
      await run(async () => {
        const picked = await ctx.uiWorkspace.pickDirectory();
        if (!picked) return;
        const path = typeof picked === 'string' ? picked : picked.path;
        if (!path) return;
        const created = await ctx.workspaces.create({ path });
        await ctx.uiWorkspace.openWorkspace(created.workspaceId);
        onNavigate?.();
      });
      if (alive.current) setAdding(false);
    };
    const projectHeading = h('div', { className: 'dsc-tree-tools', 'data-compact': !tools },
      h('button', { type: 'button', className: 'dsc-projects-toggle', 'aria-label': '项目', 'aria-expanded': projectsOpen, onClick: () => { hideHover(); setMenu(null); setProjectMenu(null); setProjectsOpen(!projectsOpen); } }, h('span', { className: 'dsc-tree-tools-label' }, '项目'), h(Icon, { name: 'chevron', size: 12 })),
      h('button', { type: 'button', className: 'dsc-icon-button', title: '添加工作区', onClick: addWorkspace, disabled: adding }, h(Icon, { name: 'plus' })));
    return h('div', { className: 'dsc-ui dsc-workspaces' },
      query && projectHeading,
      h(ErrorLine, { text: message || (catalog.error && errorText(catalog.error)) || (workspaces.error && errorText(workspaces.error)) }),
      h('div', { className: 'dsc-tree-scroll' },
        query ? h(React.Fragment, null, h('div', { className: 'dsc-section-title' }, '搜索结果'), visible.map(s => row(s))) : h(React.Fragment, null,
          pinned.size > 0 && h('section', null, h('div', { className: 'dsc-section-title' }, '置顶'), groups.pins.map(s => row(s))),
          projectHeading,
          h(ProjectFold, { open: projectsOpen, className: 'dsc-project-list-fold' }, h('div', { className: 'dsc-project-list' }, workspaces.items.map(w => {
            const children = groups.projects.get(w.workspaceId) || [];
            // 初帧保留当前会话派生作为过渡；useLayoutEffect 会在绘制前把尚无记录的所属项目固化为 true。
            const open = expanded[w.workspaceId] ?? w.sessionIds.includes(currentId);
            const shown = projectSessions(w.workspaceId, children);
            const hidden = children.length - shown.length;
            const more = moreExpanded[w.workspaceId] === true;
            const toggleMore = () => { hideHover(); setMenu(null); setProjectMenu(null); setMoreExpanded(previous => ({ ...previous, [w.workspaceId]: !(previous[w.workspaceId] === true) })); };
            return h('section', { key: w.workspaceId }, h('div', { className: 'dsc-project' + (currentId !== null && Array.isArray(w.sessionIds) && w.sessionIds.includes(currentId) ? ' is-current' : ''), onPointerEnter: e => enterHover(e.currentTarget, { kind: 'project', id: w.workspaceId, workspace: w, title: w.title || '未命名项目', count: children.length, path: w.path, pinned: w.pinned === true }), onPointerLeave: closeHover },
              h('button', { type: 'button', className: 'dsc-project-main', onClick: () => { hideHover(); setMenu(null); setProjectMenu(null); setExpanded(previous => ({ ...previous, [w.workspaceId]: !(previous[w.workspaceId] ?? w.sessionIds.includes(currentId)) })); }, 'aria-expanded': open }, h(Icon, { name: open ? 'folderOpen' : 'folder' }), h('span', null, w.title || '未命名项目')),
              h('button', { type: 'button', className: 'dsc-row-action', title: '项目菜单', 'aria-label': '项目菜单', 'aria-haspopup': 'menu', 'aria-expanded': projectMenu?.workspaceId === w.workspaceId, onClick: e => { projectAnchor.current = e.currentTarget; setHover(null); setProjectMenu(projectMenu?.workspaceId === w.workspaceId ? null : w); } }, '⋯'),
              h('button', { type: 'button', className: 'dsc-row-action', title: '在此项目新建对话', 'aria-label': '在此项目新建对话', onClick: () => { ctx.uiWorkspace.startSession(w.workspaceId); onNavigate?.(); } }, h(Icon, { name: 'pencil', size: 14 }))),
              h(ProjectFold, { open }, h('div', { className: 'dsc-project-children' }, children.length
                ? h(React.Fragment, null, shown.map(s => row(s, active && projectsOpen && open)),
                  children.length > PROJECT_SESSION_LIMIT && (more || hidden > 0) && h('button', { type: 'button', className: 'dsc-project-more', 'aria-expanded': more, onClick: toggleMore }, more ? '收起' : `显示更多（剩余 ${hidden}）`))
                : h('small', { className: 'dsc-empty' }, '暂无对话'))));
          }))),
          
        !visible.length && catalog.phase === 'ready' && h('div', { className: 'dsc-empty' }, query ? '没有匹配的对话' : '选择项目，开始新对话'),
        catalog.phase !== 'ready' && h('div', { className: 'dsc-empty', role: 'status' }, '正在加载会话…'))),
      h('label', { className: 'dsc-archive-toggle' }, h('input', { type: 'checkbox', checked: showArchived, onChange: e => setShowArchived(e.target.checked) }), '显示已归档对话'),
      menu && h(Popover, { anchor: menuAnchor, point: menu.point, onClose: () => setMenu(null), label: '对话菜单', width: 228 },
        h(Option, { title: '重命名', icon: 'pencil', onClick: () => { const target = menu; setMenu(null); hideHover(); setRenaming(target); } }),
        h(Option, { title: pinned.has(menu.sessionId) ? '取消置顶' : '置顶', icon: 'pin', onClick: () => { const target = menu; setMenu(null); togglePin(target); } }),
        h(Option, { title: '分叉对话', icon: 'chat', onClick: () => { const target = menu; setMenu(null); run(() => ctx.uiWorkspace.forkSession(target.sessionId)); } }),
        h(Option, { title: archived.has(menu.sessionId) ? '取消归档' : '归档', icon: 'archive', onClick: () => { const target = menu; setMenu(null); toggleArchive(target); } })),
      // Codex 风格项目菜单：仅提供编辑与移除项目两项，编辑复用现有编辑项目对话框；从行右侧下方展开。
      projectMenu && h(Popover, { anchor: projectAnchor, onClose: () => setProjectMenu(null), label: '项目菜单', width: 228, placement: 'right' },
        h(Option, { title: '编辑', icon: 'pencil', onClick: () => { const target = projectMenu; setProjectMenu(null); editWorkspace(target); } }),
        h(Option, { title: '移除项目', icon: 'close', onClick: () => { const target = projectMenu; setProjectMenu(null); if (!window.confirm(`移除项目“${target.title || '未命名项目'}”？`)) return; run(() => ctx.workspaces.delete(target.workspaceId)); } })),
      hover && !menu && !projectMenu && (hover.kind === 'project'
        ? h(ProjectHoverCard, { key: hover.id, data: hover, anchor: hoverAnchor, onClose: hideHover, onEnter: cancelHover, onLeave: closeHover, onReveal: () => revealWorkspace(hover), onEdit: () => editWorkspace(hover.workspace) })
        : h(ThreadHoverCard, { key: hover.id, data: hover, anchor: hoverAnchor, onClose: hideHover, onEnter: cancelHover, onLeave: closeHover })),
      editing && h(EditWorkspaceDialog, { key: editing.workspaceId, workspace: editing, onClose: () => setEditing(null), onRename: title => ctx.workspaces.rename(editing.workspaceId, title), onDelete: () => ctx.workspaces.delete(editing.workspaceId) }),
      renaming && h(RenameThreadDialog, { key: renaming.sessionId, thread: renaming, onClose: () => setRenaming(null), onRename: title => rename(renaming, title) }));
  };
}

function apply(ctx) {
  console.warn('[codex-style] apply 开始 v' + PLUGIN_VERSION);
  ctx.inject(['remote', 'remote.pluginInventory'], scope => scope.effect(() => watchCodexPresentation(scope), 'codex-style: presentation component states'));
  ctx.effect(() => {
    const previous = document.body.getAttribute('data-dsh-codex-style');
    document.body.setAttribute('data-dsh-codex-style', PLUGIN_VERSION);
    const style = document.createElement('style'); style.dataset.dshCodexStyle = PLUGIN_VERSION; style.textContent = CSS_TEXT; document.head.appendChild(style);
    const skillsStyle = document.createElement('style'); skillsStyle.dataset.dshCodexSkills = PLUGIN_VERSION; skillsStyle.textContent = SKILLS_CSS_TEXT; document.head.appendChild(skillsStyle);
    return () => { style.remove(); skillsStyle.remove(); if (previous === null) document.body.removeAttribute('data-dsh-codex-style'); else document.body.setAttribute('data-dsh-codex-style', previous); };
  }, 'codex-style: stylesheet');
  registerSkillsPage(ctx);
  const register = (scope, name, component, inject) => scope.slots.inject(name, () => {
    const priorities = scope.slots.entries(name).map(entry => entry.options.priority ?? 0);
    return scope.slots.register({ name, priority: Math.min(0, ...priorities) - 1, ...(inject ? { inject } : {}) }, component);
  });
  const components = {
    'settings.trigger': () => h('span', { className: 'dsc-ui dsc-settings-trigger' }, h(Icon, { name: 'settings', size: 18 }), '设置')
  };
  for (const [name, component] of Object.entries(components)) register(ctx, name, component);
  // 自研插件更新已退役：不再注册详情页更新按钮、更新提醒、Host 更新服务或定时网络查询。
  // 插件版本更新统一由 DSH 原生插件页/市场负责；本插件只保留 DSH 本体更新入口（见下方 desktopUpdates）。
  // 等各区域自己的服务就绪；权限 RPC 的命名空间不能由 remote 根服务存在来推断。
  ctx.inject(['sessions', 'uiSession', 'workspaces', 'uiWorkspace', 'layout', 'shortcuts', 'remote', 'remote.account', 'modules', 'locale', 'pluginNavigation'], scope => {
    const sidebar = createSidebarPresentation();
    sidebar.pins = createSidebarPinAdapter(scope);
    sidebar.pinMenu = createSidebarPinMenu();
    scope.effect(() => sidebar.pins.start(), 'codex-style: sidebar pin compatibility');
    scope.effect(() => () => sidebar.pinMenu.close(), 'codex-style: sidebar pin menu');
    scope.effect(() => () => sidebar.dispose(), 'codex-style: sidebar presentation');
    // 归档提示状态由插件持有并独立注册到 shell.overlay：侧栏子树卸载仍可见，随插件 scope 卸载清理。
    const archiveNotice = createArchiveNotice(sessionId => scope.uiWorkspace.unarchiveSession(sessionId));
    scope.effect(() => () => archiveNotice.dispose(), 'codex-style: archive notice');
    scope.slots.inject('shell.overlay', () => scope.slots.register({ name: 'shell.overlay', id: 'codex-style:archive-notice' }, () => h(ArchiveNotice, { notice: archiveNotice })));
    // 侧栏列表由宿主原生渲染，插件不再注册自绘侧栏。
    scope.slots.inject('shell.overlay', () => scope.slots.register({ name: 'shell.overlay', id: 'codex-style:shell' }, makeShellChrome(scope, sidebar)));
  });
  ctx.inject(['modules', 'locale', 'remote', 'remote.account'], scope => register(scope, 'settings.launcher', makeGearLauncher(scope)));
  const desktopUpdates = createDesktopUpdateSource();
  ctx.effect(() => desktopUpdates.start(globalThis.dshDesktop), 'codex-style: desktop update carrier');
  // 原生设置行指示器随被隐藏的宿主侧栏不可见；侧栏展开键上的蓝点由公开单槽位让给蓝圆入口。
  register(ctx, 'sidebar.toggle.badge', () => null);
  ctx.slots.inject('shell.overlay', () => ctx.slots.register({ name: 'shell.overlay', id: 'codex-style:desktop-update' }, () => createPortal(h('div', { className: 'dsc-ui dsc-desktop-update-launcher' }, h(DesktopUpdateRailButton, { source: desktopUpdates })), document.body)));
}
exports.name = 'dsh-codex-ui';
exports.inject = ['slots'];
exports.apply = apply;

// 技能页：直接消费本插件 Host 半提供的 codexStyleSkills 只读目录/正文，不复制宿主技能数据。
// 页面只新增“展示 + 导航 + 草稿初始化”，不提供启停、卸载、安装或 frontmatter 编辑。
const SKILLS_PANEL_ID = 'codex-style-skills';
const SKILLS_PACKAGE = '@qinova-ai/dsh-codex-ui';
const SKILLS_PAGE_SIZE = 6;

const SKILL_SOURCE_GROUPS = [
  { id: 'project', label: '项目', sources: ['project-dsh', 'project-agents'] },
  { id: 'personal', label: '个人', sources: ['user-dsh', 'user-agents', 'custom'] },
  { id: 'bundled', label: '内置', sources: ['bundled'] }
];
const SKILL_SOURCE_GROUP_OTHER = { id: 'other', label: '其他来源' };

function mountSkillsRemote(ctx) {
  const { z } = require('zod');
  const scope = z.object({ sessionId: z.string().optional(), cwd: z.string().optional() }).passthrough();
  const skill = z.object({
    name: z.string(), description: z.string(), whenToUse: z.string().optional(), path: z.string().optional(),
    invocation: z.object({ modelInvocable: z.boolean(), userInvocable: z.boolean() }).passthrough(),
    source: z.string(), provider: z.string()
  }).passthrough();
  const catalog = z.object({
    skills: z.array(skill), complete: z.boolean(), unavailable: z.string().optional(),
    scope: z.object({ cwd: z.string().optional(), session: z.boolean().optional(), preset: z.string().optional() }).passthrough().optional()
  }).passthrough();
  const definition = z.union([z.null(), skill.extend({ content: z.string() }).passthrough()]);
  return ctx.remote.$mount({
    package: SKILLS_PACKAGE + '/skills',
    descriptors: [
      { id: SKILLS_PACKAGE + '#codexStyleSkills/catalog', service: 'codexStyleSkills', namespace: 'codexStyleSkills', method: 'catalog', invocation: { kind: 'direct' },
        parameters: [{ name: 'request', wire: 'request', source: 'json', codec: { mode: 'strict', typeSymbol: SKILLS_PACKAGE + '#skills-scope', create: () => scope, jsonSchema: { type: 'object' } } }],
        result: { mode: 'strict', typeSymbol: SKILLS_PACKAGE + '#skills-catalog', create: () => catalog } },
      { id: SKILLS_PACKAGE + '#codexStyleSkills/content', service: 'codexStyleSkills', namespace: 'codexStyleSkills', method: 'content', invocation: { kind: 'direct' },
        parameters: [{ name: 'request', wire: 'request', source: 'json', codec: { mode: 'strict', typeSymbol: SKILLS_PACKAGE + '#skills-content-request', create: () => z.object({ name: z.string(), sessionId: z.string().optional(), cwd: z.string().optional() }).passthrough(), jsonSchema: { type: 'object' } } }],
        result: { mode: 'strict', typeSymbol: SKILLS_PACKAGE + '#skills-content', create: () => definition } }
    ]
  });
}

function unwrapRemote(answer) {
  if (answer !== null && typeof answer === 'object' && 'ok' in answer) {
    if (!answer.ok) throw new Error(answer.error?.message || '技能服务返回错误');
    return answer.value;
  }
  return answer;
}

/**
 * Resolve the visible scope. No retained main Session means the global catalog, never a guessed project;
 * `agentPreset` rides along so a new draft keeps a preset that carries this skill.
 */
function skillScopeOf(ctx) {
  const sessions = ctx.sessions.list.getSnapshot();
  const workspaces = ctx.workspaces.list.getSnapshot();
  const byId = sessions.byId || {};
  const sessionId = (sessions.ids || []).find(id => (byId[id]?.retainedBy?.mainView ?? 0) > 0);
  if (sessionId === undefined) return { cwd: undefined, workspaceTitle: '' };
  const workspace = (workspaces.items || []).find(row => row.sessionIds?.includes(sessionId));
  const summary = byId[sessionId] || {};
  return {
    sessionId,
    cwd: summary.cwd,
    workspaceId: workspace?.workspaceId,
    workspaceTitle: workspace?.title || workspace?.path || '',
    agentPreset: summary.projectionValues?.agentPreset
  };
}

function scopeKeyOf(scope) { return JSON.stringify([scope.sessionId ?? null, scope.cwd ?? null]); }
function scopeRequest(scope) {
  return { ...(scope.sessionId === undefined ? {} : { sessionId: scope.sessionId }), ...(scope.cwd === undefined ? {} : { cwd: scope.cwd }) };
}

function createSkillsController(ctx) {
  const initialScope = skillScopeOf(ctx);
  const store = createSnapshotStore({ phase: 'idle', skills: [], complete: true, unavailable: '', error: '', refreshing: false, scope: initialScope, scopeKey: scopeKeyOf(initialScope) });
  let generation = 0;
  let disposed = false;
  // Cordis 只在声明了 'remote.codexStyleSkills' 的作用域里暴露该命名空间；由独立 inject 连接注入。
  let service;
  let connectedListener = null;
  // 作用范围一变就丢弃旧范围的数据；详情由页面按 scopeKey 关闭，避免同名技能串正文。
  const syncScope = scope => {
    const key = scopeKeyOf(scope);
    const current = store.getSnapshot();
    if (key === current.scopeKey) return current;
    const next = { ...current, scope, scopeKey: key, skills: [], complete: true, unavailable: '', error: '', phase: current.phase === 'idle' ? 'idle' : 'loading' };
    store.set(next);
    return next;
  };
  const load = async () => {
    if (disposed) return;
    const scope = skillScopeOf(ctx);
    syncScope(scope);
    const key = scopeKeyOf(scope);
    const current = generation += 1;
    store.set({ ...store.getSnapshot(), refreshing: true, error: '', unavailable: '' });
    try {
      const remote = service;
      if (remote === undefined) {
        if (!disposed && current === generation) store.set({ ...store.getSnapshot(), phase: 'unavailable', unavailable: '技能服务尚未就绪', refreshing: false });
        return;
      }
      const value = unwrapRemote(await remote.catalog(scopeRequest(scope)));
      if (disposed || current !== generation) return;
      const latest = store.getSnapshot();
      if (latest.scopeKey !== key) return;
      // complete=false 只代表来源不完整；同 scope 已有一份成功数据时保留它并提示。
      const keepPrevious = value.complete === false && latest.skills.length > 0;
      store.set({ ...latest, phase: 'ready', skills: keepPrevious ? latest.skills : (value.skills || []), complete: value.complete !== false, unavailable: '', error: '', refreshing: false });
    } catch (error) {
      if (disposed || current !== generation) return;
      const latest = store.getSnapshot();
      if (latest.scopeKey !== key) return;
      const message = error?.message || String(error);
      store.set({ ...latest, phase: latest.skills.length > 0 ? 'ready' : 'error', error: message, refreshing: false });
    }
  };
  const content = async (skill, scope) => {
    const remote = service;
    if (remote === undefined) throw new Error('技能服务尚未就绪');
    return unwrapRemote(await remote.content({ name: skill.name, ...scopeRequest(scope) }));
  };
  // 命名空间就绪/断开时由外部调用；已显示“尚未就绪”的页面在连上后自动重读。
  const connect = remote => {
    service = remote;
    if (typeof connectedListener === 'function') connectedListener();
    return () => { if (service === remote) service = undefined; };
  };
  const onConnected = listener => { connectedListener = listener; return () => { if (connectedListener === listener) connectedListener = null; }; };
  return { store, load, content, connect, onConnected, dispose() { disposed = true; generation += 1; service = undefined; connectedListener = null; } };
}

function groupSkills(skills) {
  const groups = [];
  const rest = [];
  for (const skill of skills) {
    const group = SKILL_SOURCE_GROUPS.find(row => row.sources.includes(skill.source));
    if (group === undefined) { rest.push(skill); continue; }
    let bucket = groups.find(row => row.id === group.id);
    if (bucket === undefined) { bucket = { id: group.id, label: group.label, skills: [] }; groups.push(bucket); }
    bucket.skills.push(skill);
  }
  if (rest.length > 0) groups.push({ ...SKILL_SOURCE_GROUP_OTHER, skills: rest });
  return groups.filter(group => group.skills.length > 0);
}

function SkillCard({ skill, onOpen }) {
  return h('button', { type: 'button', className: 'dsc-skill-card', onClick: e => onOpen(skill, e.currentTarget) },
    h('span', { className: 'dsc-skill-card-icon' }, h(IconSkillOutlineRegular, { size: 40 })),
    h('span', { className: 'dsc-skill-card-copy' },
      h('span', { className: 'dsc-skill-card-title' }, skill.name),
      h('span', { className: 'dsc-skill-card-desc' }, skill.description)),
    skill.invocation?.modelInvocable && h('span', { className: 'dsc-skill-card-flag', title: '模型可自动调用', 'aria-label': '模型可自动调用' }, h(Icon, { name: 'check', size: 14 })));
}

function SkillSection({ group, expanded, onToggle, onOpen, query }) {
  const visible = query === '' && !expanded ? group.skills.slice(0, SKILLS_PAGE_SIZE) : group.skills;
  const hidden = group.skills.length - visible.length;
  const names = group.skills.slice(SKILLS_PAGE_SIZE).map(skill => skill.name).slice(0, 2).join('、');
  return h('section', { className: 'dsc-skills-section' },
    h('h2', { className: 'dsc-skills-section-title' }, group.label),
    h('div', { className: 'dsc-skills-grid' }, visible.map(skill => h(SkillCard, { key: skill.name, skill, onOpen }))),
    query === '' && group.skills.length > SKILLS_PAGE_SIZE && h('button', { type: 'button', className: 'dsc-skills-more', onClick: onToggle },
      expanded ? '收起' : `查看 ${names}，另有 ${hidden} 项`));
}

/** Mirror the native client helper exactly: no empty-segment filtering, colons kept literal. */
function skillFileAddress(sessionId, cwd, path) {
  const encodeSegment = segment => encodeURIComponent(segment).replace(/%3A/gi, ':');
  const encodePath = value => value.split('/').map(encodeSegment).join('/');
  const normalized = path.replace(/\\/g, '/');
  const root = (cwd || '').replace(/\\/g, '/').replace(/\/+$/, '');
  const address = root !== '' && normalized.startsWith(root + '/') ? normalized.slice(root.length + 1) : normalized;
  return 'dsh-resource://file/session/' + encodeSegment(sessionId) + '/' + encodePath(address);
}

function draftFailureText(error) { return error?.message || String(error); }

async function startFreshDraft(ctx, scope, prompt) {
  // 新建 Session 后打开；用宿主 retained reference 等待就绪，再用 reference.binding 初始化草稿。
  // 绝不调用发送、提交或模型接口；只对新建 ID 写命令。
  const request = {};
  if (scope?.workspaceId !== undefined) request.workspaceId = scope.workspaceId;
  else if (scope?.cwd !== undefined) request.cwd = scope.cwd;
  if (scope?.agentPreset !== undefined) request.agentPreset = scope.agentPreset;
  const sessionId = await ctx.sessions.create(request);
  if (typeof sessionId !== 'string' || sessionId === '') throw new Error('宿主未返回新会话');
  ctx.uiWorkspace.openSession(sessionId);
  const conversation = ctx.get('conversation');
  if (conversation?.input?.requestDraftInitialization === undefined) throw new Error('当前宿主未提供草稿初始化接口');
  await ctx.sessions.using(sessionId, { source: 'codexStyleSkills' }, async reference => {
    const binding = reference?.binding;
    if (binding === undefined) throw new Error('新会话尚未就绪');
    const outcome = conversation.input.requestDraftInitialization(binding, { prompt, whenDraftExists: 'replace' });
    if (outcome === 'blocked') throw new Error('草稿初始化被宿主拒绝');
  });
  ctx.layout.selectPanel(null);
  return sessionId;
}

class MarkdownBoundary extends React.Component {
  constructor(props) { super(props); this.state = { failed: false }; }
  static getDerivedStateFromError() { return { failed: true }; }
  render() {
    if (this.state.failed) {
      return h('div', { className: 'dsc-skills-preview-note', role: 'alert' }, 'Markdown 渲染失败，已显示原始正文。', h('pre', { className: 'dsc-skills-plain' }, this.props.text));
    }
    return this.props.children;
  }
}

let SKILL_PRIMITIVES;
function skillPrimitives() {
  if (SKILL_PRIMITIVES === undefined) {
    try { SKILL_PRIMITIVES = require('@deepseek-ai/dsh-client-ui-primitives'); } catch { SKILL_PRIMITIVES = null; }
  }
  return SKILL_PRIMITIVES;
}
// 契约取自宿主客户端 markdownLabels：code.copyLabel / copiedLabel / toolbarLabels{codeLabel,wrapLabel,unwrapLabel}
// 与 footnotes；中文值取自 @deepseek-ai/dsh-client-locale 的 zh 字典，缺失任一键会被代码块组件直接读取而崩溃。
const SKILL_MARKDOWN_LABELS = {
  code: {
    copyLabel: '复制',
    copiedLabel: '复制成功',
    toolbarLabels: { codeLabel: '代码块', wrapLabel: '自动换行', unwrapLabel: '取消自动换行' }
  },
  footnotes: '脚注'
};
function SkillMarkdown({ text }) {
  const primitives = skillPrimitives();
  if (primitives?.MarkdownText === undefined) return h('pre', { className: 'dsc-skills-plain' }, text);
  return h(MarkdownBoundary, { text }, h(primitives.MarkdownText, { text, labels: SKILL_MARKDOWN_LABELS }));
}

function dialogFocusables(dialog) {
  if (!dialog) return [];
  return [...dialog.querySelectorAll('button, [href], input, [tabindex]:not([tabindex="-1"])')].filter(node => !node.disabled && node.getClientRects().length > 0);
}

function SkillsDetail({ ctx, controller, scope, skill, onClose, restoreFocus }) {
  const [state, setState] = useState({ phase: 'loading', content: '', error: '' });
  const [menuOpen, setMenuOpen] = useState(false);
  const [notice, setNotice] = useState('');
  const [trying, setTrying] = useState(false);
  const busy = useRef(false);
  const menuAnchor = useRef(null);
  const dialogRef = useRef(null);
  const closeButton = useRef(null);
  useEffect(() => {
    let active = true;
    setState({ phase: 'loading', content: '', error: '' });
    controller.content(skill, scope).then(value => { if (active) setState({ phase: 'ready', content: value?.content || '', error: value === null ? '该技能已不在当前范围' : '' }); },
      error => { if (active) setState({ phase: 'error', content: '', error: draftFailureText(error) }); });
    return () => { active = false; };
  }, [skill.name, scope.sessionId, scope.cwd]);
  useEffect(() => {
    closeButton.current?.focus();
    return () => { restoreFocus?.(); };
  }, []);
  const run = async action => {
    setNotice('');
    try { await action(); } catch (error) { setNotice(draftFailureText(error)); }
  };
  const withMenu = action => { setMenuOpen(false); run(action); };
  const openResource = () => {
    if (skill.path === undefined) return Promise.reject(new Error('该技能没有可打开的文件'));
    if (scope.sessionId !== undefined && ctx.sidebarRight?.openResource !== undefined) {
      ctx.sidebarRight.openResource(skillFileAddress(scope.sessionId, scope.cwd, skill.path));
      return Promise.resolve();
    }
    return ctx.remote.session.openWorkspacePath({ path: skill.path }).then(answer => {
      if (!answer?.ok) throw new Error('宿主未能打开该文件');
    });
  };
  const reveal = () => skill.path === undefined ? Promise.reject(new Error('该技能没有文件路径'))
    : ctx.remote.session.openWorkspacePath({ path: skill.path, action: 'reveal' }).then(answer => { if (!answer?.ok) throw new Error('宿主未能定位该文件'); });
  const copyMarkdown = async () => {
    let content = state.content;
    if (content === '') { const value = await controller.content(skill, scope); content = value?.content || ''; }
    if (content === '') throw new Error('该技能没有可复制的正文');
    if (navigator.clipboard?.writeText === undefined) throw new Error('当前窗口不支持剪贴板');
    await navigator.clipboard.writeText(content);
  };
  const tryNow = async () => {
    if (busy.current) return;
    busy.current = true;
    setTrying(true);
    setNotice('');
    try {
      await startFreshDraft(ctx, scope, `/${skill.name} `);
      onClose();
    } catch (error) { setNotice(draftFailureText(error)); } finally { busy.current = false; setTrying(false); }
  };
  const onKeyDown = event => {
    if (event.key === 'Escape') {
      event.preventDefault();
      if (menuOpen) setMenuOpen(false); else onClose();
      return;
    }
    if (event.key !== 'Tab') return;
    const focusable = dialogFocusables(dialogRef.current);
    if (focusable.length === 0) return;
    const first = focusable[0], last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  };
  const hasPath = skill.path !== undefined;
  // 原生 MarkdownText 的 labels 代码块契约不可为空；userInvocable=false 时不得出现“立即试用”命令按钮。
  const canTry = skill.invocation?.userInvocable !== false;
  const iconNode = h('span', { className: 'dsc-skills-dialog-icon' }, h(IconSkillOutlineRegular, { size: 40 }));
  const actionsNode = h('div', { className: 'dsc-skills-dialog-headactions' },
    h('button', { type: 'button', ref: menuAnchor, className: 'dsc-icon-button', title: '更多', 'aria-label': '更多', 'aria-haspopup': 'menu', 'aria-expanded': menuOpen, onClick: () => setMenuOpen(!menuOpen) },
      h(IconEllipsisOutlineRegular, { size: 16 })),
    h('button', { type: 'button', ref: closeButton, className: 'dsc-icon-button', title: '关闭', 'aria-label': '关闭', onClick: onClose }, h(Icon, { name: 'close', size: 16 })));
  const headRow = h('div', { className: 'dsc-skills-dialog-headrow' }, iconNode, actionsNode);
  const menuNode = menuOpen && h(Popover, { anchor: menuAnchor, onClose: () => setMenuOpen(false), label: '技能操作', width: 220, placement: 'bottom' },
    hasPath && h(Option, { title: '打开', icon: 'arrowUpRight', onClick: () => withMenu(openResource) }),
    hasPath && h(Option, { title: '在文件资源管理器中显示', icon: 'folder', onClick: () => withMenu(reveal) }),
    h(Option, { title: '复制 Markdown', onClick: () => withMenu(copyMarkdown) }));
  const previewNode = h('div', { className: 'dsc-skills-preview' },
    state.phase === 'loading' && h('div', { className: 'dsc-skills-preview-note' }, '正在读取正文…'),
    state.phase === 'error' && h('div', { className: 'dsc-skills-preview-note', role: 'alert' }, state.error),
    state.phase === 'ready' && state.content === '' && h('div', { className: 'dsc-skills-preview-note' }, state.error || '该技能没有正文'),
    state.phase === 'ready' && state.content !== '' && h(SkillMarkdown, { text: state.content }));
  const footNode = h('div', { className: 'dsc-skills-dialog-foot' },
    notice !== '' && h('span', { className: 'dsc-skills-dialog-notice', role: 'alert' }, notice),
    canTry && h('button', { type: 'button', className: 'dsc-skills-try', disabled: trying, 'aria-disabled': trying ? 'true' : undefined, onClick: tryNow }, h(Icon, { name: 'chat', size: 15 }), trying ? '正在新建草稿…' : '立即试用'));
  // dialog 必须是 overlay 的唯一子节点，且完整包住 headrow / 标题 / 描述 / 预览 / 底栏。
  const dialogNode = h('div', { ref: dialogRef, className: 'dsc-skills-dialog', role: 'dialog', 'aria-modal': 'true', 'aria-labelledby': 'dsc-skill-title', tabIndex: -1, onKeyDown },
    headRow,
    menuNode,
    h('div', { className: 'dsc-skills-dialog-title' }, h('h2', { id: 'dsc-skill-title' }, skill.name), h('span', { className: 'dsc-skills-dialog-kind' }, 'Skill')),
    h('p', { className: 'dsc-skills-dialog-desc' }, skill.description),
    previewNode,
    footNode);
  return createPortal(h('div', { className: 'dsc-ui dsc-skills-overlay', onPointerDown: e => { if (e.target === e.currentTarget) onClose(); } }, dialogNode), document.body);
}

function SkillsPage({ ctx, controller, active }) {
  const [expanded, setExpanded] = useState({});
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);
  const state = useSource(controller.store);
  const sessions = useSource(ctx.sessions.list);
  const workspaces = useSource(ctx.workspaces.list);
  const scope = useMemo(() => skillScopeOf(ctx), [sessions, workspaces]);
  useEffect(() => { if (active) controller.load(); }, [active, scope.sessionId, scope.cwd]);
  useEffect(() => (active ? controller.onConnected(() => controller.load()) : undefined), [active]);
  useEffect(() => { setSelected(null); }, [state.scopeKey]);
  const filtered = query === '' ? state.skills : state.skills.filter(skill => (skill.name + ' ' + skill.description + ' ' + (skill.whenToUse || '')).toLowerCase().includes(query.toLowerCase()));
  const groups = groupSkills(filtered);
  const rangeLabel = scope.workspaceTitle || (scope.cwd ? scope.cwd.replace(/^.*[\\/]/, '') : '全局技能');
  const onOpen = (skill, anchor) => setSelected({ skill, scope: { ...scope }, anchor });
  const closeDetail = () => {
    const anchor = selected?.anchor;
    setSelected(null);
    if (anchor?.isConnected) anchor.focus();
  };
  return h('div', { className: 'dsc-ui dsc-skills-page' },
    h('header', { className: 'dsc-skills-header' },
      h('div', { className: 'dsc-skills-heading' }, h('h1', null, '技能'), h('p', null, '通过任务专用技能扩展 DSH')),
      h('div', { className: 'dsc-skills-toolbar' },
        h('span', { className: 'dsc-skills-scope', title: scope.cwd || '全局' }, rangeLabel),
        h('label', { className: 'dsc-skills-search' }, h(Icon, { name: 'search', size: 14 }), h('input', { type: 'search', value: query, placeholder: '搜索技能', 'aria-label': '搜索技能', onChange: e => setQuery(e.target.value) })),
        h('button', { type: 'button', className: 'dsc-icon-button', title: '刷新', 'aria-label': '刷新', onClick: () => controller.load() }, h(IconRefreshOutlineRegular, { size: 16 })))),
    state.phase === 'loading' && h('div', { className: 'dsc-skills-state' }, '正在读取技能…'),
    state.phase === 'unavailable' && h('div', { className: 'dsc-skills-state' }, `技能服务尚未就绪：${state.unavailable}`),
    state.phase === 'error' && h('div', { className: 'dsc-skills-state dsc-skills-state-error', role: 'alert' }, state.error, h('button', { type: 'button', onClick: () => controller.load() }, '重试')),
    state.phase === 'ready' && state.error !== '' && h('div', { className: 'dsc-skills-state dsc-skills-state-warn', role: 'alert' }, `刷新失败，显示上次结果：${state.error}`),
    state.phase === 'ready' && !state.complete && h('div', { className: 'dsc-skills-state dsc-skills-state-warn' }, '部分来源暂不可见，目录可能不完整。'),
    state.phase === 'ready' && groups.length === 0 && h('div', { className: 'dsc-skills-state' }, query === '' ? '当前范围没有技能' : `没有匹配“${query}”的技能`),
    groups.map(group => h(SkillSection, { key: group.id, group, query, expanded: expanded[group.id] === true, onToggle: () => setExpanded({ ...expanded, [group.id]: !(expanded[group.id] === true) }), onOpen })),
    selected !== null && h(SkillsDetail, { ctx, controller, scope: selected.scope, skill: selected.skill, onClose: closeDetail, restoreFocus: () => { if (selected.anchor?.isConnected) selected.anchor.focus(); } }));
}

function registerSkillsPage(ctx) {
  // 单次注入：先 $mount 发布 namespace，再注册页面；页面本身不等待 remote.codexStyleSkills。
  // 只声明 remote 与页面所需服务，避免"等 namespace、namespace 等 $mount"的循环。
  return ctx.inject(['slots', 'remote', 'sessions', 'workspaces', 'uiSession', 'uiWorkspace', 'layout', 'sidebarRight'], scope => {
    scope.effect(() => mountSkillsRemote(scope), 'codex-style: skills remote methods');
    const controller = createSkillsController(scope);
    scope.effect(() => () => controller.dispose(), 'codex-style: skills catalog');
    // 页面不等命名空间；命名空间由 $mount 发布后，这个子 inject 才激活并把服务交给 controller。
    scope.inject(['remote.codexStyleSkills'], inner => inner.effect(() => controller.connect(inner.remote.codexStyleSkills), 'codex-style: skills service connection'));
    scope.slots.inject('main', function* () {
      yield scope.slots.register({ name: 'main', key: SKILLS_PANEL_ID }, function SkillsMain() {
        const panel = useSource(scope.layout.panelInfo);
        return h(SkillsPage, { ctx: scope, controller, active: panel.activePanelId === SKILLS_PANEL_ID });
      });
    });
  });
}

// 自研插件更新已退役：本文件只保留 DSH 本体更新入口。
// 沿用 Electron preload 的 dshDesktop.updates（与原生设置行指示器同一入口）；
// 检查、下载、校验、停止任务确认与重启安装全部由宿主主进程负责，这里只呈现状态并转交点击。
const DESKTOP_UPDATE_BUSY = ['checking', 'downloading', 'verifying', 'installing'];
const DESKTOP_UPDATE_FAILURES = {
  check: '检查更新失败，请稍后重试。', 'check-network': '检查更新失败，请检查网络连接后重试。',
  download: '下载更新失败，请重试。', 'download-network': '下载更新失败，请检查网络连接后重试。',
  install: '安装更新失败，请稍后重试。', 'install-network': '安装更新失败，请检查网络连接后重试。',
  'stop-failed': '未能安全停止任务，更新尚未安装，请稍后重试。', 'tasks-changed': '有新任务开始运行，请重新确认是否停止任务并更新。',
  'tasks-unavailable': '无法确认任务状态，请在工作区就绪后重试更新。'
};
function createDesktopUpdateSource() {
  const store = createSnapshotStore({ available: false, failed: false, opening: false });
  let bridge, live = false;
  const patch = next => { if (live) store.set({ ...store.getSnapshot(), ...next }); };
  return {
    store,
    start(carrier) {
      const candidate = carrier?.protocolVersion === 1 ? carrier.updates : undefined;
      if (!candidate || ['status', 'open', 'subscribe'].some(name => typeof candidate[name] !== 'function')) return;
      bridge = candidate; live = true;
      let received = false;
      store.set({ available: true, failed: false, opening: false });
      const unsubscribe = bridge.subscribe(presentation => { received = true; patch({ presentation, failed: false }); });
      bridge.status().then(presentation => { if (!received) patch({ presentation }); }, () => { if (!received) patch({ failed: true }); });
      return () => { live = false; bridge = undefined; unsubscribe?.(); store.set({ available: false, failed: false, opening: false }); };
    },
    // 与原生指示器一致：忙碌阶段忽略点击，后续点击并入宿主正在进行的同一操作。
    open() {
      const state = store.getSnapshot();
      if (!live || state.opening || DESKTOP_UPDATE_BUSY.includes(state.presentation?.phase)) return;
      const target = bridge;
      patch({ opening: true });
      Promise.resolve().then(() => target.open()).catch(() => patch({ failed: true })).finally(() => patch({ opening: false }));
    }
  };
}
function desktopUpdateView({ presentation: state, failed, opening }) {
  if (failed) return { kind: 'error', label: '重试更新', detail: '暂时无法读取更新状态，点击重试。' };
  if (!state || state.phase === 'idle') return null;
  const version = state.version ? 'v' + state.version : '';
  const percent = Math.min(100, Math.max(0, Math.floor(state.percent ?? 0)));
  const view = {
    available: { kind: 'download', label: '有可用更新', detail: (version ? '新版本 ' + version + '，' : '') + '点击下载并安装' },
    downloading: { kind: 'progress', percent, label: '正在下载更新 ' + percent + '%', detail: version && '目标版本 ' + version },
    verifying: { kind: 'busy', label: '正在校验更新文件…', detail: version },
    ready: { kind: 'download', label: '更新已就绪', detail: (version ? version + ' 已下载，' : '') + '点击安装并重启' },
    installing: { kind: 'busy', label: '正在准备重启…', detail: version },
    checking: { kind: 'busy', label: '正在检查更新…', detail: '' },
    error: { kind: 'error', label: '重试更新', detail: DESKTOP_UPDATE_FAILURES[state.failure] ?? DESKTOP_UPDATE_FAILURES.install }
  }[state.phase];
  return view && opening && view.kind !== 'progress' ? { ...view, kind: 'busy' } : view ?? null;
}
const DESKTOP_UPDATE_RING = 2 * Math.PI * 6;
function DesktopUpdateGlyph({ view }) {
  const svg = (children, props = {}) => h('svg', { viewBox: '0 0 16 16', width: 16, height: 16, fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, ...props }, children);
  if (view.kind === 'progress') return svg([
    h('circle', { key: 'track', cx: 8, cy: 8, r: 6, strokeOpacity: 0.32, strokeWidth: 2 }),
    h('circle', { key: 'value', className: 'dsc-desktop-update-ring', cx: 8, cy: 8, r: 6, strokeWidth: 2, strokeLinecap: 'butt', transform: 'rotate(-90 8 8)', strokeDasharray: DESKTOP_UPDATE_RING * view.percent / 100 + ' ' + DESKTOP_UPDATE_RING })
  ]);
  if (view.kind === 'busy') return svg(h('path', { d: 'M8 2.5a5.5 5.5 0 1 1-5.5 5.5' }), { className: 'dsc-update-spin' });
  if (view.kind === 'error') return svg(h('path', { d: 'M8 4v5m0 2.6v.1', strokeWidth: 1.9 }));
  return h(IconDownloadOutlineRegular, { size: 16 });
}
// 位于设置齿轮正上方：发现新版显示蓝圆箭头，下载中换为环形进度，悬停显示进度与目标版本。
function DesktopUpdateRailButton({ source }) {
  const state = useSource(source.store);
  const tipId = useId();
  const view = state.available ? desktopUpdateView(state) : null;
  if (!view) return null;
  const busy = view.kind === 'busy' || view.kind === 'progress';
  return h('div', { className: 'dsc-desktop-update', 'data-update-phase': state.failed ? 'failed' : state.presentation.phase },
    h('button', { type: 'button', className: 'dsc-desktop-update-button', 'aria-label': view.label, 'aria-describedby': tipId, 'aria-disabled': busy, onClick: () => { if (!busy) source.open(); } },
      h('span', { className: 'dsc-desktop-update-dot', 'data-kind': view.kind }, h(DesktopUpdateGlyph, { view }))),
    h('span', { id: tipId, role: 'tooltip', className: 'dsc-desktop-update-tip' },
      h('strong', null, view.label),
      view.detail && h('span', null, view.detail),
      view.kind === 'progress' && h('span', { className: 'dsc-update-progress', 'aria-hidden': true }, h('span', { className: 'dsc-update-progress-fill', style: { transform: 'scaleX(' + view.percent / 100 + ')' } }))));
}

// 可选呈现组件的装卸：只有前进后退仍按独立子组件清单启停。
// 子路径宿主组件没有独立客户端包，主界面按它的实际 Cordis 启停装卸本效果。
function watchCodexPresentation(ctx) {
  let disposed = false;
  let revision = 0;
  const effects = [
    { path: '/navigation', name: 'dsh-codex-ui-navigation-presentation', apply: mountCodexNavigation, inject: ['slots', 'layout', 'sessions', 'uiWorkspace', 'shortcuts'] }
  ];
  const setEnabled = (effect, enabled) => {
    if (enabled && !effect.feature) effect.feature = ctx.plugin({ name: effect.name, apply: effect.apply, inject: effect.inject });
    else if (!enabled && effect.feature) { effect.feature.dispose(); effect.feature = undefined; }
  };
  const refresh = async () => {
    const request = ++revision;
    try {
      const result = await ctx.remote.pluginInventory.list();
      if (disposed || request !== revision) return;
      if (!result.ok) throw new Error(result.error?.message || '无法读取呈现组件状态');
      for (const effect of effects) setEnabled(effect, result.value.entries.some(row => row.moduleName === PLUGIN_PACKAGE + effect.path && row.enabled && row.fiberPhase === 'active'));
    } catch (error) {
      if (disposed || request !== revision) return;
      for (const effect of effects) setEnabled(effect, false);
      console.warn('dsh-codex-ui: 呈现组件状态读取失败', error);
    }
  };
  const offChanged = ctx.remote.$on('plugin-manager/changed', refresh);
  const offReset = ctx.on('connection/reset', refresh);
  refresh();
  return () => { disposed = true; revision++; offChanged(); offReset(); for (const effect of effects) setEnabled(effect, false); };
}

// 页面前进后退（独立可选组件）：只使用公开 layout.panelInfo、sessions.list、
// uiWorkspace.openSession、slots 与 shortcuts。非宿主原生导航；历史仅本次运行内存，
// 不持久化，不恢复设置弹窗、页面子状态或滚动位置。
const NAVIGATION_BACK_ID = 'codex-style.navigation.back';
const NAVIGATION_FORWARD_ID = 'codex-style.navigation.forward';
const NAVIGATION_NATIVE_SHIFT = '68px';
const NAVIGATION_EMPTY = { entries: [], index: -1, canBack: false, canForward: false, busy: false };
// 后退/前进使用宿主 Chevron 图标；侧栏按钮继续使用现有按钮。

// 会话 route 为 {panelId:null, sessionId}；主面板 route 为 {panelId, sessionId:null}，
// 主面板期间不记录后台会话，避免后台会话变化制造同一面板的假历史。
// 无主会话空态是 {null,null}，公开面无法清除已有会话，故不记录、不作为可返回目标。
function navigationRouteOf(panelInfo, sessions) {
  if (!panelInfo) return null;
  const panelId = panelInfo.activePanelId === undefined ? null : panelInfo.activePanelId;
  if (panelId !== null) return { panelId, sessionId: null };
  const ids = sessions && Array.isArray(sessions.ids) ? sessions.ids : null;
  const byId = sessions && sessions.byId ? sessions.byId : null;
  if (!ids || !byId) return null;
  for (const id of ids) {
    const retained = byId[id] && byId[id].retainedBy;
    if (((retained && retained.mainView) || 0) > 0) return { panelId: null, sessionId: id };
  }
  return null;
}

function sameNavigationRoute(left, right) {
  return left !== null && right !== null && left.panelId === right.panelId && left.sessionId === right.sessionId;
}

// 纯内存历史模型：同一轮通知合并到一次微任务；首次稳定快照为 base；
// 同页去重；后退后新导航截断 forward；恢复期间 busy 防连点。
function createNavigationController({ read, restore, schedule = queueMicrotask, onState = () => {} }) {
  let entries = [];
  let index = -1;
  let pending = false;
  let base = false;
  let busy = false;
  let disposed = false;
  const state = () => ({
    entries: entries.slice(),
    index,
    canBack: index > 0,
    canForward: index >= 0 && index < entries.length - 1,
    busy
  });
  const publish = () => { if (!disposed) onState(state()); };
  const observe = () => {
    const route = read();
    if (route === null) return;
    if (!base) {
      base = true;
      entries = [route];
      index = 0;
      return;
    }
    if (sameNavigationRoute(route, entries[index])) return;
    entries = entries.slice(0, index + 1);
    entries.push(route);
    index = entries.length - 1;
  };
  const flush = () => {
    if (disposed) return;
    pending = false;
    observe();
    busy = false;
    publish();
  };
  const refresh = () => {
    if (disposed || pending) return;
    pending = true;
    schedule(flush);
  };
  // 沿同方向跳过不可恢复目标：最近可恢复者优先；全部失效时保持位置，
  // 由下一轮读取按实际页面记录，不伪造位置，也不新增历史。
  const move = direction => {
    if (disposed || busy || direction === 0) return false;
    let target = index + direction;
    if (target < 0 || target >= entries.length) return false;
    busy = true;
    let moved = false;
    while (target >= 0 && target < entries.length) {
      let restored = false;
      try { restored = restore(entries[target]) !== false; } catch (_error) { restored = false; }
      if (restored) { index = target; moved = true; break; }
      target += direction;
    }
    refresh();
    publish();
    return moved;
  };
  return {
    refresh,
    observe,
    getState: state,
    back: () => move(-1),
    forward: () => move(1),
    dispose() {
      disposed = true;
      pending = false;
      entries = [];
      index = -1;
      busy = false;
    }
  };
}

// 恢复目标前先使宿主旧的异步新建导航失效；校验会话仍存在、panels 仍注册。
function restoreNavigationRoute(ctx, route) {
  if (route === null) return false;
  try { ctx.layout.beginNavigation(); } catch (_error) { /* 旧宿主没有该动作时仍可恢复 */ }
  const panels = typeof ctx.slots.entriesOfSlot === 'function' ? ctx.slots.entriesOfSlot('main') : ctx.slots.entries('main');
  if (route.panelId === null) {
    const sessions = ctx.sessions.list.getSnapshot();
    if (!route.sessionId || !(sessions.byId && sessions.byId[route.sessionId])) return false;
    ctx.uiWorkspace.openSession(route.sessionId);
    return true;
  }
  if (!panels.some(entry => entry && entry.options && entry.options.key === route.panelId)) return false;
  try { ctx.layout.selectPanel(route.panelId); } catch (_error) { return false; }
  return true;
}

// catalog 是键位的唯一真源：命令存在但未绑定/被取消/冲突时 keys 为空，
// 提示不显示键位胶囊；catalog 尚未就绪时同样不猜默认组合。
function navigationCatalogKeys(catalog, id) {
  if (!Array.isArray(catalog)) return [];
  const row = catalog.find(entry => entry && entry.id === id);
  return row && Array.isArray(row.keys) ? row.keys : [];
}

function NavigationShortcutChip({ label }) {
  return h('span', { className: 'dsc-nav-tooltip__key', 'aria-hidden': true }, label);
}

// 悬停/聚焦提示：深灰圆角，近窗口左边 8px 防越界，按钮下 2–4px；键位读 shortcuts.catalog。
function NavigationTooltip({ id, label, keys, left, top }) {
  const width = 8 + label.length * 13 + keys.length * 20;
  const x = Math.max(8, Math.min(left, (typeof window !== 'undefined' ? window.innerWidth : 1024) - width - 8));
  return createPortal(h('div', {
    className: 'dsc-ui dsc-nav-tooltip', role: 'tooltip', 'data-navigation-tip': id,
    style: { left: x, top: top + 3 }
  }, h('span', null, label), h('span', { className: 'dsc-nav-tooltip__keys' }, keys.map((key, position) => key === '+'
    ? h('span', { key: 'plus-' + position, className: 'dsc-nav-tooltip__plus', 'aria-hidden': true }, '+')
    : h(NavigationShortcutChip, { key: key + '-' + position, label: key })))), document.body);
}

function makeNavigationControls(ctx, controls, controller) {
  return function NavigationControls() {
    const state = useSource(controls);
    const catalog = useSource(ctx.shortcuts.catalog);
    const [tip, setTip] = useState(null);
    const anchors = useRef({ back: null, forward: null });
    const backKeys = navigationCatalogKeys(catalog, NAVIGATION_BACK_ID);
    const forwardKeys = navigationCatalogKeys(catalog, NAVIGATION_FORWARD_ID);
    const buttons = [
      { id: 'back', label: '返回', icon: IconChevronLeftOutlineRegular, keys: backKeys, enabled: state.canBack, run: () => controller.back() },
      { id: 'forward', label: '前进', icon: IconChevronRightOutlineRegular, keys: forwardKeys, enabled: state.canForward, run: () => controller.forward() }
    ];
    const shown = tip !== null && state.entries.length > 0 ? tip : null;
    return createPortal(h(React.Fragment, null,
      h('div', { className: 'dsc-ui dsc-nav-controls', role: 'group', 'aria-label': '页面历史' }, buttons.map(button => h('button', {
        key: button.id, type: 'button', ref: node => { anchors.current[button.id] = node; },
        className: 'dsc-nav-button', 'aria-label': button.label, 'aria-disabled': button.enabled ? undefined : 'true',
        'data-navigation-button': button.id,
        onPointerEnter: () => setTip(button.id), onPointerLeave: () => setTip(null),
        onFocus: () => setTip(button.id), onBlur: () => setTip(null),
        onClick: () => { if (button.enabled) { setTip(null); button.run(); } }
      }, h(button.icon, { size: 16 })))),
      shown !== null && (() => {
        const button = buttons.find(item => item.id === shown);
        const anchor = anchors.current[shown];
        const box = anchor && anchor.getBoundingClientRect ? anchor.getBoundingClientRect() : { left: 8, bottom: 36 };
        return h(NavigationTooltip, { id: shown, label: button.label, keys: button.keys, left: box.left, top: box.bottom });
      })()), document.body);
  };
}

// Windows 应用菜单由 preload 挂成 body 子元素 [data-windows-menu]，位置由 CSS 外边距跟随宿主；
// 这里只处理侧栏里的原生固定按钮：左侧切换键由自绘按钮替代（隐藏），其余按钮右移。
// 只给最小宿主节点加自有 data-* 并还原；不改 DOM、不读 hashed class、不依赖元素插入时序。
function createNavigationTitlebarMarker() {
  const saved = [];
  let observer = null;
  let timer = 0;
  let disposed = false;
  const mark = (element, name) => {
    if (!element || element.hasAttribute(name)) return;
    saved.push([element, name, element.getAttribute(name)]);
    element.setAttribute(name, '');
  };
  const restore = () => {
    for (const [element, name, previous] of saved.reverse()) {
      if (previous === null) element.removeAttribute(name); else element.setAttribute(name, previous);
    }
    saved.length = 0;
  };
  const apply = () => {
    if (disposed) return;
    timer = 0;
    if (typeof document === 'undefined' || !document.documentElement || !document.documentElement.hasAttribute('data-windows-titlebar')) return;
    // 先清掉上一轮标记并在无 transform 的布局下完成全部测量与分类，
    // 再统一写标记；避免祖先 transform 改变 fixed 包含块后误判原生按钮。
    restore();
    const pending = [];
    const sidebar = document.querySelector('[data-slot="sidebar"]');
    const buttons = sidebar && typeof sidebar.querySelectorAll === 'function' ? [...sidebar.querySelectorAll('button')] : [];
    const classified = [];
    for (const button of buttons) {
      const style = typeof getComputedStyle === 'function' ? getComputedStyle(button) : null;
      if (!style || style.position !== 'fixed') continue;
      const box = button.getBoundingClientRect ? button.getBoundingClientRect() : { top: 0, left: 0 };
      if (box.top >= 48) continue;
      // 左侧窄按钮由自绘切换键替代；其余固定按钮右移。
      if (box.left < 40) classified.push([button, 'data-dsc-navigation-native-toggle']);
      else classified.push([button, 'data-dsc-navigation-native-shift']);
    }
    pending.push(...classified);
    for (const [element, name] of pending) mark(element, name);
  };
  const schedule = () => {
    if (disposed || timer) return;
    timer = requestAnimationFrame(apply);
  };
  const start = () => {
    let attemptsLeft = 60;
    const retry = () => {
      if (disposed) return;
      timer = 0;
      apply();
      attemptsLeft--;
      if (typeof document !== 'undefined' && !document.querySelector('[data-slot="sidebar"]') && attemptsLeft > 0) { timer = requestAnimationFrame(retry); return; }
      const frameElement = typeof document !== 'undefined' ? document.querySelector('[data-dsc-frame]') : null;
      if (frameElement && typeof MutationObserver === 'function') {
        observer = new MutationObserver(schedule);
        observer.observe(frameElement, { attributes: true, attributeFilter: ['data-sidebar-collapsed'] });
      }
      if (typeof window !== 'undefined' && window.addEventListener) window.addEventListener('resize', schedule);
    };
    retry();
  };
  return {
    start,
    dispose() {
      disposed = true;
      if (timer) { cancelAnimationFrame(timer); timer = 0; }
      if (observer) { observer.disconnect(); observer = null; }
      if (typeof window !== 'undefined' && window.removeEventListener) window.removeEventListener('resize', schedule);
      restore();
    }
  };
}

function registerNavigationShortcuts(ctx, controller) {
  const make = (id, label, code, run) => ctx.shortcuts.register({
    id, label: () => label, aliases: [],
    // 仅声明 Desktop 三个 profile；Web 不声明该绑定（宿主 Web 白名单不接受单修饰 Bracket）。
    defaults: {
      'desktop:macos': { code, modifiers: ['primary'] },
      'desktop:windows': { code, modifiers: ['primary'] },
      'desktop:linux': { code, modifiers: ['primary'] }
    },
    regions: ['page', 'editable'], modals: [],
    resolve: context => context && context.modal ? { status: 'pass' } : { status: 'handled', run }
  });
  const disposeBack = make(NAVIGATION_BACK_ID, '返回', 'BracketLeft', () => controller.back());
  const disposeForward = make(NAVIGATION_FORWARD_ID, '前进', 'BracketRight', () => controller.forward());
  return () => { disposeBack(); disposeForward(); };
}

function mountCodexNavigation(ctx) {
  const controls = createSnapshotStore(NAVIGATION_EMPTY);
  const controller = createNavigationController({
    read: () => navigationRouteOf(ctx.layout.panelInfo.getSnapshot(), ctx.sessions.list.getSnapshot()),
    restore: route => restoreNavigationRoute(ctx, route),
    schedule: callback => queueMicrotask(callback),
    onState: state => {
      const previous = controls.getSnapshot();
      if (previous.canBack === state.canBack && previous.canForward === state.canForward && previous.busy === state.busy && previous.index === state.index && previous.entries.length === state.entries.length) return;
      controls.set(state);
    }
  });
  const disposeEffect = ctx.effect(() => {
    const style = document.createElement('style');
    style.dataset.dscCodexNavigation = '';
    style.textContent = typeof NAVIGATION_CSS_TEXT === 'string' ? NAVIGATION_CSS_TEXT : '';
    document.head.appendChild(style);
    const body = document.body;
    const previous = body.getAttribute('data-dsc-codex-navigation');
    body.setAttribute('data-dsc-codex-navigation', '');
    const unsubscribeLayout = ctx.layout.panelInfo.subscribe(() => controller.refresh());
    const unsubscribeSessions = ctx.sessions.list.subscribe(() => controller.refresh());
    const marker = createNavigationTitlebarMarker();
    const disposeShortcuts = registerNavigationShortcuts(ctx, controller);
    marker.start();
    controller.refresh();
    return () => {
      controller.dispose();
      disposeShortcuts();
      marker.dispose();
      unsubscribeSessions();
      unsubscribeLayout();
      if (previous === null) body.removeAttribute('data-dsc-codex-navigation'); else body.setAttribute('data-dsc-codex-navigation', previous);
      style.remove();
      controls.set(NAVIGATION_EMPTY);
    };
  }, 'codex-style: optional navigation history');
  const NavigationControls = makeNavigationControls(ctx, controls, controller);
  const disposeSlot = ctx.slots.inject('shell.overlay', () => ctx.slots.register({ name: 'shell.overlay', id: 'codex-style:navigation' }, NavigationControls));
  return () => {
    disposeSlot();
    disposeEffect();
  };
}

    return module.exports;
  }
});
