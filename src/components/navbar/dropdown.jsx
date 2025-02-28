"use client";

import { DropdownMenu, Avatar, Button, Separator } from "@radix-ui/themes";
import { useState } from "react";
import Link from "next/link";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { useClerk } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

export default function DropDown() {
  const { isSignedIn, user, isLoaded } = useUser();
  if (!user) return;
  //   console.log(user);
  const [open, setOpen] = useState(false);
  const { signOut } = useClerk();
  return (
    <div id="DropDown">
      <SignedIn>
        <DropdownMenu.Root open={open} onOpenChange={setOpen}>
          <DropdownMenu.Trigger>
            <div role="button" id="dropDownTriggerDiv">
              <Avatar
                src={user.imageUrl}
                size="8"
                onClick={() => setOpen(true)}
                fallback="Cameron da best"
              >
                Options
                <DropdownMenu.TriggerIcon />
              </Avatar>
            </div>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item>
              <Link href={`/user/1`}>Your Profile</Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <Link href={`/user/1/edit`}>Edit Your Profile</Link>
            </DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>
              <Button
                size="2"
                color="red"
                onClick={() => signOut({ redirectUrl: "/" })}
              >
                Sign out
              </Button>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </SignedIn>
      <SignedOut>
        <DropdownMenu.Root open={open} onOpenChange={setOpen}>
          <DropdownMenu.Trigger>
            <div role="button" id="dropDownTriggerDiv">
              <Avatar size="8" onClick={() => setOpen(true)} fallback="Sign In">
                Options
                <DropdownMenu.TriggerIcon />
              </Avatar>
            </div>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item>
              <Link href={"/sign-in"}>Sign In</Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <Link href={"/sign-up"}>Sign Up</Link>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </SignedOut>
    </div>
  );
}
