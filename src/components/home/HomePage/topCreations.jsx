import { Card, Box, Separator, Heading, Text } from "@radix-ui/themes";
import TopCreationsData from "./data/topcreations";

export default function TopCreations() {
  return (
    <div id="TopCreations">
      <Box>
        <Card>
          <Heading>Top Creations</Heading>
          <Separator my="3" size="4"></Separator>
          <TopCreationsData />
        </Card>
      </Box>
    </div>
  );
}
