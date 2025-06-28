"use client";
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import { useState, useEffect } from 'react';
import { BlogPost } from '@/types/blog';

export default function BlogPage() {
const [searchTerm, setSearchTerm] = useState('');
const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getAllPosts();
      setPosts(allPosts);
    };

    fetchPosts();
  }, []);

  const filterPosts = (searchTerm: string) => {
    if (!searchTerm) return posts;

    return posts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }

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

        <input
          type="search"
          value={searchTerm}
          onChange = {(e) => setSearchTerm(e.target.value)}
          placeholder="Search blog posts by name or tag..."
          className="w-full text-black mx-auto mb-8 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="space-y-8">
          {filterPosts(searchTerm).map((post) => (
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
