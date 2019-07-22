const Sequelize = require('sequelize');

let sequelize;
if (process.env.DATABASE_URL) {
  console.log('called');
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    //database url ?? 
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
/*
Answer.belongsTo(User, {
  foreignKey: {
    allowNull: false
  }
});*/

module.exports = {
  sequelize,
  User,
  Answer
}
