"use client"
import "./recipes.css"
import { ToggleGroup } from "radix-ui";
import RecipeForm from "@/components/recipe-creation-forms/RecipeForm"
import CreationForm from "@/components/recipe-creation-forms/CreationForm"
import { useState } from "react";

export default function AddPostPage(){
    const [showRecipeForm, setShowRecipeForm] = useState(false)
    const [showCreationForm, setShowCreationForm] = useState(false)


    return(

        <div className="postContainer">

        <ToggleGroup.Root
            type="single"
            className="toggleGroup"
            aria-label="Recipe and Creation Form">

            <div className="toggleButton">
            <ToggleGroup.Item
                className="toggleItem"
                aria-label="Recipe Form"
                onClick={()=> setShowRecipeForm(!showRecipeForm)}>
                {showRecipeForm ? "Hide Recipe" : "Upload Recipe!"}
            </ToggleGroup.Item>

            <ToggleGroup.Item
                className="toggleItem"
                aria-label="Creation alignment"
                onClick={()=> setShowCreationForm(!showCreationForm)}>
                {showCreationForm? "Hide Creation" : "Upload Creation!"}
            </ToggleGroup.Item>
            </div>

            <div
                className="forms">
            {showRecipeForm && <RecipeForm/>}
            {showCreationForm && <CreationForm/>}
            </div>

        </ToggleGroup.Root>

        </div>

    )
}
