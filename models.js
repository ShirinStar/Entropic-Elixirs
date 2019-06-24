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
  userAge: Sequelize.INTEGER,
  userGender: Sequelize.STRING
});

const Answer = sequelize.define('answer', {
  answer_antropy: Sequelize.DECIMAL,
  answer_flow: Sequelize.DECIMAL,
  answer_openness: Sequelize.DECIMAL,
  answer_sum: Sequelize.DECIMAL
});

User.hasMany(Answer);
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
