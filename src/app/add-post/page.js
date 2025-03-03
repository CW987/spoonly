// import { auth } from "@clerk/nextjs/server";
// import { db } from "@/utils/dbConnection";
// import { currentUser } from "@clerk/nextjs/server";
import UploadRecipeButton from "@/components/recipe-creation-forms/UploadRecipeButton"
import UploadCreationButton from "@/components/recipe-creation-forms/UploadCreationButton"
import "./recipes.css"

export default function AddPostPage(){

    // getting their user id 
    // const {userId } = await auth()
    // console.log(userId)

    // const user = await currentUser();
    // console.log(user)
    // const username = user.username
    // console.log(username)
    // const email =  user.emailAddresses[0].emailAddress 
    // console.log(email)

    return(
        <div className="flex items-start justify-evenly mt-4" id="UploadButtonsContainer">
        <UploadRecipeButton/>
        <UploadCreationButton/>
        </div>
    )
}