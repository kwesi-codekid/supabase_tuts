import { createClient } from "@supabase/supabase-js";

const _supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export default _supabase;
