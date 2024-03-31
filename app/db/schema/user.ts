import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

const users = pgTable("users", {
    id: serial("id").primaryKey(),
    fullname: text("fullname"),
    phone: varchar("phone", { length: 256}),
    address: varchar("address", { length: 256}),
})

export default users;