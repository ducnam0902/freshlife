import { createClient } from "@supabase/supabase-js";
import envConfig from "@/utils/envConfig";
export const supabase = createClient(
  envConfig.VITE_SUPABASE_URL,
  envConfig.VITE_SUPABASE_KEY
);
