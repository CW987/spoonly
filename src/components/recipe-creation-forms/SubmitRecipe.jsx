"use server"

import { db } from "@/utils/dbConnection";

export async function SubmitRecipe(formValues){

    const recipeFormData = {
        cuisine: formValues.get("cuisine"),
        dishType: formValues.get("dish_type"),
        cookTime: formValues.get("cook_time"),
        servings: formValues.get("servings"),
        ingredients: formValues.get("ingredients"),
        method: formValues.get("method"),
        recipeImage: formValues.get("image")
    }
    db.query(`INSERT INTO recipes
        (cuisine, dish_type, cook_time, servings, ingredients, method, image) 
        VALUES($1, $2, $3, $4, $5, $6, $7)`, 
        [recipeFormData.cuisine, recipeFormData.dishType, recipeFormData.cookTime, recipeFormData.servings, recipeFormData.ingredients, recipeFormData.method, recipeFormData.recipeImage])
}