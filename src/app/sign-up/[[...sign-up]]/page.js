import { SignUp } from "@clerk/nextjs";

export default function SignInPage (){
    return (
        <>
            <div className="flex justify-center m-4">
            <SignUp/>
            </div>
            
        </>
    )
}