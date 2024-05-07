const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customerController");
const { verifyJWT } = require("../middlewares/verifyJWT");
const { verifyRoles } = require("../middlewares/verifyRoles");

router.get("/", verifyJWT, customerController.getAllCustomers);

router.post(
  "/",
  verifyJWT,
  verifyRoles(["owner"]),
  customerController.createCustomer
);

router.put(
  "/:id",
  verifyJWT,
  verifyRoles(["owner", "manager", "cashier"]),
  customerController.updateCustomer
);

router.delete(
  "/:id/hard-delete",
  verifyJWT,
  verifyRoles(["owner"]),
  customerController.hardDeleteCustomer
);

router.delete(
  "/:id",
  verifyJWT,
  verifyRoles(["owner", "manager"]),
  customerController.softDeleteCustomer
);

module.exports = router;
