import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Optimise images from external sources (add domains as needed)
  images: {
    remotePatterns: [],
  },

  // Logging for fetch requests in development
  logging: {
    fetches: {
      fullUrl: true,
    },
  },

  // Type-safe environment variable exposure
  env: {
    NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME ?? 'AIvora',
  },
};

export default nextConfig;
