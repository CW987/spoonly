"use server";

import { db } from "@/utils/dbConnection";
import { Card } from "@radix-ui/themes";

export default async function UserRecipeCards({ params }) {
  const creations = await db.query(
    `SELECT r.*
    FROM recipes r
    JOIN user_data u ON r.user_id = u.user_id
    WHERE u.clerk_id = $1
    ORDER BY r.date_created DESC
    LIMIT 5;`,
    [await params]
  );
  const wrangledCreations = creations.rows;
  console.log(wrangledCreations);
  return (
    <div>
      {wrangledCreations.map((creations) => (
        <Card key={creations.recipe_id}>
          <div>{creations.recipe_name}</div>
        </Card>
      ))}
    </div>
  );
}
