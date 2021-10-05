import express from 'express';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

const authRouter: express.Router = express.Router();
// get login page

passport.use(new GoogleStrategy());
authRouter.get('/google', (req, res, next) => {
  const { apiKey } = req.query;
  if (!apiKey) {
    res.send({ msg: 'GET Google' });
    next();
  }
  res.send(apiKey);
});

// post login to google
authRouter.post('/google', (req, res) => {
  console.log('post google');
  res.send({ msg: 'POST ROUTE' });
});

export default authRouter;
