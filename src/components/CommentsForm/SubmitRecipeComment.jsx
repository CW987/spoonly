"use server"

import { db } from "@/utils/dbConnection";
import { auth } from '@clerk/nextjs/server';
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function SubmitRecipeComment(formValues, recipeParamId){

    console.log(recipeParamId)

    const { userId } = await auth();
    console.log(userId)

    const dbUserId = await db.query(`SELECT user_id FROM user_data WHERE clerk_id = $1`, [userId])
    const wrangledUser = dbUserId.rows
    console.log(wrangledUser)

    const finalUser = wrangledUser[0].user_id
    console.log(finalUser)

    // const recipeParams = await params
    // console.log(recipeParams)
    // const recipe = await db.query(`SELECT * FROM recipes WHERE recipe_id = $1`, [recipeParams.id])
    // const wrangledRecipe = recipe.rows
    // const recipeParamsId = recipeParams.id

    const recipeCommentData = {
        commentContent: formValues.get("comment_content"),
    }
    db.query(`INSERT INTO recipe_comments (comment_content, recipe_id, user_id) 
        VALUES($1, $2, $3)`, 
        [recipeCommentData.commentContent, recipeParamId, finalUser])

    revalidatePath(`/recipes/`)
    redirect(`/recipes/`)
}