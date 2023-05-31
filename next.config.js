/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: false,
  transpilePackages: ["@mui/material/css"],
  images: {
    domains: ["localhost"],
  },
};

module.exports = nextConfig;
