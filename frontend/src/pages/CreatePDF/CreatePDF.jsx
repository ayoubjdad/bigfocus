import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import styles from "./CreatePDF.module.scss";
import axios from "axios";

// export default function CreatePDF() {
//   // "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Ski_trail_rating_symbol-green_circle.svg/1200px-Ski_trail_rating_symbol-green_circle.svg.png"
//   const [items, setItems] = useState([]);

//   const onSubmit = (event) => {
//     event.preventDefault();
//     try {
//       const formData = new FormData(event.target);

//       let value = Object.fromEntries(formData.entries());
//       value = { ...value, ICE: "002258776000052" };

//       generatePDF(value);
//     } catch (err) {
//       console.error("❌", err);
//     }
//   };

//   const generatePDF = async (value) => {
//     value = { ...value, items: [...items] };
//     console.log(":::::: ~ value:", value);

//     const doc = new jsPDF();
//     const logo = await getBase64ImageFromURL(
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Ski_trail_rating_symbol-green_circle.svg/1200px-Ski_trail_rating_symbol-green_circle.svg.png"
//     ); // Replace with the actual path to your logo

//     // Add logo
//     doc.addImage(logo, "JPEG", 10, 10, 50, 20);

//     // // Header Information
//     // doc.setFontSize(12);
//     // doc.text("Big focus", 70, 20);
//     // doc.text("Print & Communication", 70, 25);

//     doc.setFontSize(24);
//     doc.text("Facture", 10, 60);
//     doc.text(`N° 2024-${value.invoiceNumber}`, 10, 70);

//     // Client Information
//     // Define border properties
//     doc.setFontSize(10);
//     const borderWidth = 1; // Border width in points
//     const borderColor = "#000000"; // Black color

//     // Draw rectangle around the text
//     doc.rect(125, 40, 75, 40); // Draw rectangle without border first
//     doc.setLineWidth(borderWidth); // Set border width
//     doc.setDrawColor(borderColor); // Set border color
//     doc.stroke(); // Draw the border

//     // Write the text inside the rectangle
//     doc.setFontSize(16);
//     doc.text(value.customerName, 130, 55);
//     doc.setFontSize(10);
//     doc.text("5, RUE AHMED MOKRI 5, RUE AHMED MOKRI", 130, 60);
//     doc.text("(Hauteur 158 Bd d'anfa) Casablanca", 130, 65);

//     doc.text(`Casablanca, le ${value.date}`, 130, 85);
//     doc.text(`ICE: ${value.ICE}`, 130, 80);

//     doc.autoTable({
//       startY: 100,
//       head: [["Designation", "Qté", "Prix U", "Total"]],
//       body: items.map((item) => [
//         item.designation,
//         item.quantity,
//         `${item.unitPrice} DH`,
//         `${item.totalItemPrice} DH`,
//       ]),
//       // body: [
//       //   [
//       //     value.designation,
//       //     value.quantity,
//       //     `${value.unitPrice} DH`,
//       //     `${value.totalItemPrice} DH`,
//       //   ],
//       //   [
//       //     value.designation,
//       //     value.quantity,
//       //     `${value.unitPrice} DH`,
//       //     `${value.totalItemPrice} DH`,
//       //   ],
//       //   [
//       //     value.designation,
//       //     value.quantity,
//       //     `${value.unitPrice} DH`,
//       //     `${value.totalItemPrice} DH`,
//       //   ],
//       //   [
//       //     value.designation,
//       //     value.quantity,
//       //     `${value.unitPrice} DH`,
//       //     `${value.totalItemPrice} DH`,
//       //   ],
//       // ],
//     });

//     let totalHT = 0;
//     items.forEach((item) => {
//       totalHT += Number(item.total);
//     });

//     const TVA = (totalHT * 20) / 100;

//     // Totals
//     const finalY = doc.lastAutoTable.finalY + 10;
//     doc.text(`Total HT: ${totalHT} DH`, 150, finalY);
//     doc.text(`Total TVA 20%: ${TVA} DH`, 150, finalY + 5);
//     doc.text(`Total TTC: ${totalHT + TVA} DH`, 150, finalY + 10);

//     // Footer
//     const footerText1 =
//       "Hay Albaraka rue 36 N° 542 bis - Casablanca - Tél : 06 39 64 07 48 - E-mail : bigfocus1@gmail.com";
//     const footerText2 =
//       "Patente n° 32797112 - RC n° 347253 - IF n° 18758350 - CNSS n° 4836229 - ICE n° 001567905000081";
//     const footerText3 =
//       "Compte Bancaire Crédit du Maroc: 021 780 000023800617527 93";
//     const pageHeight = doc.internal.pageSize.height;
//     const centerX = doc.internal.pageSize.width / 2;
//     const paddingTop = 2; // 2px padding top

//     // Add a line
//     doc.line(10, pageHeight - 25, 200, pageHeight - 25);

//     doc.setFontSize(10);
//     doc.text(footerText1, centerX, pageHeight - 20 + paddingTop, {
//       align: "center",
//     });
//     doc.text(footerText2, centerX, pageHeight - 15 + paddingTop, {
//       align: "center",
//     });
//     doc.text(footerText3, centerX, pageHeight - 10 + paddingTop, {
//       align: "center",
//     });

