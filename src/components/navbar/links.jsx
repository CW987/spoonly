import { Button } from "@radix-ui/themes";
import Link from "next/link";

export default function () {
  return (
    <div id="NavBarLinks">
      <Button asChild size="4">

        <Link className="NavBarLinks" href={`/recipes`}>

          Recipes
        </Link>
      </Button>
      <Button asChild size="4">
        <Link className="NavBarLinks" href={`/add-post`}>
          Add Post
        </Link>
      </Button>
      <Button asChild size="4">
        <Link className="NavBarLinks" href={`/creations`}>
          Creations
        </Link>
      </Button>
    </div>
  );
}
