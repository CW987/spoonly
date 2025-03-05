import RecipeCommentsForm from "@/components/recipes/CommentsForm/RecipeCommentsForm";
import RecipeInfo from "@/components/recipes/individualPages/Recipe";

export default async function RecipePage({ params }) {
  const recipeParams = await params;
  console.log(recipeParams.id);

  const paramsId = recipeParams.id;
  console.log(paramsId);

  return (
    <>
      <h1>A recipe!</h1>
      <RecipeInfo params={paramsId} />
      <RecipeCommentsForm paramId={paramsId} />
    </>
  );
}
