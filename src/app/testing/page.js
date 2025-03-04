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

    const user = wrangledUser[0].user_id
    console.log(user)


    return(
        <div>
            <h1>hi {userId}</h1>
            <h1>{user}</h1>
        </div>
    )
}