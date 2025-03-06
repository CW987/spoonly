import RecipeForm from "@/components/recipe-creation-forms/RecipeForm";
import "../recipe.css"

export default function AddRecipePage(){
    
    return(
        <div className="recipeContainer">
            <div className="heading">
                <h1>Upload your own recipe!</h1>
            </div>

            <div className="recipeForm">
                <RecipeForm/>
            </div>
        </div>
    )
}