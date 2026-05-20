// Import the pg library
import pg from "pg";

// Import and initialise dotenv directly here
// This is necessary because in ES Modules, db.js
// executes before app.js code runs, so we must
// load our own environment variables
import * as dotenv from "dotenv";
dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

export default pool;