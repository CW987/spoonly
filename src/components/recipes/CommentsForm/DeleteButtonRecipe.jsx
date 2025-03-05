"use client"

// import { handleDeletePost } from "./DeleteFunction"
import { handleDeleteRecipeComment } from "./DeleteFunctionRecipe"

export default function DeleteButtonRecipe ({recipeId}){

    return (
        <>
        <button 
            className="flex flex-col items-center bg-pink-400 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit" 
            onClick={()=>handleDeleteRecipeComment(recipeId)}>Delete Comment</button>
        </>
    )
}