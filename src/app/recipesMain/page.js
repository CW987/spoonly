import RecipeFilters from "@/components/home/Recipes/recipeFilters";
import TopRecipes from "@/components/home/Recipes/topRecipes";
import NewestRecipes from "@/components/home/Recipes/newestRecipes";

export default function recipesMain(){
    return(
        <>
        <RecipeFilters />
        <TopRecipes />
        <NewestRecipes />
        </>
    )
}