"use server";

import { db } from "@/utils/dbConnection";

export default async function UploadNewImage(imageUrl, params) {
  console.log("Test Image", params);
  await db.query(`UPDATE recipes SET image = $1 WHERE recipe_id = $2`, [
    imageUrl,
    params,
  ]);
}
