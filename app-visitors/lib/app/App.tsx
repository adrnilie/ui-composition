import { Route, Routes } from "react-router-dom";
import { Overview, NewBooking } from "./pages";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Overview />} />
      <Route path="/new-booking" element={<NewBooking />} />
    </Routes>
  );
}
