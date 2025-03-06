"use server";

import { db } from "@/utils/dbConnection";

export default async function UploadNewCreationsImage(imageUrl, params) {
  console.log("Test Image", params.id);
  await db.query(`UPDATE creations SET image = $1 WHERE creations_id = $2`, [
    imageUrl,
    params.id,
  ]);
}
