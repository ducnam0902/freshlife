import { z } from "zod";

const configSchema = z.object({
  VITE_BASE_SERVER: z.string(),
  VITE_SUPABASE_URL: z.string(),
  VITE_SUPABASE_KEY: z.string(),
});

const configProject = configSchema.safeParse({
  VITE_BASE_SERVER: import.meta.env.VITE_BASE_SERVER,
  VITE_SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL,
  VITE_SUPABASE_KEY: import.meta.env.VITE_SUPABASE_KEY,
});

if (!configProject.success) {
  console.error(configProject.error.issues);
  throw new Error("Have some env variable is not available");
}

const envConfig = configProject.data;

export default envConfig;
