// src/utils/db.ts
import { Pool } from 'pg';
const db = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'mydb',
  password: 'password',
  port: 5432,
});
export { db };