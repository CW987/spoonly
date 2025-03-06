import { Button } from "@radix-ui/themes";
import Link from "next/link";

export default function () {
  return (
    <div id="NavBarLinks">
      <Button size="4" className="NavBarButtons">
        <Link className="NavBarLinks" href={`/recipes`}>
          Recipes
        </Link>
      </Button>
      <Button size="4" className="NavBarButtons">
        <Link className="NavBarLinks" href={`/creationsMain`}>
          Creations
        </Link>
      </Button>
    </div>
  );
}
