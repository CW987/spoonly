import { db } from "@/utils/dbConnection";
import Link from "next/link";

export default async function ListOfCreations(){
    const creations = await db.query(`SELECT * FROM creations`)
    console.log(creations)

    const wrangledCreations = creations.rows
    console.log(wrangledCreations)

    return(
        <>
            <h1>
                {wrangledCreations.map((item)=>(
                    <div key={item.creations_id}>
                        <Link href="#">
                        <p>Cuisine: {item.cuisine}</p>
                        <p>Dish Type: {item.dish_type}</p>
                        <p>Content: {item.post_content}</p>
                        <p>Do you recommend this? {item.recommend}</p>
                        <p>Rating: {item.rating}</p>
                        </Link>
                    </div>
                ))}
            </h1>
        </>
    )
}