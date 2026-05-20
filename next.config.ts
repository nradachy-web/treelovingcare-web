import type { NextConfig } from "next";

/**
 * Static export for GitHub Pages.
 * Served as a project page at /treelovingcare-web — basePath set accordingly.
 * When the site moves to its own domain (treelovingcarellc.com), set
 * basePath to "" and add a CNAME file.
 */
const repoBase = "/treelovingcare-web";

const nextConfig: NextConfig = {
  output: "export",
  basePath: repoBase,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
