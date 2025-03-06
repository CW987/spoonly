import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Link from "next/link";
import "../../recipe.css"

export default async function UpdateRecipe({ params }) {
    const updateParams = await params;
    console.log(updateParams)
    console.log(updateParams.id)

    const oneRecipe= await db.query(`SELECT * FROM recipes WHERE recipe_id = $1`, [
    updateParams.id]);
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

        <div className="backLink">
        <Link href={`/recipes/${updateParams.id}`}> Back to recipes
        </Link>
        </div>

        <div className="updateForm">

        <h1 className="text-center text-4xl m-2 p-2">Update your recipe</h1>

        <div className="">
                <form action={handleUpdate} className="flex flex-col items-stretch uFormContainer">
        
                <label htmlFor="creation_name" className="text-center font-bold text-xl">Creation Name: </label>
                <input 
                className=" text-center border-2 p-2 rounded-sm" 
                type="text" 
                name="creation_name" 
                required
                defaultValue={wrangledCreation.creation_name} />
        
                <div className="cuisine-dish">
                <div>
                    <label className="font-bold text-xl" htmlFor="cuisine">Cuisine 🌍:</label>
                    <input 
                    className="border-2 p-2 rounded-sm" 
                    type="text" 
                    name="cuisine" 
                    required 
                    defaultValue={wrangledCreation.cuisine} />
                </div>
        
                <div>
                    <label className="font-bold text-xl" htmlFor="dish_type">Dish Type 🍽️:</label>
                    <input 
                    className="border-2 p-2 rounded-sm" 
                    type="text" 
                    name="dish_type" 
                    required 
                    defaultValue={wrangledCreation.dish_type} />
                </div>
                </div>
        
                <label className="font-bold text-xl" htmlFor="post_content">Content 📝:</label>
                <textarea
                    className="border-2 p-2 rounded-sm"
                    type="text"
                    name="post_content"
                    required
                    defaultValue={wrangledCreation.post_content} 
                ></textarea>
        
                <p className="font-bold">Would you recommend this for others 👍/👎? </p>
                <label 
                htmlFor="recommend"
                className="flex items-center gap-2 font-bold text-xl">
                    <input 
                    type="radio" 
                    name="recommend" 
                    value="true" 
                    className="w-4 h-4 " 
                    required 
                    defaultChecked={wrangledCreation.recommend === true} />
                    Yes
                    </label>
        
                    <label 
                    htmlFor="recommend"
                    className="flex items-center gap-2 font-bold text-xl">
                    <input 
                    type="radio" 
                    name="recommend" 
                    value="false" 
                    className="w-4 h-4" 
                    required 
                    defaultChecked={wrangledCreation.recommend === false}  />
                    No
                    </label>
        
                <div className="rating-img">
                    <div>
                <label className="font-bold text-xl" htmlFor="rating">Rating ⭐️:</label>
                <input
                    className="border-2 p-2 rounded-sm"
                    type="number"
                    name="rating"
                    min={0}
                    max={5}
                    required
                    defaultValue={wrangledCreation.rating} 
                />
                </div>
        
                <div className="creationImg">
                    <label className="font-bold text-xl" htmlFor="image">My Creation Image 📸: </label>
                    <input 
                    className="img" 
                    type="file" 
                    name="image" 
                    accept="image/*" />
                </div>
                </div>
        
                <button className="formButton font-bold text-xl">Update Creation!</button>
                {/* <button className="border-2">Submit Creation!</button> */}
                </form>

            </div>

        </div>

        </>
    );
}