//     // doc.save("invoice.pdf");
//   };

//   // Helper function to convert image URL to base64
//   const getBase64ImageFromURL = (url) => {
//     return new Promise((resolve, reject) => {
//       const img = new Image();
//       img.crossOrigin = "Anonymous";
//       img.onload = () => {
//         const canvas = document.createElement("canvas");
//         const ctx = canvas.getContext("2d");
//         canvas.height = img.height;
//         canvas.width = img.width;
//         ctx.drawImage(img, 0, 0);
//         const dataURL = canvas.toDataURL("image/jpeg");
//         resolve(dataURL);
//       };
//       img.onerror = (err) => {
//         reject(err);
//       };
//       img.src = url;
//     });
//   };

//   const handleAddArticle = (e) => {
//     setItems([...items, { id: Date.now() }]);
//   };

//   const handleRemoveArticle = (id) => {
//     setItems(items.filter((item) => item.id !== id));
//   };

//   return (
//     <div className={styles.container}>
//       <form className={styles.form} onSubmit={onSubmit}>
//         <div className={styles.article}>
//           <input
//             name="invoiceNumber"
//             type="number"
//             placeholder="Invoice Number"
//             className={styles.input}
//           />
//           <input
//             name="date"
//             type="date"
//             defaultValue={Date.now()}
//             placeholder="Date"
//             className={styles.input}
//           />
//           <input
//             name="customerName"
//             type="text"
//             placeholder="Customer Name"
//             className={styles.input}
//           />
//           <input
//             name="address"
//             type="text"
//             placeholder="Customer Address"
//             className={styles.input}
//           />
//         </div>
//         {items.map((item) => (
//           <Article
//             key={item.id}
//             handleRemove={() => handleRemoveArticle(item.id)}
//           />
//         ))}
//         <input
//           type="button"
//           value="Add new"
//           className={`${styles.button} ${styles.input}`}
//           style={{ width: "fit-content" }}
//           onClick={handleAddArticle}
//         />
//         <input type="submit" className={`${styles.button} ${styles.input}`} />
//       </form>
//     </div>
//   );
// }

// const Article = ({ handleRemove }) => {
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [quantity, setQuantity] = useState(0);
//   const [unitPrice, setUnitPrice] = useState(0);

//   useEffect(() => {
//     const price = quantity * unitPrice;
//     setTotalPrice(price);
//   }, [unitPrice, quantity]);

//   return (
//     <div className={styles.article}>
//       <input
//         name="designation"
//         type="text"
//         placeholder="Designation"
//         className={styles.input}
//       />
//       <input
//         name="quantity"
//         type="number"
//         placeholder="Quantity"
//         className={styles.input}
//         onChange={(e) => setQuantity(e.target.value)}
//       />
//       <input
//         name="unitPrice"
//         type="number"
//         placeholder="Price"
//         className={styles.input}
//         onChange={(e) => setUnitPrice(e.target.value)}
//       />
//       <input
//         name="totalItemPrice"
//         type="number"
//         placeholder="Total"
//         className={styles.input}
//         value={totalPrice}
//         readOnly
//       />
//       <button
//         type="button"
//         onClick={handleRemove}
//         style={{ backgroundColor: "red" }}
//       >
//         Remove
//       </button>
//     </div>
//   );
// };

export default function CreatePDF() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/items")
      .then((response) => {
        console.log(":::::: ~ response:", response);
        setItems(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the items!", error);
      });
  }, []);

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map((item) => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );

  // const addItem = (e, key) => {
  //   e.preventDefault();
  //   setItems([...items, { id: key }]);
  // };

  // return (
  //   <form>
  //     <div>
  //       <label>Informations facture</label>
  //       <input
  //         name="invoiceDetails_number"
  //         type="number"
  //         defaultValue={49}
  //         placeholder="Client"
  //       />
  //       <input name="invoiceDetails_ice" type="text" placeholder="ICE" />
  //       <input name="invoiceDetails_date" type="date" placeholder="Date" />
  //     </div>

  //     <div>
  //       <label>Informations client</label>
  //       <input
  //         name="customer_alias"
  //         type="text"
  //         defaultValue={49}
  //         placeholder="Client"
  //       />
  //       <input
  //         name="customer_address"
  //         type="text"
  //         defaultValue={49}
  //         placeholder="Adresse client"
  //       />
  //     </div>

  //     <div>
  //       <label>Détails</label>
  //       <Item />
  //       {items.map(() => {
  //         return <Item />;
  //       })}
  //     </div>
  //     <button onClick={(e) => addItem(e, items.length + 1)}>
  //       Ajouter plus
  //     </button>
  //   </form>
  // );
}

const Item = () => {
  return (
    <>
      <input name="" type="name" defaultValue={49} placeholder="Désignation" />
      <input name="" type="number" placeholder="Quantité" />
      <input name="" type="number" placeholder="Prix Unitaire" />
      <input name="" type="number" placeholder="Total" />
      <button>Supprimer</button>
    </>
  );
};
