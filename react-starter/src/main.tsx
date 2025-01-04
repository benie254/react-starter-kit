import { BrowserRouter as Router } from "react-router-dom";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router basename='/'>
      <App />
    </Router>
  </StrictMode>
);
