import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
//import './accordion.css'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',


  },

  table: {
    minWidth: 650,
    marginTop: '5em',


  },
 row: {
   borderBottom: 'none',
 },

  font:{
    fontWeight: "bold",
    fontSize: '1em',

},
}));


export default function DenseTable() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Table className={classes.table} size="small">
          <TableHead>
            <TableRow >
              <TableCell className= {classes.font}>USD</TableCell>

            </TableRow>
          </TableHead>

          <TableBody className= {classes.font}>

              <TableCell>
                USD
              </TableCell>
              <TableCell>
              262
              </TableCell>


          </TableBody>
        </Table>

        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell className= {classes.font}>Bitcoin</TableCell>

            </TableRow>
          </TableHead>

          <TableBody>



              <TableCell>
                BTC
              </TableCell>
              <TableCell>
                300
              </TableCell>


          </TableBody>
    </Table>

          <Table className={classes.table} size="small">
              <TableHead>
                <TableRow>
                  <TableCell className= {classes.font}>Bs</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>

                  <TableCell>
                    Bs
                  </TableCell>
                  <TableCell>
                    700
                  </TableCell>


              </TableBody>

         </Table>

        <Table className={classes.table} size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell className= {classes.font}>PTR</TableCell>

                    </TableRow>
                  </TableHead>
                  <TableBody>



                      <TableCell>
                        PTR
                      </TableCell>
                      <TableCell>
                        600
                      </TableCell>


                  </TableBody>
        </Table>
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell className= {classes.font}>Ethereum</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>


              <TableCell>
              ETH
              </TableCell>
              <TableCell>
                500
              </TableCell>


          </TableBody>
        </Table>


</div>
  );
}
