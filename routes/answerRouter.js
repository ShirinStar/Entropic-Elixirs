const { Router } = require('express');
const { Answer, User } = require('../models');

const answerRouter = Router();

answerRouter.get('/', async (req, res) => {
  try {
    const user = await User.findByPk(res.locals.user_id);
    const answers = await user.getAnswer({
      order: [
        ['id']
      ]
    });
    res.json(answers)
  } catch (e) {
    console.error(e.message);
    res.status(500).send(e.message);
  }
});

answerRouter.post('/', async (req, res) => {
  try {
    const { breaking, building, with_it, against_it,
      intuition, intention } = req.body;
    const user = await User.findByPk(res.locals.user_id);
    const userAnswers = await user.createAnswer({
      breaking,
      building,
      with_it,
      against_it,
      intuition,
      intention
    });
    res.json(userAnswers);
  } catch (e) {
    console.log(e);
    res.status(500).send(e.message);
  }
});

answerRouter.put('/', async (req, res) => {
  console.log(req.cookies);
  try {
    const user = await User.findOne({
      where: {
        token: req.cookies.token
      }
    });
    const currentAnswer = await user.getAnswer();
    if (currentAnswer) {
      currentAnswer.update(req.body);
    }
    else {
      user.createAnswer(req.body);
    }
    res.end();
  } catch (e) {
    console.log(e);
    res.status(500).send(e.message);
  }
});

answerRouter.post('/emails', async (req, res) => {
  try {
    const emailsReq = JSON.parse(req.body.values);

  } catch (e) {
    console.log(e);
    res.status(500).send(e.message);
  }
})

answerRouter.post('/drinkMaker', async (req, res) => {
  try {
    var recipe = JSON.parse(req.body.answerValues);
    var spawn = require("child_process").spawn;
    var process = spawn('python', ["./hardware-controls/elixirmixir.py",
      parseInt(recipe[0]),
      parseInt(recipe[1]),
      parseInt(recipe[2]),
      parseInt(recipe[3]),
      parseInt(recipe[4]),
      parseInt(recipe[5])
    ]);

    process.stdout.on('data', function (data) {
      res.json(data.toString());
    });
  } catch (e) {
    console.log(e);
    res.status(500).send(e.message);
  }
});

module.exports = { answerRouter }
