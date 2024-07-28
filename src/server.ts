import express from 'express';
import swaggerUi from 'swagger-ui-express';
import specs from './config/swaggerConfig'; 
import router from './routes/quizRoutes'; 
import 'dotenv/config';

const app = express();

app.use(express.json()); // Add this line to parse JSON requests

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Use your router
app.use('/api', router);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
