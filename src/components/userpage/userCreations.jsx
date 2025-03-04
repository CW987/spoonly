"use client";

import { Avatar, Card, Heading, Separator, Text } from "@radix-ui/themes";

import { CldUploadWidget } from "next-cloudinary";

import { useState } from "react";

export default function UserCreations() {
  const [imageUrl, setImageUrl] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/2ChocolateChipCookies.jpg/800px-2ChocolateChipCookies.jpg"
  );

  return (
    <Card id="UserCreationsCard" className="UserContent">
      <Heading size="8">Cameron&apos;s Creations</Heading>
      <Separator my="3" size="4"></Separator>
      <CldUploadWidget uploadPreset="ml_default">
        {({ open }) => {
          return <button onClick={() => open()}>Upload an Image</button>;
        }}
      </CldUploadWidget>

      {imageUrl && (
        <img
          src={imageUrl}
          alt="Uploaded"
          style={{ marginTop: "10px", maxWidth: "300px" }}
        />
      )}
    </Card>
  );
}
