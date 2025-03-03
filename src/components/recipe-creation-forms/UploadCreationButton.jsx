"use client"
import CreationForm from "./CreationForm";
import { useState } from "react";

export default function CreationButton(){

    const [showForm, setShowForm] = useState(false)

    return(
        <>
            <button onClick={()=> setShowForm(!showForm)}>
                {showForm? "Hide Form" : "Upload Creation!"}
            </button>
            {showForm && <CreationForm/>}
        
        </>
    )
}