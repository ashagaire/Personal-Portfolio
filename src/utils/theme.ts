// src/theme.js
import { createTheme } from "@mui/material/styles";

const baseFont =
  '"Ubuntu", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#f5f5f5",
    },
  },
  typography: {
    body1: {
      fontFamily: baseFont,
      fontSize: "18px",
      fontWeight: 500,
      fontStyle: "bold",
      lineHeight: 1.5,
    },
    body2: {
      fontFamily: baseFont,
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: 1.4,
    },
    //for section titles
    h2: {
      fontFamily: baseFont,
      fontSize: "36px",
      fontWeight: 500,
    },

    h3: {
      fontFamily: baseFont,
      fontSize: "20px",
      fontWeight: 400,
    },

    h4: {
      fontFamily: baseFont,
      fontSize: "20px",
      fontWeight: 500,
      lineHeight: 1.5,
    },

    // for dates
    h5: {
      fontFamily: baseFont,
      fontSize: "18px",
      fontWeight: 600,
      marginTop: "16px",
    },

    h6: {
      fontFamily: baseFont,
      fontSize: "20px",
      fontWeight: 600,
      lineHeight: 1.5,
    },
  },
});

export default theme;
