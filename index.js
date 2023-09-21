const express = require('express');

const app = express();
const port = 8888;

app.get('/', (req, res) => {
  const data = {
    name: 'Eklak',
    designation: 'Engineer',
  };
  res.json(data);
});

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});
