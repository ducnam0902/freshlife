import { createClient } from "@supabase/supabase-js";
import envConfig from "@/utils/envConfig";
import { Database } from "database.types";
export const supabase = createClient<Database>(
  envConfig.VITE_SUPABASE_URL,
  envConfig.VITE_SUPABASE_KEY
);
