import { Form } from "radix-ui";
import { SubmitRecipeComment } from "./SubmitRecipeComment";
import "../../../app/recipes/recipe.css"

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
          <input className="bg-#5DB996 p-2 commentInput" type="text" required />
        </Form.Control>
      </Form.Field>

      <Form.Submit asChild>
        <button className="commentButton m-2 p-2">Post comment</button>
      </Form.Submit>
    </Form.Root>
  );
}
// call function with brackets and add argument
