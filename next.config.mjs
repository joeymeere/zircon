/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'assets.aceternity.com',
      'firebasestorage.googleapis.com',
      'www.soldev.app'
    ]
  }
};

export default nextConfig;
