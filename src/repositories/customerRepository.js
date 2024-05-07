const db = require("../models");
const Customer = db.customers;

async function findByPk(id) {
  return await Customer.findByPk(id);
}

async function findAll() {
  return await Customer.findAll();
}

async function create(customer) {
  return await Customer.create(customer);
}

async function update(customerId, record) {
  return await Customer.update(
    { ...record, updatedAt: Date.now() },
    {
      where: {
        id: customerId,
      },
    }
  );
}

async function softDeleteRecord(id) {
  return await Customer.destroy({
    where: { id },
  });
}

async function hardDeleteRecord(id) {
  return await Customer.destroy({
    where: { id },
    force: true,
  });
}

module.exports = {
  findByPk,
  findAll,
  create,
  update,
  softDeleteRecord,
  hardDeleteRecord,
};
