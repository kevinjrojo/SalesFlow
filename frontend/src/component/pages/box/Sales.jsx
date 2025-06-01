import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.grey,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  num,
  articulo,
  codigo,
  cantidad,
  precio,
  Iva,
  descuestos,
  preciototal
) {
  return {
    num,
    articulo,
    codigo,
    cantidad,
    precio,
    Iva,
    descuestos,
    preciototal,
  };
}

const rows = [
  createData(1, "Aceite de Girasol 1L", "1454645645", 100, 12, 5, 1000, 34),
  createData(2, "Coca Cola 500ml", "245634545", 200, 12, 5, 1000, 34),
  createData(3, "Arroz Integral 1kg", "3456456456", 150, 12, 5, 1000, 34),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 50 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nº</StyledTableCell>
            <StyledTableCell align="right">Articulo</StyledTableCell>
            <StyledTableCell align="right">codigo</StyledTableCell>
            <StyledTableCell align="right">precio</StyledTableCell>
            <StyledTableCell align="right">iva</StyledTableCell>
            <StyledTableCell align="right">descuestos</StyledTableCell>
            <StyledTableCell align="right">Total</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.articulo}>
              <StyledTableCell component="th" scope="row">
                1
              </StyledTableCell>
              <StyledTableCell align="right">{row.articulo}</StyledTableCell>
              <StyledTableCell align="right">{row.codigo}</StyledTableCell>
              <StyledTableCell align="right">{row.precio}</StyledTableCell>
              <StyledTableCell align="right">{row.Iva}</StyledTableCell>
              <StyledTableCell align="right">{row.descuestos}</StyledTableCell>
              <StyledTableCell align="right">{row.preciototal}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
