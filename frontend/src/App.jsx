import "./App.css";
import { DashboardLayout } from "./component/layouts/DashboardLayout.jsx";
import { BrowserRouter } from "react-router-dom";
import { Ticket } from "./component/pages/box/Ticket.jsx";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <DashboardLayout>
          <Ticket />
        </DashboardLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
