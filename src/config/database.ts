import { Sequelize } from 'sequelize';
import config from './config.json';

const env = process.env.NODE_ENV || 'development';
const dbConfig = (config as any)[env];

export const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: 'postgres',
  }
);
