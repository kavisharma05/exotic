import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure compatibility with Vercel and src directory structure
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: false,
  },
  typescript: {
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: false,
  },
  // Enable static optimization
  trailingSlash: false,
  // Explicitly configure src directory
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  // Enable React Strict Mode for better development experience
  reactStrictMode: true,
};

export default nextConfig;
