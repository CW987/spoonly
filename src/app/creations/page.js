import TopCreations from "@/components/home/Creations/topCreations";
import NewestCreations from "@/components/home/Creations/newestCreations";
import CreationsFilters from "@/components/home/Creations/creationsFilters";
import Link from "next/link";
import "./creation.css"
import AllCreations from "@/components/home/Creations/allCreations";

export default function creationsMain() {
  return (
    <>
      <div className="creationsLinkContainer">
        <Link 
            className="creationsLink"   
            href={"/creationsMain/add-creation"}>Add your own creation!
        </Link>
          <div className="creationsFilter">
            <CreationsFilters />
          </div>
      </div>

        <AllCreations/>
    </>
  );
}
