/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
  },
  sassOptions: {
    includePaths: ["styles"],
  },
};

export default nextConfig;
