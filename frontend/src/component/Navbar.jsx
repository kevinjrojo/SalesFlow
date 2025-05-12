import Logo from "../assets/Logo.png";
import "../styles/navbar.css";

export const Navbar = () => {
  return (
    <section className="navbar">
      <nav className="navbar__container">
        <div>
          <img src={Logo} alt="Logo" className="navbar__logo" />
        </div>
        <ul className="navbar__links">
          <li>
            <a href="#" className="navigate">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="navigate">
              Caja
            </a>
          </li>
          <li>
            <a href="#" className="navigate">
              productos
            </a>
          </li>
          <li>
            <a href="#" className="navigate">
              Informes
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};
