import CreationForm from "@/components/recipe-creation-forms/CreationForm";
import { SignedIn } from "@clerk/nextjs";

export default function AddCreationPage() {
  return (
    <div className="creationContainer">
      <div className="creationForm">
        <SignedIn>
          <CreationForm />
        </SignedIn>
      </div>
    </div>
  );
}
