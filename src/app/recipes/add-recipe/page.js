import RecipeForm from "@/components/recipe-creation-forms/RecipeForm";
import "../recipe.css";
import { SignedIn } from "@clerk/nextjs";

export default function AddRecipePage() {
  return (
    <div className="recipeContainer">
      <div className="recipeForm">
        <SignedIn>
          {" "}
          <RecipeForm />
        </SignedIn>
      </div>
    </div>
  );
}
