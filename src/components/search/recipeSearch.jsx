// import { db } from "@/utils/dbConnection";

// async function searchRecipes(searchTerm) {
//   const { data, error } = await db
//     .from('recipes')
//     .select('*')
//     .ilike('recipe_name', `%${searchTerm}%`);

//   if (error) {
//     console.error('Error searching recipes:', error);
//     return [];
//   }

//   return data;
// }

// export default searchRecipes;