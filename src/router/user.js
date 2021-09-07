const express = require('express');

const userRouter = express.Router();

userRouter.get('/', (req, res) => {
  res.json({ msg: 'TEST REACHED' });
});

module.exports = userRouter;
