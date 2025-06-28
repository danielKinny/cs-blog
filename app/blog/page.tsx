import Link from 'next/link';
import { BlogPost } from '@/types/blog';
import { getAllPosts } from '@/lib/blog';

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            CS Blog
          </h1>
          <p className="text-xl text-black">
            Thoughts on computer science, programming, and technology
          </p>
        </header>

        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <h2 className="text-2xl font-semibold text-black mb-3 hover:text-gray-700 transition-colors">
                  {post.title}
                </h2>
                <p className="text-black mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-black">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-200 text-black px-2 py-1 rounded-md text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-black text-lg">No blog posts yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}
