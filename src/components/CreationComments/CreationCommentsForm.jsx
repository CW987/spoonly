import { Form } from "radix-ui";
// import { SubmitRecipeComment } from "./SubmitRecipeComment";
import "../../app/creations/creation.css"
import { handleCreationCommentSubmit } from "./creationCommentSubmitFunction";

export default function CreationCommentsForm(props) {
    console.log(props)
    const creationId = props.creationParams
    console.log(creationId)

    return (
        <Form.Root action={handleCreationCommentSubmit} className="creationCommentsForm">
            <input type="hidden" value={creationId} name="creationId"></input>
            <Form.Field className="CreationFormField" name="comment_content">
                <div>
                    <Form.Label className="FormLabel">Your Comment:</Form.Label>
                        <Form.Message className="FormMessage" match="valueMissing">
                            Please enter your comment
                        </Form.Message>
                </div>
                <Form.Control asChild>
                    <input className="bg-white w-2xl p-2" type="text" required />
                </Form.Control>
            </Form.Field>

            <Form.Submit asChild>
                <button className="Button bg-pink-300 m-2 p-4">Post comment</button>
            </Form.Submit>
        </Form.Root>
    );
}
// call function with brackets and add argument
