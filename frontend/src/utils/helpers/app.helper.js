import jsPDF from "jspdf";
import "jspdf-autotable";

export const generatePDF = async (value) => {
  const doc = new jsPDF();
  const logo = await getBase64ImageFromURL(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Ski_trail_rating_symbol-green_circle.svg/1200px-Ski_trail_rating_symbol-green_circle.svg.png"
  );

  // Add logo
  doc.addImage(logo, "JPEG", 10, 10, 50, 20);

  doc.setFontSize(24);
  doc.text("Facture", 10, 60);
  doc.text(`N° 2024-${value.invoiceDetails_number}`, 10, 70);

  // Client Information
  doc.setFontSize(10);
  const borderWidth = 1; // Border width in points
  const borderColor = "#000000"; // Black color

  // Draw rectangle around the text
  doc.rect(125, 40, 75, 40); // Draw rectangle without border first
  doc.setLineWidth(borderWidth); // Set border width
  doc.setDrawColor(borderColor); // Set border color
  doc.stroke(); // Draw the border

  // Write the text inside the rectangle
  doc.setFontSize(16);
  doc.text(value.customer_alias || "Client Name", 130, 55);
  doc.setFontSize(10);
  doc.text("5, RUE AHMED MOKRI 5, RUE AHMED MOKRI", 130, 60);
  doc.text("(Hauteur 158 Bd d'anfa) Casablanca", 130, 65);
  doc.text(`Casablanca, le ${value.invoiceDetails_date}`, 130, 85);
  doc.text(`ICE: ${value.invoiceDetails_ice}`, 130, 80);

  // Table with details
  doc.autoTable({
    startY: 100,
    head: [["Désignation", "Quantité", "Prix Unitaire", "Total"]],
    body: value.items.map((item) => [
      item.alias,
      item.quantity,
      `${item.unitPrice} DH`,
      `${item.total} DH`,
    ]),
  });

  let totalHT = 0;
  value.items.forEach((item) => {
    totalHT += Number(item.total);
  });

  const TVA = (totalHT * 20) / 100;

  // Totals
  const finalY = doc.lastAutoTable.finalY + 10;
  doc.text(`Total HT: ${totalHT.toFixed(2)} DH`, 150, finalY);
  doc.text(`Total TVA 20%: ${TVA.toFixed(2)} DH`, 150, finalY + 5);
  doc.text(`Total TTC: ${(totalHT + TVA).toFixed(2)} DH`, 150, finalY + 10);

  // Footer
  const footerText1 =
    "Hay Albaraka rue 36 N° 542 bis - Casablanca - Tél : 06 39 64 07 48 - E-mail : bigfocus1@gmail.com";
  const footerText2 =
    "Patente n° 32797112 - RC n° 347253 - IF n° 18758350 - CNSS n° 4836229 - ICE n° 001567905000081";
  const footerText3 =
    "Compte Bancaire Crédit du Maroc: 021 780 000023800617527 93";
  const pageHeight = doc.internal.pageSize.height;
  const centerX = doc.internal.pageSize.width / 2;
  const paddingTop = 2; // 2px padding top

  // Add a line
  doc.line(10, pageHeight - 25, 200, pageHeight - 25);

  doc.setFontSize(10);
  doc.text(footerText1, centerX, pageHeight - 20 + paddingTop, {
    align: "center",
  });
  doc.text(footerText2, centerX, pageHeight - 15 + paddingTop, {
    align: "center",
  });
  doc.text(footerText3, centerX, pageHeight - 10 + paddingTop, {
    align: "center",
  });

  doc.save(`facture-2024-${value.invoiceDetails_number}.pdf`);
};

// Helper function to convert image URL to base64
const getBase64ImageFromURL = (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.height = img.height;
      canvas.width = img.width;
      ctx.drawImage(img, 0, 0);
      const dataURL = canvas.toDataURL("image/jpeg");
      resolve(dataURL);
    };
    img.onerror = (err) => {
      reject(err);
    };
    img.src = url;
  });
};

export const formatDate = (date) => {
  try {
    if (!date) {
      return Date.now();
    }
    return date.split("T")[0];
  } catch (err) {
    console.error("❌", err);
    return date;
  }
};
