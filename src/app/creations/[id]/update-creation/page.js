import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Link from "next/link";
import "../../creation.css"

export default async function UpdateCreation({ params }) {
    const updateParams = await params;
    console.log(updateParams)
    console.log(updateParams.id)

    const oneCreation = await db.query(`SELECT * FROM creations WHERE creations_id = $1`, [
    updateParams.id]);
  console.log(oneCreation);

  const wrangledCreation = oneCreation.rows[0];
  console.log(wrangledCreation);


// db.query(`INSERT INTO creations
//     (user_id, cuisine, dish_type, post_content, recommend, rating, image) 
//     VALUES($1, $2, $3, $4, $5, $6, $7)`, 
//     [finalUser, creationFormData.cuisine, creationFormData.dishType, creationFormData.postCotent, creationFormData.recommend, creationFormData.rating, creationFormData.creationImage])

  async function handleUpdate(formValues) {
    "use server";

    const creationUpdateFormData = {
      creationName: formValues.get("creation_name"),
      cuisine: formValues.get("cuisine"),
      dishType: formValues.get("dish_type"),
      postCotent: formValues.get("post_content"),
      recommend: formValues.get("recommend") === "true",
      rating: formValues.get("rating"),
      creationImage: formValues.get("image")
  }

    await db.query(
      `UPDATE creations SET creation_name = $1, cuisine = $2, dish_type = $3, post_content = $4, recommend = $5, rating = $6 WHERE creations_id = $7`,
      [creationUpdateFormData.creationName, creationUpdateFormData.cuisine, creationUpdateFormData.dishType, creationUpdateFormData.postCotent, creationUpdateFormData.recommend, creationUpdateFormData.rating, updateParams.id]
    );

    revalidatePath("/creations");
    revalidatePath(`/creations/${updateParams.id}`);
    redirect(`/creations/${updateParams.id}`);
  }

  return (
    <>

    <div className="backLink">
      <Link href={`/creations/${updateParams.id}`}> Back to creation
      </Link>
    </div>


      <div className="updateForm">

      <h1 className="text-center text-4xl m-2 p-2">Update your creation</h1>

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
              <label className="font-bold text-xl" htmlFor="rating">Rating 🥄:</label>
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
