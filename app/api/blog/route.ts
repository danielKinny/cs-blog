import {supabase} from '@/lib/supabase';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    if (slug === "all" ){

        
        const { data, error } = await supabase
            .from('Blog')
            .select('*');

        if (error) {
            console.log(error.message)
            return new Response(JSON.stringify({ error: error.message }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            });
        }
        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    }


    console.log("this triggers");

    console.log("slug: ", slug);


    const { data, error } = await supabase
        .from('Blog')
        .select('*')
        .eq('slug', slug)
        .single();

    if (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
    if (!data) {
        return new Response(JSON.stringify({ error: 'Post not found' }), {
            status: 404,
            headers: { 'Content-Type': 'application/json' },
        });
    }
    return new Response(JSON.stringify(data), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}