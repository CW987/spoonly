import UserCard from "@/components/userpage/UserCard";
import "./userpage.css";
import UserRecipes from "@/components/userpage/UserRecipes";
import UserCreations from "@/components/userpage/userCreations";

export default async function UserPage({ params }) {
  const brokenParams = await params.id;
  return (
    <div id="UserPageMain">
      <UserCard params={brokenParams} />
      <div id="UserContent">
        <UserRecipes params={brokenParams} />
        <UserCreations params={brokenParams} />
      </div>
    </div>
  );
}
