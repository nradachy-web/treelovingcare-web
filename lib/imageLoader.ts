/**
 * Custom next/image loader for static export on GitHub Pages.
 * Served at the domain root (treelovingcarellc.com), so basePath is empty
 * and absolute /public paths resolve as-is. Remote URLs pass through.
 */
const basePath = "";

export default function imageLoader({ src }: { src: string }): string {
  if (/^https?:\/\//.test(src)) return src;
  if (src.startsWith(basePath)) return src;
  if (src.startsWith("/")) return `${basePath}${src}`;
  return src;
}
