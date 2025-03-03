"use client";

import NewUser from "@/components/newUser/NewUserSubmit";
import { useUser } from "@clerk/nextjs";
import { Button, Card } from "@radix-ui/themes";
import "./newaccount.css";

export default function NewAccountPage() {
  const { user } = useUser();
  const userID = user?.id;
  const userName = user?.username;
  const userImage = user?.imageUrl;
  const userEmail = user?.emailAddresses[0].emailAddress;

  return (
    <Card id="NewUserForm">
      <form action={NewUser}>
        <input type="hidden" value={userID} name="clerk_id"></input>
        <input type="hidden" value={userName} name="name"></input>
        <input type="hidden" value={userImage} name="image"></input>
        <input type="hidden" value={userEmail} name="email"></input>
        <Button type="submit" size="4">
          Click Here To Finish
        </Button>
      </form>
    </Card>
  );
}
