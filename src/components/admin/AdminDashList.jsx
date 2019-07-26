import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import LinearIndeterminate from '../common/LoadingComponents'
import NoData from '../common/Nodata';
import Done from '@material-ui/icons/Done';
import Clear from '@material-ui/icons/Clear';
import Details from '@material-ui/icons/Details';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
    margin: {
        margin: theme.spacing(1),
      },
}));

export default function AdminDashList(props) {
    const classes = useStyles();

    // FIXME: filter and validations needed
    const transactions = props.transactions;

    const handleOnClickDetails = (open, detail) => {
        props.openDetails(open , detail);
    }
    
    if (props.isLoading) {
        return (<Paper><LinearIndeterminate></LinearIndeterminate></Paper>);
    } else if (!transactions[0]) {
        return (<Paper><NoData></NoData></Paper>);
    } else {
        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Usuario</TableCell>
                            <TableCell align="right">Tipo</TableCell>
                            <TableCell align="right">Método</TableCell>
                            <TableCell align="right">Moneda</TableCell>
                            <TableCell align="right">Cantidad</TableCell>
                            <TableCell align="right">Estado</TableCell>
                            <TableCell align="right">Operador</TableCell>
                            <TableCell align="right">Fecha</TableCell>
                            <TableCell align="right">Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {transactions.map(t => (
                            <TableRow key={t.name}>
                                <TableCell component="th" scope="row">
                                    {t.user}
                                </TableCell>
                                <TableCell align="right">{t.tipo}</TableCell>
                                <TableCell align="right">{t.metodo}</TableCell>
                                <TableCell align="right">{t.moneda}</TableCell>
                                <TableCell align="right">{t.cantidad}</TableCell>
                                <TableCell align="right">{t.estado}</TableCell>
                                <TableCell align="right">{t.operador}</TableCell>
                                <TableCell align="right">{t.fecha}</TableCell>
                                <TableCell align="right">
                                    <IconButton  className={classes.button} aria-label="Detalles" size='small'>
                                        <Details onClick={() => handleOnClickDetails(true, t)}></Details>
                                    </IconButton>
                                    <IconButton  className={classes.button} aria-label="Aprobar" size='small'>
                                        <Done></Done>
                                    </IconButton>
                                    <IconButton  className={classes.button} aria-label="Rechazar" size='small'>
                                        <Clear></Clear>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}
