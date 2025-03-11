const express = require('express');

const dedicationController = require('./controllers/dedicationController');
const app = express();

const cors = require('cors');
const corsOptions = {
  origin: ['http://localhost:5173'],
};

app.use(express.json());
//app.use(express.json({extended: true}));
app.use(cors(corsOptions));

app.get('/api', dedicationController.getAllDedications, (req, res) => {
  return res.status(200).json(res.locals.dedications);
});

app.post('/api', dedicationController.createDedication, (req, res) => {
  return res.status(201).json(res.locals.newDedication);
});

//404 Nt found handler
app.use('*', (req, res) => {
  return res.status(404).send('Not found');
});

//Error Handler
app.use((err, req, res, next) => {
  // console.log('error', err);
  const statusCode = err.status || 500; // Usamos el status 500 como valor por defecto
  const message = err.message.err;
  return res.status(statusCode).send({ message: message });
});

app.listen(4000, () => {
  console.log('server running on port 4000');
});
