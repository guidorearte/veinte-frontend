import React, { Component } from 'react';
import UserDash from '../UserDash';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Grid from '@material-ui/core/Grid';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';


export default function DialogRequestSent (props) {
  function handleClose(openFunction) {
    openFunction(false);
  }
    return(
      <Dialog open={props.open} onClose={() => props.onClose(() => props.setOpenNotification())} aria-labelledby="form-dialog-title">
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
        <Button onClick={() => handleClose(() => props.setOpenNotification())} color="primary">
            ACEPTAR
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
