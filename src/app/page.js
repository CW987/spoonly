import { Flex, Text, Button } from "@radix-ui/themes";
import "./home.css";
import TopRecipes from "@/components/home/Recipes/topRecipes";

import MyCreations from "@/components/home/Creations/myCreations";

import TopCreations from "@/components/home/Creations/topCreations";
import Leaderboard from "@/components/home/leaderboard";
import { db } from "@/utils/dbConnection";
// import { CurrentUserInfo } from "@/components/clerkInfo/userinfo";
// import { Accessibility } from 'accessibility';

export default async function HomePage() {
  // const userStuff = await db.query(`SELECT * FROM user`);
  // const brokenUserStuff = userStuff.rows[0];
  // console.log(brokenUserStuff);

  return (
    <div id="HomePageMain">
      <Flex direction="column" gap="2">
        <Text>Welcome to Spoonly</Text>
      </Flex>
      <div id="TopBoxes">
        <MyCreations />

        {/* <p>{CurrentUserInfo.name}</p> */}

        <TopRecipes />
        <TopCreations />
        <Leaderboard />
        {/* <Accessibility /> */}
      </div>
    </div>
  );
}
