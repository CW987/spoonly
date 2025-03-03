"use client";

import { SignedIn, SignedOut } from "@clerk/nextjs";
import SignedInDropDown from "./dropdown/signedin";
import SignedOutDropDown from "./dropdown/signedout";

export default function DropDown() {
  return (
    <div id="DropDown">
      <SignedIn>
        <SignedInDropDown />
      </SignedIn>
      <SignedOut>
        <SignedOutDropDown />
      </SignedOut>
    </div>
  );
}
