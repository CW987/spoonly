"use client"
import CreationForm from "./CreationForm";
import { useState } from "react";

export default function CreationButton(){

    const [showForm, setShowForm] = useState(false)

    return(
        <>
            <button 
                className="flex flex-col justify-between rounded-lg bg-green-300 p-4 shadow-xl"
                onClick={()=> setShowForm(!showForm)}>
                {showForm? "Hide Creation" : "Upload Creation!"}
            </button>
            {showForm && <CreationForm/>}
        
        </>
    )
}