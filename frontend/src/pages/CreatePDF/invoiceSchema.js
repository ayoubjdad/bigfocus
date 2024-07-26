export const invoiceSchema = {
  id: "",
  customer: {
    alias: "",
    address: "",
  },
  invoiceDetails: {
    number: "",
    ice: "",
    date: "",
  },
  items: [
    {
      id: "",
      alias: "",
      quantity: "",
      total: "",
      unitPrice: "",
    },
  ],
};
