import {supabase} from '@/lib/supabase';


export async function GET(request: Request) {

    const {data, error} = await supabase
        .from('Courses')
        .select('*');

    
    if (error) {
        console.error('Error fetching courses:', error.message);
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
    if (!data) {
        return new Response(JSON.stringify({ error: 'No courses found' }), {
            status: 404,
            headers: { 'Content-Type': 'application/json' },
        });
    }
    return new Response(JSON.stringify(data), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
    
}