# dsh_win95_skin

A persistent skin plugin for the DeepSeek Harness Web UI that redraws the
interface as a Windows 95 application.

- **Palette**: the Windows 95 desktop colours — silver `#c0c0c0` chrome, white
  document fields, black text, navy `#000080` selection and title bars, teal
  desktop colour in the app icon. Light and dark preferences both render the
  same period palette.
- **Chrome**: raised and sunken 2px bevels built from box-shadow rims
  (`--w95-raised` / `--w95-sunken`), applied to buttons, menus, dialogs,
  switches, the composer field and text inputs. Buttons sink one pixel when
  pressed; the primary action takes the navy fill.
- **Scrollbars**: classic 16px scrollbars with raised 3D thumbs, arrow buttons
  (pixel SVG triangles), and the Windows 95 50% dither track.
- **Selection**: navy block selection with white text; menu items highlight in
  navy with white text and icons.
- **Tooltips**: pale-yellow `#ffffe1` Windows 95 help bubbles with a black
  border.
- **Icons**: toolbar and sidebar SVGs are replaced with hand-drawn 16×16 pixel
  sprites (masked in `currentColor`); every other SVG is snapped to crisp pixel
  edges with square caps and mitred joins.
- **Type**: [Fusion Pixel Font 12px](https://github.com/TakWolf/fusion-pixel-font)
  (proportional for UI text, monospaced for code), served by the plugin's Host
  half from `/dsh_win95_skin/*.woff2`; no network access at runtime.
- **Frame**: the viewport gets the raised window bezel, the sidebar a 1px
  divider, and the pixel arrow cursor is kept.

Layout inside the window keeps the Harness structure: silver sidebar, white
conversation area, sunken white composer, navy settings title bar.

## Install

This directory is a complete bundle: `INSTALL.md` has the install, uninstall and
troubleshooting steps in Chinese and English. In short, put the directory
somewhere permanent and ask DSH to run `plugin_manager` `install_bundle` with its
absolute path, then reload the page.

It is written against **DSH 0.2.1-rc.2**. The stylesheet targets that version's
class and `data-slot` names, so a future DSH release can leave a few components
unstyled until the selectors are refreshed; nothing in the DSH installation is
modified, so deleting the bundle always restores the stock UI.

## Layout

| File | Purpose |
| --- | --- |
| `index.js` | Host half: serves the bundled woff2 files on the Web GUI origin. |
| `client.js` | Client half: theme token layer + Windows 95 stylesheet in `shell.overlay`. |
| `cordis.patch.yml` | Bundle patch that inserts the `dsh_win95_skin` row. |
| `fonts/` | Fusion Pixel 12px proportional and monospaced cuts. |
| `INSTALL.md` | Install / uninstall / troubleshooting (zh + en). |
| `LICENSE` | MIT licence for the plugin code. |
| `LICENSE-Fonts.txt` | SIL Open Font License 1.1 for the bundled fonts. |

Disable or remove the bundle to return to the stock interface.

## Licence

The plugin code is MIT licensed (see `LICENSE`). The bundled fonts keep their own
licence: Fusion Pixel Font, Copyright (c) 2022 TakWolf, is distributed under the
SIL Open Font License 1.1 (see `LICENSE-Fonts.txt`). The bundled files are
unmodified builds from `@fontsource/fusion-pixel-12px-proportional-sc` and
`@fontsource/fusion-pixel-12px-monospaced-sc`. Keep both licence files when you
pass the bundle on.

No Microsoft assets are shipped: the icons are original pixel drawings, and the
appearance is a style homage, not a Windows 95 redistribution.
