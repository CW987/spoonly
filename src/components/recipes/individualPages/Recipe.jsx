"use server";

import { db } from "@/utils/dbConnection";
import { auth } from "@clerk/nextjs/server";

export default async function RecipesTest({ params }) {
  const recipe = await db.query(`SELECT * FROM recipes WHERE recipe_id = $1`, [
    params,
  ]);

  const wrangledRecipe = recipe.rows;

  return (
    <div>
      {wrangledRecipe.map((recipe) => (
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
    </div>
  );
}
