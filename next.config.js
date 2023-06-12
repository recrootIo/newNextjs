/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: false,
  transpilePackages: ["@mui/material/css"],
  images: {
    domains: [
      "localhost",
      "preprod.recroot.au",
      "arinnovate",
      "extraordinary-melba-a931eb.netlify.app",
    ],
  },
};

module.exports = nextConfig;
