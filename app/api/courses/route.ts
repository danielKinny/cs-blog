import supabase from '@/lib/supabase';

export async function GET() {
  try {
    const { data: courses, error } = await supabase
      .from('Courses')
      .select('*')
      .order('title', { ascending: true });

    if (error) {
      console.error('Supabase error:', error);
      return Response.json(
        { error: 'Failed to fetch courses', success: false },
        { status: 500 }
      );
    }

    return Response.json({
      courses: courses || [],
      success: true
    });

  } catch (error) {
    console.error('Error fetching courses:', error);
    return Response.json(
      { error: 'Failed to fetch courses', success: false },
      { status: 500 }
    );
  }
}