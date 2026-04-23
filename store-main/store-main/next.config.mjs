/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  devIndicators: false,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      use: ['raw-loader', 'glslify-loader'],
    });
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/img-proxy/:path*',
        destination: 'https://minalidya.com/wp-content/uploads/:path*',
      },
    ];
  },
};

export default nextConfig;
