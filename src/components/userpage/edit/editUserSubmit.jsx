"use server";

import { db } from "@/utils/dbConnection";

export default async function editUserSubmit(formvalues) {
  const name = await formvalues.get("name");
  const email = await formvalues.get("email");
  const bio = await formvalues.get("bio");
  const country = await formvalues.get("country");
  const clerk_id = await formvalues.get("clerk_id");

  db.query(
    `
      UPDATE user_data SET name = $1, email = $2, bio = $3, country = $4
      WHERE clerk_id = $5`,
    [`${name}`, `${email}`, `${bio}`, `${country}`, `${clerk_id}`]
  );
}
