import type { NextConfig } from "next";

/**
 * Static export for GitHub Pages.
 * Served at the domain root on the custom domain treelovingcarellc.com
 * (public/CNAME), so basePath is empty. lib/imageLoader.ts matches.
 */
const repoBase = "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: repoBase,
  trailingSlash: true,
  images: {
    loader: "custom",
    loaderFile: "./lib/imageLoader.ts",
  },
};

export default nextConfig;
