import { Link, BrowserRouter } from "react-router-dom";
import { App } from "./App";

type FleetManagementProps = {
  basename: string;
};

export function FleetManagement(props: FleetManagementProps) {
  return (
    <BrowserRouter basename={props.basename}>
      <h1>app-fleet home page</h1>
      <div>
        <li>
          <Link to="/">My products</Link>
        </li>
        <li>
          <Link to="/my-fleet">My Fleet</Link>
        </li>
      </div>
      <App />
    </BrowserRouter>
  );
}
