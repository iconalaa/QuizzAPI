import express from 'express';
import bodyParser from 'body-parser';
import quizRoutes from './routes/quizRoutes';

const app = express();

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Routes for the API
app.use('/api', quizRoutes);

// Start the server
const PORT = parseInt(process.env.PORT || '3000', 10); // Ensure PORT is a number
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});

