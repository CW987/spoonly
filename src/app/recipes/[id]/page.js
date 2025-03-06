import RecipeCommentsForm from "@/components/recipes/CommentsForm/RecipeCommentsForm";
import RecipeInfo from "@/components/recipes/individualPages/Recipe";
import { db } from "@/utils/dbConnection";
import "../recipe.css";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Link from "next/link";
import { SignedIn } from "@clerk/nextjs";
import EditRecipePic from "@/components/recipes/individualPages/EditPicture";

export default async function RecipePage({ params }) {
  const recipeParams = await params;
  console.log(recipeParams.id);

  const paramsId = recipeParams.id;
  console.log(paramsId);

  const recipeComment = await db.query(
    `SELECT recipe_comments_id, recipe_id, comment_content FROM recipe_comments WHERE recipe_id = $1`,
    [recipeParams.id]
  );
  console.log(recipeComment);
  const wrangledRecipeComment = recipeComment.rows;
  console.log(wrangledRecipeComment);

  async function handleDeleteRecipe() {
    "use server";
    await db.query(`DELETE FROM recipes WHERE recipe_id = $1`, [
      recipeParams.id,
    ]);
    revalidatePath(`/recipes`);
    redirect(`/recipes`);
  }

  return (
    <>
      <div className="wholeRecipePage">
      <div className="myRecipePage">
        <RecipeInfo params={paramsId} />
        <EditRecipePic params={paramsId} />
        <SignedIn>
          <RecipeCommentsForm paramId={paramsId} />
        </SignedIn>

        <div className="recipeCommentContainer">
          {wrangledRecipeComment.map((comment) => (
            <div key={comment.recipe_comments_id} className="recipeComment">
              <p>💬: {comment.comment_content}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="recipeButtons">

                <div className="updateLink">
                <Link
                    href={`/recipes/${recipeParams.id}/update-recipe`}>
                    Update recipe
                </Link>
                </div>

                <div className="deleteRecipe">
                    <form action={handleDeleteRecipe}>
                        <button
                            type="submit">
                                Delete this recipe</button>
                    </form>
                </div>
            </div>
            </div>
    </>
  );
}
