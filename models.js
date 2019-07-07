const Sequelize = require('sequelize');

let sequelize;
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
  sequelize = new Sequelize({
    database: 'entropic_db',
    dialect: 'postgresql',
    // operatorsAliases: false,
    define: {
      underscored: true
    }
  });
}

const User = sequelize.define('user', {
  user_age: Sequelize.INTEGER,
  user_gender: Sequelize.STRING
});

const Answer = sequelize.define('answer', {
  answer_breaking: Sequelize.DECIMAL,
  answer_building: Sequelize.DECIMAL,
  answer_with_it: Sequelize.DECIMAL,
  answer_against_it: Sequelize.DECIMAL,
  answer_intuition: Sequelize.DECIMAL,
  answer_intention: Sequelize.DECIMAL
});

User.hasOne(Answer);
Answer.belongsTo(User, {
  foreignKey: {
    allowNull: false
  }
});

module.exports = {
  sequelize,
  User,
  Answer
}
