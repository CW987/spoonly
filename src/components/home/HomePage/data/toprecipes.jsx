"use server";

import { db } from "@/utils/dbConnection";

import Link from "next/link";
import { Card, Box, Text, Inset, Strong } from "@radix-ui/themes";

export default async function TopRecipesData() {
  const creations = await db.query(
    `SELECT *
    FROM recipes
    ORDER BY rating desc
    LIMIT 3;`
  );

  const brokenCreeations = creations.rows;

  return (
    <div>
      {brokenCreeations.map((recipe) => (
        <div className="recipeBoxContainer" key={recipe.recipe_id}>
          <Link href={`/recipes/${recipe.recipe_id}`}>
            <Box className="recipeBox" maxWidth="500px">
              <Card className="recipe" size="2">
                <Inset clip="padding-box" side="top" pb="current">
                  <img
                    src={recipe.image}
                    alt="Bold typography"
                    style={{
                      display: "block",
                      objectFit: "cover",
                      width: "100%",
                      height: 180,
                      backgroundColor: "var(--gray-5)",
                    }}
                  />
                </Inset>
                <Text>
                  <Strong>{recipe.recipe_name}</Strong>
                  <p>{recipe.cook_time} mins</p>
                  <p>Rating: {recipe.rating} / 5 </p>
                </Text>
              </Card>
            </Box>
          </Link>
        </div>
      ))}
    </div>
  );
}
