import TopCreations from "@/components/home/topCreations"
import NewestCreations from "@/components/home/newestCreations"

export default function creationsMain(){
    return(
        <>
        <div>
            <h4>filters</h4>
        </div>
        <div>
            <TopCreations />
        </div>
        <div>
        <NewestCreations />
        </div>
        </>
    )
}