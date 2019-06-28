const { User, Answer } = require('./models');

async function seed() {
  await User.destroy({where: {}});
  await Answer.destroy({where: {}});

  const rachel = await User.create({
    user_age: 24,
    user_gender: 'female'
  });

  await rachel.createAnswer({ answer_breaking: 1, answer_building: 1, answer_with_it: 1, answer_against_it: 1, answer_intention: 1, answer_intuition: 1, answer_entropy_sum: 2, answer_flow_sum: 2, answer_openness_sum: 2});

  process.exit();
};

seed();
