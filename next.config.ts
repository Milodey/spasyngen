/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for static export
  trailingSlash: true, // Ensures correct static URL paths

  images: {
    domains: ["placekitten.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        port: "",
        pathname: "/**",
      },
    ],
    unoptimized: true, // Required for `next export` (Next.js cannot optimize images in static export mode)
  },
};

module.exports = nextConfig;
