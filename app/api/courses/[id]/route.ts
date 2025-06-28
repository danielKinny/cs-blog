import supabase from '@/lib/supabase';
import { NextRequest } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const { data: course, error } = await supabase
      .from('Courses')
      .select('*')
      .eq('courseID', parseInt(id))
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return Response.json(
          { error: 'Course not found', success: false },
          { status: 404 }
        );
      }
      console.error('Supabase error:', error);
      return Response.json(
        { error: 'Failed to fetch course', success: false },
        { status: 500 }
      );
    }

    return Response.json({
      course,
      success: true
    });

  } catch (error) {
    console.error('Error fetching course:', error);
    return Response.json(
      { error: 'Failed to fetch course', success: false },
      { status: 500 }
    );
  }
}
