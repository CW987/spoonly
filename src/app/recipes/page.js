import RecipeFilters from "@/components/home/Recipes/recipeFilters";
import AllRecipes from "@/components/home/Recipes/allRecipes";
import Link from "next/link";
import "./recipe.css";

export default function recipesMain() {
  return (
    <>
    <div className="recipeContainer">
      <div className="recipeLinkContainer">
        <Link className="recipeLink" href={"/recipes/add-recipe"}>
          Add your own recipe!
        </Link>
        <div className="recipeFilter">
          <RecipeFilters />
        </div>
      </div>

      <AllRecipes />
      </div>
    </>
  );
}
