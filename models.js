const Sequelize = require('sequelize');
require('dotenv').config()

let sequelize;
console.log(process.env.DATABASE_URL);
if (process.env.DATABASE_URL) {
  console.log('called');
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect:  'postgres',
    logging:  true,
    // operatorsAliases: false,
    define: {
      underscored: true
    }
  });
} else {
  console.log('another path');
  sequelize = new Sequelize('postgres://entropic:elixirs2019@3.13.228.78/entropic_db', {
    define: {
      underscored: true
    }
  });
  console.log('and got here');
}

const User = sequelize.define('user', {
  token: Sequelize.TEXT,
  user_age: Sequelize.INTEGER,
  user_gender: Sequelize.STRING,
  user_id: Sequelize.INTEGER
});

const Answer = sequelize.define('answer', {
  breaking: Sequelize.DECIMAL,
  building: Sequelize.DECIMAL,
  with_it: Sequelize.DECIMAL,
  against_it: Sequelize.DECIMAL,
  intuition: Sequelize.DECIMAL,
  intention: Sequelize.DECIMAL
});

User.hasOne(Answer);

module.exports = {
  sequelize,
  User,
  Answer
}
