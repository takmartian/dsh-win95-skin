import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const packageDir = dirname(fileURLToPath(import.meta.url))

/** Font files the client stylesheet asks for, served from the Web GUI origin. */
const FONT_ROUTES = [
  { path: '/dsh_win95_skin/fusion-pixel-text.woff2', file: 'fonts/fusion-pixel-text.woff2' },
  { path: '/dsh_win95_skin/fusion-pixel-mono.woff2', file: 'fonts/fusion-pixel-mono.woff2' },
]

/**
 * Host half of the pixel skin: serve the bundled pixel fonts to the page.
 * The visual skin itself is injected by the Client half.
 *
 * `ctx.inject` waits for the web server service instead of sampling it during
 * activation: on a cold boot the plugin can be applied before the HTTP carrier
 * exists, and a one-shot `ctx.get('webServer')` would silently skip the routes.
 * @param {import('@deepseek-ai/cordis').Context} ctx - plugin context.
 */
export function apply(ctx) {
  ctx.inject(['webServer'], (scope) => {
    const webServer = scope.webServer
    for (const route of FONT_ROUTES) {
      let body
      try {
        body = readFileSync(join(packageDir, route.file))
      } catch (error) {
        console.warn('[dsh_win95_skin] font missing:', route.file, error)
        continue
      }
      scope.effect(() => webServer.register({
        kind: 'exact',
        path: route.path,
        handler(_req, res) {
          res.writeHead(200, {
            'content-type': 'font/woff2',
            'content-length': String(body.length),
            'cache-control': 'public, max-age=31536000, immutable',
          })
          res.end(body)
        },
      }))
    }
  })
}
