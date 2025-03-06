"use server"

import { db } from "@/utils/dbConnection";

export async function HandleDeleteComment(){
    await db.query(`DELETE FROM creation_comments WHERE creation_comments_id = $1`, [])
}