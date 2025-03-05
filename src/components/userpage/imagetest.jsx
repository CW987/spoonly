"use client";

import { CldUploadWidget } from "next-cloudinary";

import { useState } from "react";
import UploadImageTest from "./imageUpload";

export default function ImageTest() {
  const [imageUrl, setImageUrl] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/2ChocolateChipCookies.jpg/800px-2ChocolateChipCookies.jpg"
  );

  return (
    <div>
      <CldUploadWidget
        uploadPreset="ml_default"
        onSuccess={(results) => {
          const imageURL = results.info.secure_url;
          console.log("Image URL", imageURL);
          UploadImageTest(imageURL);
        }}
      >
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
    </div>
  );
}
