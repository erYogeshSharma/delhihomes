import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffd300",
    },
    grey: {
      main: "#7a7a7a",
      contrastText: "#ffffff",
    },
    lightGrey: {
      main: "#f5f6f8",
      contrastText: "#6b6b6b",
    },
    green: {
      main: "#48bf84",
      contrastText: "#ffffff",
    },
    text: {
      main: "#1d1d1f",
      subtitles: "#4f4f49",
      captions: "#858585",
      whiteLite: "#f2f3f4",
      grey: "#cfcfcf",
    },
    danger: {
      main: "#b00020",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: "Inter",
    color: "#1d1d1f",
    h6: {
      fontSize: 22,
      color: "#1d1d1f",
      fontWeight: 700,
    },
    h5: {
      fontSize: 27,
      color: "#1d1d1f",
      fontWeight: 700,
    },
    body2thin: {
      fontSize: 15,
      color: "#4f4f49",
      fontWeight: 500,
    },
    body1: {
      fontSize: 17,
      color: "#4f4f49",
      fontWeight: 700,
    },
    body1thin: {
      fontSize: 17,
      fontWeight: 500,
      color: "#4f4f49",
    },
    body2: {
      fontSize: 15,
      color: "#1d1d1f",
      fontWeight: 700,
    },
    link: {
      color: "#4f4f49",
      fontSize: 13,
      fontWeight: 600,
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          backgroundOpacity: "100%",
          textAlign: "left",
        },
      },
    },
  },
});

export default theme;
