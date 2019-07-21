import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Grid, TextField, Fab, makeStyles } from '@material-ui/core';
import SwapVert from '@material-ui/icons/SwapVert';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 260,
    maxWidth: '80%',
    width: '100%'
  },
  button: {
    margin: '0 auto',
    top: '30%'
  }
}));

export default function ChangeForm(props) {
  const classes = useStyles();
  return (
    <div>
      <Grid container >
        <Grid container item xs={1}>
          <Fab color="primary" aria-label="Add"
            onClick={props.onClickSwapButton}
            className={classes.button} size="small"
          >
            <SwapVert />
          </Fab>
        </Grid> 
        <Grid container item xs={9}>
          <Grid item xs={6}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="fromCoin">Moneda origen</InputLabel>
              <Select
                size="big" 
                value={props.values.fromCoinId}
                onChange={props.handleSelectChange}
                inputProps={{
                  name: 'fromCoinId',
                  id: 'fromCoin',
                }}
              >
                {
                  props.coins.map((coin, index) => (
                    <MenuItem key={index} value={coin.coinId}>{coin.prefix}</MenuItem>
                  ))
                }
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              autoFocus
              margin="dense"
              id="amountFrom"
              name="amountFrom"
              label="Monto"
              type="number"
              fullWidth
              value={props.values.amountFrom}
              onChange={props.handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="toCoin">Moneda destino</InputLabel>
              <Select
                size="big" 
                value={props.values.toCoinId}
                onChange={props.handleSelectChange}
                inputProps={{
                  name: 'toCoinId',
                  id: 'toCoin',
                }}
              >
                {
                  props.coins.map((coin, index) => (
                    <MenuItem key={index} value={coin.coinId}>{coin.prefix}</MenuItem>
                  ))
                }
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              autoFocus
              margin="dense"
              id="amountTo"
              name="amountTo"
              label="Monto"
              type="number"
              fullWidth
              value={props.values.amountTo}
              disabled
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}