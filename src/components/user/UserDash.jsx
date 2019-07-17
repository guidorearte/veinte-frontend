import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
//import AssignmentIcon from '@material-ui/icons/Assignment';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Grid from '@material-ui/core/Grid';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 100,
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 260,
    maxWidth: 220
  },
  container: {
    width: '100%'
  }
}));

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


// FIXME
export default function UserDash(props) {
  const [open, setOpen] = React.useState(false);
  const [openBankModal, setOpenBankModal] = React.useState(false);
  const [openNotification, setOpenNotification] = React.useState(false);

  const [values, setValues] = React.useState({
    account: '',
    name: 'hai',
    bank: ''
  });

  const [modal, setModal] = React.useState({
    name: 'BTC',
    type: 'withdraw',
    description: "Retiro",
    currencyType: 'crypto'
  });

  function handleClickOpen(name, type, currencyType) {
    setModal(() => ({
      name,
      type,
      description: type === 'withdraw' ? 'Retiro' : 'Depósito',
      currencyType
    }));
    setOpen(true);
  }

  function handleClose(openFunction) {
    openFunction(false);
  }

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }

  // const checkToken = (token) => {
  //   // @TODO verificacion de token
  //   return true;
  // }

  // if (!(localStorage.getItem('token') && checkToken(localStorage.getItem('token')))) {
  //   return <Redirect to='/'  />
  // }

  // const handleOnClick = () => {
  //   localStorage.removeItem('token');
  //   props.history.push('/');
  // }

  const bankCode = {
    '': '-',
    BDV: 'BS 0102-0759-22-0000040332',
    BOD: '0116-0437-40-0028983726',
    BNC: '0191-0154-17-2100204784',
    BFC: '0151-0178-40-1000816072',
    BANPLUS: '0174-0131-91-1314419910'
  }

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Dialog open={open} onClose={() => handleClose(() => setOpen())} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{modal.description} - {modal.name}</DialogTitle>
        <DialogContent>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <TextField
                autoFocus
                margin="dense"
                id="monto"
                label="Monto"
                type="number"
                fullWidth
              />
              { modal.currencyType === 'fiat' ?
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="account">Cuenta de Origen</InputLabel>
                    <Select
                      size="big" 
                      value={values.account}
                      onChange={handleChange}
                      inputProps={{
                        name: 'account',
                        id: 'account',
                      }}
                    >
                      <MenuItem value={192812781}>BDV-...8291</MenuItem>
                    </Select>
                  </FormControl> :
                    <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="account">Dirección</InputLabel>
                    <Select
                      size="big" 
                      value={values.account}
                      onChange={handleChange}
                      inputProps={{
                        name: 'account',
                        id: 'account',
                      }}
                    >
                      <MenuItem value={192812781}>
                        3Bvps8vUzhPdS6Uy9Hs7xW1ZHFFMGnDyuT
                      </MenuItem>
                    </Select>
                  </FormControl>
              }
              <TextField
                disabled
                id="outlined-disabled"
                label="Two Factor Authentication"
                defaultValue="-"
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <DialogContentText>
                Detalle
              </DialogContentText>
              <DialogContentText>
                Límite diario: -
              </DialogContentText>
              <DialogContentText>
                Límite mensual: -
              </DialogContentText>
              <DialogContentText>
                Saldo disponible: 0
              </DialogContentText>
              <DialogContentText>
                Saldo en espera: 0
              </DialogContentText>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(() => setOpen())} color="primary">
            CANCELAR
          </Button>
          <Button onClick={() => {
            if (modal.type === 'deposit' && modal.currencyType === 'fiat') {
              setOpenBankModal(true);
            } else {
              setOpenNotification(true);
            }
            handleClose(() => setOpen());
          }} color="primary">
            DEPOSITAR
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openBankModal} onClose={() => handleClose(() => setOpenBankModal())} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{modal.description} - {modal.name}</DialogTitle>
        <DialogContent>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="account">Banco de depósito</InputLabel>
                <Select
                  size="big" 
                  value={values.bank}
                  onChange={handleChange}
                  inputProps={{
                    name: 'bank',
                    id: 'bank',
                  }}
                >
                  <MenuItem value={'BDV'}>BDV</MenuItem>
                  <MenuItem value={'BOD'}>BOD</MenuItem>
                  <MenuItem value={'BNC'}>BNC</MenuItem>
                  <MenuItem value={'BFC'}>BFC</MenuItem>
                  <MenuItem value={'BANPLUS'}>BANPLUS</MenuItem>
                </Select>
              </FormControl>
              <TextField
                disabled
                id="outlined-disabled"
                label="Número de cuenta"
                value={bankCode[values.bank]}
                className={classes.textField}
                margin="normal"
                variant="outlined"
                fullWidth
              />
              <TextField
                disabled
                id="outlined-disabled"
                label="RIF"
                value='J-411145629'
                className={classes.textField}
                margin="normal"
                variant="outlined"
                fullWidth
              />
               <TextField
                disabled
                id="outlined-disabled"
                label="Nombre del titular"
                value='Inversiones financieras 1444 C.A.'
                className={classes.textField}
                margin="normal"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {
            setOpenBankModal(false);
            setOpenNotification(true)
          }} color="primary">
            NOTIFICAR DEPOSITO
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openNotification} onClose={() => handleClose(() => setOpenNotification())} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Solicitud enviada</DialogTitle>
        <DialogContent>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <DialogContentText>
                Se le notificará por mail, dentro de los próximos 20 minutos será procesada su transacción
              </DialogContentText>  
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(() => setOpenNotification())} color="primary">
            ACEPTAR
          </Button>
        </DialogActions>
      </Dialog>
      <Paper className={classes.root}>
        <Table className={classes.table}>
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
                    onClick={() => handleClickOpen(row.name, 'deposit', row.currencyType)}
                    className={classes.fab} size="small">
                    <AddIcon />
                  </Fab>
                  <Fab color="primary" aria-label="Add"
                    onClick={() => handleClickOpen(row.name, 'withdraw', row.currencyType)}
                    className={classes.fab} size="small">
                    <RemoveIcon />
                  </Fab>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}
