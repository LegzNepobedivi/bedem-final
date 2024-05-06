"use server";

import supabase from "@/lib/supabase";

export async function connectAgentToStan(agent_id_arg, stan_id_arg) {
  let { data, error } = await supabase.rpc("connect_agent_to_stan", {
    agent_id_arg,
    stan_id_arg,
  });
  if (error) console.error(error);
  else console.log(data);
}

export async function connectStanToObject(stan_id_arg, objekat_id_arg) {
  let { data, error } = await supabase.rpc("connect_stan_to_object", {
    objekat_id_arg,
    stan_id_arg,
  });
  if (error) console.error(error);
  else console.log(data);
}

export async function createAgentUser(
  p_mail,
  p_name,
  p_position,
  p_telephone,
  p_uid
) {
  let { data, error } = await supabase.rpc("create_agent_user", {
    p_mail,
    p_name,
    p_position,
    p_telephone,
    p_uid,
  });
  if (error) console.error(error);
  else console.log(data);
}

export async function createStanAndConnectToObject() {
  let { data, error } = await supabase.rpc(
    "create_stan_and_connect_to_object",
    {
      n_description,
      n_floor,
      n_numberofrooms,
      n_others,
      n_price,
      n_size,
      n_title,
      n_transaction_type,
      n_type,
      n_ytlink,
      objekat_id_arg,
    }
  );
  if (error) console.error(error);
  else console.log(data);
}

export const signOut = async () => {
  "use server";

  const supabase = createClient();
  await supabase.auth.signOut();
  return redirect("/login");
};
