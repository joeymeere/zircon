/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@joeymeere/dreamcast'],
  webpack: (config) => {
      config.resolve.extensionAlias = {
        ".js": [".ts", ".tsx", ".js", ".jsx"],
        ".mjs": [".mts", ".mjs"],
        ".cjs": [".cts", ".cjs"],
      };
    return config;
  },
  reactStrictMode: true,
  images: {
    domains: [
      'assets.aceternity.com',
      'firebasestorage.googleapis.com',
      'www.soldev.app',
      'avatar.vercel.sh',
      'arweave.net',
      'i.imgur.com',
      'pbs.twimg.com'
    ]
  }
};

export default nextConfig;
