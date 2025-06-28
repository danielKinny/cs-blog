import supabase from '@/lib/supabase';
import { getAllPosts } from '@/lib/blog';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const tag = searchParams.get('tag');
    const search = searchParams.get('search');
    const limit = searchParams.get('limit');

    // If using Supabase, you can implement filtering there
    // For now, using the existing blog data
    let posts = await getAllPosts();

    // Filter by tag if provided
    if (tag) {
      posts = posts.filter(post => 
        post.tags.some(postTag => postTag.toLowerCase() === tag.toLowerCase())
      );
    }

    // Filter by search term if provided
    if (search) {
      const searchTerm = search.toLowerCase();
      posts = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm) ||
        post.excerpt.toLowerCase().includes(searchTerm) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
      );
    }

    // Limit results if specified
    if (limit) {
      const limitNum = parseInt(limit, 10);
      posts = posts.slice(0, limitNum);
    }

    return Response.json({
      posts,
      total: posts.length,
      success: true
    });

  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return Response.json(
      { error: 'Failed to fetch blog posts', success: false },
      { status: 500 }
    );
  }
}