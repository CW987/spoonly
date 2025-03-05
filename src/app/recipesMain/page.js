import RecipeFilters from "@/components/home/Recipes/recipeFilters";
import TopRecipes from "@/components/home/Recipes/topRecipes";
import NewestRecipes from "@/components/home/Recipes/newestRecipes";
import Link from "next/link";
import "./recipe.css"

export default function recipesMain(){
    return(
        <>
        <div
            className="recipeLinkContainer">
        <Link 
            className="recipeLink"   
            href={"/recipesMain/add-recipe"}>Add your own recipe!</Link>


        <div className="recipeFilter">
        <RecipeFilters />
        </div>
        </div>

        <TopRecipes />
        <NewestRecipes />
        </>
    )
}