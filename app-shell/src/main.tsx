import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { VisitorBooking } from "visitor-booking";

const paths = {
  visitors: "/visitors"
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path={paths.visitors}
          element={<VisitorBooking basename={paths.visitors} />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
