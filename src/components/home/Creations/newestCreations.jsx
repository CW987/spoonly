import { Card, Box, Separator, Heading, Text } from "@radix-ui/themes";
import ListOfCreations from "./ListOfCreations";

export default function NewestCreations() {
  return (
    <div id="NewestCreations">
      <Box>
        <Card>
          <Heading>Newest Creations</Heading>
          <Separator my="3" size="4"></Separator>
          <Text>
            <ListOfCreations/>
            </Text>
        </Card>
      </Box>
    </div>
  );
}
