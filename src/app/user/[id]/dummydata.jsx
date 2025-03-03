import DummyDataSubmit from "./dummydatasubmit";

export default function DummyData() {
  return (
    <form onSubmit={DummyDataSubmit}>
      <input name="clerk_id" type="text" placeholder="clerk_id"></input>
      <input name="email" type="text" placeholder="email"></input>
      <input name="name" type="text" placeholder="name"></input>
      <input name="bio" type="text" placeholder="bio"></input>
      <input name="country" type="text" placeholder="country"></input>
      <button type="submit">Submit</button>
    </form>
  );
}
