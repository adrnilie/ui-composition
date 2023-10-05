import { Route, Routes } from "react-router-dom";
import { Overview, NewBooking } from "./pages";
import { Button } from "app-web-comp";

export function App() {
  function handleClick() {
    console.log("I pressed the button");
  }

  return (
    <>
    <Button variant="primary" onClick={handleClick} onButtonClicked={e => console.log(e)} />
    <Routes>
      <Route path="/" element={<Overview />} />
      <Route path="/new-booking" element={<NewBooking />} />
    </Routes>
    </>
  );
}