const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = {
  origin: ['http://localhost:5173'],
};
app.use(cors(corsOptions));

app.get('/api', (req, res) => {});
app.post('/api', (req, res) => {});

app.listen(4000, () => {
  console.log('server running on port 4000');
});
