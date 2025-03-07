"use client";

import { CldUploadWidget } from "next-cloudinary";
import { Button } from "@radix-ui/themes";
import UploadImage from "./newProfileImageUpload";

export default function NewProfilePic() {
  return (
    <CldUploadWidget
      uploadPreset="ml_default"
      onSuccess={(results) => {
        const imageUrl = results.info.secure_url;
        console.log("Image URL", imageUrl);
        UploadImage(imageUrl);
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
