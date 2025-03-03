import { db } from "@/utils/dbConnection";

export default async function UserStuff() {
  const UserStuffThingsWordsCantThinkGoodLuckHelpMaybe =
    db.query(`SELECT * FROM user`);

  const UserStuffThingsWordsCantThinkGoodLuckHelpMaybeButNew =
    UserStuffThingsWordsCantThinkGoodLuckHelpMaybe.rows;
  return (
    <>
      <p></p>
    </>
  );
}
