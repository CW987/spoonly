"use server";

import { db } from "@/utils/dbConnection";
import { Avatar, Card, Heading, Separator, Text } from "@radix-ui/themes";

export default async function UserCard({ params }) {
  const userInfo = await db.query(
    `SELECT * FROM user_data WHERE clerk_id = $1`,
    [await params]
  );
  const brokenUserInfo = await userInfo.rows[0];
  return (
    <Card id="UserCard">
      <Heading size="8">{brokenUserInfo.name}&apos;s Bio</Heading>
      <Separator my="3" size="4"></Separator>
      <Avatar
        fallback="Amazing Selfie"
        size="8"
        src={brokenUserInfo.image}
      ></Avatar>
      <Separator my="3" size="4"></Separator>
      <Heading size="4">About Me</Heading>
      <Text id="AboutMe">{brokenUserInfo.bio}</Text>
      <Separator my="3" size="4"></Separator>
      <Text>Country: {brokenUserInfo.country}</Text>
    </Card>
  );
}
