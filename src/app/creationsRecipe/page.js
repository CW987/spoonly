import SimilarCreations from "@/components/home/Creations/similarCreations";
import CreationsView from "@/components/home/Creations/creationsView";
import Comments from "@/components/home/comments";

export default function creationsRecipe(){
    return(
        <>
        <SimilarCreations />
        <CreationsView />
        <Comments />
        </>
    )
}