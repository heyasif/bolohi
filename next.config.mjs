/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['image.winudf.com', 'images.sftcdn.net'],
    unoptimized: true, // Disable the Image Optimization API
  },
  webpack: (config, { isServer }) => {
    // Ignore .map files from chrome-aws-lambda
    config.module.rules.push({
      test: /\.map$/,
      use: 'ignore-loader'
    });

    if (!isServer) {
      config.module.rules.push({
        test: /\.js\.map$/,
        use: 'ignore-loader'
      });
    }

    return config;
  },
  // output: 'export', // Ensure static HTML export
};

export default nextConfig;
