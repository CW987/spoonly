import { Flex, Text, Button } from "@radix-ui/themes";

export default function HomePage() {
  return (
    <div>
      <Flex direction="column" gap="2">
        <Text>Welcome to Spoonly</Text>
      </Flex>
      <Button>Hello</Button>
    </div>
  );
}
