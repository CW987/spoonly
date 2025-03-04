// import { db } from "@/utils/dbConnection";
import "@/app/add-post/recipes.css"
import { SubmitRecipe } from "./SubmitRecipe"

export default function RecipeForm(){

    return (
        <>
        <div className="recipeFormContainer p-4 mt-4">
            <form action={SubmitRecipe}
                className="flex flex-col items-stretch">
            <h1 className="text-2xl text-center">Add your recipe!</h1>
            
                <label htmlFor="recipe_name">Recipe Name 🍱:</label>
                <input
                        className="border-2"
                        type="text"
                        name="recipe_name"
                        required/>

                <label htmlFor="cuisine">Cuisine 🌍:</label>
                <input
                        className="border-2"
                        type="text"
                        name="cuisine"
                        required/>

                <label htmlFor="dish_type">Dish Type 🍽️:</label>
                <input
                        className="border-2"
                        type="text"
                        name="dish_type"
                        required/>

                <label htmlFor="cook_time">Cook Time ⏲️:</label>
                <input
                        className="border-2"
                        type="number"
                        name="cook_time"
                        min={0}
                        required
                        placeholder="(Mins)"/>

                <label htmlFor="servings">Servings 🧍‍♀️🧍‍♂️🧍:</label>
                <input
                        className="border-2"
                        type="number"
                        name="servings"
                        min={0}
                        required/>

                <label htmlFor="rating">Rating ⭐️:</label>
                        <input
                        className="border-2"
                        type="number"
                        name="rating"
                        min={0}
                        max={5}
                        required
                        />

                <label htmlFor="ingredients">Ingredients 🍅:</label>

                <textarea
                    className="border-2"
                    type="text"
                    name="ingredients"
                    required>
                </textarea>

                <label htmlFor="method">Method 🗒️:</label>
                <textarea
                    className="border-2"
                    type="text"
                    name="method"
                    required>
                </textarea>


                <label htmlFor="image">My Recipe Image 📸: </label>
                <input
                    type="file"
                    name="image"/>

                <button className="formButton">Submit Recipe 🧑‍🍳!</button>
            </form>
            </div>
        
        </>
    )
}