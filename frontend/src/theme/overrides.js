import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiTableContainer: {
      styleOverrides: {
        root: {
          //   boxShadow: "none",
          borderRadius: "14px",
          margin: "auto 64px auto 64px",
          width: "auto",
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        root: {
          fontFamily: "Helvetica Now Display",
        },
      },
    },
  },
});

export default theme;
