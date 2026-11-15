import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Script } from 'node:vm';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const [manifest, source, updateSource, chromeSource, ownCss, tokens, chromeCssSource, skillsSource, skillsCss, skillsHost, navigationSource, navigationCss, navigationHost, sidebarPinsSource, bodySource] = await Promise.all([
  readFile(resolve(root, 'package.json'), 'utf8').then(JSON.parse),
  readFile(resolve(root, 'src/client.js'), 'utf8'),
  readFile(resolve(root, 'src/update.js'), 'utf8'),
  readFile(resolve(root, 'src/chrome.js'), 'utf8'),
  readFile(resolve(root, 'src/style.css'), 'utf8'),
  readFile(resolve(root, 'assets/tokens.css'), 'utf8'),
  readFile(resolve(root, 'assets/chrome.css'), 'utf8'),
  readFile(resolve(root, 'src/skills.js'), 'utf8'),
  readFile(resolve(root, 'src/skills.css'), 'utf8'),
  readFile(resolve(root, 'src/skills-host.mjs'), 'utf8'),
  readFile(resolve(root, 'src/navigation.js'), 'utf8'),
  readFile(resolve(root, 'src/navigation.css'), 'utf8'),
  readFile(resolve(root, 'src/navigation.mjs'), 'utf8'),
  readFile(resolve(root, 'src/sidebar-pins.js'), 'utf8'),
  readFile(resolve(root, 'src/body.js'), 'utf8')
]);
// 构建输入均随源码提供；不读取个人原型、配置或联网下载资源。
const chromeCss = chromeCssSource.replace(/\.(rail[\w-]*|sidebar[\w-]*|brand[\w-]*|new-chat)\b/g, (_, name) => '.dsc-' + name);
const css = tokens.replace(':root', 'body[data-dsh-codex-style]') + '\n' + chromeCss + '\n' + ownCss;
const output = `window.__ModuleLoader__.load({\n  id: ${JSON.stringify(manifest.name)},\n  factory: function(require) {\n    'use strict';\n    const CSS_TEXT = ${JSON.stringify(css)};\n    const SKILLS_CSS_TEXT = ${JSON.stringify(skillsCss)};\n    const NAVIGATION_CSS_TEXT = ${JSON.stringify(navigationCss)};\n    const PLUGIN_VERSION = ${JSON.stringify(manifest.version)};\n    const PLUGIN_PACKAGE = ${JSON.stringify(manifest.name)};\n    const module = { exports: {} };\n    const exports = module.exports;\n${chromeSource}\n${sidebarPinsSource}\n${source}\n${skillsSource}\n${updateSource}\n${bodySource}\n${navigationSource}\n    return module.exports;\n  }\n});\n`;
new Script(output, { filename: 'dsh-codex-ui/client.js' });
await mkdir(resolve(root, 'lib'), { recursive: true });
await writeFile(resolve(root, 'lib/client.js'), output);
await writeFile(resolve(root, 'lib/host.js'), await readFile(resolve(root, 'src/host.mjs')));
await writeFile(resolve(root, 'lib/skills-host.js'), skillsHost);
await writeFile(resolve(root, 'lib/navigation.js'), navigationHost);
console.log(`Built ${manifest.name}@${manifest.version}: client ${Buffer.byteLength(output)} bytes, navigation ${Buffer.byteLength(navigationHost)} bytes`);
