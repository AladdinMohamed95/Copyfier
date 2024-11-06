/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  // Optional: Enable static site generation if you're building a static site
  target: "serverless", // If you're deploying on Vercel or AWS Lambda
  reactStrictMode: true, // Optional: Enables React strict mode
};

module.exports = nextConfig;
