import express from 'express';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { config } from '../config/private';
const authRouter: express.Router = express.Router();
// get login page

passport.use(
  new GoogleStrategy(
    {
      clientID: config.googlePublicKey,
      clientSecret: config.googlePrivateKey,
      callbackURL: '/auth/google/callback',
      passReqToCallback: true,
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('accessToken', accessToken);
      console.log('refreshToken', refreshToken);
      console.log('Profile', profile);
      console.log('done', done);
    }
  )
);
authRouter.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

authRouter.get('/google/callback', passport.authenticate('google'));

export default authRouter;
