const inventoryRepository = require("../repositories/inventoryRepository");

async function getInventoryRecordById(id) {
  const inventoryRecord = await inventoryRepository.findByPk(id);

  return inventoryRecord;
}

async function getAllInventoryRecords() {
  const inventoryRecords = await inventoryRepository.findAll();

  return inventoryRecords;
}

async function addInventoryRecord({ name, description, quantity }) {
  const inventoryRecord = await inventoryRepository.create({
    name,
    description,
    quantity,
  });

  return inventoryRecord;
}

async function updateInventoryRecord(inventoryId, record) {
  const result = await inventoryRepository.update(inventoryId, record);

  return result;
}

async function softDeleteInventoryRecord(id) {
  const result = await inventoryRepository.softDeleteRecord(id);

  return result;
}

async function hardDeleteInventoryRecord(id) {
  const result = await inventoryRepository.hardDeleteRecord(id);

  return result;
}

module.exports = {
  getInventoryRecordById,
  getAllInventoryRecords,
  addInventoryRecord,
  updateInventoryRecord,
  softDeleteInventoryRecord,
  hardDeleteInventoryRecord,
};
