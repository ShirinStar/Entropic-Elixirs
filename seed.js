const { User, Answer } = require('./models');

async function seed() {
  await User.destroy({where: {}});
  await Answer.destroy({where: {}});

  const rachel = await User.create({
    user_age: 24,
    user_gender: 'female'
  });

  await rachel.createAnswer({ answer_antropy: 2, answer_flow: 1, answer_openness: 4, answer_sum: 6});
  await rachel.createAnswer({ answer_antropy: 4, answer_flow: 5, answer_openness: 2, answer_sum: 8});

  process.exit();
};

seed();
