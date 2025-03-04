import { auth } from '@clerk/nextjs/server'
import { currentUser } from '@clerk/nextjs/server'
import { db } from '@/utils/dbConnection';

export default async function testPage(){

    const { userId } = await auth();
    console.log(userId)

    const dbUserId = await db.query(`SELECT user_id FROM user_data WHERE clerk_id = $1`, [userId])
    console.log(dbUserId)
    const wrangledUser = dbUserId.rows
    console.log(wrangledUser)
    const wrangledUserNumber = wrangledUser[0].userId
    console.log(wrangledUserNumber)


    return(
        <div>
            <h1>hi {userId}</h1>
            <h1>{wrangledUserNumber}</h1>
        </div>
    )
}