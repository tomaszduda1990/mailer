const express = require('express');
const passport = require('passport');
const { Strategy: GoogleStrategy } = require('passport-google-oauth20');

const authRouter = express.Router();
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

module.exports = authRouter;
