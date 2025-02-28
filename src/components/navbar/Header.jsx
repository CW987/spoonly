import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export default function SignInUp() {
  return (
    <div id="NavHeader">
      <div>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
      <div>
        <SignedOut>
          <div>
            <SignUpButton />
          </div>
          <div>
            <SignInButton />
          </div>
        </SignedOut>
      </div>
    </div>
  );
}
