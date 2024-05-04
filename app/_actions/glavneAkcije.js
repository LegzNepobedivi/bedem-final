import supabase from "@/lib/supabase";

export async function getAllStan() {
  "use server";
  console.log("fetchNekretnine");
  let { data, error } = await supabase.rpc("stan_get_all");
  if (error) return error;
  else return data;
}

export async function getStanById(input_id) {
  "use server";
  let { data, error } = await supabase.rpc("stan_get_by_id", {
    input_id,
  });

  if (error) return error;
  else return data;
}

export async function getAllObjekat() {
  let { data, error } = await supabase.rpc("objekat_get_all");
  if (error) return error;
  else return data;
}

export async function getObjekatById(input_id) {
  let { data, error } = await supabase.rpc("objekat_get_by_id", {
    input_id,
  });

  if (error) return error;
  else return data;
}
