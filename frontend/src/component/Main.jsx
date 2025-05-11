import "../styles/main.css";
import Logo from "../assets/Logo.png";
import { useState } from "react";

export const Main = () => {
  const [items, setItems] = useState([]);

  const url = "http://192.168.0.19:8000/";

  const handleSubmit = (e) => {
    e.preventDefault();

    let productValue = e.target.products.value;
    if (productValue === "") {
      alert("Por favor ingrese un producto");
      return;
    }
    fetch(`${url}/product/?search=${productValue}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItems(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    console.log(productValue);
  };

  return (
    <div className="main">
      <article className="main_Date">
        <h2>Factura #2020205226211</h2>
        <p>Fecha: 2023-10-20</p>
      </article>
      <section className="main__container">
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
      </section>
      <section className="main__products">
        <h3>Productos</h3>
        <table className="main__products-table">
          <thead>
            <tr className="main__products-table-head">
              <th>Nº</th>
              <th>Nombre</th>
              <th>codigo</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>IVA</th>
              <th>Descuentos</th>
              <th>total</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>1</td>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                </div>
                <td>{item.gtin}</td>
                <td>1</td>

                <td>${item.unit_price}</td>
                <td>cant</td>
                <td>des</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <form className="form_main_box" onSubmit={handleSubmit}>
        <input
          name="products"
          placeholder="aceite,harina,azucar"
          className="input"
        />
        <input type="submit" value={"Buscar"} className="button_seach" />
      </form>
    </div>
  );
};
