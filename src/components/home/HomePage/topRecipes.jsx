import { Card, Box, Separator, Heading, Text } from "@radix-ui/themes";
import TopRecipesData from "./data/toprecipes";

export default function TopRecipes() {
  return (
    <div id="TopRecipes">
      <Box>
        <Card>
          <Heading>Top Recipes</Heading>
          <Separator my="3" size="4"></Separator>
          <Text>Fill in for top recipes</Text>
          <TopRecipesData />
        </Card>
      </Box>
    </div>
  );
}
