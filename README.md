# DSH Codex Style

为 **DeepSeek Harness（DSH）** 提供 Codex 桌面端风格的深浅色主题。在 DSH 外观设置选择浅色或深色即可切换；选择跟随系统时，主题也跟随系统变化。

> 本仓库是 DSH-Codex-Style 的 Qinova 重构版：包 scope 改为 `@qinova-ai`，组件 `ui-skin-codex-style` 改名 `dsh-codex-ui`、`codex-style-navigation` 改名 `dsh-codex-ui-navigation`；已移除工作规范与图片批注组件，主模块不再重绘输入区控件、正文效果与会话头（均回退为宿主原生界面）。
>
当前版本 **0.2.7**：适配 DSH 0.2.2-rc.3 的导航固定机制，增加“更多”页显式固定管理，修复工作区背景框遮挡输入和“最近”遗漏项目对话的问题。**推荐使用已验证的官方 DSH 0.2.2-rc.3**；不再按 DSH 版本号设定安装/加载上下限，升级宿主不会仅因超出版本范围而禁用本插件。推荐版本之外的界面兼容性以实际使用为准。

本版在官方 DSH **0.2.2-rc.3** 宿主资源下完成 **242 项自动检查**，并验证导航固定管理、工作区布局及最近列表的浏览器隔离交互。推荐版本之外尚未逐版实机复测；允许加载表示不受版本号门禁限制。

## 功能

- **主题界面（主模块）**：Codex 风格的导航、可收起侧栏与明暗主题，支持项目/会话搜索与管理、会话运行/完成提示，以及齿轮菜单中宿主公开第三方入口（如 Remote）的独立分组呈现；侧栏「更多」页支持导航固定管理，技能页只读展示当前会话作用范围下的 DSH 技能。浅色采用白色主区与浮层，深色保留现有配色。插件版本更新改用 DSH 原生插件市场/插件页；DSH 有新版时，左下角齿轮上方仍显示蓝色本体更新按钮，下载和安装由 DSH 完成。保留 DSH 原生编辑器、附件、工具调用与审批流程，输入区控件、正文效果与会话头均使用宿主原生界面。

- **页面前进后退（可选子模块，默认开启）**：在窗口左上角增加后退、前进按钮，按本次运行的内存历史切换最近打开的会话与全局面板，支持 Ctrl+[ / Ctrl+]。这不是 DSH 原生能力：历史只在本次运行内存中，重启后清空，不恢复设置弹窗、页面内部状态或滚动位置。需同时开启主模块；关闭后移除按钮与快捷键，原有侧栏切换按钮恢复原位。

在「自定义 → 插件 → 本插件详情 → 包含的组件」可管理页面前进后退开关；默认开关以本包 `cordis.patch.yml` 为准，升级时保留用户已经保存的选择。

## 安装

