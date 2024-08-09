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
        url: 'http://10.10.20.49:4000', // Update the URL to match your server's address and port
        description: 'Production server',
      },
    ],
  },
  apis: [path.resolve(__dirname, '../routes/*.js')],
};

const specs = swaggerJsdoc(options);

export default specs;

