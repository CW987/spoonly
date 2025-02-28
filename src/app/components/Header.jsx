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
                <SignedIn>
                    <UserButton/>
                </SignedIn>
                <SignedOut>
                    <SignUpButton/>
                    <SignInButton/>
                </SignedOut>
        </>
    )
}