import Logo from "../assets/Logo.png";
import Home from "../assets/home.png";
import Sales from "../assets/sales.png";
import Products from "../assets/products.png";
import Information from "../assets/information.png";
import "../styles/navbar.css";

export const Navbar = () => {
  return (
    <section className="navbar">
      <nav className="navbar__container">
        <div>
          <img src={Logo} alt="Logo" className="navbar__logo" />
        </div>
        <ul className="navbar__links">
          <li className="navigate">
            <img src={Home} alt="icon-navigate" className="icon" />
            <a href="#" className="link">
              Home
            </a>
          </li>
          <li className="navigate">
            <img src={Sales} alt="icon-navigate" className="icon" />
            <a href="#" className="link">
              Caja
            </a>
          </li>
          <li className="navigate">
            <img src={Products} alt="icon-navigate" className="icon" />
            <a href="#" className="link">
              productos
            </a>
          </li>
          <li className="navigate">
            <img src={Information} alt="icon-navigate" className="icon" />
            <a href="#" className="link">
              Informes
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};
