const { ANALYZE } = process.env;

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: ANALYZE === 'true',
});

const withPWA = require('next-pwa')({
  dest: 'public',
});

module.exports = withBundleAnalyzer(
  withPWA({
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '*',
        },
        {
          protocol: 'https',
          hostname: 'placehold.co',
        },
      ],
    },
  })
);
