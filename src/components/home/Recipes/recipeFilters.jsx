import { Card, Box, Separator, Heading, Text } from "@radix-ui/themes";

export default function RecipeFilters() {
  return (
    <div id="Filters">
      <Box>
        <Card className="bg-white shadow-[0px_2px_2px_#aea6a6]">
          <Heading>Recipe Filters</Heading>
          <Separator my="3" size="4"></Separator>
          {/* Filter pane goes here */}
        </Card>
      </Box>
    </div>
  );
}
