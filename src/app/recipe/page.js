import SimilarRecipes from "@/components/home/Recipes/similarRecipes";
import RecipeView from "@/components/home/Recipes/recipeView";
import Comments from "@/components/home/comments";

export default function recipe(){
    return(
        <>
        <SimilarRecipes />
        <RecipeView />
        <Comments />
        </>
    )
}