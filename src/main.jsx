import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import {theme} from './styles/theme'
import {ContainerApp} from './styles/AppContainer'
import GlobalStyle from './styles/GlobalStyles'
import { Rotas } from "./rotas/route";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ContainerApp>
        <GlobalStyle/>
        <Rotas/>
      </ContainerApp>
    </ThemeProvider>
  </React.StrictMode>
);
