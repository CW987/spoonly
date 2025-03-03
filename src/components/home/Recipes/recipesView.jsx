import { Card, Box, Separator, Heading, Text } from "@radix-ui/themes";

export default function RecipesView() {
  return (
    <div id="RecipesView">
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
