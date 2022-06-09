/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'akamai',
    path: '',
  },
  reactStrictMode: true,
  basePath: '/out',
}

module.exports = nextConfig
