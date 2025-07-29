// db.js
import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'learnxcourse',
  password: process.env.dbpassword,
  port: 5432, // default
});


export default pool
