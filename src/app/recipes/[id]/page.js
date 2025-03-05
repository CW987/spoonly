import RecipeCommentsForm from "@/components/recipes/CommentsForm/RecipeCommentsForm";
import RecipeInfo from "@/components/recipes/individualPages/Recipe";
import { db } from "@/utils/dbConnection";
import DeleteButtonRecipe from "@/components/recipes/CommentsForm/DeleteButtonRecipe";

export default async function RecipePage({ params }) {
  const recipeParams = await params;
  console.log(recipeParams.id);

  const paramsId = recipeParams.id;
  console.log(paramsId);

  const recipeComment = await db.query(
    `SELECT recipe_comments_id, recipe_id, comment_content FROM recipe_comments WHERE recipe_id = $1`, [recipeParams.id])
  console.log(recipeComment)
  const wrangledRecipeComment = recipeComment.rows
  console.log(wrangledRecipeComment)


  return (
    <>
      <h1>A recipe!</h1>
      <RecipeInfo params={paramsId} />
      <RecipeCommentsForm paramId={paramsId} />

      {wrangledRecipeComment.map((comment)=>(
        <div key={comment.recipe_comments_id}>
          <p>{comment.comment_content}</p>
          <DeleteButtonRecipe recipeId={comment.recipe_comment_id}/>
        </div>
      ))}
    </>
  );
}
