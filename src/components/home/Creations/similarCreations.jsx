import { Card, Box, Separator, Heading, Text } from "@radix-ui/themes";

export default function SimilarCreations() {
  return (
    <div id="Similar Creations">
      <Box>
        <Card>
          <Heading> Similar Creations </Heading>
          <Separator my="3" size="4"></Separator>
          {/* Recipe goes here */}
        </Card>
      </Box>
    </div>
  );
}
