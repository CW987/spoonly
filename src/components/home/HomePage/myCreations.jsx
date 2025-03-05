import { Card, Box, Separator, Heading, Text } from "@radix-ui/themes";
import MyCreationsData from "./data/mycreations";

export default function MyCreations() {
  return (
    <div id="myCreations">
      <Box>
        <Card>
          <Heading>My Creations</Heading>
          <Separator my="3" size="4"></Separator>
          <div className="HomeCardsSort">
            <MyCreationsData />
          </div>
        </Card>
      </Box>
    </div>
  );
}
