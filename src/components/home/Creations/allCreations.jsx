import { Card, Box, Separator, Heading, Text } from "@radix-ui/themes";

export default function AllCreations() {
  return (
    <div id="AllRecipes">
      <Box>
        <Card>
          <Heading>Creations Gallery</Heading>
          <Separator my="3" size="4"></Separator>
          <Text>Fill in for top recipes</Text>
        </Card>
      </Box>
    </div>
  );
}
