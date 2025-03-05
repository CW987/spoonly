"use client";

import { CldUploadWidget } from "next-cloudinary";
import { Button } from "@radix-ui/themes";
import UploadImage from "./newProfileImageUpload";
import { useUser } from "@clerk/nextjs";

export default function NewProfilePic() {
  const { user } = useUser();
  const userID = user?.id;
  console.log(userID);
  return (
    <CldUploadWidget
      uploadPreset="ml_default"
      onSuccess={(results) => {
        const imageURL = results.info.secure_url;
        UploadImage(imageURL, userID);
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
