/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGODB_URI: process.env.MONGODB_URI, // Hier wird sichergestellt, dass die Variable in Next.js verfügbar ist
  },
};

export default nextConfig;
