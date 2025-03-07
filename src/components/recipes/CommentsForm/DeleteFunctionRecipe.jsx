"use server"; // Define this as a Server Action

import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export async function handleDeleteRecipeComment(recipeCommentId) {
    await db.query(`DELETE FROM recipe_comments WHERE recipe_comments_id = $1`, [recipeCommentId]);
    revalidatePath(`/recipes/`);
    redirect("/recipes");
}