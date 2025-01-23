import 'reflect-metadata';
import { DataSource } from 'typeorm';
import path from 'path'
import * as dotenv from 'dotenv';
dotenv.config();

const baseDir = path.join(__dirname);

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.PORT as string),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  logging: true,
  synchronize: false, // Turn off this option because it will automaticly run migration when init connection
  entities: [baseDir + '/entities/*.{ts,js}'],
  migrations: [baseDir + '/migrations/*.{ts,js}'],
  subscribers: [baseDir + '/migrations/*.{ts,js}'],
});

export default AppDataSource;
