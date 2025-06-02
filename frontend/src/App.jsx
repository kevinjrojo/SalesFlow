import "./App.css";
import { Box } from "./component/pages/box/Box.jsx";
import { DashboardLayout } from "./component/layouts/DashboardLayout.jsx";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter >
        <DashboardLayout>
          <Main />
        </DashboardLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
