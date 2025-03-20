/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',// Required for static export
  trailingSlash: true, // Ensures correct static URL paths
  experimental: {
    appDir: true, // Ensure Next.js is using the App Router
  },

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
