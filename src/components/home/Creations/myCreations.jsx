import { Card, Box, Separator, Heading, Text } from "@radix-ui/themes";

export default function MyCreations() {
  return (
    <div id="myCreations">
      <Box>
        <Card>
          <Heading>My Creations</Heading>
          <Separator my="3" size="4"></Separator>
          <Text>Fill in for top Creations</Text>
        </Card>
      </Box>
    </div>
  );
}
