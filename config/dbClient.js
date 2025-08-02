// import { MongoClient } from "mongodb";
// import dotenv from "dotenv";

// dotenv.config({ path: './Private.env' });

// export const dbClient = new MongoClient("process.env.MONGO_URL");



import mysql from 'mysql2/promise';
import { env } from './env.js';

export const db = await mysql.createConnection({
  host: env.DATABASE_HOST,
  user: env.DATABASE_USER,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE_NAME,
});
