"use server";

import { db } from "@/utils/dbConnection";

import Link from "next/link";
import { Card, Box, Text, Inset, Strong } from "@radix-ui/themes";

export default async function TopCreationsData() {
  const creations = await db.query(
    `SELECT *
    FROM creations
    ORDER BY rating desc
    LIMIT 3;`
  );

  const brokenCreeations = creations.rows;

  return (
    <div>
      {brokenCreeations.map((recipe) => (
        <div className="recipeBoxContainer" key={recipe.creations_id}>
          <Link href={`/creations/${recipe.creations_id}`}>
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
                  <Strong>{recipe.creation_name}</Strong>
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
