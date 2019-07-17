const { Router } = require('express');
const {  Answer, User } = require('../models');
const { answerRouter } = require('./answerRouter');
import fetch from 'node-fetch';

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
    const {token} = req.body;
    // const postToken = await User.create(req.body);
    console.log(token);

    const url = 'https://staging.projectamelia.ai/pusherman/ownup'; //what is my componian?
    const request = await fetch(`${url}?token=${token}`,
                          {mode: 'no-cors'})
    if (request.status == 200) {
        const userData = await request.json();
        console.log(userData);
        const user = await User.findOne({
          where: {
            token: token
            }
          });
        if(!user) {
          await User.create(req.body);
        }
        res.cookie("token", token);
        res.json({status: "success"});
    } else if (request.status == 204) {
        // User has no usable data... this is a good time to make the appeal
        // that they go on the app and share more!
        return [];
    } else {
        console.log("SOMETHING BAD HAPPENED!");
        res.status(500).send(e.message);
   }
  } catch(e) {
    console.error(e.message);
    res.status(500).send(e.message);
  };
});

userRouter.use('/answers', (req, res, next) => {
  res.locals.user_id = req.params.id
  next();
}, answerRouter)

module.exports = { userRouter }
