import supabase from '@/lib/supabase';
import { NextRequest } from 'next/server';

interface RouteParams {
  params: Promise<{ slug: string }>;
}

export async function GET(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const { slug } = await params;
    
    if (!slug) {
      return Response.json(
        { error: 'Slug parameter is required', success: false },
        { status: 400 }
      );
    }

    const { data: post, error } = await supabase
      .from('Blog')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return Response.json(
          { error: 'Blog post not found', success: false },
          { status: 404 }
        );
      }
      
      console.error('Supabase error:', error);
      return Response.json(
        { error: 'Failed to fetch blog post', success: false },
        { status: 500 }
      );
    }

    if (!post) {
      return Response.json(
        { error: 'Blog post not found', success: false },
        { status: 404 }
      );
    }

    return Response.json({
      post,
      success: true
    });

  } catch (error) {
    console.error('Error fetching blog post:', error);
    return Response.json(
      { error: 'Failed to fetch blog post', success: false },
      { status: 500 }
    );
  }
}
