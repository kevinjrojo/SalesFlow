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
              Inicio
            </a>
          </li>
          <li>
            <a href="#" className="navigate">
              Productos
            </a>
          </li>
          <li>
            <a href="#" className="navigate">
              Ventas
            </a>
          </li>
          <li>
            <a href="#" className="navigate">
              Clientes
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};
