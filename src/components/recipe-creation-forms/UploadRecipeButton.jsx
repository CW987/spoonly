"use client"
import RecipeForm from "./RecipeForm"
import { useState } from "react"

export default function RecipeButton(){

    const [showForm, setShowForm] = useState(false)

    return(
        <>
            <button 
                className="flex flex-col justify-between rounded-lg bg-green-300 p-4 shadow-xl"
                onClick={()=> setShowForm(!showForm)}>
                {showForm ? "Hide Recipe" : "Upload Recipe!"}
            </button>
            {showForm && <RecipeForm/>}
        
        </>
    )
}