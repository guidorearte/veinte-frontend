import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import RemoveIcon from '@material-ui/icons/Remove';

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
    <Paper className={props.classes.root}>	
      <Table className={props.classes.table}>	
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
                <Fab color="primary" aria-label="Add"	
                  onClick={() => props.handleClickOpen(row.name, 'deposit', row.currencyType)}	
                  className={props.classes.fab} size="small">	
                  <AddIcon />	
                </Fab>	
                <Fab color="primary" aria-label="Add"	
                  onClick={() => props.handleClickOpen(row.name, 'withdraw', row.currencyType)}	
                  className={props.classes.fab} size="small">	
                  <RemoveIcon />	
                </Fab>	
              </TableCell>	
            </TableRow>	
          ))}	
        </TableBody>	
      </Table>	
    </Paper>
  );

}
