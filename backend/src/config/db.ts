import mysql2 from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

export const pool = mysql2.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

(async () => {
  try {
    const connection = await pool.getConnection();
    console.log('Datenbank verbunden!');
    connection.release();
  } catch (error) {
    console.error('Fehler bei der Datenbankverbindung:', error);
  }
})();
