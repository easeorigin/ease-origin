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
  async redirects() {
    return [
      {
        // /contract-vehicles is gone. EaseOrigin holds no contract vehicles, so
        // the page was replaced by /program-experience. The route is indexed
        // and linked externally, so this redirects rather than 404s. Permanent,
        // because it is not coming back.
        source: "/contract-vehicles",
        destination: "/program-experience",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
