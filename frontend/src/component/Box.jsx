import { Header } from "./Header";
import { Main } from "./Main";
import { Navbar } from "./Navbar";
import "../styles/box.css";

export const Box = () => {
  return (
    <div className="box">
      <Navbar />
      <Header />
      <Main />
    </div>
  );
};
