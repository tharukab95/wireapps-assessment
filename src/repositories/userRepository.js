const db = require("../models");
const User = db.users;

async function findByPk(id) {
  return await User.findByPk(id);
}

async function findByUsername(username) {
  return await User.findOne({ where: { username } });
}

async function create(user) {
  return await User.create(user);
}

module.exports = {
  findByPk,
  findByUsername,
  create,
};
