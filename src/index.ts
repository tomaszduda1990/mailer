import express from 'express';
import userRouter from './router/user';
import authRouter from './router/auth';

const app = express();

app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/', (req, res) => {
  res.json('opening page');
});
// comment is nice
const PORT = process.env.PORT || 5000;
app.listen(PORT);
