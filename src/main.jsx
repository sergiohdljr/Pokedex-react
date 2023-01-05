import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyles";
import { Rotas } from "./rotas/route";
import { QueryClientProvider } from "react-query";
import { service } from "./service/service";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={service}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Rotas />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
