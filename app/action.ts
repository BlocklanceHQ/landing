"use server";

import Airtable from "airtable";

export async function subscribe(formData: FormData) {
  const base = Airtable.base("appCZ1cCzHBU31FIx");

  const email = formData.get("email")?.valueOf().toString();

  await base("Participants").create([
    {
      fields: {
        Email: email,
        Name: "",
        Status: "Cant wait",
        "Current Role": "",
      },
    },
  ]);

  return true;
}
