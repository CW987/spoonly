import * as React from "react";
import * as Form from "@radix-ui/react-form";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { SubmitCreation } from "./SubmitCreation";
import "../../app/creations/creation.css"

export default function CreationForm() {
  
  return (
    <>
      <div className="creationFormContainer p-4 mt-4">
      <form action={SubmitCreation} className="flex flex-col items-stretch">

      <div className="heading">
                <h1>Upload your own creation 🍛</h1>
            </div>

      <label htmlFor="creation_name" className="text-center">Creation Name: </label>
      <input className=" text-center border-2 p-2 rounded-sm" type="text" name="creation_name" required />

      <div className="cuisine-dish">
      
        <div>
        <label htmlFor="cuisine">Cuisine 🌍:</label>
        <input className="border-2 p-2 rounded-sm" type="text" name="cuisine" required />
        </div>

        <div>
        <label htmlFor="dish_type">Dish Type 🍽️:</label>
        <input className="border-2 p-2 rounded-sm" type="text" name="dish_type" required />
        </div>
        </div>

        <label htmlFor="post_content">Content 📝:</label>
        <textarea
          className="border-2 p-2 rounded-sm"
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

        <div className="rating-img">
          <div>
        <label htmlFor="rating">Rating 🥄:</label>
        <input
          className="border-2 p-2 rounded-sm"
          type="number"
          name="rating"
          min={0}
          max={5}
          required
        />
        </div>

        <div className="creationImg">
        <label htmlFor="image">My Creation Image 📸: </label>
        <input className="img" type="file" name="image" />
        </div>
        </div>

        <button className="formButton">Submit Creation!</button>
        {/* <button className="border-2">Submit Creation!</button> */}
      </form>
      </div>
    </>
  );
}
