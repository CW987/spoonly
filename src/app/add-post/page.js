import { auth } from "@clerk/nextjs/server";

export default function AddPostPage(){
    return(
        <>
            <h1>Add your recipe!</h1>

            <form>
                <label>Cuisine</label>
                <br/>
                <input
                        type="text"
                        name="cuisine"
                        required
                        placeholder="Cuisine"/>
                <br/>

                <label>Dish Type</label>
                <br/>
                <input
                        type="text"
                        name="dish_type"
                        required
                        placeholder="Dish Type"/>
                <br/>

                <label>Cook Time</label>
                <br/>
                <input
                        type="number"
                        name="cook_time"
                        min={0}
                        required
                        placeholder="Cook Time (mins)"/>
                <br/>

                <label>Servings</label>
                <br/>
                <input
                        type="number"
                        name="servings"
                        min={0}
                        required
                        placeholder="Servings"/>
                <br/>

                <label>Ingredients</label>
                <br/>
                <textarea
                    type="text"
                    name="ingredients"
                    required
                    placeholder="Ingredients">
                </textarea>
                <br/>

                <label>Method</label>
                <br/>
                <textarea
                    type="text"
                    name="method"
                    required
                    placeholder="Method">
                </textarea>
                <br/>

                <label>My Image: </label>
                <br/>
                <input
                    type="file"
                    name="image"
                    placeholder="Method"/>
                <br/>


                <br/>
                <button>Submit Recipe!</button>

            </form>
        </>
    )
}