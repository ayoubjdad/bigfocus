const express = require("express");
const router = express.Router();
const Invoice = require("../models/Invoice");

router.post("/create", async (req, res) => {
  try {
    const {
      customer_address,
      customer_alias,
      invoiceDetails_date,
      invoiceDetails_ice,
      invoiceDetails_number,
      items,
    } = req.body;

    const newInvoice = new Invoice({
      customer_address,
      customer_alias,
      invoiceDetails_date,
      invoiceDetails_ice,
      invoiceDetails_number,
      items,
    });
    await newInvoice.save();
    res.status(201).send("Invoice created");
  } catch (error) {
    res.status(500).send("Error creating invoice");
  }
});

// Get all invoices
router.get("/", async (req, res) => {
  try {
    const invoices = await Invoice.find(); // Fetch all invoices from the database
    res.status(200).json(invoices); // Respond with the invoices in JSON format
  } catch (error) {
    res.status(500).send("Error fetching invoices");
  }
});

module.exports = router;
