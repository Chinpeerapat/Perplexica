import { drizzle } from 'drizzle-orm/postgres';
import { Pool } from 'pg';
import * as schema from './schema';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Provided by Railway
});
const db = drizzle(pool, {
  schema: schema,
});

export default db;
