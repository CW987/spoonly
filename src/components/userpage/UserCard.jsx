import { Avatar, Card, Heading, Separator, Text } from "@radix-ui/themes";

export default function UserCard() {
  return (
    <Card id="UserCard">
      <Heading size="8">Cameron&apos;s Bio</Heading>
      <Separator my="3" size="4"></Separator>
      <Avatar fallback="Amazing Selfie" size="8"></Avatar>
      <Separator my="3" size="4"></Separator>
      <Heading size="4">About Me</Heading>
      <Text id="AboutMe">Cameron is amazing</Text>
      <Separator my="3" size="4"></Separator>
      <Text>Country: England</Text>
    </Card>
  );
}
