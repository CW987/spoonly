"use client";

import { Avatar, Card, Heading, Separator, Text } from "@radix-ui/themes";
import ImageTest from "./imagetest";

export default function UserCreations() {
  return (
    <Card id="UserCreationsCard" className="UserContent">
      <Heading size="8">Cameron&apos;s Creations</Heading>
      <Separator my="3" size="4"></Separator>
      <ImageTest />
    </Card>
  );
}
