import type { NextConfig } from "next";
const withMDX = require("@next/mdx")();

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["mdx", "ts", "tsx"],
};

module.exports = withMDX(nextConfig);
