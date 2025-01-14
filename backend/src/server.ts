import dotenv from 'dotenv';
import app from './app';
import sequelize from './config/db';

dotenv.config();

const PORT = process.env.PORT || 5080;

sequelize
  .sync()
  .then(() => {
    console.log('Datenbank erfolgreich synchronisiert!');

    app.listen(PORT, () => {
      console.log(`Server läuft auf http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Fehler beim Synchronisieren der Datenbank:', err);
  });
