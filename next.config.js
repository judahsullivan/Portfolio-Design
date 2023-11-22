/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io", "source.unsplash.com"],
  },
};

module.exports = nextConfig;
