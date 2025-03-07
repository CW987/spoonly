import RecipeFilters from "@/components/home/Recipes/recipeFilters";
import AllRecipes from "@/components/home/Recipes/allRecipes";
import Link from "next/link";
import "./recipe.css";
import { SignedIn } from "@clerk/nextjs";

export default function recipesMain() {
  return (
    <>
      <div className="recipeContainer">
        <div className="recipeLinkContainer">
          <SignedIn>
            <Link className="recipeLink" href={"/recipes/add-recipe"}>
              Add your own recipe!
            </Link>
          </SignedIn>
          <div className="recipeFilter">{/* <RecipeFilters /> */}</div>
        </div>

        <AllRecipes />
      </div>
    </>
  );
}
