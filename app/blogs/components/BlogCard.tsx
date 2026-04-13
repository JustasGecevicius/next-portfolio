import Link from "next/link";

interface BlogCardProps {
  blog: {
    id: string;
    title: string;
    excerpt: string;
    author?: string;
    publisheddate?: string;
    coverimage?: {
      url?: string;
      alt?: string;
    };
  };
}

export default function BlogCard({ blog }: BlogCardProps) {
  const dateLabel = blog.publisheddate ? new Date(blog.publisheddate).toDateString() : null;

  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className="group block rounded-[28px] border border-white/10 bg-white/5 p-4 transition duration-300 hover:-translate-y-1 hover:border-sky-400 hover:bg-white/10"
    >
      <div className="flex flex-col items-center gap-4 md:flex-row md:items-stretch md:gap-x-8">
        {blog?.coverimage && (
          <img
            src={blog.coverimage?.url || "/placeholder-image.png"}
            alt={blog.coverimage?.alt || blog.title}
            className="h-52 w-full rounded-2xl object-cover shadow-sky-400 shadow-[0_0_15px] md:h-auto md:w-48"
          />
        )}

        <div className="flex min-w-0 flex-1 flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-center md:text-left md:text-3xl">
              {blog.title}
            </h3>
            <div className="mt-3 text-sm text-center text-slate-300 md:text-left md:text-base">
              {blog.excerpt}
            </div>
          </div>

          <div className="mt-4 flex flex-col items-center gap-2 text-center text-sm text-slate-400 md:items-start md:text-left md:text-base">
            <span>{blog.author ? `By ${blog.author}` : ""}</span>
            {dateLabel ? <span>{dateLabel}</span> : null}
            <span className="inline-flex items-center rounded-full bg-sky-500/10 px-4 py-2 text-sky-300 transition group-hover:bg-sky-500/20">
              Read full post
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
