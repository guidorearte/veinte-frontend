import React, { Component } from 'react';
import UserDash from '../UserDash';
import Fab from '@material-ui/core/Fab';
import RemoveIcon from '@material-ui/icons/Remove';



export default function RemoveDeposit (props) {

    return(
      <Fab color="primary" aria-label="Add" setModal = {props.setModal}
        //onClick={() => this.props.onClick(() => this.props.setModal(this.props.row.name, 'withdraw', this.props.row.currencyType))}
        onClick={() => props.onClick(props.row.name, 'withdraw', props.row.currencyType)}  onChange = {props.handleChange} values ={props.values} setvalues = {props.setvalues} open={props.open} key={props.key} row={props.row}
        classes={props.classes.fab} size="small">
        <RemoveIcon />
      </Fab>
    );
  }
