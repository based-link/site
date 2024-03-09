/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    webpackBuildWorker: true,
    appDir: true
  },
  images: {
    remotePatterns: [
      {
        hostname: 'cloudflare-ipfs.com',
        pathname: '/ipfs/**',
        port: '',
        protocol: 'https',
      },
      {
        hostname: 'pbs.twimg.com',
        pathname: '/media/**',
        port: '',
        protocol: 'https',
      },
      {
        hostname: 'i.ytimg.com',
        pathname: '/vi/**',
        port: '',
        protocol: 'https',
      },
      {
        hostname: 'scontent-cdg4-2.cdninstagram.com',
        pathname: '/v/**',
        port: '',
        protocol: 'https',
      },
    ],
  },
  reactStrictMode: true,
  webpack: config => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding')
    return config
  },
}

module.exports = nextConfig
