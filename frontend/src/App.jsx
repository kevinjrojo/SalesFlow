import "./App.css";
import { Box } from "./component/pages/box/Box.jsx";
import { DashboardLayout } from "./component/layouts/DashboardLayout.jsx";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <section className="App">
        <Box />
      </section>
      <div></div>
    </>
  );
}

export default App;
