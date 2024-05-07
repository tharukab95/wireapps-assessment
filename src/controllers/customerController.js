const customerService = require("../services/customerService");

async function getAllCustomers(req, res) {
  try {
    const data = await customerService.getAllCustomers();

    res.json({ data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createCustomer(req, res) {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone)
    return res
      .status(400)
      .json({ message: "Required field/fields values missing." });

  try {
    const customer = await customerService.createCustomer({
      name,
      email,
      phone,
    });

    res.json(customer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateCustomer(req, res) {
  const customerId = req.params.id;
  try {
    const result = await customerService.updateCustomer(customerId, req.body);

    if (result[0] === 0) {
      res.status(404).json({
        status: "fail",
        message: "Customer record with that ID not found",
      });
    } else {
      const inventoryRecord = await customerService.getCustomerById(customerId);

      res.status(200).json(inventoryRecord);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function softDeleteCustomer(req, res) {
  try {
    const result = await customerService.softDeleteCustomer(req.params.id);

    if (result === 0) {
      res.status(404).json({
        status: "fail",
        message: "Customer record with that ID not found",
      });
    } else {
      res.status(204).json();
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function hardDeleteCustomer(req, res) {
  try {
    const result = await customerService.hardDeleteCustomer(req.params.id);

    if (result === 0) {
      res.status(404).json({
        status: "fail",
        message: "Customer record with that ID not found",
      });
    } else {
      res.status(204).json();
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllCustomers,
  createCustomer,
  updateCustomer,
  softDeleteCustomer,
  hardDeleteCustomer,
};
