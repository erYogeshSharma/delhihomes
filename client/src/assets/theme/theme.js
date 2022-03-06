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
    },
    danger: {
      main: "#b00020",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: "Inter",
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
