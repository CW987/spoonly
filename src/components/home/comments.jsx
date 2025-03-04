import { Card, Box, Separator, Heading, Text } from "@radix-ui/themes";

export default function Comments() {
  return (
    <>
    <div className="creationCommentsFormContainer bg-green-200 rounded-lg p-4 shadow-xl mt-4">
        <form>
        <h1 className="text-2xl text-center">Tell us what you think!</h1>
            <label htmlFor="cuisine">Comments:</label>
            <input
                    className="border-2"
                    type="text"
                    name="comments"
                    required/>
{/* 
            <label htmlFor="method">Will you try to make this recipe?🗒️:</label>
            <textarea
                className="border-2"
                type="text"
                name="try"
                required>
            </textarea> */}

            <button>Submit Comments 🧑‍🍳!</button>
        </form>
        </div>
    </>
)
}