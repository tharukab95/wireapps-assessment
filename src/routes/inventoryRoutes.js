const express = require("express");
const router = express.Router();
const inventoryController = require("../controllers/inventoryController");
const { verifyJWT } = require("../middlewares/verifyJWT");
const { verifyRoles } = require("../middlewares/verifyRoles");

router.get("/", verifyJWT, inventoryController.getAllInventoryRecords);

router.post(
  "/",
  verifyJWT,
  verifyRoles(["owner"]),
  inventoryController.addInventoryRecord
);

router.put("/:id", inventoryController.updateInventoryRecord);

router.delete(
  "/:id/hard-delete",
  inventoryController.hardDeleteInventoryRecord
);

router.delete("/:id", inventoryController.softDeleteInventoryRecord);

module.exports = router;
