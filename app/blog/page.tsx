"use client";
import { getAllPosts } from '@/lib/blog';
import { useState, useEffect } from 'react';
import { BlogPost } from '@/types/blog';
import SearchableBlogList from './SearchableBlogList';

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getAllPosts();
      setPosts(allPosts);
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen" style={{backgroundColor: '#fef2f2'}}>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <header className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4 animate-slide-down" style={{color: '#7a2531'}}>
            CS Blog
          </h1>
          <p className="text-xl animate-slide-up" style={{color: '#6b1e2a'}}>
            Thoughts on computer science, programming, and technology
          </p>
        </header>

        <SearchableBlogList posts={posts} />
      </div>
    </div>
  );
}
