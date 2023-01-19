/** @type {import('next').NextConfig} */

const nextConfig ={
  reactStrictMode: true,
  experimental: { appDir: false },
  output: 'standalone',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/product',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
