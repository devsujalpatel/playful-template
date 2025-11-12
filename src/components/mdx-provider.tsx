"use client";

import { MDXProvider } from "@mdx-js/react";
import React from "react";

const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-4xl font-bold mb-4" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-gray-700 dark:text-gray-300 mb-2" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-blue-500 hover:underline" {...props} />
  ),
};

export default function MdxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}
