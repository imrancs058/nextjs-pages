/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'akamai',
    path: '',
  },
  reactStrictMode: true,
  basePath: '/nextjs-pages',
  assetPrefix: '/nextjs-pages',
}

module.exports = nextConfig
