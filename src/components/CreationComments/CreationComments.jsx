import { db } from "@/utils/dbConnection"
import "../../app/creations/creation.css"

export default async function CreationComments(props){

    const cParams = props.creationParams
    console.log(`params are: ${cParams}`)

    const comment = await db.query(`SELECT creation_comments_id, comment_content FROM creation_comments WHERE creations_id = $1`, [cParams])
    console.log(comment)

    const wrangledComment = comment.rows
    console.log(wrangledComment)

    return(
        <>
            <div className="commentContainer">
                {wrangledComment.map((comment)=>(
                    <div key={comment.creation_comments_id} className="comment">
                        <p>💬:  {comment.comment_content}</p>
                    </div>
                ))}
            </div>
        </>
    )
}