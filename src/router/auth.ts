import express from 'express';
import passport from '../services/passport';
import User from '../models/user';
const authRouter: express.Router = express.Router();

authRouter.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

authRouter.get('/google/callback', passport.authenticate('google'));

export default authRouter;
