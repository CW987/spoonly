
import AllCreations from "@/components/home/Creations/allCreations"
import CreationsFilters from "@/components/home/Creations/creationsFilters"


export default function creationsGallery(){
    return(
        <>
        <h1>Creations Gallery</h1>
        <div>

            <CreationsFilters />
        </div>
        <div>
            <AllCreations />

        </div>
        </>
    )
}