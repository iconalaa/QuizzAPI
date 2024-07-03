import swaggerJsdoc from 'swagger-jsdoc';
import path from 'path';

const options: swaggerJsdoc.Options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Quiz API',
      version: '1.0.0',
      description: 'API documentation for Quiz operations',
    },
    servers: [
      {
        url: 'http://localhost:3000', // Replace with your server URL
        description: 'Development server',
      },
    ],
  },
  apis: [path.resolve(__dirname, '../routes/*.ts')], 
};

const specs = swaggerJsdoc(options);

export default specs;