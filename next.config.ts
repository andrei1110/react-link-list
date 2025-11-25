import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  env: {
    API_URL: process.env.API_URL,
  },
};

export default nextConfig;
