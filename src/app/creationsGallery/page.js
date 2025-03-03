import AllRecipes from "@/components/home/Recipes/allRecipes"
import recipeFilters from "@/components/home/Recipes/recipeFilters"

export default function creationsGallery(){
    return(
        <>
        <h1>Creations Gallery</h1>
        <div>
            <recipeFilters />
        </div>
        <div>
            <AllRecipes />
        </div>
        </>
    )
}