import { Pool } from "pg"
import "dotenv/config"
import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { Mina } from "next/font/google";

const pool = new Pool({
    connectionString: process.env.DATABASE_URL || "",
});


const db = drizzle(pool);
async function main() {
    console.log("Running migrations...");
    await migrate(db, {migrationsFolder: "./app/db/generated"});
    console.log("Migrations complete!");
    process.exit(0);


}

main().catch((e) => {
    console.error(e);
    process.exit(1);
});