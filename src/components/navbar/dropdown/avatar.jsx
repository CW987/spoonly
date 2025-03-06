"use server";

import { db } from "@/utils/dbConnection";

export default async function AvatarSelect(userID) {
  const data = await db.query(
    `SELECT image FROM user_data WHERE clerk_id = $1`,
    [userID]
  );
  return data.rows[0]?.image;
}
