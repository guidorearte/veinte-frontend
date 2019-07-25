import React from 'react';
import TableUser from './componentsUser/TableUser';
import DialogRequestSent from './componentsUser/DialogRequestSent';
import DialogOpen from './componentsUser/DialogOpen';
import DialogBank from './componentsUser/DialogBank';
import { makeStyles } from '@material-ui/core/styles';


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


// FIXME
export default function UserDash(props) {



  const [open, setOpen] = React.useState(false);

  const [openNotification, setOpenNotification] = React.useState(false);



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

  const [values, setValues] = React.useState({
    account: '',
    name: 'hai',
    bank: ''
  });

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



  const useStyles = makeStyles(theme => ({
  root: {
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
  }
  }));

  const classes = useStyles();

  return (

        <div>
          <DialogOpen classes = {classes} open={open} setOpen = {setOpen} onClose={() => handleClose(() => setOpen())} onChange = {handleChange}  setOpenNotification = {setOpenNotification}  onClick={() => handleClickOpen(props.name, props.type, props.currencyType)} values ={values} setValues = {setValues}  modal={modal} setModal = {setModal} onChange = {handleChange}/>
          <DialogBank classes = {classes} modal={modal} setModal = {setModal}  onClose={() => handleClose(() => setOpen())} onChange = {handleChange} values = {values} setValues = {setValues} onClick={() => handleClickOpen()}/>
          <DialogRequestSent open={openNotification} setOpenNotification={setOpenNotification} values = {values} setValues = {setValues} onClick={() => handleClickOpen(props.name, props.type, props.currencyType)} onChange = {handleChange}/>
          <TableUser classes = {classes} onClick={() => handleClickOpen(props.name, props.type, props.currencyType)} onChange = {handleChange} modal={modal} setModal = {setModal} values = {values} setValues = {setValues} />
        </div>
      );

}
