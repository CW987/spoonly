"use server"

import { db } from "@/utils/dbConnection";

export async function CreationComments(formValues){

    const creationCommentsFormData = {
        comment: formValues.get("comments"),
    }
    db.query(`INSERT INTO creationcomments
        (comment_content) 
        VALUES($1)`, 
        [creationCommentsFormData.comments])
}