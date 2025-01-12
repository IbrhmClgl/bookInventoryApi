import express from 'express';
import bodyParser from 'body-parser';
// import cors from 'cors';
import bookRoutes from './routes/bookRoutes';

const app = express();

// // Middleware
// app.use(cors()); // Cross-Origin Resource Sharing erlauben
app.use(bodyParser.json()); // JSON-Parsing aktivieren

// Routen
app.use('/api', bookRoutes);

export default app;
