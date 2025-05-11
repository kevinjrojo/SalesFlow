import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import products from "../assets/products.json";

export default function Sales() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nº</TableCell>
            <TableCell align="right">Nombre</TableCell>
            <TableCell align="right">codigo</TableCell>
            <TableCell align="right">Cantidad</TableCell>
            <TableCell align="right">Precio</TableCell>
            <TableCell align="right">IVA</TableCell>
            <TableCell align="right">Descuentos</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {product.name}
              </TableCell>
              <TableCell align="right">{product.name}</TableCell>
              <TableCell align="right">{product.code}</TableCell>
              <TableCell align="right">{product.unit}</TableCell>
              <TableCell align="right">{product.unit_price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
