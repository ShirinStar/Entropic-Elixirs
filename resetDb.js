const { sequelize } = require('./models');

async function resetDb() {
  try {
console.log('wat');
    await sequelize.sync({force: true})    
    console.log('database sync\'d');
  } catch (e) {
    console.log('had an issue');
    console.error(e);
  } finally {
    process.exit();
  }
};

resetDb();
