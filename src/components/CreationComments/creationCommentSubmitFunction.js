"use server";

import { db } from "@/utils/dbConnection";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function handleCreationCommentSubmit(formValues){

    const { userId } = await auth();
    console.log(userId);

    const dbUserId = await db.query(
        `SELECT user_id FROM user_data WHERE clerk_id = $1`,
        [userId]);

    const wrangledUser = dbUserId.rows;
    console.log(wrangledUser);
    
    const finalUser = wrangledUser[0].user_id;
    console.log(finalUser);
    console

    const creationsComment = formValues.get("comment_content");
    const creationId = formValues.get("creationId");

    db.query(
        `INSERT INTO creation_comments (comment_content, creations_id, user_id) 
        VALUES($1, $2, $3)`,
        [creationsComment, creationId, finalUser]);

    revalidatePath(`/creations/${creationId}`)
    redirect(`/creations/${creationId}`)
}