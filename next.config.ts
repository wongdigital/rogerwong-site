import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['rogerwong-site.vercel.app', 'images.unsplash.com','vercel.app'], // Add any external domains you're using
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;

module.exports = {
  async redirects() {
    return [
      {
        source: '/thoughts-on-apple-vision-pro',
        destination: '/posts/thoughts-on-apple-vision-pro',
        permanent: true,
      },
    ]
  },
}