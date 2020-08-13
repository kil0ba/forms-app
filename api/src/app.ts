import express, {Request, Response, NextFunction, ErrorRequestHandler} from 'express';

import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import authRoutes from './routes/auth';
import {setHeader} from "./functions/util";
import { PORT, MONGO_URL, MAILER_API_KEY } from './configuration';

const app = express();

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
    MONGO_URL,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.info('Database connected, url: ' + MONGO_URL);
    console.info(MAILER_API_KEY);
    app.listen(PORT);
  })
  .catch(err => console.log(err));
