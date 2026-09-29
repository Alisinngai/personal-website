import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    // Placeholder photographs. Remove these once every image lives in /public.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
      {
        // picsum.photos redirects the actual bytes here.
        protocol: "https",
        hostname: "fastly.picsum.photos",
        pathname: "/**",
      },
    ],
  },
}

export default nextConfig
