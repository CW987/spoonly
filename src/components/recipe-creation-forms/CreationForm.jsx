import * as React from "react";
import * as Form from "@radix-ui/react-form";
import * as RadioGroup from "@radix-ui/react-radio-group";

export default function CreationForm() {
  return (
    <>
      <form>
        <h1>Add your creation! </h1>
        <label htmlFor="cuisine">Cuisine:</label>
        <br />
        <input className="border-2" type="text" name="cuisine" required />
        <br />

        <label htmlFor="dish_type">Dish Type:</label>
        <br />
        <input className="border-2" type="text" name="dish_type" required />
        <br />

        <label htmlFor="post_content">Content:</label>
        <br />
        <textarea
          className="border-2"
          type="text"
          name="post_content"
          required
        ></textarea>
        <br />

        <p>Would you recommend this for others? </p>
        <label class="custom-radio">
          <input type="radio" name="recommended" class="radio-input" />
          <span class="radio-label"></span>
          Yes
        </label>
        <label class="custom-radio">
          <input type="radio" name="recommended" class="radio-input" />
          <span class="radio-label"></span>
          No
        </label>

        <label htmlFor="rating">Rating:</label>
        <br />
        <input
          className="border-2"
          type="number"
          name="rating"
          min={0}
          max={5}
          required
        />
        <br />

        <label htmlFor="image">My Creation Image: </label>
        <br />
        <input type="file" name="image" />
        <br />

        <br />
        <button className="button">Submit Creation!</button>
        {/* <button className="border-2">Submit Creation!</button> */}
      </form>
    </>
  );
}
