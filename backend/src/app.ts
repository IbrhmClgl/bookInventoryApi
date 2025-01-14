import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import bookRoutes from './routes/bookRoutes';

const app = express();

// Activate Cors
app.use(cors());

app.use(bodyParser.json());

app.use('/api', bookRoutes);

export default app;
