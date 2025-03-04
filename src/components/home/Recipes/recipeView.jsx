import { Card, Box, Separator, Heading, Text } from "@radix-ui/themes";

export default function RecipeView() {
  return (
    <div id="RecipeView">
      <Box>
        <Card>
          <Heading> {/*Dynamic title goes here*/} </Heading>
          <Separator my="3" size="4"></Separator>
          {/* Recipe goes here */}
        </Card>
      </Box>
    </div>
  );
}
