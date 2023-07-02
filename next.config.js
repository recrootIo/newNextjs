/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  i18n: {
    localeDetection: true,
    locales: ["en-US", "lk"],
    defaultLocale: "en-US",
  },

  trailingSlash: false,

  reactStrictMode: false,

  transpilePackages: ["@mui/material/css"],
  images: {
    unoptimized: false,
    domains: [
      "localhost",
      "preprod.recroot.au",
      "arinnovate",
      "extraordinary-melba-a931eb.netlify.app",
      "recroot.io",
    ],
  },
};

module.exports = nextConfig;
