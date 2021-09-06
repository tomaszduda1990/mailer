const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ msg: 'you entered page' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
