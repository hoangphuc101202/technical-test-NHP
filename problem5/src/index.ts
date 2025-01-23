import express, { Request, Response, NextFunction } from 'express';
import AppDataSource from './database';
import 'reflect-metadata';
import indexRoute from './routes';
const app = express();
const port = 3000;
(async () => {
    try {
      await AppDataSource.initialize();
      console.info('Database connected successfully');
    } catch (error) {
      console.error('Failed to connect to the database', error);
    }
  })();
  
app.use(express.json());

app.use('/', indexRoute)


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});