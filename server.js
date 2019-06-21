const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const PORT = process.env.PORT || 3001;
const {userRouter} = require('./routes/userRouter');
const {answerRouter} = require('./routes/answerRouter');

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());

// app.get('/users', async (req, res) =>{
// const users = await User.findAll();
// const answers = await Answer.findAll();
//   res.json({ users, answers })
// });

app.get('/', (req, res) => {
  res.send('hello entropic!');
});

app.listen(PORT, () => console.log(`up and running on port ${PORT}`));
