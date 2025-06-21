/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com', 'picsum.photos','images.pexels.com'],
  },
}

module.exports = nextConfig 