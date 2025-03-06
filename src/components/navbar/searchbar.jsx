import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { TextField } from "@radix-ui/themes";

export default function SearchBar() {
  return (
    <div id="NavSearch">
      <TextField.Root placeholder="Search For Recipes">
        <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>
    </div>
  );
}

// export default function SearchBar() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [recipes, setRecipes] = useState([]);

//   const handleInputChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleSearch = async () => {
//     if (searchTerm.trim()) {
//       const results = await searchRecipes(searchTerm);
//       setRecipes(results);
//     }
//   };

//   return (
//     <div id="NavSearch">
//       <TextField.Root
//         placeholder="Search For Recipes"
//         onKeyDown={(e) => e.key === "Enter" && handleSearch()}
//       >
//         <TextField.Slot>
//           <MagnifyingGlassIcon height="16" width="16" onClick={handleSearch} />
//         </TextField.Slot>
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={handleInputChange}
//           placeholder="Search For Recipes"
//         />
//       </TextField.Root>

//       {recipes.length > 0 && (
//         <div id="recipe-results">
//           {recipes.map((recipe) => (
//             <div key={recipe.id} className="recipe-item">
//               <p>{recipe.recipe_name}</p>{" "}
//             </div>
//           ))}
//         </div>
//       )}

//       {recipes.length === 0 && searchTerm && (
//         <div>No recipes found for "{searchTerm}"</div>
//       )}
//     </div>
//   );
// }
