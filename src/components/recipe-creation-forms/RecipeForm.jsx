// import { db } from "@/utils/dbConnection";
import { SubmitRecipe } from "./SubmitRecipe"

export default function RecipeForm(){

    return (
        <>
        <div className="recipeFormContainer p-4 mt-4">
            <form action={SubmitRecipe}
                className="flex flex-col items-stretch">
            
                <label className="text-center" htmlFor="recipe_name">Recipe Name 🍱*:</label>
                <input
                        className="border-2 text-center"
                        type="text"
                        name="recipe_name"
                        required/>

                <div className="dish-cuisine">
                    <div className="cuisine">
                <label htmlFor="cuisine">Cuisine 🌍*:</label>
                <input
                        className="border-2"
                        type="text"
                        name="cuisine"
                        required/>
                        </div>

                <div>
                <label htmlFor="dish_type">Dish Type 🍽️*:</label>
                <input
                        className="border-2"
                        type="text"
                        name="dish_type"
                        required/>
                </div>
                </div>

                <div className="time-servings">
                <div>
                <label htmlFor="cook_time">Cook Time ⏲️*:</label>
                <input
                        className="border-2"
                        type="number"
                        name="cook_time"
                        min={0}
                        required
                        placeholder="(Mins)"/>
                </div>

                <div>
                <label htmlFor="servings">Servings 🧍‍♀️🧍‍♂️🧍*:</label>
                <input
                        className="border-2"
                        type="number"
                        name="servings"
                        min={0}
                        required/>
                </div>

                <div>
                <label htmlFor="rating">Rating out of 5 ⭐️*:</label>
                        <input
                        className="border-2"
                        type="number"
                        name="rating"
                        min={0}
                        max={5}
                        required
                        />
                </div>
                </div>

                <label htmlFor="ingredients">Ingredients 🍅*:</label>

                <textarea
                    className="border-2"
                    type="text"
                    name="ingredients"
                    required>
                </textarea>

                <label htmlFor="method">Method 🗒️*:</label>
                <textarea
                    className="border-2"
                    type="text"
                    name="method"
                    required>
                </textarea>

                <div className="recipeImg">
                <label htmlFor="image">My Recipe Image 📸: </label>
                <input
                    className="img"
                    type="file"
                    name="image"/>
                </div>

                <button className="formButton">Submit Recipe 🧑‍🍳!</button>
            </form>
            </div>
        
        </>
    )
}