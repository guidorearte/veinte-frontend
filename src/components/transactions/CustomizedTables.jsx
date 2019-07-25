import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

function createData(estado, moneda, cantidad, fecha, infoAdicional) {
  return { estado, moneda, cantidad, fecha, infoAdicional };
}

const rows = [
  createData(
    "Completado",
    "BTC",
    6.0,
    "24-06-2019",
    "b1b3bb7fc82b496b8a4738e61c8b3500e59169a75b8823d82c1d9d01b80284aa"
  ),
  createData(
    "Completado",
    "BTC",
    9.0,
    "18-06-2019",
    "b1b3bb7fc82b496b8a4738e61c8b3500e59169a75b8823d82c1d9d01b80284aa"
  ),
  createData(
    "Completado",
    "BTC",
    16.0,
    "06-06-2019",
    "e8dd94ddb20c864211f31589159c48d78cec632b1f82f780446f9fdcafcda076"
  ),
  createData(
    "Completado",
    "BTC",
    3.7,
    "02-06-2019",
    "5d35607e5fe59595eaee0a4d3797a525307cf718e38778cfbe006e77cee796ca"
  ),
  createData(
    "Completado",
    "BTC",
    16.0,
    "29-05-2019",
    "2af7921a796f82980b72478a866c5bfdfefd04104879c1df069f6cb09bf04e8f"
  )
];

const useStyles = makeStyles(theme => ({
  root: {
    width: "90%",
    marginTop: theme.spacing(3),
    margin: "0 auto",
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
}));

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Estado</StyledTableCell>
            <StyledTableCell align="center">Moneda</StyledTableCell>
            <StyledTableCell align="center">Cantidad</StyledTableCell>
            <StyledTableCell align="center">Fecha y hora</StyledTableCell>
            <StyledTableCell align="center">
              Información de transacción
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.fecha}>
              <StyledTableCell
                component="th"
                scope="row"
                style={{ width: "10%" }}
              >
                {row.estado}
              </StyledTableCell>
              <StyledTableCell align="center" style={{ width: "10%" }}>
                {row.moneda}
              </StyledTableCell>
              <StyledTableCell align="center" style={{ width: "10%" }}>
                {row.cantidad}
              </StyledTableCell>
              <StyledTableCell align="center" style={{ width: "20%" }}>
                {row.fecha}
              </StyledTableCell>
              <StyledTableCell align="center" style={{ width: "50%" }}>
                {row.infoAdicional}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
