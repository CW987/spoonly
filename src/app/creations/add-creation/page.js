import CreationForm from "@/components/recipe-creation-forms/CreationForm"


export default function AddCreationPage(){
    
    return(
        <div className="creationContainer">
            <div className="heading">
                <h1>Upload your own creation!</h1>
            </div>

            <div className="creationForm">
                <CreationForm/>
            </div>
        </div>
    )
}