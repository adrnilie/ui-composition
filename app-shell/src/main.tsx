import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { VisitorBooking } from "visitor-booking";
import { FleetManagement } from "fleet-management";

const paths = {
  visitors: "/visitors",
  fleet: "/fleet",
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Link to="/">Shell</Link>
      &nbsp;
      <Link to={paths.visitors}>Visitors</Link>
      &nbsp;
      <Link to={paths.fleet}>Fleet</Link>
      <Routes>
        <Route path="/" element={<h1>app-shell home page</h1>} />
        <Route
          path={paths.visitors}
          element={<VisitorBooking basename={paths.visitors} />}
        />
        <Route
          path={paths.fleet}
          element={<FleetManagement basename={paths.fleet} />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
