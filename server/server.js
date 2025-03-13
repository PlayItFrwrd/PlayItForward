import express from 'express';
const app = express();
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import dedicationController from './controllers/dedicationController.js';
dotenv.config();
//MONGODB MODULE
import ConnectionDB from './db.js';
//SET DB CONNECTION
ConnectionDB();
//SET CORS POLICIES
// const corsOptions = {
//   origin: ['http://127.0.0.1:5173'],
//   methods: ['GET', 'POST'],
//   allowedHeaders: ['Content-Type'],
// };
app.use(cors());
//MIDDLEWARE TO SHOW HTTP RESQUEST IN CONSOLE
app.use(morgan('dev'));
//MIDDLEWARE TO PARSE JSON TO OBJECT
app.use(express.json());

app.get('/api', dedicationController.getAllDedications, (req, res) => {
  return res.status(200).json(res.locals.dedications);
});

app.post('/api', dedicationController.createDedication, (req, res) => {
  return res.status(201).json(res.locals.newDedication);
});

//404 Not found handler
app.use('*', (req, res) => {
  return res.status(404).send('Not found');
});

//Error Handler
app.use((err, req, res, next) => {
  console.log('error', err);
  const statusCode = err.status;
  const message = err.message.err;
  return res.status(statusCode).send({ message: message });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
