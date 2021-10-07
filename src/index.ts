import express from 'express';
import userRouter from './router/user';
import authRouter from './router/auth';
import connectDB from './services/mongoose';

connectDB();
const app: express.Application = express();

app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/', (req, res) => {
  res.json('opening page');
});
const PORT = process.env.PORT || 5000;
app.listen(PORT);
