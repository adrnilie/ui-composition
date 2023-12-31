import { Link, BrowserRouter } from "react-router-dom";
import { App } from "./App";

type VisitorBookingProps = {
  basename: string;
};

export function VisitorBooking(props: VisitorBookingProps) {
  return (
    <BrowserRouter basename={props.basename}>
      <h1>app-visitors home page</h1>
      <div>
        <li>
          <Link to="/">Overview</Link>
        </li>
        <li>
          <Link to="/new-booking">New Booking</Link>
        </li>
      </div>
      <App />
    </BrowserRouter>
  );
}
