import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wolpzqnscafdkypvueit.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndvbHB6cW5zY2FmZGt5cHZ1ZWl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM2MjcwNDEsImV4cCI6MjAxOTIwMzA0MX0.mMpMYp0qfdOxtwbCm596OS8zLcfCp7Vd2uJ_C6xjv9I';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
