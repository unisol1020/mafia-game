import { createClient } from "@/lib/supabase/server";

export default async function Page() {
  const supabase = await createClient();

  const { data: test } = await supabase.from("test").select();

  return <ul>{test?.map((todo) => <li key={todo.id}>{todo.name}</li>)}</ul>;
}
