import { Form } from "radix-ui";
import { SubmitRecipeComment } from "./SubmitRecipeComment";

export default function RecipeCommentsForm(props) {
  const recipeId = props.paramId;
  console.log(recipeId);

  return (
    <Form.Root action={SubmitRecipeComment} className="recipeCommentsForm">
      <input type="hidden" value={recipeId} name="recipeId"></input>
      <Form.Field className="RecipeFormField" name="comment_content">
        <div>
          <Form.Label className="FormLabel">Your Comment:</Form.Label>

          <Form.Message className="FormMessage" match="valueMissing">
            Please enter your comment
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input className="bg-white w-3xl p-2" type="text" required />
        </Form.Control>
      </Form.Field>

      <Form.Submit asChild>
        <button className="Button bg-pink-300 m-2 p-4">Post comment</button>
      </Form.Submit>
    </Form.Root>
  );
}
// call function with brackets and add argument
