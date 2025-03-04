import { DropdownMenu, Avatar, Button } from "@radix-ui/themes";
import Link from "next/link";
import { useUser, useClerk } from "@clerk/nextjs";
import { useState } from "react";

export default function SignedInDropDown() {
  const [open, setOpen] = useState(false);
  const { user } = useUser();
  const { signOut } = useClerk();
  return (
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
          <Link href={`/user/${user?.id}`}>Your Profile</Link>
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <Link href={`/user/${user?.id}/edit`}>Edit Your Profile</Link>
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
  );
}
