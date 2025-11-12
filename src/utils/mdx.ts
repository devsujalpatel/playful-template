import { promises as fs } from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { JSX } from "react";

export type Frontmatter = {
  title: string;
  description: string;
  date: string;
  image: string;
  tags: string[];
  readingTime: string;
};

export const getSingleBlog = async (
  slug: string,
): Promise<{ content: JSX.Element; frontmatter: Frontmatter } | null> => {
  try {
    const filePath = path.join(process.cwd(), "src/data", `${slug}.mdx`);
    const raw = await fs.readFile(filePath, "utf-8");

    const { content, frontmatter } = await compileMDX<Frontmatter>({
      source: raw,
      options: {
        parseFrontmatter: true,
      },
    });

    return { content, frontmatter };
  } catch (error) {
    console.error(`❌ Error loading blog "${slug}":`, error);
    return null;
  }
};

const getBlogFrontmatterBySlug = async (
  slug: string,
): Promise<Frontmatter | null> => {
  try {
    const filePath = path.join(process.cwd(), "src/data", `${slug}.mdx`);
    const raw = await fs.readFile(filePath, "utf-8");

    const { frontmatter } = await compileMDX<Frontmatter>({
      source: raw,
      options: {
        parseFrontmatter: true,
      },
    });

    return frontmatter;
  } catch (error) {
    console.error(`❌ Error loading metadata for "${slug}":`, error);
    return null;
  }
};

export const getBlogs = async (): Promise<
  Array<{ slug: string } & Frontmatter>
> => {
  const dirPath = path.join(process.cwd(), "src/data");
  const files = await fs.readdir(dirPath);

  const blogs = await Promise.all(
    files
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        const slug = file.replace(/\.mdx$/, "");
        const frontmatter = await getBlogFrontmatterBySlug(slug);
        return frontmatter ? { slug, ...frontmatter } : null;
      }),
  );

  return (blogs.filter(Boolean) as Array<{ slug: string } & Frontmatter>).sort(
    (a, b) => (a.date < b.date ? 1 : -1),
  );
};