import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';
import { auth } from '@clerk/nextjs/server';
import Link from 'next/link';

export default function Header(){
    return(
        <>
            <div className='flex justify-between m-4 p-4'>
                <Link href={"/"}>Home</Link>
                <Link href={"/add-post"}>Add Post</Link>

                <SignedIn>
                    <UserButton/>
                </SignedIn>
                <SignedOut>
                    <SignUpButton/>
                    <SignInButton/>
                </SignedOut>
            </div>
        
        </>
    )
}