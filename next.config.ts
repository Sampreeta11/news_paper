import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['172.18.240.1', 'localhost'],
  serverExternalPackages: ['@prisma/client', 'bcrypt'],
};

export default nextConfig;
