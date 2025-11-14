import type { NextConfig } from "next";
const withMDX = require("@next/mdx")();

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = withMDX(nextConfig);
