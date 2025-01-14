import express from 'express';
import cors from 'cors'; // CORS importieren
import bodyParser from 'body-parser';
import bookRoutes from './routes/bookRoutes';

const app = express();

// CORS aktivieren (damit alle Ursprünge Zugriff auf die API haben)
app.use(cors()); // CORS als Middleware hinzufügen

// Middleware für JSON-Parsing
app.use(bodyParser.json());

// Routen
app.use('/api', bookRoutes);

export default app;
