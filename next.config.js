/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: false,
  // transpilePackages: ["@mui/material/css"],
  webpack(config) {
    config.resolve.alias["@emotion/core"] = "@emotion/react";
    config.resolve.alias["styled-components"] = "styled-components/react";
    return config;
  },
};

module.exports = nextConfig;
