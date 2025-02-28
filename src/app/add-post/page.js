import { auth } from "@clerk/nextjs/server";
import { db } from "@/utils/dbConnection";

export default async function AddPostPage(){

    const {userId } = await auth()
    console.log(userId)


    async function handleRecipeSubmit(formValues){
        "use server"
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
            (user_id, cuisine, dish_type, cook_time, servings, ingredients, method, image)`, [recipeFormData.cuisine, recipeFormData.dishType, recipeFormData.cookTime, recipeFormData.servings, recipeFormData.ingredients, recipeFormData.method, recipeFormData.recipeImage])
    }

    return(
        <>
            <form>
            <h1>Add your recipe!</h1>
                <label htmlFor="cuisine">Cuisine:</label>
                <br/>
                <input
                        className="bg-white"
                        type="text"
                        name="cuisine"
                        required/>
                <br/>

                <label htmlFor="dish_type">Dish Type:</label>
                <br/>
                <input
                        className="bg-white"
                        type="text"
                        name="dish_type"
                        required/>
                <br/>

                <label htmlFor="cook_time">Cook Time:</label>
                <br/>
                <input
                        className="bg-white"
                        type="number"
                        name="cook_time"
                        min={0}
                        required
                        placeholder="(Mins)"/>
                <br/>

                <label htmlFor="servings">Servings:</label>
                <br/>
                <input
                        className="bg-white"
                        type="number"
                        name="servings"
                        min={0}
                        required/>
                <br/>

                <label htmlFor="ingredients">Ingredients:</label>
                <br/>
                <textarea
                    className="bg-white"
                    type="text"
                    name="ingredients"
                    required>
                </textarea>
                <br/>

                <label htmlFor="method">Method:</label>
                <br/>
                <textarea
                    className="bg-white"
                    type="text"
                    name="method"
                    required>
                </textarea>
                <br/>

                <label htmlFor="image">My Recipe Image: </label>
                <br/>
                <input
                    type="file"
                    name="image"/>
                <br/>


                <br/>
                <button>Submit Recipe!</button>
            </form>

            {/* =============================creations form ==================================== */}

            <form>
            <h1>Add your creation! </h1>
                <label htmlFor="cuisine">Cuisine:</label>
                <br/>
                <input
                        className="bg-white"
                        type="text"
                        name="cuisine"
                        required/>
                <br/>

                <label htmlFor="dish_type">Dish Type:</label>
                <br/>
                <input
                        className="bg-white"
                        type="text"
                        name="dish_type"
                        required/>
                <br/>

                <label htmlFor="post_content">Content:</label>
                <br/>
                <textarea
                    className="bg-white"
                    type="text"
                    name="post_content"
                    required>
                </textarea>
                <br/>

                <p>Would you recommend this for others? </p>
                <input 
                    type="radio" 
                    name="recommended"/>
                <label htmlFor="recommended">Yes</label>
                <br/>
                <input 
                    type="radio" 
                    name="recommended"/>
                <label htmlFor="recommended">No</label>
                <br/>

                <label htmlFor="rating">Rating:</label>
                <br/>
                <input
                        className="bg-white"
                        type="number"
                        name="rating"
                        min={0}
                        max={5}
                        required/>
                <br/>

                <label htmlFor="image">My Creation Image: </label>
                <br/>
                <input
                    type="file"
                    name="image"/>
                <br/>

                <br/>
                <button>Submit Creation!</button>
            </form>
        </>
    )
}