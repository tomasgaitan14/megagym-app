const express = require('express');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get('/api', (req, res) => {
  //res.send('Hello World!');
  res.json({ fruits: ['apple', 'banana', 'orange', 'pear', 'grape'] });
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});