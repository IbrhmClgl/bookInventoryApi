import dotenv from 'dotenv';
import app from './app';

dotenv.config();

const PORT = process.env.PORT || 5080;

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
