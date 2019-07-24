import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Grid from '@material-ui/core/Grid';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

export default function ChangeConfirmation(props) {

  return (
    <Dialog open={props.openChangeConfirmation} onClose={props.handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Confirmación</DialogTitle>
      <DialogContent>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <DialogContentText>
              Cantidad: {props.amount + ' ' + props.coin}
            </DialogContentText>  
            <DialogContentText>
              ¿Desea confirmar la operación?
            </DialogContentText>  
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          CANCELAR
        </Button>
        <Button onClick={props.handleClose} color="primary">
          CONFIRMAR
        </Button>
      </DialogActions>
    </Dialog>
  );
}
