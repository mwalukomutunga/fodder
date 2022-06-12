/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: false,
  },
  reactStrictMode: true,
  distDir: 'build',
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/invoice': { page: '/invoice' },
      '/account': { page: '/account' },
      '/myorders': { page: '/myorders' },
      '/post': { page: '/post' },
     
    }
  },
}

module.exports = nextConfig
