import React from 'react';
import TableUser from './componentsUser/TableUser';
import DialogRequestSent from './componentsUser/DialogRequestSent';
import DialogOpen from './componentsUser/DialogOpen';
import DialogBank from './componentsUser/DialogBank';
import { makeStyles } from '@material-ui/core/styles';

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

export default function UserDash(props) {

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [openBankModal, setOpenBankModal] = React.useState(false);
  const [openNotification, setOpenNotification] = React.useState(false);

  const [modal, setModal] = React.useState({
    name: 'BTC',
    type: 'withdraw',
    description: "Retiro",
    currencyType: 'crypto'
  });

  const [values, setValues] = React.useState({
    account: '',
    name: 'hai',
    bank: ''
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

  return (
    <div>
      <DialogOpen
        classes = {classes}
        open = {open}
        setOpen = {setOpen}
        setOpenNotification = {setOpenNotification}
        values ={values}
        modal={modal}
        setOpenBankModal={setOpenBankModal}
        handleChange={handleChange}
        handleClose={handleClose}
      />
      <DialogBank
        openBankModal={openBankModal}
        classes = {classes}
        modal={modal}
        values = {values}
        setOpenBankModal={setOpenBankModal}
        setOpenNotification={setOpenNotification}
        handleChange={handleChange}
        handleClose={handleClose}
      />
      <DialogRequestSent
        openNotification={openNotification}
        setOpenNotification={setOpenNotification}
        handleClose={handleClose}
      />
      <TableUser
        classes = {classes}
        handleClickOpen={handleClickOpen}
      />
    </div>
  );
}
