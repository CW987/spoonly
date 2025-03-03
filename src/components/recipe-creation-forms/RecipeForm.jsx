

// import { db } from "@/utils/dbConnection";
import { SubmitRecipe } from "./SubmitRecipe"

export default function RecipeForm(){



    return (
        <>
            <form action={SubmitRecipe}>
            <h1>Add your recipe!</h1>
                <label htmlFor="cuisine">Cuisine:</label>
                <br/>
                <input
                        className="border-2"
                        type="text"
                        name="cuisine"
                        required/>
                <br/>

                <label htmlFor="dish_type">Dish Type:</label>
                <br/>
                <input
                        className="border-2"
                        type="text"
                        name="dish_type"
                        required/>
                <br/>

                <label htmlFor="cook_time">Cook Time:</label>
                <br/>
                <input
                        className="border-2"
                        type="number"
                        name="cook_time"
                        min={0}
                        required
                        placeholder="(Mins)"/>
                <br/>

                <label htmlFor="servings">Servings:</label>
                <br/>
                <input
                        className="border-2"
                        type="number"
                        name="servings"
                        min={0}
                        required/>
                <br/>

                <label htmlFor="ingredients">Ingredients:</label>
                <br/>
                <textarea
                    className="border-2"
                    type="text"
                    name="ingredients"
                    required>
                </textarea>
                <br/>

                <label htmlFor="method">Method:</label>
                <br/>
                <textarea
                    className="border-2"
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
                <button className="border-2">Submit Recipe!</button>
            </form>
        
        
        </>
    )
}