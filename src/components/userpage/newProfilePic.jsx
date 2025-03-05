export default function NewProfilePic() {
  return (
    <CldUploadWidget
      uploadPreset="ml_default"
      onSuccess={(results) => {
        const imageURL = results.info.secure_url;
        console.log("Image URL", imageURL);
        UploadImageTest(imageURL);
      }}
    >
      {({ open }) => {
        return (
          <button onClick={() => open()}>
            <Avatar
              fallback="Amazing Selfie"
              size="8"
              src={brokenUserInfo.image}
            ></Avatar>
          </button>
        );
      }}
    </CldUploadWidget>
  );
}
