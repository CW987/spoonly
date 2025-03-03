import { DropdownMenu, Avatar } from "@radix-ui/themes";
import Link from "next/link";
import { useState } from "react";

export default function SignedOutDropDown() {
  const [open, setOpen] = useState(false);
  return (
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
  );
}
