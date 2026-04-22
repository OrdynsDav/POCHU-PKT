import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    qualities: [75, 95, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pskovpkt.ru",
      },
    ],
  },
  experimental: {
    viewTransition: true,
  },
};

export default nextConfig;
