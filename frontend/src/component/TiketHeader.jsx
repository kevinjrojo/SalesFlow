import Logo from "../assets/Logo.png";

export const TiketHeader = () => {
  return (
    <div className="tiket__header_container">
      <div className="main__logo">
        <img src={Logo} alt="logo" className="main__logo" />
      </div>
      <article className="main__description">
        <h3>Salesflow</h3>
        <p>Direccion de venta, argentina</p>
        <p>CUIT: 21343223 | contact@gmail.com</p>
      </article>
      <article className="main__mount">
        <h4>#2020205226211</h4>
        <p>Monto total</p>
        <strong>$10,000</strong>
      </article>
    </div>
  );
};
