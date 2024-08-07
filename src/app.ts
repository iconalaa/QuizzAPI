import express from 'express';
import bodyParser from 'body-parser';
import quizRoutes from './routes/quizRoutes';

const app = express();

app.use(bodyParser.json());
app.use('/api', quizRoutes);

export default app;