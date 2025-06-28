import { getAllPosts } from '@/lib/blog';

export async function GET() {
  try {
    const posts = await getAllPosts();
    
    // Extract all unique tags
    const allTags = posts.reduce((tags: string[], post) => {
      post.tags.forEach(tag => {
        if (!tags.includes(tag)) {
          tags.push(tag);
        }
      });
      return tags;
    }, []);

    // Sort tags alphabetically
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
