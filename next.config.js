/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
      serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "**",
        port: '',
        pathname: '/image-*.jpeg',
      },
    ],
  },
}

module.exports = nextConfig
