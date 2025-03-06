"use server"

import { db } from "@/utils/dbConnection";
import { auth } from '@clerk/nextjs/server'
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function SubmitCreation(formValues){

    const { userId } = await auth();
    console.log(userId)

    const dbUserId = await db.query(`SELECT user_id FROM user_data WHERE clerk_id = $1`, [userId])
    const wrangledUser = dbUserId.rows
    console.log(wrangledUser)

    const finalUser = wrangledUser[0].user_id
    console.log(finalUser)


    const creationFormData = {
        creationName: formValues.get("creation_name"),
        cuisine: formValues.get("cuisine"),
        dishType: formValues.get("dish_type"),
        postCotent: formValues.get("post_content"),
        recommend: formValues.get("recommend") === "true",
        rating: formValues.get("rating"),
        creationImage: formValues.get("image")
    }
    db.query(`INSERT INTO creations
        (user_id, creation_name, cuisine, dish_type, post_content, recommend, rating, image) 
        VALUES($1, $2, $3, $4, $5, $6, $7, $8)`, 
        [finalUser, creationFormData.creationName, creationFormData.cuisine, creationFormData.dishType, creationFormData.postCotent, creationFormData.recommend, creationFormData.rating, creationFormData.creationImage])

    revalidatePath(`/creations/`);
    redirect(`/creations/`);
}