import { Card, Box, Separator, Heading, Text } from "@radix-ui/themes";

export default function MyCreations({ users }) {
  return (
    <div id="TopRecipes">
      <Box>
        <Card>
          <Heading>My Creations</Heading>
          <Separator my="3" size="4"></Separator>
          <Text>Fill in for My Creations</Text>
        </Card>
      </Box>
    </div>
  );
}
