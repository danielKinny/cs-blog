"use client";
import { useState, useEffect } from 'react';
import { BlogPost } from '@/types/blog';
import SearchableBlogList from './SearchableBlogList';

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/blogs');
        const data = await response.json();
        
        if (data.success) {
          setPosts(data.posts);
        } else {
          setError(data.error || 'Failed to fetch posts');
        }
      } catch (err) {
        setError('Failed to fetch posts');
        console.error('Error fetching posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

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

        {loading && (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            <p className="mt-2 text-gray-600">Loading posts...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-8">
            <p className="text-red-600">Error: {error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Retry
            </button>
          </div>
        )}

        {!loading && !error && <SearchableBlogList posts={posts} />}
      </div>
    </div>
  );
}
