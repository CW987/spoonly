"use server";

import { db } from "@/utils/dbConnection";

export default async function DummyDataSubmit(formData) {
  console.log(formData.get("name"));
}

//   db.query(
//     `INSERT INTO user(clerk_id, email, name, bio, country)
//         VALUES($1, $2, $3, $4, $5)`,
//     [
//       formvalues.get("clerk_id"),
//       formvalues.get("email"),
//       formvalues.get("name"),
//       formvalues.get("bio"),
//       formvalues.get("country"),
//     ]
//   );
