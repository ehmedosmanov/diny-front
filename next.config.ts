import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true, // ⚠️ This ignores ALL TypeScript errors
  },
  eslint: {
    ignoreDuringBuilds: true, // Also ignore ESLint if needed
  },
};

export default nextConfig;
