import express from 'express';

const userRouter: express.Router = express.Router();

userRouter.get('/', (req, res) => {
  res.json({ msg: 'userRoute reached' });
});

export default userRouter;
