"use client";

import { Form } from "radix-ui";
import { Button } from "@radix-ui/themes";
import CountryInput from "@/components/countryStuff/countryInput";
import "./edit.css";
import editUserSubmit from "./editUserSubmit";
import { useUser } from "@clerk/nextjs";

export default function EditUserForm() {
  const { user } = useUser();

  const userID = user?.id;
  return (
    // <form onSubmit={editUserSubmit}>
    //   <input type="text" name="name"></input>
    //   <input type="email" name="email"></input>
    //   <input type="text" name="country"></input>
    //   <input type="text" name="bio"></input>
    //   <button type="submit">Submit</button>
    // </form>

    <Form.Root className="FormRoot" id="EditForm" action={editUserSubmit}>
      <input type="hidden" name="clerk_id" value={userID} />
      <Form.Field className="FormField" name="name">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <Form.Label className="FormLabel">Username</Form.Label>
          <Form.Message className="FormMessage" match="valueMissing">
            Please enter your Username
          </Form.Message>
          <Form.Message className="FormMessage" match="typeMismatch">
            Please provide your preferred Username
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input className="Input" type="text" name="name" required />
        </Form.Control>
      </Form.Field>
      <Form.Field className="FormField" name="email">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <Form.Label className="FormLabel">Email</Form.Label>
          <Form.Message className="FormMessage" match="valueMissing">
            Please enter your email
          </Form.Message>
          <Form.Message className="FormMessage" match="typeMismatch">
            Please provide a valid email
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input className="Input" type="email" name="email" required />
        </Form.Control>
      </Form.Field>
      <Form.Field className="FormField">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <Form.Label className="FormLabel">Bio</Form.Label>
          <Form.Message className="FormMessage" match="valueMissing">
            Please enter your bio
          </Form.Message>
        </div>
        <Form.Control asChild>
          <textarea className="Textarea" name="bio" required />
        </Form.Control>
      </Form.Field>
      <Form.Field className="FormField" name="country">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <Form.Label className="FormLabel">Country</Form.Label>
          <Form.Message className="FormMessage" match="valueMissing">
            Please enter your bio
          </Form.Message>
        </div>
        <Form.Control asChild>
          <CountryInput />
        </Form.Control>
      </Form.Field>
      <Form.Field className="FormField" name="country">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <Form.Label className="FormLabel">Country</Form.Label>
          <Form.Message className="FormMessage" match="valueMissing">
            Please enter your bio
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input type="file"></input>
        </Form.Control>
      </Form.Field>
      <Form.Submit asChild>
        <Button className="Button" type="submit" style={{ marginTop: 10 }}>
          Post question
        </Button>
      </Form.Submit>
    </Form.Root>
  );
}
