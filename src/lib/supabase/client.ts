import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(
    "https://spjpcvgkwwwvbgplxgey.supabase.co",
    "sb_publishable_Ed3QDwiVkt8sZ26lE9LBhA_1K89WHj8"

    // process.env.NEXT_PUBLIC_SUPABASE_URL!, 
    // process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
  );
}
