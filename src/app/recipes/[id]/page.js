"use server"

import { db } from "@/utils/dbConnection";
import RecipeCommentsForm from "@/components/CommentsForm/RecipeCommentsForm";


export default async function RecipePage({params}){
    
    const recipeParams = await params;
    console.log(recipeParams.id)
    
    const paramsId = recipeParams.id
    console.log(paramsId)


    const recipe = await db.query(`SELECT * FROM recipes WHERE recipe_id = $1`, [recipeParams.id])
    console.log(recipe)

    const wrangledRecipe = recipe.rows
    console.log(wrangledRecipe)

    return(
        <>
        <h1>A recipe!</h1>
        {wrangledRecipe.map((recipe)=>(
            <div key={recipe.recipe_id}>
                <h1>{recipe.recipe_name}</h1>
                <p>{recipe.rating}</p>
                <p>{recipe.cuisine}</p>
                <p>{recipe.dish_type}</p>
                <p>{recipe.cook_time}</p>
                <p>{recipe.servings}</p>
                <p>{recipe.ingredients}</p>
                <p>{recipe.method}</p>
                <p>{recipe.cuisine}</p>
            </div>
        ))}
        <RecipeCommentsForm paramId={paramsId}/>
        </>

    )
}