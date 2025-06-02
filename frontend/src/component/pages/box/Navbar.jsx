import { Link, useLocation } from "react-router-dom";
import { Logo } from "../../icons/Logo";
import { HomeIcon } from "../../icons/HomeIcon";
import { CashRegisterIcon } from "../../icons/CashRegisterIcon";
import { ProductsIcon } from "../../icons/ProductsIcon";
import { ReportIcon } from "../../icons/ReportIcon";
import "../../../styles/navbar.css";

export const Navbar = () => {
  const location = useLocation();
  const paths = {
    home: '/home',
    cashRegister: '/cash_register',
    products: '/products',
    reports: '/reports',
  }
  const isActive = (path) => location.pathname.startsWith(path);


  return (

    <nav className="navbar">
      <div className="navbar__logo-container">
        <Logo className="navbar__logo" />
      </div>
      <div className="navbar__links">
        <Link to='/home' className={isActive(paths.home) ? "link link__selected" : "link"}>
          <HomeIcon className="link__icon" />
          Home
        </Link>
        <Link to='/cash_register' className={isActive(paths.cashRegister) ? "link link__selected" : "link"}>
          <CashRegisterIcon className="link__icon" />
          Caja
        </Link>
        <Link to='/products' className={isActive(paths.products) ? "link link__selected" : "link"}>
          <ProductsIcon className="link__icon" />
          Productos
        </Link>
        <Link to='/reports' className={isActive(paths.reports) ? "link link__selected" : "link"}>
          <ReportIcon className="link__icon" />
          Informes
        </Link>
      </div>

    </nav>

  );
};
