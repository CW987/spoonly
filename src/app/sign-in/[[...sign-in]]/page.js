import { SignIn } from "@clerk/nextjs";

export default async function SignInPage (){

    return (
        <>
            <div className="flex justify-center m-4">
            <SignIn/>
            </div>
        </>
    )
}