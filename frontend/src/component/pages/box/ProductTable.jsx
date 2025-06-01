import "../../../styles/ticket.css";

export const ProductTable = ({ products }) => {
  return (
    <table className="products_table">
      <thead>
        <tr>
          <th>Nº</th>
          <th style={{ width: "12rem", textAlign: "start" }}>Nombre</th>
          <th>codigo</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>IVA</th>
          <th>Descuentos</th>
          <th>total</th>
        </tr>
      </thead>
      <tbody>
        {products.map((item) => (
          <tr key={item.id} className="products_items">
            <td>1</td>

            <td
              style={{
                display: "flex",
                flexDirection: "column",
                width: "15rem",
              }}
            >
              <span>{item.name}</span> {item.description}
            </td>

            <td>{item.gtin}</td>
            <td>1</td>
            <td>${item.unit_price}</td>
            <td>IVA</td>
            <td>0</td>
            <td>tot</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
