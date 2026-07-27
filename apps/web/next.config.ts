import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    turbopack: {
      resolveAlias: {},
    },
  },
};

export default nextConfig;
