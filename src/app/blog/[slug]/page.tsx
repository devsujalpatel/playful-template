import { Container } from "@/components/container";
import { getSingleBlog, getBlogs } from "@/utils/mdx";
import { redirect } from "next/navigation";
import { Metadata } from "next";

// Fix: Change function name to match Next.js convention
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getSingleBlog(slug);

  if (!blog || !blog.frontmatter) {
    redirect("/blog");
  }

  const { frontmatter } = blog;

  return {
    title: `${frontmatter.title} - Sujal Patel`,
    description: frontmatter.description,
    // Add additional metadata for better SEO
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      type: "article",
      publishedTime: frontmatter.date,
    },
    twitter: {
      card: "summary_large_image",
      title: frontmatter.title,
      description: frontmatter.description,
    },
  };
}

type Props = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<Record<string, string | string[]>>;
};

export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export default async function SingleBlogPage({ params }: Props) {
  // Await the params promise to get the actual parameters
  const { slug } = await params;
  const blog = await getSingleBlog(slug);

  if (!blog) {
    redirect("/blog");
  }

  const { content, frontmatter } = blog;

  return (
    <div className="mx-auto flex w-full max-w-4xl items-start justify-start bg-neutral-100 dark:bg-neutral-950">
      <Container className="min-h-screen w-full p-4 pt-20 md:pb-10 dark:bg-neutral-900">
        <article className="prose prose-lg dark:prose-invert max-w-none p-4 pt-5">
          {/* Blog header */}
          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
              <time dateTime={frontmatter.date}>{frontmatter.date}</time>
              {frontmatter.readingTime && (
                <span>{frontmatter.readingTime} min read</span>
              )}
            </div>
            {frontmatter.tags && (
              <div className="mt-4 flex flex-wrap gap-2">
                {frontmatter.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="rounded-full bg-neutral-200 px-3 py-1 text-xs font-medium text-neutral-700 dark:bg-neutral-700 dark:text-neutral-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Blog content */}
          <div className="prose-headings:scroll-mt-24">
            <img
              src={frontmatter.image}
              alt={frontmatter.title}
              width={600}
              height={600}
              className="shadow-custom dark:shadow-custom-dark w-full rounded-lg"
            />

            {content}
          </div>
        </article>
      </Container>
    </div>
  );
}
