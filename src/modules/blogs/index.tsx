import { Container } from "@/components/container";
import { getBlogs } from "@/utils/mdx";
import { Link } from "next-view-transitions";
import * as motion from "motion/react-client";
// import { Heading } from "@/components/Heading";
// import { SubHeading } from "@/components/SubHeading";

export const metadata = {
  title: "All blogs - Sujal Patel",
  description: "All my general wisdom and thoughts",
};

export default async function BlogsPage() {
  const allBlogs = await getBlogs();

  return (
    <div className="flex min-h-screen items-start justify-start bg-neutral-100 dark:bg-neutral-950 -mb-10">
      <Container className="mx-auto min-h-screen bg-white md:pt-20 md:pb-10 dark:bg-neutral-900">
        <h1>All blogs</h1>
        <p>
          I&apos;m a software engineer with a passion for building scalable and
          efficient systems. I&apos;m currently working on a project name
          vibe-it a ai coding platform.
        </p>
        <div className="mt-4 p-4 border-y border-neutral-200 dark:border-neutral-800 flex flex-col gap-6 shadow-[0px_1px_6px_0px_var(--color-neutral-100)_inset,0px_-1px_4px_0px_var(--color-neutral-100)_inset] dark:shadow-[0px_1px_6px_0px_var(--color-neutral-950)_inset,0px_-1px_4px_0px_var(--color-neutral-950)_inset]">
          {allBlogs.map((blog, index) => (
            <Link key={blog.slug} href={`/blog/${blog.slug}`}>
              <motion.div
                initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 0.1, delay: index * 0.1 }}
                className="group flex items-start justify-between rounded-xl border border-neutral-200 p-5 transition hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-800"
              >
                {/* Left side: Title & Description */}
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-neutral-900 group-hover:underline dark:text-neutral-300">
                    {blog.title}
                  </h2>
                  <p className="mt-2 text-sm text-neutral-600 md:text-sm dark:text-neutral-500">
                    {blog.description}
                  </p>
                </div>

                {/* Right side: Date */}
                <div className="pl-4 text-sm whitespace-nowrap text-neutral-500 dark:text-neutral-400">
                  {new Date(blog.date).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
