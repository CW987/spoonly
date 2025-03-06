import { db } from "@/utils/dbConnection";
import "../creation.css";
import CreationCommentsForm from "@/components/CreationComments/CreationCommentsForm";
import CreationComments from "@/components/CreationComments/CreationComments";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function CreationIDPage({params}){

    const creationParams = await params;
    console.log(creationParams.id)

    const creationParamsId = creationParams.id
    
    const creation = await db.query(`SELECT * FROM creations WHERE creations_id = $1`, [creationParams.id])

    const wrangledCreation = creation.rows

    async function handleDeleteCreation(){
        "use server"
        await db.query(`DELETE FROM creations WHERE creations_id = $1`, [creationParams.id])
        revalidatePath(`/creations`)
        redirect(`/creations`)
    }

    return(
        <>
        <div className="wholeCreationPage">
        <div className="myCreationPage">
            {wrangledCreation.map((creation)=>(
                <div key={creation.creations_id} className="creation">
                    <h1 className="heading">{creation.creation_name}</h1>
                    <p>Cuisine 🌍: {creation.cuisine}</p>
                    <p>{creation.dish_type}</p>
                    <p>Do you recommend this? {creation.recommend}</p>
                    <p>Your rating ⭐️: {creation.rating} /5 </p>
                    <p>Your thoughts: {creation.post_content}</p>
                </div>
            ))}
            <CreationCommentsForm creationParams={creationParamsId}/>
            <CreationComments creationParams={creationParamsId}/>
            </div>

            <div className="buttons">
                <div className="deleteCreation">
                    <form action={handleDeleteCreation}>
                        <button
                            type="submit">
                                Delete this creation</button>
                    </form>
                </div>

                <div className="updateLink">
                <Link
                    href={`/creations/${creationParams.id}/update-creation`}>
                    Update creation
                </Link>
                </div>
            </div>
            </div>
        </>
    )
}