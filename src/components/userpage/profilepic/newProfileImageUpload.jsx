"use server";

import { db } from "@/utils/dbConnection";

export default async function UploadImage(image, userID) {
  console.log(userID);
  // await db.query(`UPDATE user_data SET image = $1 WHERE clerk_id = $2`, [
  // imageURL,
  // userID,
  // ]);
}
