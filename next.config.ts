import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['rogerwong-site.vercel.app', 'images.unsplash.com', 'vercel.app'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/thoughts-on-apple-vision-pro',
        destination: '/posts/thoughts-on-apple-vision-pro',
        permanent: true,
      },
    ]
  }
};

export default nextConfig;