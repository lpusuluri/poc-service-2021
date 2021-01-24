import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import cors from 'cors';
// import logger from 'morgan';
import routes from './app.routes';

dotenv.config();

const app = express();

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cookieParser());
app.use(cors());
// app.use(logger('dev'));
app.use(helmet());

app.use('/', routes);

app.get('/healthy', (req, res) => {
  res.status(200).json({ message: 'OK' });
});

module.exports = app;
