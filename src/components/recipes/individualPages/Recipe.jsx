"use server";

import "../../../app/recipes/recipe.css";
import { db } from "@/utils/dbConnection";
import { auth } from "@clerk/nextjs/server";
import { CldUploadWidget } from "next-cloudinary";
import { Button } from "@radix-ui/themes";

export default async function RecipesTest({ params }) {
  const recipeUnbroken = await db.query(
    `SELECT * FROM recipes WHERE recipe_id = $1`,
    [params]
  );

  const recipe = recipeUnbroken.rows[0];

  return (
    <div>
      <div className="theRecipe" key={recipe.recipe_id}>
        <h1 className="text-center text-4xl">{recipe.recipe_name}</h1>
        <p>Cuisine 🌍: {recipe.cuisine}</p>
        <p>Rating ⭐️: {recipe.rating} / 5 </p>
        <p>{recipe.dish_type}</p>
        <p>{recipe.cook_time} minutes</p>
        <p>Serves: {recipe.servings}</p>
        <p>
          Ingredients: <br /> {recipe.ingredients}
        </p>
        <p>
          Method: <br /> {recipe.method}
        </p>
      </div>
    </div>
  );
}
