import type { NextConfig } from "next";
import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    domains: ['rogerwong-site.vercel.app', 'images.unsplash.com', 'vercel.app', 'nextjs.org'],
  },
};

const withMDX = createMDX();

export default withMDX(nextConfig);