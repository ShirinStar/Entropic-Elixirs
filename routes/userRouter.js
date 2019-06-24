const { Router } = require('express');
const {  Answer, User } = require('../models');
const { answerRouter } = require('./answerRouter');

const userRouter = Router();


userRouter.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json({ users })
  } catch(e) {
    console.error(e.message);
  }
});

userRouter.post('/', async (req, res) => {
  try {
    const { userAge, userGender } = req.body;
    const intakeUser = await User.create({
      userAge,
      userGender
    });
    res.json(intakeUser);
  } catch(e) {
    console.error(e.message);
    res.status(500).send(e.message);
  };
});

userRouter.use('/:id/answers', (req, res, next) => {
  res.locals.userId = req.params.id
  next();
}, answerRouter)

module.exports = { userRouter }
