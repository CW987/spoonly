"use server"

import { db } from "@/utils/dbConnection";
import { auth } from '@clerk/nextjs/server';

export async function SubmitRecipe(formValues){

    const { userId } = await auth();
    console.log(userId)

    const dbUserId = await db.query(`SELECT user_id FROM user_data WHERE clerk_id = $1`, [userId])
    const wrangledUser = dbUserId.rows
    console.log(wrangledUser)

    const finalUser = wrangledUser[0].user_id
    console.log(finalUser)

    const recipeFormData = {
        recipeName: formValues.get("recipe_name"),
        cuisine: formValues.get("cuisine"),
        dishType: formValues.get("dish_type"),
        cookTime: formValues.get("cook_time"),
        servings: formValues.get("servings"),
        rating: formValues.get("rating"),
        ingredients: formValues.get("ingredients"),
        method: formValues.get("method"),
        recipeImage: formValues.get("image")
    }
    db.query(`INSERT INTO recipes
        (user_id, recipe_name, cuisine, dish_type, cook_time, servings, rating, ingredients, method, image) 
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`, 
        [finalUser, recipeFormData.recipeName, recipeFormData.cuisine, recipeFormData.dishType, recipeFormData.cookTime, recipeFormData.servings, recipeFormData.rating, recipeFormData.ingredients, recipeFormData.method, recipeFormData.recipeImage])
}