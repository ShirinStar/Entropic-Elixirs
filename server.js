const express = require('express');
const { User, Answer } = require('./models');

const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', async(req, res) => {
  const user = await User.findAll();
  const answer = await Answer.findAll();
  res.json({ user, answer })
  // res.send('hello Entropic we are starting')
})

app.listen(PORT, () => console.log(`up and running on port ${PORT}`));
