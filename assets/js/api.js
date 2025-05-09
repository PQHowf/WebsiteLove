import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const supabase = createClient('https://unuztvdqseuycgqltykk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVudXp0dmRxc2V1eWNncWx0eWtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY3NDYzODgsImV4cCI6MjA2MjMyMjM4OH0.nAdgVY1mvvwfxxrA3MBA-REEnt0hwMt8qf2yfBtY3Xk')

export async function fetchGalleryImages() {
  let { data, error } = await supabase.from('Item').select('title, address, time, image');

  if (error) {
    console.error("Supabase fetch error:", error);
    return [];
  }

  return data;
}
