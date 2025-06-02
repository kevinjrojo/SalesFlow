import "../../../styles/ticket.css";
import Logo from "../../../assets/Logo.png";
import { useState } from "react";
import { useEffect } from "react";
import { ProductTable } from "./ProductTable";

export const Ticket = () => {
  const [items, setItems] = useState([]);

  // const productos = [
  //   {
  //     id: 1,
  //     name: "Aceite de Girasol 1L",
  //     description: "Aceite comestible de girasol",
  //     sku: "ALM-001-001",
  //     gtin: "0000000000003",
  //     stock: "100.000",
  //     unit: "Litro",
  //     category: "alimentos",
  //     unit_price: "950.00",
  //     cost_price: "700.00",
  //     is_active: true,
  //   },
  //   {
  //     id: 2,
  //     name: "Coca Cola 500ml",
  //     description: "Bebida gaseosa Coca Cola",
  //     sku: "BEB-001-002",
  //     gtin: "0000000000007",
  //     stock: "200.000",
  //     unit: "Litro",
  //     category: "bebidas",
  //     unit_price: "550.00",
  //     cost_price: "400.00",
  //     is_active: true,
  //   },
  //   {
  //     id: 3,
  //     name: "Arroz Integral 1kg",
  //     description: "Arroz integral orgánico de 1kg",
  //     sku: "ALM-002-003",
  //     gtin: "0000000000004",
  //     stock: "150.000",
  //     unit: "KiloGramo",
  //     category: "alimentos",
  //     unit_price: "1200.00",
  //     cost_price: "900.00",
  //     is_active: true,
  //   },
  //   {
  //     id: 4,
  //     name: "Leche Entera 1L",
  //     description: "Leche entera pasteurizada",
  //     sku: "ALM-003-004",
  //     gtin: "0000000000002",
  //     stock: "250.000",
  //     unit: "Litro",
  //     category: "alimentos",
  //     unit_price: "680.00",
  //     cost_price: "500.00",
  //     is_active: true,
  //   },
  //   {
  //     id: 5,
  //     name: "Jugo de Naranja 1L",
  //     description: "Jugo natural de naranja",
  //     sku: "BEB-002-003",
  //     gtin: "0000000000008",
  //     stock: "180.000",
  //     unit: "Litro",
  //     category: "bebidas",
  //     unit_price: "750.00",
  //     cost_price: "580.00",
  //     is_active: true,
  //   },
  //   {
  //     id: 6,
  //     name: "Papas Fritas 150g",
  //     description: "Papas fritas en bolsa de 150g",
  //     sku: "ALM-004-005",
  //     gtin: "0000000000005",
  //     stock: "120.000",
  //     unit: "Unidad",
  //     category: "alimentos",
  //     unit_price: "350.00",
  //     cost_price: "260.00",
  //     is_active: true,
  //   },
  //   {
  //     id: 7,
  //     name: "Cerveza Lager 500ml",
  //     description: "Cerveza Lager de 500ml",
  //     sku: "BEB-003-004",
  //     gtin: "0000000000009",
  //     stock: "60.000",
  //     unit: "Litro",
  //     category: "bebidas",
  //     unit_price: "800.00",
  //     cost_price: "620.00",
  //     is_active: true,
  //   },
  //   {
  //     id: 8,
  //     name: "Manteca de Cerdo 500g",
  //     description: "Manteca de cerdo en presentación de 500g",
  //     sku: "ALM-005-006",
  //     gtin: "0000000000010",
  //     stock: "90.000",
  //     unit: "KiloGramo",
  //     category: "alimentos",
  //     unit_price: "780.00",
  //     cost_price: "600.00",
  //     is_active: true,
  //   },
  //   {
  //     id: 9,
  //     name: "Jugo de Manzana 1L",
  //     description: "Jugo natural de manzana",
  //     sku: "BEB-004-005",
  //     gtin: "0000000000011",
  //     stock: "220.000",
  //     unit: "Litro",
  //     category: "bebidas",
  //     unit_price: "730.00",
  //     cost_price: "560.00",
  //     is_active: true,
  //   },
  //   {
  //     id: 10,
  //     name: "Galletas Oreo 300g",
  //     description: "Galletas Oreo en paquete de 300g",
  //     sku: "ALM-006-007",
  //     gtin: "0000000000012",
  //     stock: "180.000",
  //     unit: "KiloGramo",
  //     category: "alimentos",
  //     unit_price: "950.00",
  //     cost_price: "720.00",
  //     is_active: true,
  //   },
  // ];

  const url = "http://192.168.0.23:8000/";

  useEffect(() => {
    console.log(items);
  }, [items]);

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
        setItems((prev) => [...prev, ...data]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    console.log(productValue);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   let productValue = e.target.products.value;
  //   let a = productos.filter((item) =>
  //     item.name.toLocaleLowerCase().includes(productValue.toLocaleLowerCase())
  //   );
  //   setItems(items.concat(a));
  //   console.log(a);
  // };

  // Obtener la fecha actual en formato local
  const fechaActual = new Date().toLocaleString();

  return (
    <div className="ticket">
      <main>
        <section className="ticket_date">
          <h2>Factura #2020205226211</h2>
          <p>Fecha: {fechaActual}</p>
        </section>
        <section className="business_details">
          <section className="ticket_header">
            <div>
              <img src={Logo} alt="logo" className="ticket_logo" />
            </div>
            <article className="ticket_date_user">
              <h3>Salesflow</h3>
              <p>Direccion de venta, argentina</p>
              <p>CUIT: 21343223 | contact@gmail.com</p>
            </article>
            <article className="ticket_code">
              <h4>#2020205226211</h4>
            </article>
          </section>
          <section>
            <ProductTable products={items} />
            <form onSubmit={handleSubmit}>
              <input
                name="products"
                placeholder="aceite,harina,azucar"
                className="input"
              />
              <input type="submit" value={"Buscar"} className="button_seach" />
            </form>
          </section>
        </section>
      </main>
      <section className="main__products_total">
        <h3>monto total</h3>
        <strong>$10000</strong>
      </section>
    </div>
  );
};
