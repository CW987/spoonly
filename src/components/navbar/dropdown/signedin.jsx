import { DropdownMenu, Avatar, Button } from "@radix-ui/themes";
import Link from "next/link";
import { useUser, useClerk } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import AvatarSelect from "./avatar";

export default function SignedInDropDown() {
  const [open, setOpen] = useState(false);
  const { user } = useUser();
  const userID = user?.id;
  const [image, setImage] = useState(user.imageUrl);
  const { signOut } = useClerk();

  useEffect(() => {
    AvatarSelect(userID).then(setImage);
  });

  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DropdownMenu.Trigger style={{ cursor: "pointer" }}>
        <div role="button" id="dropDownTriggerDiv">
          <Avatar
            src={image}
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
          <Link href={`/edit-user`}>Edit Your Profile</Link>
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <Link href={`/new-profile-pic`}>New User Image</Link>
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
