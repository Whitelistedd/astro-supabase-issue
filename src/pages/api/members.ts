import { supabase } from "../../lib/supabase";
import type { APIRoute } from "astro";
export const prerender = false;
export const GET: APIRoute = async (context) => {
  const { data, error, count } = await supabase
    .from("members")
    .select("*", { count: "exact" })
    .order("id");

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  return Response.json({
    data,
    total: count,
  });
};
