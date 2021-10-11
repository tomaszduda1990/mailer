import express from 'express';
import passport from '../services/passport';
const authRouter: express.Router = express.Router();

authRouter.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

authRouter.get('/api/logout', (req, res) => {
  req.logout();
  res.json({ message: 'User successfully logged out' });
});

authRouter.get('/google/callback', passport.authenticate('google'));

export default authRouter;
