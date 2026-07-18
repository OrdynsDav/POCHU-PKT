import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    qualities: [75, 90, 95, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pskovpkt.ru",
      },
    ],
  },
  experimental: {
    viewTransition: true,
    optimizePackageImports: ['lucide-react/**']
  },
};

export default nextConfig;
