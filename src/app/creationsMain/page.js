import TopCreations from "@/components/home/Creations/topCreations";
import NewestCreations from "@/components/home/Creations/newestCreations";
import CreationsFilters from "@/components/home/Creations/creationsFilters";

export default function creationsMain() {
  return (
    <>
      <div>
        <CreationsFilters />
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
