const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
  customer_address: String,
  customer_alias: String,
  invoiceDetails_date: String,
  invoiceDetails_ice: String,
  invoiceDetails_number: String,
  items: Array,
});

const Invoice = mongoose.model("Invoice", invoiceSchema);

module.exports = Invoice;
