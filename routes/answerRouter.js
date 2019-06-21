const { Router } = require('express');
const {  Answer, User } = require('../models');

const answerRouter = Router();

answerRouter.get('/', async (req, res) => {
  try {
    const user = await User.findByPk(res.locals.userId);
    const answer = await user.getAnswer({
      order: [
        ['id']
      ]
    });
    res.json(answer)
  } catch(e) {
    console.error(e.message);
    res.status(500).send(e.message);
  }
});

answerRouter.post('/', async (req, res) => {
  try {
    const { answer_antropy, answer_flow, answer_openness, answer_sum } = req.body;
    const user = await User.findByPk(res.locals.userId);
    const newAnswer = await user.createAnswer({
      answer_antropy,
      answer_flow,
      answer_openness,
      answer_sum,
    });
    const answer = {
      ...newAnswer.dataValues,
    }
    res.json(answer);
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
