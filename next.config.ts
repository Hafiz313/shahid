import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/shahid",
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
      },
    ],
  },
  transpilePackages: ["three"],
};

export default nextConfig;
