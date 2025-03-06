"use client";

import { CldUploadWidget } from "next-cloudinary";
import { Button } from "@radix-ui/themes";
import UploadNewImage from "./EditPictureSubmit";

export default function EditRecipePic({ params }) {
  console.log(params);
  return (
    <CldUploadWidget
      uploadPreset="ml_default"
      onSuccess={(results) => {
        const imageUrl = results.info.secure_url;
        console.log("Image URL", imageUrl);
        UploadNewImage(imageUrl, params);
      }}
    >
      {({ open }) => {
        return (
          <Button size="4" onClick={() => open()}>
            Upload Your New Pic
          </Button>
        );
      }}
    </CldUploadWidget>
  );
}
