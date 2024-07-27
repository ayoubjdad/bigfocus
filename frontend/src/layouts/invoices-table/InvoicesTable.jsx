import React from "react";
import styles from "./InvoicesTable.module.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { formatDate, generatePDF } from "../../utils/helpers/app.helper";
import { ThemeProvider } from "@emotion/react";
import theme from "../../theme/overrides";
import { Box } from "@mui/material";

export default function InvoicesTable({ data }) {
  return (
    <ThemeProvider theme={theme}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Number</TableCell>
              <TableCell>Client Name</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Amout</TableCell>
              <TableCell>Addresse</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.length &&
              data.map((invoice) => (
                <TableRow
                  key={invoice.invoiceDetails_number}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {invoice.invoiceDetails_number}
                  </TableCell>
                  <TableCell>{invoice.customer_alias}</TableCell>
                  <TableCell>
                    {formatDate(invoice.invoiceDetails_date)}
                  </TableCell>
                  <TableCell>2000.00 DH</TableCell>
                  <TableCell>{invoice.customer_address}</TableCell>
                  <TableCell>
                    <span className={styles.status}>Paid</span>
                  </TableCell>
                  <TableCell className={styles.actions}>
                    <Box
                      component="i"
                      className="fi fi-rr-pencil"
                      onClick={() => {}}
                    />
                    <Box
                      component="i"
                      className="fi fi-rr-download"
                      onClick={() => generatePDF(invoice)}
                    />
                    <Box
                      component="i"
                      className={`${styles.deleteButton} fi fi-rr-trash`}
                      onClick={() => {}}
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}
