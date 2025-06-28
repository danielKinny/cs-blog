import supabase from '@/lib/supabase';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const tag = searchParams.get('tag');
    const search = searchParams.get('search');
    const limit = searchParams.get('limit');

    let query = supabase
      .from('Blog')
      .select('*')
      .order('date', { ascending: false });

    if (tag) {
      query = query.contains('tags', [tag]);
    }
    if (search) {
      query = query.or(`title.ilike.%${search}%,excerpt.ilike.%${search}%,content.ilike.%${search}%`);
    }

    if (limit) {
      const limitNum = parseInt(limit, 10);
      query = query.limit(limitNum);
    }

    const { data: posts, error } = await query;

    if (error) {
      console.error('Supabase error:', error);
      return Response.json(
        { error: 'Failed to fetch blog posts', success: false },
        { status: 500 }
      );
    }

    return Response.json({
      posts: posts || [],
      total: posts?.length || 0,
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