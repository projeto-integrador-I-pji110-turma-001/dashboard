import type { NextConfig } from "next";

const isGithubPages = process.env.NODE_ENV === "production";
const repo = "dashboard";

const nextConfig: NextConfig = {
  basePath: isGithubPages ? `/${repo}` : "",
  assetPrefix: isGithubPages ? `/${repo}/` : "",
};

export default nextConfig;