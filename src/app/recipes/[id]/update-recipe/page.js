import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Link from "next/link";
import "../../recipe.css"

export default async function UpdateRecipe({ params }) {
    const updateParams = await params;
    console.log(updateParams)
    console.log(updateParams.id)

    const oneRecipe= await db.query(`SELECT * FROM recipes WHERE recipe_id = $1`, 
        [updateParams.id]);
    console.log(oneRecipe);

  const wrangledRecipe = oneRecipe.rows[0];
  console.log(wrangledRecipe);

  async function handleUpdate(formValues) {
    "use server";

    const recipeUpdateFormData = {
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

    await db.query(
        `UPDATE recipes SET recipe_name = $1, cuisine = $2, dish_type = $3, cook_time = $4, servings = $5, rating = $6, ingredients = $7, method = $8, image = $9  WHERE recipe_id = $10`,
        [recipeUpdateFormData.recipeName, recipeUpdateFormData.cuisine, recipeUpdateFormData.dishType, recipeUpdateFormData.cookTime, recipeUpdateFormData.servings, recipeUpdateFormData.rating, recipeUpdateFormData.ingredients, recipeUpdateFormData.method, recipeUpdateFormData.recipeImage, updateParams.id]
    );

    revalidatePath("/recipes");
    revalidatePath(`/recipes/${updateParams.id}`);
    redirect(`/recipes/${updateParams.id}`);
    }

    return (
        <>

        <div className="updatePage">

        <div className="backLink">
        <Link href={`/recipes/${updateParams.id}`}> Back to {wrangledRecipe.recipe_name}
        </Link>
        </div>

        <div className="updateForm">

        <div className="">
                <form action={handleUpdate} className="flex flex-col items-stretch uFormContainer">
                <h1 className="text-center text-4xl m-2 p-2 font-bold">Update your recipe</h1>
        
                <label htmlFor="recipe_name" className="text-center font-bold text-xl">Recipe Name: </label>
                <input 
                className=" text-center border-2 p-2 rounded-sm" 
                type="text" 
                name="recipe_name" 
                required
                defaultValue={wrangledRecipe.recipe_name}/>
        
                <div className="cuisine-dish">
                <div>
                    <label className="font-bold text-xl" htmlFor="cuisine">Cuisine 🌍:</label>
                    <input 
                    className="border-2 p-2 rounded-sm" 
                    type="text" 
                    name="cuisine" 
                    required 
                    defaultValue={wrangledRecipe.cuisine} />
                </div>
        
                <div>
                    <label className="font-bold text-xl" htmlFor="dish_type">Dish Type 🍽️:</label>
                    <input 
                    className="border-2 p-2 rounded-sm" 
                    type="text" 
                    name="dish_type" 
                    required 
                    defaultValue={wrangledRecipe.dish_type} />
                </div>
                </div>


                <div className="time-servings-rate">
                    <div>
                    <label className="font-bold text-xl" htmlFor="cook_time">Cook Time ⏲️:</label>
                    <input
                            className="border-2 p-2 rounded-sm"
                            type="number"
                            name="cook_time"
                            min={0}
                            required
                            placeholder="(Mins)"
                            defaultValue={wrangledRecipe.cook_time}/>
                    </div>

                <div>
                    <label className="font-bold text-xl" htmlFor="servings">Servings 🧍‍♀️🧍‍♂️🧍:</label>
                    <input
                            className="border-2 p-2 rounded-sm"
                            type="number"
                            name="servings"
                            min={0}
                            required
                            defaultValue={wrangledRecipe.servings}/>
                </div>

                <div>
                <label className="font-bold text-xl" htmlFor="rating">Rating out of 5 ⭐️:</label>
                        <input
                        className="border-2 p-2 rounded-sm"
                        type="number"
                        name="rating"
                        min={0}
                        max={5}
                        required
                        defaultValue={wrangledRecipe.rating}
                        />
                </div>
                </div>

                <label className="font-bold text-xl" htmlFor="ingredients">Ingredients 🍅:</label>
                <textarea
                    className="border-2 p-2 rounded-sm"
                    type="text"
                    name="ingredients"
                    required
                    defaultValue={wrangledRecipe.ingredients}>
                </textarea>

                <label className="font-bold text-xl" htmlFor="method">Method 🗒️:</label>
                <textarea
                    className="border-2 p-2 rounded-sm"
                    type="text"
                    name="method"
                    required
                    defaultValue={wrangledRecipe.method}>
                </textarea>

                <div className="recipeImg">
                <label className="font-bold text-xl" htmlFor="image">My Recipe Image 📸: </label>
                <input
                    className="img"
                    type="file"
                    name="image"
                    accept="image/*"/>
                </div>
        
                <button className="formButton font-bold text-xl">Update Recipe!</button>
                {/* <button className="border-2">Submit Creation!</button> */}
                </form>

            </div>

        </div>
        </div>

        </>
    );
}
