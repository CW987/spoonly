import * as React from "react";
import * as Form from "@radix-ui/react-form";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { SubmitCreation } from "./SubmitCreation";

export default function CreationForm() {
  
  return (
    <>
      <div className="recipeFormContainer p-4 mt-4">
      <form action={SubmitCreation} className="flex flex-col items-stretch">
        <h1 className="text-2xl text-center">Add your creation! </h1>

        <label htmlFor="cuisine">Cuisine 🌍:</label>
        <input className="border-2" type="text" name="cuisine" required />

        <label htmlFor="dish_type">Dish Type 🍽️:</label>
        <input className="border-2" type="text" name="dish_type" required />

        <label htmlFor="post_content">Content 📝:</label>
        <textarea
          className="border-2"
          type="text"
          name="post_content"
          required
        ></textarea>

        <p>Would you recommend this for others 👍/👎? </p>
        <label 
        htmlFor="recommend"
        className="flex items-center gap-2">
            <input 
            type="radio" 
            name="recommend" 
            value="true" 
            className="w-4 h-4" 
            required />
            Yes
          </label>

          <label 
          htmlFor="recommend"
          className="flex items-center gap-2">
            <input 
            type="radio" 
            name="recommend" 
            value="false" 
            className="w-4 h-4" 
            required />
            No
          </label>

        <label htmlFor="rating">Rating ⭐️:</label>
        <input
          className="border-2"
          type="number"
          name="rating"
          min={0}
          max={5}
          required
        />

        <label htmlFor="image">My Creation Image 📸: </label>
        <input type="file" name="image" />

        <button className="formButton">Submit Creation!</button>
        {/* <button className="border-2">Submit Creation!</button> */}
      </form>
      </div>
    </>
  );
}
