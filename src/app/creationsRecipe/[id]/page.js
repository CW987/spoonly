
export default async function RecipePage({params}){
    const recipeParams = await params.id;
    return(
        <>
        
        </>
    )
}




// import SimilarCreations from "@/components/home/Creations/similarCreations";
// import CreationsView from "@/components/home/Creations/creationsView";
// import Comments from "@/components/home/comments";

// export default function creationsRecipe({ params }){
//     const
//     return(
//         <>
//         <SimilarCreations />
//         <CreationsView />
//         <Comments />
//         </>
//     )
// }






// import UserCard from "@/components/userpage/UserCard";
// import "./userpage.css";
// import UserRecipes from "@/components/userpage/UserRecipes";
// import UserCreations from "@/components/userpage/userCreations";

// export default async function UserPage({ params }) {
//   const brokenParams = await params.id;
//   return (
//     <div id="UserPageMain">
//       <UserCard params={brokenParams} />
//       <div id="UserContent">
//         <UserRecipes params={brokenParams} />
//         <UserCreations params={brokenParams} />
//       </div>
//     </div>
//   );
// }
