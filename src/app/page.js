import { Flex, Text, Button } from "@radix-ui/themes";
import "./home.css";
import TopRecipes from "@/components/home/HomePage/topRecipes";
import MyCreations from "@/components/home/HomePage/myCreations";
import TopCreations from "@/components/home/HomePage/topCreations";
import { SignedIn } from "@clerk/nextjs";

// import { CurrentUserInfo } from "@/components/clerkInfo/userinfo";

export default function HomePage() {
  // const userStuff = await db.query(`SELECT * FROM user`);
  // const brokenUserStuff = userStuff.rows[0];
  // console.log(brokenUserStuff);

  return (
    <div id="HomePageMain">
      <Flex direction="column" gap="2"></Flex>
      <div id="TopBoxes">
        <SignedIn>
          <MyCreations />
        </SignedIn>
        <TopRecipes />
        <TopCreations />
      </div>
    </div>
  );
}
