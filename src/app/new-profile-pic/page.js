import NewProfilePic from "@/components/userpage/profilepic/newProfileImage";
import { Card } from "@radix-ui/themes";
import "./new-profile-pic.css";

export default function NewProfilePicPage() {
  return (
    <Card id="MainCard">
      <NewProfilePic />
    </Card>
  );
}
