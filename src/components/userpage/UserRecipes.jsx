import { Avatar, Card, Heading, Separator, Text } from "@radix-ui/themes";
import UserRecipeCards from "./CreationsAndRecipes/recipes";
import { db } from "@/utils/dbConnection";

export default async function UserRecipes({ params }) {
  const person = await db.query(`SELECT * FROM user_data WHERE clerk_id = $1`, [
    params,
  ]);
  const brokenPerson = person.rows[0];
  console.log(brokenPerson);
  return (
    <Card id="UserRecipesCard" className="UserContent">
      <Heading size="8">{brokenPerson.name}&apos;s Recipes</Heading>
      <Separator my="3" size="4"></Separator>
      <UserRecipeCards params={params} />
    </Card>
  );
}
