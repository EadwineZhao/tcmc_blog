/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'media.graphassets.com',
          // port: '443',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'images.pexels.com',
          // port: '443',
          pathname: '/**',
        },
      ],
  },
  
}



module.exports = nextConfig
