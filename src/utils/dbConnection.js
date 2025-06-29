import pg from pg;

export const db = new pg.Pool({
    connectionString: process.env.local.DB_CONNECTION,
  });