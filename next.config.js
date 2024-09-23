const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp']
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Mock the `fs` module to avoid issues in client-side code
      config.resolve.fallback = {
        fs: false,
        path: false,
        os: false,
      }
    }

    return config
  }
}

module.exports = withNextIntl(nextConfig);

