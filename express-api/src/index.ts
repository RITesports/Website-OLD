import './inits';

import cookieParser from 'cookie-parser';
import express from 'express';
import helmet from 'helmet';
import http from 'http';
import logger from 'morgan';

import apiRouter from './routes/api';

const app = express();
const server = http.createServer(app);

app.set('trust proxy', 1);

app.use(helmet());

app.use(logger('dev'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use('/api', apiRouter);

app.use((req, res) => res.status(404).json({
  status: 404,
  message: 'Not Found',
}));

const PORT = Number(process.env.PORT) || 3000;
server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
