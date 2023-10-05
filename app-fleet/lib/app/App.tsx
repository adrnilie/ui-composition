import { Route, Routes } from "react-router-dom";
import { Button } from "app-web-comp";

export function App() {
  function handleClick() {
    console.log("I pressed the button");
  }

  return (
    <>
      <Button
        variant="default"
        onClick={handleClick}
        onButtonClicked={(e) => console.log(e)}
      />
      <Routes>
        <Route path="/" element={<h1>app-fleet my-products</h1>} />
        <Route path="/my-fleet" element={<h1>app-fleet my-fleet</h1>} />
      </Routes>
    </>
  );
}
