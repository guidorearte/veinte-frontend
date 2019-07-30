import React, { Component } from 'react';
import UserDash from '../UserDash';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import AddDeposit from './AddDeposit';
import RemoveDeposit from './RemoveDeposit';






export default function TableUser(props) {

  function createData(name, balance, price, currencyType) {
    return { name, balance, price, currencyType };
  }





    const rows = [
      createData('USD', 262, "-", 'fiat'),
      createData('BTC', 0, 10760, 'crypto'),
      createData('Bs', 50000000, 7246, 'fiat'),
      createData('PTR (Proximamente)', "-", "-", 'crypto'),
      createData('ETH', 0, 229.46, 'crypto'),
    ];



      return(
        <Paper className={props.classes.root} modal={props.modal} setModal = { props.setModal}>
          <Table className={props.classes.table}  modal={props.modal} setModal = { props.setModal} values ={props.values} setValues = {props.setValues} onChange = {props.handleChange}>
            <TableHead>
              <TableRow>
                <TableCell>Moneda</TableCell>
                <TableCell align="right">Saldo</TableCell>
                <TableCell align="right">Precio</TableCell>
                {/* <TableCell align="right">Detalle</TableCell> */}
                <TableCell align="right">Depositar/Retirar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.balance}</TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                  {/* <TableCell align="right">
                    <Fab color="primary" aria-label="Add" className={classes.fab} size="small">
                      <AssignmentIcon />
                    </Fab>
                  </TableCell> */}
                  <TableCell align="right">
                    <AddDeposit classes = {props.classes}  row={row} onClick={() => props.onClick()} onChange = {props.handleChange} open={props.open}/>
                    <RemoveDeposit classes = {props.classes} row={row}  setModal = {props.setModal} onClick={() => props.onClick()} open={props.open}/>


                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );

  }
