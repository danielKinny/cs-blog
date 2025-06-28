import { getPostSlugs } from '@/lib/blog';

export async function GET() {
  try {
    const slugs = await getPostSlugs();

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
