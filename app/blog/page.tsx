"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { BlogPost } from '@/types/blog';

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/blog?slug=all');
      if (res.ok) {
        const data = await res.json();
        setPosts(data);
      } else {
        console.error('Failed to fetch posts:', res.statusText);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = searchTerm
    ? posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : posts;

  return (
    <div className="min-h-screen" style={{backgroundColor: '#fef2f2'}}>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <header className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4 animate-slide-down" style={{color: '#7a2531'}}>
            Beyond The Syllabus
          </h1>
          <p className="text-xl animate-slide-up" style={{color: '#6b1e2a'}}>
            Thoughts on computer science, programming, and technology
          </p>
        </header>

        <div className="animate-fade-in-delay">
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search blog posts by name or tag..."
            className="w-full mx-auto mb-8 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700 bg-white transform transition-all duration-300 hover:scale-105 focus:scale-105"
            style={{color: '#7a2531', borderColor: '#e8d8da'}}
          />
        </div>

        <div className="space-y-8">
          {filteredPosts.map((post, index) => (
            <article
              key={post.slug}
              className="bg-white rounded-lg shadow-lg border p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-slide-in-left opacity-0"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'forwards',
                borderColor: '#e8d8da'
              }}
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <h2 className="text-2xl font-semibold mb-3 hover:opacity-80 transition-colors duration-200" style={{color: '#7a2531'}}>
                  {post.title}
                </h2>
                <p className="mb-4 line-clamp-3 transition-opacity duration-200 hover:opacity-80" style={{color: '#6b1e2a'}}>
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm" style={{color: '#8b2635'}}>
                  <time dateTime={post.date} className="transition-colors duration-200 hover:opacity-70">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-md text-xs transform transition-all duration-200 hover:scale-110 animate-fade-in"
                        style={{
                          backgroundColor: '#fef2f2',
                          color: '#7a2531',
                          animationDelay: `${(index * 0.1) + (tagIndex * 0.05)}s`,
                          animationFillMode: 'forwards'
                        }}
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

        {filteredPosts.length === 0 && posts.length > 0 && (
          <div className="text-center py-12 animate-fade-in">
            <p className="text-lg" style={{color: '#7a2531'}}>No posts found matching &apos;{searchTerm}&apos;</p>
            <p className="text-sm mt-2" style={{color: '#8b2635'}}>Try searching with different keywords</p>
          </div>
        )}

        {posts.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <div className="animate-pulse-slow">
              <p className="text-lg" style={{color: '#7a2531'}}>Loading blog posts...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
