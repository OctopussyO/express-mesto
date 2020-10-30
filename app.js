const express = require('express');

const { PORT = 3000 } = process.env;

const app = express();

app.get('/', (req, res) => {
  res.end('Hello');
});

app.listen(PORT, () => {
  console.log(`App listening to port ${PORT}`);
});
