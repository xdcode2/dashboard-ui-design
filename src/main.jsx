 import { StrictMode } from "react";
import { createRoot } from "react-dom/client"; // ✅ using createRoot
import App from "./App.jsx";
import "./index.css";

import { ThemeProvider } from "@/contexts/theme-context";
import { AuthProvider } from "@/contexts/AuthContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider storageKey="theme">
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);
