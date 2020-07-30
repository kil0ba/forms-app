import express, {Request, Response, NextFunction, ErrorRequestHandler} from 'express';

import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import authRoutes from './routes/auth';
import {setHeader} from "./functions/util";

const app = express();
dotenv.config();

app.use(bodyParser.json());

app.use(setHeader);

app.use('/auth', authRoutes);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  console.warn(error);
  // const status = error.statusCode || 500;
  const message = error.message;
  // const data = error.data;
  res.status(500).json({message});
});

mongoose
  .connect(
    process.env.mongoString,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.info('Database connected');
    app.listen(process.env.port);
  })
  .catch(err => console.log(err));
