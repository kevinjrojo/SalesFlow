import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { UserIcon } from "../../icons/UserIcon";
import { ArrowDownIcon } from "../../icons/ArrowDownIcon";
import "../../../styles/header.css";

export const Header = ({ username = "user", userId = "12345678" }) => {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState();

  const paths = {
    home: "/home",
    cashRegister: "/cash_register",
    products: "/products",
    reports: "/reports",
  };
  const currentPath = location.pathname;
  const isActive = (path) => currentPath.startsWith(path);

  useEffect(() => {
    if (isActive(paths.home)) setPageTitle("Inicio");
    else if (isActive(paths.cashRegister)) setPageTitle("Caja");
    else if (isActive(paths.products)) setPageTitle("Productos");
    else if (isActive(paths.reports)) setPageTitle("Informes");
    else setPageTitle("");
  }, [currentPath]);

  return (
    <div className="header">
      <h3 className="page__title">{pageTitle}</h3>

      <div className="user">
        <span className="separator" />
        <UserIcon className="user__icon" />
        <div className="user__data">
          <span className="username">{username}</span>
          <span className="user__id">{userId}</span>
        </div>
        <ArrowDownIcon className="arrow" />
      </div>
    </div>
  );
};
