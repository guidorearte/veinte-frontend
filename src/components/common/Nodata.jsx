import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent } from '@material-ui/core';
import MoodBad from '@material-ui/icons/MoodBad';

const useStyles = makeStyles({
    cardContent: {
        textAlign: 'center',
    },
    moodBad: {
        fontSize: '44px'
    }
});

export default function NoData(props) {
    const classes = useStyles();

    return (
        <Card>
            <CardContent className={classes.cardContent}>
                <MoodBad className={classes.moodBad}></MoodBad>
                <p className="lead">{props.msj ? props.msj : 'Sin datos'}</p>
                {/* <p><i className="zmdi zmdi-mood-bad" style={{ fontSize: '44px' }}></i></p> */}
            </CardContent>
        </Card>
    );
}
