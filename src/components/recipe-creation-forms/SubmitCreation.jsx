"use server"

import { db } from "@/utils/dbConnection";

export async function SubmitCreation(formValues){

    

    const creationFormData = {
        cuisine: formValues.get("cuisine"),
        dishType: formValues.get("dish_type"),
        postCotent: formValues.get("post_content"),
        recommended: formValues.get("recommended"),
        rating: formValues.get("rating"),
        creationImage: formValues.get("image")
    }
    db.query(`INSERT INTO creations
        (cuisine, dish_type, post_content, recommended, rating, image) 
        VALUES($1, $2, $3, $4, $5, $6)`, 
        [creationFormData.cuisine, creationFormData.dishType, creationFormData.postCotent, creationFormData.recommended, creationFormData.rating, creationFormData.creationImage])
}