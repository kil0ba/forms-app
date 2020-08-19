import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import {setHeader} from "./functions/util";
import { PORT, MONGO_URL } from './configuration';
import Router from "./routes/Router";

const app = express();

app.use(bodyParser.json());

app.use(setHeader);

Router.register(app);

mongoose
  .connect(
    MONGO_URL,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.info('Database connected, url: ' + MONGO_URL);
    app.listen(PORT);
  })
  .catch(err => console.log(err));
