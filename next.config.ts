import type { NextConfig } from 'next';
import { codeInspectorPlugin } from 'code-inspector-plugin';

const nextConfig: NextConfig = {
  experimental: {
    ppr: 'incremental',
  },
  webpack: (config, { dev, isServer }) => {
    config.plugins.push(codeInspectorPlugin({ bundler: 'webpack' }));
    return config;
  },
};

export default nextConfig;
