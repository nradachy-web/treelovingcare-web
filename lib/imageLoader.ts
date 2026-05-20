/**
 * Custom next/image loader for static export on GitHub Pages.
 * Prepends the repo basePath to absolute /public paths so images resolve
 * under /treelovingcare-web. Static-import assets (already basePath-prefixed)
 * and remote URLs pass through untouched.
 */
const basePath = "/treelovingcare-web";

export default function imageLoader({ src }: { src: string }): string {
  if (/^https?:\/\//.test(src)) return src;
  if (src.startsWith(basePath)) return src;
  if (src.startsWith("/")) return `${basePath}${src}`;
  return src;
}
