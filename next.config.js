/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('./scripts/analyze-bundle');

const nextConfig = withBundleAnalyzer({
  ...(process.env.NEXT_EXPORT === 'true' && {
    output: "export",
    distDir: "out"
  }),
  images: {
    unoptimized: process.env.NEXT_EXPORT === 'true', // Only disable optimization for static export
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
    scrollRestoration: true,
  },
  // Headers are not supported with 'output: export' in Next.js
  // For static exports, configure these headers in your hosting provider:
  // - Cache-Control: public, max-age=31536000, immutable for static assets
  // - Cache-Control: public, max-age=0, must-revalidate for HTML files
  // - Content-Encoding: gzip,br for compressed assets
  webpack: (config, { isServer }) => {
    // Optimize SVG files
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      removeViewBox: false,
                      cleanupIDs: false,
                    },
                  },
                },
              ],
            },
          },
        },
      ],
    });

    return config;
  },
});

module.exports = nextConfig;
