import CreationsFilters from "@/components/home/Creations/creationsFilters";
import AllCreations from "@/components/home/Creations/allCreations";
import Link from "next/link";
import "./creation.css";

export default function creationsMain() {
  return (
    <>
      <div className="creationsLinkContainer">
        <Link className="creationsLink" href={"/creations/add-creation"}>
          Add your own creation!
        </Link>
        <div className="creationsFilter">
          <CreationsFilters />
        </div>
      </div>

        <AllCreations/>
    </>
  );
}
