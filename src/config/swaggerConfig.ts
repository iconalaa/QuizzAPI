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
        url: 'http://41.62.44.186:3000', // Update this to your server's public IP and port
        description: 'Production server',
      },
    ],
  },
  apis: [path.resolve(__dirname, '../routes/*.js')], // Ensure this path points to the compiled JavaScript files
};

const specs = swaggerJsdoc(options);

export default specs;
