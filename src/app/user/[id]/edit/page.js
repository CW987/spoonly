import EditUserForm from "@/components/userpage/edit/form";
import { Card } from "@radix-ui/themes";
import "./edit.css";

export default function EditPage() {
  return (
    <div id="EditPageMainDiv">
      <Card id="EditPageCard">
        <EditUserForm />
      </Card>
    </div>
  );
}
