import CreationsFilters from "@/components/home/Creations/creationsFilters";
import AllCreations from "@/components/home/Creations/allCreations";
import Link from "next/link";
import "./creation.css";
import { SignedIn } from "@clerk/nextjs";

export default function creationsMain() {
  return (
    <>
      <div className="creationsPage">
        <div className="creationsLinkContainer">
          <SignedIn>
            <Link className="creationsLink" href={"/creations/add-creation"}>
              Add your own creation!
            </Link>
          </SignedIn>
          <div className="creationsFilter">{/* <CreationsFilters /> */}</div>
        </div>

        <AllCreations />
      </div>
    </>
  );
}
