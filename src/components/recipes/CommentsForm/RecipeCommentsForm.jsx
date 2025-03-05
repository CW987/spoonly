import { Form } from "radix-ui";
import { SubmitRecipeComment } from "./SubmitRecipeComment";

export default function RecipeCommentsForm(props) {
  console.log(props);
  const recipeId = props;
  console.log(recipeId);
  return (
    <Form.Root action={SubmitRecipeComment} className="recipeCommentsForm">
      <input type="hidden" value={recipeId} name="recipeId"></input>
      <Form.Field className="FormField" name="comment_content">
        <div>
          <Form.Label className="FormLabel">Your Comment:</Form.Label>

          <Form.Message className="FormMessage" match="valueMissing">
            Please enter your comment
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input type="text" required />
        </Form.Control>
      </Form.Field>

      <Form.Submit asChild>
        <button className="Button">Post comment</button>
      </Form.Submit>
    </Form.Root>
  );
}
// call function with brackets and add argument
