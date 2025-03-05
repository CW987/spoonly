import NewestCreations from "@/components/home/Creations/newestCreations";
import CreationsFilters from "@/components/home/Creations/creationsFilters";
import Link from "next/link";
<<<<<<< HEAD:src/app/creationsMain/page.js
import "./creation.css";
=======
import "./creation.css"
import AllCreations from "@/components/home/Creations/allCreations";
>>>>>>> main:src/app/creations/page.js

export default function creationsMain() {
  return (
    <>
      <div className="creationsLinkContainer">
<<<<<<< HEAD:src/app/creationsMain/page.js
        <Link className="creationsLink" href={"/creationsMain/add-creation"}>
          Add your own creation!
        </Link>
        <div className="creationsFilter">
          <CreationsFilters />
        </div>
      </div>
      <div>
        <NewestCreations />
=======
        <Link 
            className="creationsLink"   
            href={"/creationsMain/add-creation"}>Add your own creation!
        </Link>
          <div className="creationsFilter">
            <CreationsFilters />
          </div>
>>>>>>> main:src/app/creations/page.js
      </div>

        <AllCreations/>
    </>
  );
}
