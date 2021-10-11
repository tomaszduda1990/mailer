import express from 'express';

const userRouter: express.Router = express.Router();

userRouter.get('/current-user', (req, res) => {
  const { user } = req;
  res.json({ user });
});

export default userRouter;
