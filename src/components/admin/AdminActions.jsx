import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export default function AdminActions() {
    const classes = useStyles();
    return (
        <Grid container alignItems="flex-start" justify="flex-end" direction="row">
            <Button variant="contained" color="primary" className={classes.button}>NUEVO</Button>
        </Grid>
    );
}
