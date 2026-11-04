import { readFileSync } from 'node:fs'
import { extname, resolve } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { NAV_ITEMS, site } from './src/config/content'

// Adds the page title, Google and share-preview tags, robots.txt and sitemap.xml from client/data
function siteMeta(): Plugin {
  const shareImageName = site.shareImage && `share${extname(site.shareImage)}`
  const meta = (attr: 'name' | 'property', key: string, content: string) => ({
    tag: 'meta',
    attrs: { [attr]: key, content },
    injectTo: 'head' as const,
  })

  return {
    name: 'site-meta',
    transformIndexHtml(html) {
      return {
        html: html.replace('<title></title>', `<title>${site.pageTitle}</title>`),
        tags: [
          meta('name', 'description', site.description),
          meta('name', 'author', site.name),
          meta('property', 'og:type', 'website'),
          meta('property', 'og:title', site.pageTitle),
          meta('property', 'og:description', site.description),
          meta('property', 'og:url', site.url),
          meta('name', 'twitter:card', shareImageName ? 'summary_large_image' : 'summary'),
          ...(shareImageName ? [meta('property', 'og:image', `${site.url}/${shareImageName}`)] : []),
          { tag: 'link', attrs: { rel: 'canonical', href: site.url }, injectTo: 'head' as const },
        ],
      }
    },
    generateBundle() {
      const urls = NAV_ITEMS.map((item) => `  <url><loc>${site.url}${item.href}</loc></url>`).join('\n')
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      })
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`,
      })
      if (site.shareImage && shareImageName) {
        this.emitFile({
          type: 'asset',
          fileName: shareImageName,
          source: readFileSync(resolve('data', site.shareImage)),
        })
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), siteMeta()],
})
