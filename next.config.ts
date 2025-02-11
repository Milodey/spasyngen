// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {


    domains: ['placekitten.com'],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
