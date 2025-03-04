import { Card, Box, Separator, Heading, Text } from "@radix-ui/themes";
import { db } from "@/utils/dbConnection";

export default async function AllRecipes() {

  const recipes = await db.query(`SELECT * FROM recipes`)
  console.log(recipes)

  const wrangledRecipes = recipes.rows
  console.log(wrangledRecipes)

  return (
    <div id="AllRecipes">
      <Box>
        <Card>
          <Heading>Recipes Gallery</Heading>
          <Separator my="3" size="4"></Separator>
          <Text>{wrangledRecipes.map((item)=>(
            <div key={item.recipe_id}>
              <h2 className="text-xl">{item.recipe_name}</h2>
              <p>Rating ⭐️:  {item.rating}/5</p>
              <p>Cuisine 🌍: {item.cuisine}</p>
              <p>Dish Type 🍽️: {item.dish_type}</p>
              <p>⏳{item.cook_time} mins</p>
              <p>Servings 🧍‍♀️: {item.servings}</p>

            </div>

          ))}


          </Text>
        </Card>
      </Box>
    </div>
  );
}
