import { Link, BrowserRouter } from "react-router-dom";
import { App } from "./App";

type VisitorBookingProps = {
  basename: string
}

export function VisitorBooking(props: VisitorBookingProps) {
  return (
    <BrowserRouter basename={props.basename}>
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
