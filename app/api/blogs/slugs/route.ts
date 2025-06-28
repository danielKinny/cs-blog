import supabase from '@/lib/supabase';

export async function GET() {
  try {
    const { data: posts, error } = await supabase
      .from('Blog')
      .select('slug');

    if (error) {
      console.error('Supabase error:', error);
      return Response.json(
        { error: 'Failed to fetch slugs', success: false },
        { status: 500 }
      );
    }

    const slugs = posts?.map((post: { slug: string }) => post.slug) || [];

    return Response.json({
      slugs,
      total: slugs.length,
      success: true
    });

  } catch (error) {
    console.error('Error fetching slugs:', error);
    return Response.json(
      { error: 'Failed to fetch slugs', success: false },
      { status: 500 }
    );
  }
}
