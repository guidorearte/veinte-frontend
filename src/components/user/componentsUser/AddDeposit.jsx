import React, { Component } from 'react';
import UserDash from '../UserDash';
import TableUser from './TableUser';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';



export default function AddDeposit (props) {




    return(

      <Fab color="primary" aria-label="Add" onClick={() => props.onClick(props.row.name, 'deposit', props.row.currencyType)} onChange = {props.handleChange} values ={props.values} setValues = {props.setValues}
      open={props.open} row={props.row}  classes={props.classes.fab} size="small">
        <AddIcon />
      </Fab>
    );
  }
