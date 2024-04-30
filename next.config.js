/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "pub-c720364b83ff439abecb64d5ff4fe707.r2.dev",
        port: '',
        pathname: '/image-*.jpeg',
      },
    ],
  },
}

module.exports = nextConfig
