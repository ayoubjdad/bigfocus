import React, { useState } from "react";
import styles from "./CreatePDF.module.scss";
import axios from "axios";
import { generatePDF } from "../../utils/helpers/app.helper";
import apiConfig from "../../utils/config/config";
import { QueryClient, useQuery } from "react-query";
import InvoicesTable from "../../layouts/invoices-table/InvoicesTable";

const savePDF = (value) => {
  try {
    const {
      customer_address,
      customer_alias,
      invoiceDetails_date,
      invoiceDetails_ice,
      invoiceDetails_number,
      items,
    } = value;

    const response = axios.post(`${apiConfig.serverUrl}/invoices/create`, {
      customer_address,
      customer_alias,
      invoiceDetails_date,
      invoiceDetails_ice,
      invoiceDetails_number,
      items,
    });
    console.log(response.data);
  } catch (error) {
    console.error("There was an error creating the user!", error);
  }
};

const fetchInvoices = async () => {
  const { data } = await axios.get(`${apiConfig.serverUrl}/invoices`);
  return data;
};

export default function CreatePDF() {
  const [items, setItems] = useState([{ id: Math.random() }]);

  const { data: invoicesData } = useQuery("invoices", fetchInvoices);

  const newInvoiceNumber =
    invoicesData?.length &&
    invoicesData.reduce(
      (max, invoice) =>
        invoice.invoiceDetails_number > max
          ? invoice.invoiceDetails_number
          : max,
      0
    ) + 1;

  const addItem = (e) => {
    e.preventDefault();
    const newRows = [...items, { id: Math.random() }];
    setItems(newRows);
  };

  const deleteItem = (e, id) => {
    e.preventDefault();
    const newRows = items.filter((item) => item.id !== id);
    setItems(newRows);
  };

  const createPDF = (event) => {
    event.preventDefault();
    try {
      const form = event.target.closest("form");
      const formData = new FormData(form);
      let value = Object.fromEntries(formData.entries());
      value = { ...value, items: [...items] };

      savePDF(value);
    } catch (err) {
      console.error("❌", err);
    }
  };

  return (
    <div className={styles.main}>
      <form className={styles.container} onSubmit={createPDF}>
        <h1>Informations facture</h1>
        <div className={styles.partContainer}>
          <input
            className={styles.input}
            name="invoiceDetails_number"
            type="number"
            value={newInvoiceNumber}
            placeholder="Invoice Number"
            disabled
          />
          <input
            className={styles.input}
            name="invoiceDetails_ice"
            type="text"
            defaultValue="002258776000052"
            placeholder="ICE"
          />
          <input
            className={styles.input}
            name="invoiceDetails_status"
            type="text"
            placeholder="Status"
          />
          <input
            className={styles.input}
            name="invoiceDetails_date"
            type="date"
            placeholder="Date"
            defaultValue={new Date().toISOString().split("T")[0]}
          />
        </div>

        <h1>Informations client</h1>
        <div className={styles.partContainer}>
          <input
            className={styles.input}
            name="customer_alias"
            type="text"
            placeholder="Client"
          />
          <input
            className={styles.input}
            name="customer_address"
            type="text"
            placeholder="Adresse client"
          />
        </div>

        <h1>Détails</h1>
        <div style={{ display: "grid", gap: "12px" }}>
          {items.map(({ id }) => (
            <Item
              key={id}
              id={id}
              items={items}
              setItems={setItems}
              deleteItem={deleteItem}
            />
          ))}
          <button className={styles.button} onClick={addItem}>
            Ajouter une désignation
          </button>
        </div>

        <input
          className={styles.button}
          style={{ marginTop: "24px" }}
          type="submit"
          value="Enregistrer PDF"
        />
      </form>

      <InvoicesTable data={invoicesData} />
    </div>
  );
}

const Item = ({ id, items, setItems, deleteItem = () => {} }) => {
  const [itemDetails, setItemDetails] = useState({
    id: id,
    alias: "",
    quantity: 0,
    unitPrice: 0,
    total: 0,
  });

  const onAliasChange = (e) => {
    const value = e.target.value;

    const result = {
      ...itemDetails,
      alias: value,
    };
    setItemDetails(result);

    const selectedItem = items.map((item) => {
      if (item.id === id) {
        return result;
      }
      return item;
    });
    setItems(selectedItem);
  };

  const onQuantityChange = (e) => {
    const value = e.target.value;
    const total = value * itemDetails.unitPrice;

    const result = {
      ...itemDetails,
      quantity: value,
      unitPrice: itemDetails.unitPrice,
      total: total,
    };
    setItemDetails(result);

    const selectedItem = items.map((item) => {
      if (item.id === id) {
        return result;
      }
      return item;
    });
    setItems(selectedItem);
  };

  const onUnitPriceChange = (e) => {
    const value = e.target.value;
    const total = itemDetails.quantity * value;

    const result = {
      ...itemDetails,
      quantity: itemDetails.quantity,
      unitPrice: value,
      total: total,
    };

    setItemDetails(result);

    const selectedItem = items.map((item) => {
      if (item.id === id) {
        return result;
      }
      return item;
    });
    setItems(selectedItem);
  };

  return (
    <div className={styles.partContainer}>
      <input
        className={styles.input}
        defaultValue={itemDetails?.alias}
        type="text"
        placeholder="Désignation"
        onChange={onAliasChange}
      />
      <input
        className={styles.input}
        value={itemDetails?.quantity}
        type="number"
        placeholder="Quantité"
        onChange={onQuantityChange}
      />
      <input
        className={styles.input}
        value={itemDetails?.unitPrice}
        type="number"
        placeholder="Prix Unitaire"
        onChange={onUnitPriceChange}
      />
      <input
        className={styles.input}
        value={itemDetails?.total}
        type="number"
        placeholder="Total"
        disabled
      />
      <button
        onClick={(e) => deleteItem(e, id)}
        className={`${styles.button} ${styles.deleteButton}`}
      >
        Supprimer
      </button>
    </div>
  );
};
