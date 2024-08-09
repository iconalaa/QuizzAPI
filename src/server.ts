import express from 'express';
import swaggerUi from 'swagger-ui-express';
import specs from './config/swaggerConfig';
import router from './routes/quizRoutes';

const app = express();

app.use(express.json()); // Add this line to parse JSON requests

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Use your router
app.use('/api', router);

// Define your port and host
const PORT = 4000;
const HOST = '10.10.20.49'; // Use the internal IP address

// Start the server
app.listen(PORT, HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
});

