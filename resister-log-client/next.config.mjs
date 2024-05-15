/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
  },
  env: {
    NEXT_AUTH_SECRET: process.env.NEXT_AUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXT_PUBLIC_TWITTER_CLIENT_ID: process.env.TWITTER_CLIENT_ID,
    NEXT_PUBLIC_TWITTER_CLIENT_SECRET: process.env.TWITTER_CLIENT_SECRET
  },
  sassOptions: {
    includePaths: ["styles"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });
    config.externals.push("pino-pretty", "lokijs", "encoding");
    config.resolve.fallback = { fs: false, net: false, tls: false }

    return config;
  },
  async headers() {
    return [
      {
        source: '/usports/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ]
  },
};

export default nextConfig;
