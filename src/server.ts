// src/server.ts

import express from 'express';
import swaggerUi from 'swagger-ui-express';
import specs from './config/swaggerConfig'; 
import router from './routes/quizRoutes'; 

const app = express();

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Use your router
app.use('/api', router);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
