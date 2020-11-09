const { Router } = require('express');
const {  Answer, User } = require('../models');
const { answerRouter } = require('./answerRouter');
import { v4 as uuidv4 } from 'uuid';
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

userRouter.get('/init', async (req, res) => {
  let token = req.cookies.token;
  let user;
  console.log(token);
  if (!!token) {
     user = await User.findOne({
      where: {
        token
      }
    });
  }

  if (!user) {
    token = uuidv4();
    await User.create({ token })
    res.cookie('token', token);
    res.sendStatus(201);
  } else {
    res.sendStatus(200);
  }
});

userRouter.post('/', async (req, res) => {
  try {
    const { user_age, user_gender } = req.body;
    const user = await User.findOne({
      where: {
        token: req.cookies.token
        }
      });
    const intakeUser = await user.update({
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
    const url = 'https://staging.projectamelia.ai/pusherman/ownup'; //what is my componian?
    const request = await fetch(`${url}?token=${token}`,
                          {mode: 'no-cors'})
    if (request.status == 200) {
        const userData = await request.json();
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
  try {
    console.log('user middleware')
    res.locals.user_id = req.params.id
  } catch (e) {
    console.log('got an issue: ', e);
  } finally {
    console.log('ending user middleware')
    next();
  }
}, answerRouter)

module.exports = { userRouter }
