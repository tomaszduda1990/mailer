import express from 'express';
import userRouter from './router/user';
import authRouter from './router/auth';
import connectDB from './services/mongoose';
import cookieSession from 'cookie-session';
import { config } from './config/private';
import passport from 'passport';

connectDB();
const app: express.Application = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [config.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/', (req, res) => {
  res.json('opening page');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
