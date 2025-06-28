import { createClient } from '@supabase/supabase-js'


const supabaseUrl = process.env.NEXT_SUPABASE_URL!
const supabaseKey = process.env.NEXT_SUPABASE_ANON_KEY!

export const supabaseServer = createClient(supabaseUrl, supabaseKey)

const supabaseClientUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseClientKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabaseClient = createClient(supabaseClientUrl, supabaseClientKey)


export default supabaseServer;