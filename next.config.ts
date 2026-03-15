import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactCompiler: true,
  turbopack: {
    root: process.cwd(),
  },
  images: {
    remotePatterns: [
      { hostname: "upload.wikimedia.org" },
      { hostname: "logo.clearbit.com" },
    ],
  },
};

export default nextConfig;
