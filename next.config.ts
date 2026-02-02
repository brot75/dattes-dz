import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export', // Disabled to allow dynamic routes
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
