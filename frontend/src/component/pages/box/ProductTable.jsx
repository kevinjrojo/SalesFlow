import "../../../styles/main.css";

export const ProductTable = ({ products }) => {
  return (
    <section className="main__products_table">
      <table>
        <thead>
          <tr className="main__products_category">
            <th className="category">Nº</th>
            <th className="category">Nombre</th>
            <th className="category">codigo</th>
            <th className="category">Cantidad</th>
            <th className="category">Precio</th>
            <th className="category">IVA</th>
            <th className="category">Descuentos</th>
            <th className="category">total</th>
          </tr>
        </thead>
        <tbody className="main__products_items">
          {products.map((item) => (
            <tr key={item.id}>
              <td className="item">1</td>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <td className="item ">{item.name}</td>
                <td className="item ">{item.description}</td>
              </div>
              <td className="item ">{item.gtin}</td>
              <td className="item ">1</td>
              <td className="item ">${item.unit_price}</td>
              <td className="item ">cant</td>
              <td className="item ">des</td>
              <td className="item ">tot</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
