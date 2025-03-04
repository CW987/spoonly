import { Card, Box, Separator, Heading, Text } from "@radix-ui/themes";

export default function SimilarRecipes() {
  return (
    <div id="SimilarRecipes ">
      <Box>
        <Card>
          <Heading> Similar Recipes </Heading>
          <Separator my="3" size="4"></Separator>
          {/* Recipe goes here */}
        </Card>
      </Box>
    </div>
  );
}
