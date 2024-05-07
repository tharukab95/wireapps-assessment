const inventoryService = require("../services/inventoryService");

async function getAllInventoryRecords(req, res) {
  try {
    const data = await inventoryService.getAllInventoryRecords();

    res.json({ data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function addInventoryRecord(req, res) {
  const { name, description, quantity } = req.body;

  if (!name || !description || !quantity)
    return res
      .status(400)
      .json({ message: "Required field/fields values missing." });

  try {
    const inventoryRecord = await inventoryService.addInventoryRecord({
      name,
      description,
      quantity,
    });

    res.json(inventoryRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateInventoryRecord(req, res) {
  const inventoryId = req.params.id;
  try {
    const result = await inventoryService.updateInventoryRecord(
      inventoryId,
      req.body
    );

    if (result[0] === 0) {
      res.status(404).json({
        status: "fail",
        message: "Inventory record with that ID not found",
      });
    } else {
      const inventoryRecord = await inventoryService.getInventoryRecordById(
        inventoryId
      );

      res.status(200).json(inventoryRecord);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function softDeleteInventoryRecord(req, res) {
  try {
    const result = await inventoryService.softDeleteInventoryRecord(
      req.params.id
    );

    if (result === 0) {
      res.status(404).json({
        status: "fail",
        message: "Inventory record with that ID not found",
      });
    } else {
      res.status(204).json();
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function hardDeleteInventoryRecord(req, res) {
  try {
    const result = await inventoryService.hardDeleteInventoryRecord(
      req.params.id
    );

    if (result === 0) {
      res.status(404).json({
        status: "fail",
        message: "Inventory record with that ID not found",
      });
    } else {
      res.status(204).json();
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllInventoryRecords,
  addInventoryRecord,
  updateInventoryRecord,
  softDeleteInventoryRecord,
  hardDeleteInventoryRecord,
};
