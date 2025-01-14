import express from 'express';
import bodyParser from 'body-parser';
import bookRoutes from './routes/bookRoutes';

const app = express();

app.use(bodyParser.json());

app.use('/api', bookRoutes);

export default app;
