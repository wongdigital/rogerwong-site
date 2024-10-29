import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['example.com', 'images.unsplash.com','vercel.app','rogerwong-site-3q85lbw2r-roger-wongs-projects.vercel.app'], // Add any external domains you're using
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
