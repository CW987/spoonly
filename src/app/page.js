import { Flex, Text, Button } from "@radix-ui/themes";
import "./home.css";
import TopRecipes from "@/components/home/topRecipes";
import MyCreations from "@/components/home/myCreations";
import TopCreations from "@/components/home/topCreations";
import Leaderboard from "@/components/home/leaderboard";
import { db } from "@/utils/dbConnection";

export default async function HomePage() {
  const userStuff = await db.query(`SELECT * FROM user`);

  const brokenUserStuff = userStuff.rows[0];
  console.log(brokenUserStuff);
  return (
    <div id="HomePageMain">
      <Flex direction="column" gap="2">
        <Text>Welcome to Spoonly</Text>
      </Flex>
      <div id="TopBoxes">
        <MyCreations />
        <TopRecipes />
        <TopCreations />
        <Leaderboard />
      </div>
    </div>
  );
}
