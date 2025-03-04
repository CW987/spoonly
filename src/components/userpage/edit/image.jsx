"use server";

import { CldUploadWidget } from "next-cloudinary";

export default async function ImageUpload() {
  return (
    <CldUploadWidget uploadPreset="<Your Upload Preset>">
      {({ open }) => {
        return <button onClick={() => open()}>Upload an Image</button>;
      }}
    </CldUploadWidget>
  );
}
