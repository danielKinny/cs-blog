import supabase from '@/lib/supabase';

export async function GET() {
  try {

    const { data: posts, error } = await supabase
      .from('Blog')
      .select('tags');

    if (error) {
      console.error('Supabase error:', error);
      return Response.json(
        { error: 'Failed to fetch tags', success: false },
        { status: 500 }
      );
    }


    const allTags = posts?.reduce((tags: string[], post: { tags?: string[] }) => {
      if (post.tags && Array.isArray(post.tags)) {
        post.tags.forEach((tag: string) => {
          if (!tags.includes(tag)) {
            tags.push(tag);
          }
        });
      }
      return tags;
    }, []) || [];
    allTags.sort();

    return Response.json({
      tags: allTags,
      total: allTags.length,
      success: true
    });

  } catch (error) {
    console.error('Error fetching tags:', error);
    return Response.json(
      { error: 'Failed to fetch tags', success: false },
      { status: 500 }
    );
  }
}
