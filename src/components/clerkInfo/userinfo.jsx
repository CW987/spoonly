import { db } from "@/utils/dbConnection";

import { useUser } from "@clerk/nextjs";

const { user } = useUser();

const userID = user?.id;

const data = await db.query(`SELECT * FROM user_data WHERE clerk_id = $1`, [
  userID,
]);

export const CurrentUserInfo = await data.rows[0];
