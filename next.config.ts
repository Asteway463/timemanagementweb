import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site has no backend: `npm run build` writes a fully static site to `out/`.
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    // Required for static export. All images live in /public.
    unoptimized: true,
  },
};

export default nextConfig;
