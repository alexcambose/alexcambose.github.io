const withPWA = require('next-pwa')({
  dest: 'public',
});

module.exports = withPWA({
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
});
