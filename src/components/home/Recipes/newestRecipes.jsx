import { Card, Box, Separator, Heading, Text } from "@radix-ui/themes";

export default function NewestRecipes() {
  return (
    <div id="NewestRecipes">
      <Box>
        <Card>
          <Heading>Newest Recipes</Heading>
          <Separator my="3" size="4"></Separator>
          <Text>Fill in for new Recipes</Text>
        </Card>
      </Box>
    </div>
  );
}
