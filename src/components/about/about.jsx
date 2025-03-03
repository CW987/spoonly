import { Card, Text } from "@radix-ui/themes";
import "./about.css";

export default function AboutSection() {
  return (
    <div id="AboutDiv">
      <Card id="AboutCard">
        <Text id="AboutText">
          This website was made by Natasha, Curtis, Hannah and Cameron
        </Text>
      </Card>
    </div>
  );
}