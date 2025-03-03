"use client";

import { Form } from "radix-ui";
import { Button } from "@radix-ui/themes";
import CountryInput from "@/components/countryStuff/countryInput";

export default function EditUserForm() {
  return (
    <Form.Root className="FormRoot" id="EditForm">
      <Form.Field className="FormField" name="username">
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
          <input className="Input" type="text" required />
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
          <input className="FormInput" type="email" required />
        </Form.Control>
      </Form.Field>
      <Form.Field className="FormField" name="bio">
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
          <textarea className="Textarea" required />
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
      <Form.Submit asChild>
        <Button className="Button" style={{ marginTop: 10 }}>
          Post question
        </Button>
      </Form.Submit>
    </Form.Root>
  );
}
