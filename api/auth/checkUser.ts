import { NextApiRequest, NextApiResponse } from "next";
import { createServerClient } from "@supabase/ssr";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: req.cookies },
  );

  const { data, error } = await supabase.auth.getUser();
  if (error) {
    res.status(500).json({ error: error.message });
  } else {
    res.status(200).json({ user: data?.user });
  }
}
