// Base path for GitHub Pages project sites (e.g. /mansa-websitev2).
// Set NEXT_PUBLIC_BASE_PATH in CI; left empty for local dev.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath,
  reactStrictMode: true,
};

export default nextConfig;
