import { Avatar, Card, Heading, Separator, Text } from "@radix-ui/themes";
import UserCreationsCards from "./CreationsAndRecipes/creations";
import { db } from "@/utils/dbConnection";

export default async function UserCreations({ params }) {
  const person = await db.query(`SELECT * FROM user_data WHERE clerk_id = $1`, [
    params,
  ]);
  const brokenPerson = person.rows[0];
  console.log(brokenPerson);
  return (
    <Card id="UserCreationsCard" className="UserContent">
      <Heading size="8">{brokenPerson.name}&apos;s Creations</Heading>
      <Separator my="3" size="4"></Separator>
      <UserCreationsCards params={params} />
    </Card>
  );
}
