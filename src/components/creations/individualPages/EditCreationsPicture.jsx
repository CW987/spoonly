"use client";

import { CldUploadWidget } from "next-cloudinary";
import { Button } from "@radix-ui/themes";
import UploadNewCreationsImage from "./EditCreationsPictureSubmit";

export default function EditCreationsPic({ params }) {
  console.log(params);
  return (
    <CldUploadWidget
      uploadPreset="ml_default"
      onSuccess={(results) => {
        const imageUrl = results.info.secure_url;
        console.log("Image URL", imageUrl);
        UploadNewCreationsImage(imageUrl, params);
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
