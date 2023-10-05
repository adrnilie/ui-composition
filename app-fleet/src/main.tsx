import React from "react";
import ReactDOM from "react-dom/client";
import { VisitorBooking } from "../lib/main";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <VisitorBooking basename="/" />
  </React.StrictMode>
);
