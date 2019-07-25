import React, { Component } from 'react';
import UserDash from '../UserDash';
import AddDeposit from './AddDeposit';
import RemoveDeposit from './RemoveDeposit';
import DialogOpen from './DialogBank';
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


export default function DialogBank(props) {


     const [openBankModal, setOpenBankModal] = React.useState(false);

     const bankCode = {
       '': '-',
       BDV: 'BS 0102-0759-22-0000040332',
       BOD: '0116-0437-40-0028983726',
       BNC: '0191-0154-17-2100204784',
       BFC: '0151-0178-40-1000816072',
       BANPLUS: '0174-0131-91-1314419910'
     }




    return(
      <Dialog open={openBankModal} onClose={() =>this.props.handleClose(() => props.setOpenBankModal())} aria-labelledby="form-dialog-title" values ={props.values} setValues = {props.setValues} onChange = {props.handleChange}>
        <DialogTitle id="form-dialog-title">{props.modal.description} - {props.modal.name}</DialogTitle>
        <DialogContent>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControl className={props.classes.formControl}>
                <InputLabel htmlFor="account">Banco de depósito</InputLabel>
                <Select
                  size="big"
                  value={props.values.bank}
                  onChange={props.handleChange}
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
                value={bankCode[props.values.bank]}
                className={props.classes.textField}
                margin="normal"
                variant="outlined"
                fullWidth
              />
              <TextField
                disabled
                id="outlined-disabled"
                label="RIF"
                value='J-411145629'
                className={props.classes.textField}
                margin="normal"
                variant="outlined"
                fullWidth
              />
               <TextField
                disabled
                id="outlined-disabled"
                label="Nombre del titular"
                value='Inversiones financieras 1444 C.A.'
                className={props.classes.textField}
                margin="normal"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {
            props.setOpenBankModal(false);
            props.setOpenNotification(true)
          }} color="primary">
            NOTIFICAR DEPOSITO
          </Button>
        </DialogActions>
      </Dialog>
    );

}
