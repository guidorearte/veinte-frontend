import React from 'react';
import {
  AccordionWithHeader,
  AccordionNode,
  AccordionHeader,
  AccordionPanel
} from 'react-accordion-with-header';
import Typography from '@material-ui/core/Typography';
import TablePrices from './TablePrices';
import {
  Accordion,
  Button,
  } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(theme => ({
  root: {

    //marginLeft: 0,//
  //  marginRight: 0,//
  },

}));

export default function AcccordionPrices(){
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <Accordion>

      <Accordion.Toggle as={Button} eventKey="0" style={{alignSelf: 'flex-end'}}>
      <Typography component="h6" color="white" noWrap className={classes.title}>
        USD <svg style={{"width":"24px","height":"24px","viewBox":"0 0 24 24"}}>
    <path fill="#ffffff" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
    </svg> 262
      </Typography>
      </Accordion.Toggle>

    <Accordion.Collapse eventKey="0">
      <TablePrices/>
    </Accordion.Collapse>


</Accordion>
</div>
  );

  }
