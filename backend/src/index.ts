import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

// middlewares
app.use(morgan('dev'));
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export default app;