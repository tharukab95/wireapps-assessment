const db = require("../models");
const Inventory = db.inventory;

async function findByPk(id) {
  return await Inventory.findByPk(id);
}

async function findAll() {
  return await Inventory.findAll();
}

async function create(inventoryRecord) {
  return await Inventory.create(inventoryRecord);
}

async function update(inventoryId, record) {
  return await Inventory.update(
    { ...record, updatedAt: Date.now() },
    {
      where: {
        id: inventoryId,
      },
    }
  );
}

async function softDeleteRecord(id) {
  return await Inventory.destroy({
    where: { id },
  });
}

async function hardDeleteRecord(id) {
  return await Inventory.destroy({
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
