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
    const { user_age, user_gender } = req.body;
    const intakeUser = await User.create({
      user_age,
      user_gender
    });
    res.json(intakeUser);
  } catch(e) {
    console.error(e.message);
    res.status(500).send(e.message);
  };
});

userRouter.post('/login', async (req, res) => {
  try {
    const loginWS = await User.create(req.body);
    res.json(loginWS);
  } catch(e) {
    console.error(e.message);
    res.status(500).send(e.message);
  };
});

userRouter.use('/:id/answers', (req, res, next) => {
  res.locals.user_id = req.params.id
  next();
}, answerRouter)

module.exports = { userRouter }
