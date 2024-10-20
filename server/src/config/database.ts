import { Pool } from "pg";
import config from "./env";

const db = new Pool({
  host: config.db.host,
  port: config.db.port as number,
  database: config.db.database,
  user: config.db.user,
  password: config.db.password,
});

export default db;
