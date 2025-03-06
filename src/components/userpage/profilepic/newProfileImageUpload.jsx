"use server";

import { db } from "@/utils/dbConnection";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function UploadImage(imageUrl) {
  const { userId } = await auth();
  await db.query(`UPDATE user_data SET image = $1 WHERE clerk_id = $2`, [
    imageUrl,
    userId,
  ]);
  redirect("/");
}
