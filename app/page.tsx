import { db } from "./db";
import users from "./db/schema/user";


export default async function Home() {

  const result = await db.select().from(users)

  return (
    <div>
      <h1>My App</h1>
      <p>Welcome to my app!</p>
      <p>Users:</p>
      <ul>
        {result.map((user) => (
          <li key={user.id}>{JSON.stringify(result)}</li>
        ))}
      </ul>
    </div>
  );
}
