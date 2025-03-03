"use server";

import { db } from "@/utils/dbConnection";
import { redirect } from "next/navigation";

export default async function NewUser(formvalues) {
  await db.query(
    `INSERT INTO user_data (clerk_id, name, image, email)
    VALUES($1, $2, $3, $4)
    ON CONFLICT(email) DO NOTHING`,
    [
      formvalues.get("clerk_id"),
      formvalues.get("name"),
      formvalues.get("image"),
      formvalues.get("email"),
    ]
  );
  redirect("/");
}
