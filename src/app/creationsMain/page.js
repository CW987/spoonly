import TopCreations from "@/components/home/Creations/topCreations";
import NewestCreations from "@/components/home/Creations/newestCreations";
import creationsFilters from "@/components/home/Creations/creationsFilters";

export default function creationsMain() {
  return (
    <>
      <div>
        <creationsFilters />
      </div>
      <div>
        <TopCreations />
      </div>
      <div>
        <NewestCreations />
      </div>
    </>
  );
}
