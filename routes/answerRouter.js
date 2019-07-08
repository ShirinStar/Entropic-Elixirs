const { Router } = require('express');
const {  Answer, User } = require('../models');

const answerRouter = Router();

answerRouter.get('/', async (req, res) => {
  try {
    const user = await User.findByPk(res.locals.userId);
    const answers = await user.getAnswer({
      order: [
        ['id']
      ]
    });
    res.json(answers)
  } catch(e) {
    console.error(e.message);
    res.status(500).send(e.message);
  }
});

answerRouter.post('/', async (req, res) => {
  try {
    const { breaking, building, with_it, against_it,
    intuition, intention} = req.body;
    const user = await User.findByPk(res.locals.userId);
    const userAnswers = await user.createAnswer({
      breaking,
      building,
      with_it,
      against_it,
      intuition,
      intention
    });
    res.json(userAnswers);
  } catch(e) {
    console.log(e);
    res.status(500).send(e.message);
  }
});

answerRouter.put('/', async (req, res) => {
  try {
    const user = await User.findByPk(res.locals.userId);
    const currentAnswer = await user.getAnswer();
    if (currentAnswer) {
        currentAnswer.update(req.body);
    }
    else {
        user.createAnswer(req.body);
    }
    // const answers = await user.getAnswer({
    //   order: [
    //     ['id']
    //   ]
    // });
    //answers are array
    // for (let index in answers) {
    //   await answers[index].update(req.body);
    // }
    res.end();
  } catch(e) {
    console.log(e);
    res.status(500).send(e.message);
  }
});

// answerRouter.get('/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const answer = await Answer.findByPk(id);
//     res.json(answer);
//   } catch (e) {
//     console.log(e);
//     res.status(500).send(e.message);
//   }
// });

module.exports = { answerRouter }
