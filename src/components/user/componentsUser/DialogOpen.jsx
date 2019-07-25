import React from 'react';
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

export default function DialogOpen(props) {
  function handleClose(openFunction) {
    openFunction(false);
  }
  
  return(
    <Dialog
      open={props.open}
      onClose={() => handleClose(() => props.setOpen())}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">
        {props.modal.description} - {props.modal.name}
      </DialogTitle>
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
            { props.modal.currencyType === 'fiat' ?	
                <FormControl className={props.classes.formControl}>	
                  <InputLabel htmlFor="account">Cuenta de Origen</InputLabel>	
                  <Select	
                    size="big" 	
                    value={props.values.account}	
                    onChange={props.handleChange}	
                    inputProps={{	
                      name: 'account',	
                      id: 'account',	
                    }}	
                  >	
                    <MenuItem value={192812781}>BDV-...8291</MenuItem>	
                  </Select>	
                </FormControl> :	
                  <FormControl className={props.classes.formControl}>	
                  <InputLabel htmlFor="account">Dirección</InputLabel>	
                  <Select	
                    size="big" 	
                    value={props.values.account}	
                    onChange={props.handleChange}	
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
              className={props.classes.textField}	
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
        <Button onClick={() => handleClose(() => props.setOpen())} color="primary">	
          CANCELAR	
        </Button>	
        <Button onClick={() => {	
          if (props.modal.type === 'deposit' && props.modal.currencyType === 'fiat') {	
            props.setOpenBankModal(true);	
          } else {	
            props.setOpenNotification(true);	
          }	
          handleClose(() => props.setOpen());	
        }} color="primary">	
          DEPOSITAR	
        </Button>	
      </DialogActions>	
    </Dialog>	
  );
}