import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Grid from '@material-ui/core/Grid';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

export default function ChangeResponse(props) {

  let title = '';
  let body = '';

  if (props.response.status === 200) {
    title = 'Operación Exitosa';
    body = 'En el Dashboard podrá encontrar su balance actualizado';
  } else {
    title = 'Error';
    body = props.response.data;
  }

  return (
    <Dialog open={props.openChangeResponse} onClose={props.handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <DialogContentText>
              {body}
            </DialogContentText>  
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          CERRAR
        </Button>
      </DialogActions>
    </Dialog>
  );
}
