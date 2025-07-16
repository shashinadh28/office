const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { ANALYZE } = process.env;

module.exports = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      // Add bundle analyzer plugin in production when ANALYZE env is set
      if (ANALYZE) {
        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: "static",
            reportFilename: "../bundle-analyzer/report.html",
            openAnalyzer: false,
            generateStatsFile: false,
            statsFilename: "../bundle-analyzer/stats.json",
          })
        );
      }

      // Apply any existing webpack config if it exists
      if (typeof nextConfig.webpack === "function") {
        return nextConfig.webpack(config, options);
      }

      return config;
    },
  });
};
