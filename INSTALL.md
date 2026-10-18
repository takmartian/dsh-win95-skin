# 安装 / Install

`dsh_win95_skin` 是 DeepSeek Harness Web UI 的一个皮肤插件（bundle）。它只覆写主题变量和
样式，不修改 DSH 的安装文件，也不联网。

## 环境要求

- DeepSeek Harness 桌面版，带 Web UI。
- 开发和验证版本：**DSH 0.2.1-rc.2**。皮肤的样式挂钩在 DSH 的 class / `data-slot`
  名称上，DSH 升级后若这些名称变化，个别部件可能回退成默认样式。
- 无需联网：字体已随包提供。

## 安装（推荐：交给 DSH 自己装）

1. 把整个 `dsh_win95_skin` 目录解压到一个**固定位置**，例如
   `~/dsh-bundles/dsh_win95_skin`。之后不要删除或移动它（profile 里记录的是这个路径）。
2. 在 DSH 的任意会话里发送下面这句话（把路径换成你的真实绝对路径）：

   > 用 plugin_manager 的 install_bundle 安装 `/Users/you/dsh-bundles/dsh_win95_skin`

   DSH 会完成依赖安装、把 bundle 加进当前 profile，并应用它自带的
   `cordis.patch.yml`；按提示批准即可。
3. 装好后**刷新页面**（⌘R / Ctrl+R）。界面应变成 Windows 95 外观：银灰立体控件、
   藏青标题栏、像素字体和 16px 滚动条。

安装对当前 profile 的所有会话生效，并且重启后保留。

## 卸载

在 DSH 会话里发送：

> 用 plugin_manager 的 remove_bundle 卸载 `dsh_win95_skin`

然后刷新页面，界面恢复正常。

## 常见问题

- **字体不是像素风**：字体由插件的 Host 半部分通过
  `/dsh_win95_skin/*.woff2` 提供。确认 bundle 处于启用状态，然后强制刷新
  （⌘⇧R / Ctrl+Shift+R）清掉旧缓存。
- **切到深色模式后界面没变**：这是有意的。皮肤对亮/暗两种偏好都输出同一套
  Windows 95 配色。
- **只想临时关掉**：在插件管理里禁用 `dsh_win95_skin`，刷新即恢复原界面；重新启用
  不需要重装。

## 包内容

| 文件 | 作用 |
| --- | --- |
| `client.js` | 客户端半部分：主题 token + Windows 95 样式表 + 像素图标。 |
| `index.js` | 服务端半部分：从 Web UI 同源提供内置字体。 |
| `cordis.patch.yml` | bundle patch，插入 `dsh_win95_skin` 插件行。 |
| `fonts/` | Fusion Pixel 12px 比例字体与等宽字体（woff2）。 |
| `locale/` | zh / en 的插件名称与描述。 |
| `icon.svg` | 插件图标（像素窗口）。 |

## 再分发

- 直接把 `dsh_win95_skin-0.4.0.zip` 发给别人即可，对方按上面的步骤解压安装。
- 想发到 npm：把 `package.json` 里的 `private` 改成 `false`，换一个不会冲突的包名
  （当前是不带 scope 的 `dsh_win95_skin`），再 `npm publish`。`LICENSE` 和
  `LICENSE-Fonts.txt` 必须一起发布。
- 无论哪种方式，收到的人都不需要联网下载字体。

## 许可

- 代码：MIT，见 `LICENSE`。
- 字体：SIL Open Font License 1.1，见 `LICENSE-Fonts.txt`
  （Fusion Pixel Font, Copyright (c) 2022 TakWolf）。再分发时请保留这两个文件。
- 不含任何 Microsoft 素材：图标是手绘像素图，外观是对 Windows 95 风格的致敬。

---

# Install (English)

`dsh_win95_skin` is a skin bundle for the DeepSeek Harness Web UI. It only
overrides theme tokens and CSS; it does not patch the DSH installation and needs
no network access.

Requirements: DeepSeek Harness desktop with the Web UI. Tested against
**DSH 0.2.1-rc.2**; the styles hook into that version's class and `data-slot`
names, so a DSH upgrade may soften a few rules.

1. Extract the `dsh_win95_skin` directory to a permanent location, for example
   `~/dsh-bundles/dsh_win95_skin`, and keep it there.
2. In any DSH session, ask:

   > install the bundle at `/Users/you/dsh-bundles/dsh_win95_skin` with
   > plugin_manager `install_bundle`

   DSH installs the package, adds it to the current profile, and applies its
   `cordis.patch.yml`. Approve the prompts it raises.
3. Reload the page (⌘R / Ctrl+R).

To remove it, ask DSH to run `plugin_manager` `remove_bundle` on
`dsh_win95_skin`, then reload.

To redistribute, hand over the zip. To publish on npm instead, set `private` to
`false` in `package.json`, pick a non-conflicting package name, and
`npm publish`; ship `LICENSE` and `LICENSE-Fonts.txt` with it either way. The
recipient never needs a network fetch for the fonts.

Licences: code MIT (`LICENSE`); fonts SIL OFL 1.1 (`LICENSE-Fonts.txt`). Keep
both files when redistributing. No Microsoft assets are included.
