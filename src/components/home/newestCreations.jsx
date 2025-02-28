import { Card, Box, Separator, Heading, Text } from "@radix-ui/themes";

export default function NewestCreations() {
  return (
    <div id="TopRecipes">
      <Box>
        <Card>
          <Heading>Newest Creations</Heading>
          <Separator my="3" size="4"></Separator>
          <Text>Fill in for new Creations</Text>
        </Card>
      </Box>
    </div>
  );
}
