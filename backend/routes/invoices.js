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

module.exports = router;
