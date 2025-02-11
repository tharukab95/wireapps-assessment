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

router.put(
  "/:id",
  verifyJWT,
  verifyRoles(["owner", "manager", "cashier"]),
  inventoryController.updateInventoryRecord
);

router.delete(
  "/:id/hard-delete",
  verifyJWT,
  verifyRoles(["owner"]),
  inventoryController.hardDeleteInventoryRecord
);

router.delete(
  "/:id",
  verifyJWT,
  verifyRoles(["owner", "manager"]),
  inventoryController.softDeleteInventoryRecord
);

module.exports = router;
