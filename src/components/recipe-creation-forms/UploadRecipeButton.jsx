"use client"
import RecipeForm from "./RecipeForm"
import { useState } from "react"

export default function RecipeButton(){

    const [showForm, setShowForm] = useState(false)

    return(
        <>
            <button onClick={()=> setShowForm(!showForm)}>
                {showForm ? "Hide Form" : "Upload Recipe!"}
            </button>
            {showForm && <RecipeForm/>}
        
        </>
    )
}