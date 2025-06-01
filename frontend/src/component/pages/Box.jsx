import { Header } from "./box/Header";
import { Ticket } from "./box/Ticket";
import { Navbar } from "./Navbar";
import "../styles/box.css";

export const Box = () => {
  return (
    <div className="box">
      <Navbar />
      <Header />
      <Ticket />
    </div>
  );
};
