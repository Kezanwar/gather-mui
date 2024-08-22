import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import MUIThemeProvider from "./theme";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MUIThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MUIThemeProvider>
  </StrictMode>
);
