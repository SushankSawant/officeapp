import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./Context/ThemeContext.jsx";
import { LoginProvider } from "./Context/LoginContext.jsx";
import { StepperProvider } from "./Context/StepperContext.jsx";

createRoot(document.getElementById("root")).render(
  <StepperProvider>
    <ThemeProvider>
      <LoginProvider>
        <App />
      </LoginProvider>
    </ThemeProvider>
  </StepperProvider>
);
