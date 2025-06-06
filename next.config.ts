import type { NextConfig } from "next";
// Import the bundle analyzer configuration
const withBundleAnalyzer = require('./scripts/analyze-bundle');

const nextConfig: NextConfig = withBundleAnalyzer({
  output: "export",
  distDir: "build",
  images: {
    unoptimized: true, // Disable default Image Optimization API for static exports
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
  webpack: (config: any, { isServer }: { isServer: boolean }) => {
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

export default nextConfig;
