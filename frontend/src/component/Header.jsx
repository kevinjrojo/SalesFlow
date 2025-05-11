import user from "../assets/avatar.png";

import "../styles/header.css";

export const Header = () => {
  return (
    <div className="header">
      <section>
        <h3>Caja</h3>
      </section>
      <div>
        <img src={user} alt="" />
        <strong>usuario</strong>
      </div>
    </div>
  );
};
