import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  typescript: {
    ignoreBuildErrors: true, // ⚠️ This ignores ALL TypeScript errors
  },
  eslint: {
    ignoreDuringBuilds: true, // Also ignore ESLint if needed
  },
};

export default nextConfig;
