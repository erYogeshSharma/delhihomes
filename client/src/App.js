import React from "react";
import Router from "./routes/routes";
import { StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";
import theme from "./assets/theme/theme";
import "./index.css";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <Router />
      </StyledEngineProvider>
    </ThemeProvider>
  );
};

export default App;
