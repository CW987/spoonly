import UserCard from "@/components/userpage/UserCard";
import "./userpage.css";
import UserRecipes from "@/components/userpage/UserRecipes";
import UserCreations from "@/components/userpage/userCreations";
import DummyData from "./dummydata";
import { Card } from "@radix-ui/themes";

import { db } from "@/utils/dbConnection";

export default function UserPage() {
  // Test

  // Test

  return (
    <div id="UserPageMain">
      <UserCard />
      <div id="UserContent">
        <UserRecipes />
        <UserCreations />
        <Card>
          <DummyData />
        </Card>
      </div>
    </div>
  );
}
