/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.creativeitinstitute.com',
            pathname: '**',
          },
        ],
      },
};

module.exports = nextConfig;