"use client";
import Link from 'next/link';
import { useState } from 'react';
import { BlogPost } from '@/types/blog';

interface SearchableBlogListProps {
  posts: BlogPost[];
}

export default function SearchableBlogList({ posts }: SearchableBlogListProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = searchTerm
    ? posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : posts;

  return (
    <>
      <div className="animate-fade-in-delay">
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search blog posts by name or tag..."
          className="w-full text-blue-900 mx-auto mb-8 px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white transform transition-all duration-300 hover:scale-105 focus:scale-105"
        />
      </div>

      <div className="space-y-8">
        {filteredPosts.map((post, index) => (
          <article
            key={post.slug}
            className="bg-white rounded-lg shadow-lg border border-blue-100 p-6 hover:shadow-xl hover:border-blue-200 transition-all duration-300 transform hover:scale-105 animate-slide-in-left opacity-0"
            style={{
              animationDelay: `${index * 0.1}s`,
              animationFillMode: 'forwards'
            }}
          >
            <Link href={`/blog/${post.slug}`} className="block">
              <h2 className="text-2xl font-semibold text-blue-900 mb-3 hover:text-blue-700 transition-colors duration-200">
                {post.title}
              </h2>
              <p className="text-blue-800 mb-4 line-clamp-3 transition-opacity duration-200 hover:opacity-80">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-sm text-blue-700">
                <time dateTime={post.date} className="transition-colors duration-200 hover:text-blue-600">
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
                      className="bg-blue-100 text-blue-900 px-2 py-1 rounded-md text-xs transform transition-all duration-200 hover:scale-110 hover:bg-blue-200 animate-fade-in"
                      style={{
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
          <p className="text-blue-900 text-lg">No posts found matching "{searchTerm}"</p>
          <p className="text-blue-700 text-sm mt-2">Try searching with different keywords</p>
        </div>
      )}

      {posts.length === 0 && (
        <div className="text-center py-12 animate-fade-in">
          <div className="animate-pulse-slow">
            <p className="text-blue-900 text-lg">Loading blog posts...</p>
          </div>
        </div>
      )}
    </>
  );
}
