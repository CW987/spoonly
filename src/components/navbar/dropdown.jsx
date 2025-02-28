"use client";

import { DropdownMenu, Avatar } from "@radix-ui/themes";
import { useState } from "react";
import Link from "next/link";

export default function DropDown() {
  const [open, setOpen] = useState(false);
  return (
    <div id="DropDown">
      <DropdownMenu.Root open={open} onOpenChange={setOpen}>
        <DropdownMenu.Trigger>
          <div role="button" id="dropDownTriggerDiv">
            <Avatar
              size="8"
              radius="full"
              onClick={() => setOpen(true)}
              fallback="Sign In"
            >
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
    </div>
  );
}
