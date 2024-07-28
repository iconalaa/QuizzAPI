import { Sequelize } from 'sequelize';
import 'dotenv/config'; // Load environment variables

const {
  POSTGRES_URL,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DATABASE,
  POSTGRES_HOST
} = process.env;

if (!POSTGRES_URL || !POSTGRES_USER || !POSTGRES_PASSWORD || !POSTGRES_DATABASE || !POSTGRES_HOST) {
  throw new Error('Database environment variables are not defined');
}

export const sequelize = new Sequelize(
  POSTGRES_DATABASE as string,
  POSTGRES_USER as string,
  POSTGRES_PASSWORD as string,
  {
    host: POSTGRES_HOST,
    dialect: 'postgres',
    // Additional options can be added here
  }
);
