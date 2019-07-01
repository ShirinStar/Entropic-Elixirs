const { Router } = require('express');
const {  Answer, User } = require('../models');

const answerRouter = Router();

answerRouter.get('/', async (req, res) => {
  try {
    const user = await User.findByPk(res.locals.userId);
    const answers = await user.getAnswers({
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
    const { answer_breaking, answer_building, answer_with_it, answer_against_it,
    answer_intuition, answer_intention} = req.body;
    const user = await User.findByPk(res.locals.userId);
    const userAnswers = await user.createAnswer({
      answer_breaking,
      answer_building,
      answer_with_it,
      answer_against_it,
      answer_intuition,
      answer_intention
    });
    // const answer = {
    //   ...newAnswer.dataValues,
    // }
    res.json(userAnswers);
  } catch(e) {
    console.log(e);
    res.status(500).send(e.message);
  }
});

answerRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const answer = await Answer.findByPk(id);
    res.json(answer);
  } catch (e) {
    console.log(e);
    res.status(500).send(e.message);
  }
});

module.exports = { answerRouter }
