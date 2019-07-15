const { User, Answer } = require('./models');

async function seed() {
  await User.destroy({where: {}});
  await Answer.destroy({where: {}});

  const rachel = await User.create({
    user_age: 24,
    user_gender: 'female',
    user_id: 2,
    token: '12345'
  });

  await rachel.createAnswer({ breaking: 1, building: 1, with_it: 1, against_it: 1, intuition: 1, intention: 1});

  process.exit();
};


seed();