在 DSH「自定义 → 插件 → 添加插件」中输入 `@qinova-ai/dsh-codex-style`；也可从 [发行页面](https://github.com/QingZzzzzzzzz/dsh-codex-ui/releases/tag/v0.2.7) 下载 Windows ZIP，退出 DSH 后运行 `install.cmd`（需要 Node.js 20+），完成后重新启动 DSH。

兼容声明使用 `engines.dsh: "*"`，手动安装器也允许所有有效 DSH 版本号，包括预发布版。推荐版本是测试基线，不是强制门禁；本版不新增外观设置页。手动安装仍需要 Node.js 20+。

插件版本更新改用 DSH 原生插件市场/插件页；当前 `link:` 安装不显示宿主原生版本区，日常 profile 不迁移，由用户后续按市场「换用线上版本」流程处理。源码构建运行 `npm run build`，版本变更见 [更新记录](CHANGELOG.md)。

检测到 DSH Desktop 社区版时，`install.cmd` 会说明它不是 DeepSeek 官方版、效果可能一般；找到有效 runtime 后可在提示后继续安装，不因版本号超出范围而拒绝。安装记录仅保存宿主路径和版本等环境信息，用于区分实际运行的官方版与社区版。社区版的完整界面兼容性尚未实机验证。

## 更新与恢复

**已用 registry 规格安装**（profile 里记录版本号）：通过「自定义 → 插件 → 本插件详情」的宿主检查/安装入口更新。0.2.7 起不再设置 DSH 版本门禁；仍使用旧版插件时，旧包自身的兼容声明继续有效，需要更新插件才能采用新策略。这条升级路径不依赖插件自己的界面。

**当前是 `link:` 本地安装**（开发工作区或本机链接安装）：在插件市场「已安装」列表里找到该条目，打开 `···` 菜单 →「换用线上版本」。注意这是**更换安装来源**（把本地链接换成 npm 版本），不是普通版本更新：安装前先备份 profile 的 `package.json` 与 `pnpm-lock.yaml`，`~/.dsh/dsh-codex-style/` 下的旧版本目录保留，便于回滚。

**自研「检查更新 / 立即安装」已退役**：插件更新统一走 DSH 原生插件市场/插件页，宿主是否加载本插件客户端不影响更新入口；DSH 本体更新仍由齿轮上方蓝圆入口转交宿主。

安装失败后，宿主只保证 profile 的 `package.json`、锁文件等**文件层面**回到可用状态，不保证 `node_modules` 完整回滚。回滚后请核对插件是否仍为原版本、能否正常加载，再决定重试。

## 效果预览

新对话首页效果<img width="1911" height="1224" alt="image" src="https://github.com/user-attachments/assets/690fd8cb-3973-46f5-a3a8-46d516b98379" />
搭配提示词注入后的deepseek v4.1 flash 1017任务过程效果<img width="1918" height="1222" alt="image" src="https://github.com/user-attachments/assets/23d6e604-c6ef-4c00-b2d5-d81b1995bbfb" />
codex正文风格打开后样式<img width="1910" height="1222" alt="image" src="https://github.com/user-attachments/assets/0f40145d-87f9-4e9b-8317-e56caa4d7561" />
侧边栏收起后鼠标悬停在导航栏图标时悬浮卡片效果<img width="1905" height="1224" alt="image" src="https://github.com/user-attachments/assets/86a2e1a6-2e4b-4cd3-ab8a-68791cf1d16c" />
模型思考强度选择效果<img width="1909" height="1215" alt="image" src="https://github.com/user-attachments/assets/191614b4-3716-4213-bb94-1c18ae919b5f" />
<img width="1899" height="1222" alt="image" src="https://github.com/user-attachments/assets/d70dd2c6-d8a5-4838-854a-87e5a72bc247" />

可选的图片批注功能，打开后，在聊天框内复制粘贴图片后，单击图片，可以发送批注<img width="1903" height="1216" alt="image" src="https://github.com/user-attachments/assets/25d7205a-87e7-493c-8f43-599358a4c028" />
<img width="1905" height="1214" alt="image" src="https://github.com/user-attachments/assets/41ea7c4f-0dea-4d09-a2ef-dcafb9b5908e" />



## 开发验证

首次检出运行 `npm ci`，修改源码后执行 `npm run build`，再运行 `npm test`。测试使用临时 profile 检查安装、更新和回退，不改日常 DSH 配置。

## 发布前检查

- 核对本版 `engines.dsh` 为 `*`，推荐及已验证版本明确写在说明中。
- DSH 升版无需仅为扩大版本范围重发插件；若宿主接口或界面变化，再发布实际适配修复。
- 允许加载不等于所有版本都已实测；按实际验证结果维护推荐版本和 [更新记录](CHANGELOG.md)。

## 许可与致谢

自研代码使用 [MIT License](LICENSE)。感谢项目贡献者及 `yuehuawu416-cmyk` 的修复，品牌素材说明见 [第三方说明](THIRD_PARTY_NOTICES.md)。

本项目为社区独立插件，与 OpenAI 或 DeepSeek 无关联，未获其赞助或背书。
