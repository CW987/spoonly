import RecipeFilters from "@/components/home/Recipes/recipeFilters";
import TopRecipes from "@/components/home/Recipes/topRecipes";
import NewestRecipes from "@/components/home/Recipes/newestRecipes";
import AllRecipes from "@/components/home/Recipes/allRecipes";
import Link from "next/link";
import "./recipe.css"

export default function recipesMain(){
    return(
        <>
        <div className="recipeLinkContainer">
            <Link 
                className="recipeLink"   
                href={"/recipes/add-recipe"}>Add your own recipe!
            </Link>
            <div className="recipeFilter">
            <RecipeFilters />
            </div>
        </div>

        <AllRecipes/>
        {/* <TopRecipes />
        <NewestRecipes /> */}

        </>
    )
}