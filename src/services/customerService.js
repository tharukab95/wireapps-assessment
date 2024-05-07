const customerRepository = require("../repositories/customerRepository");

async function getCustomerById(id) {
  const customer = await customerRepository.findByPk(id);

  return customer;
}

async function getAllCustomers() {
  const customers = await customerRepository.findAll();

  return customers;
}

async function createCustomer({ name, email, phone }) {
  const customer = await customerRepository.create({
    name,
    email,
    phone,
  });

  return customer;
}

async function updateCustomer(inventoryId, record) {
  const result = await customerRepository.update(inventoryId, record);

  return result;
}

async function softDeleteCustomer(id) {
  const result = await customerRepository.softDeleteRecord(id);

  return result;
}

async function hardDeleteCustomer(id) {
  const result = await customerRepository.hardDeleteRecord(id);

  return result;
}

module.exports = {
  getCustomerById,
  getAllCustomers,
  createCustomer,
  updateCustomer,
  softDeleteCustomer,
  hardDeleteCustomer,
};
