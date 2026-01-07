/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" 
    ? `/${process.env.CI_PROJECT_PATH_SLUG || process.env.CI_PROJECT_NAME || "v0-benchies-marketing-website"}`
    : "",
  assetPrefix: process.env.NODE_ENV === "production"
    ? `/${process.env.CI_PROJECT_PATH_SLUG || process.env.CI_PROJECT_NAME || "v0-benchies-marketing-website"}/`
    : "",
}

export default nextConfig
