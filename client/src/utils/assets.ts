/* Turns a path from client/data (images/..., files/...) into a URL the site can load. */

const FILES = import.meta.glob(
  '../../data/{images,files}/**/*.{png,jpg,jpeg,webp,avif,gif,svg,pdf,PNG,JPG,JPEG,WEBP,PDF}',
  { eager: true, query: '?url', import: 'default' },
) as Record<string, string>;

export function assetUrl(path?: string): string | undefined {
  if (!path) return undefined;
  if (/^https?:\/\//.test(path)) return path;

  const url = FILES[`../../data/${path}`];
  if (!url) console.warn(`File not found in client/data: ${path}`);
  return url;
}
