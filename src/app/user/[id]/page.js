import UserCard from "@/components/userpage/UserCard";
import "./userpage.css";
import UserRecipes from "@/components/userpage/UserRecipes";
import UserCreations from "@/components/userpage/userCreations";

export default function UserPage() {
  return (
    <div id="UserPageMain">
      <UserCard />
      <div id="UserContent">
        <UserRecipes />
        <UserCreations />
      </div>
    </div>
  );
}
