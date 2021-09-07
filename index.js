const express = require('express');
const userRouter = require('./src/router/user');
const authRouter = require('./src/router/auth');

const app = express();

app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/', (req, res) => {
  res.json('opening page');
});
// comment is nice
const PORT = process.env.PORT || 5000;
app.listen(PORT);
