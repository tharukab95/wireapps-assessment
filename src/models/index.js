const dbConfig = require("../config/database.js");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
});

//checking if connection is done with the authenticate method in sequelize
sequelize
  .authenticate()
  .then(() => {
    console.log(`Database connected to wireappsdb `);
  })
  .catch((err) => {
    console.log(err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./userModel")(sequelize, DataTypes);
db.inventory = require("./inventoryModel")(sequelize, DataTypes);
db.inventory = require("./customerModel")(sequelize, DataTypes);

module.exports = db;
