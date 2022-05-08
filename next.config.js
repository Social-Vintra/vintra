/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["google.com", "imgur.com"],
  },
};

module.exports = nextConfig;