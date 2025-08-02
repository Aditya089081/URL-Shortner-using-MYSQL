import { db } from '../config/dbClient.js';

export const loadLinks = async () => {
  const [rows] = await db.execute('SELECT * FROM Shortners');
  return rows;
};

export const saveLinks = async ({ shortcode, url }) => {
  const [result] = await db.execute(
    'INSERT INTO Shortners (shortcode, url) VALUES (?, ?)',
    [shortcode, url]
  );
  return result;
};

export const getLinkByShortCode = async (shortcode) => {
  const [rows] = await db.execute(
    'SELECT * FROM Shortners WHERE shortcode = ? LIMIT 1',
    [shortcode]
  );
  return rows[0];
};




// import { dbClient } from "../config/dbClient.js";
// import dotenv from 'dotenv';
// dotenv.config({ path: '../config/private.env' });

// const db = dbClient.db(process.env.DATABASE_NAME);
// const shortnerCollection = db.collection('Shortners');

// export const loadLinks = async () => {
//   return shortnerCollection.find().toArray();
// };

// export const saveLinks = async (link) => {
//   return shortnerCollection.insertOne(link);
// };

// export const getLinkByShortCode = async (shortcode) => {
//   return shortnerCollection.findOne({ shortcode });
// };
