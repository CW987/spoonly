import { Card, Box, Text, Inset, Strong } from "@radix-ui/themes";
import "../../../app/creations/creation.css"
import { db } from "@/utils/dbConnection";
import Link from "next/link";

export default async function AllCreations() {

  const creations = await db.query(`SELECT * FROM creations`)
  console.log(creations)

  const wrangledCreations = creations.rows
  console.log(wrangledCreations)

  return (
    <div id="allCreations">
      {wrangledCreations.map((creation)=>(
        <div className="creationBoxContainer" key={creation.creations_id}>
          <Link href={`/creations/${creation.creations_id}`}>
          <Box className="creationBox" maxWidth="400px">
            <Card className="creationCard" size="2">
              <Inset clip="padding-box" side="top" pb="current">
                <img
                  src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Bold typography"
                  style={{
                    display: "block",
                    objectFit: "cover",
                    width: "100%",
                    height: 180,
                    backgroundColor: "var(--gray-5)",
                  }}
                />
              </Inset>
              <Text>
                <Strong>{creation.creation_name}</Strong>
                <p className="ptext">Rating 🥄: {creation.rating} /5</p>
                <p className="ptext">Cuisine 🌍: {creation.cuisine} </p>
              </Text>
            </Card>
          </Box>
          </Link>
          </div>
      ))}
    </div>
  );
}
