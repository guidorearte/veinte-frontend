import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import NoData from '../common/Nodata';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function AdminDetails(props) {

    const handleClose = () => {
        props.setOpen(false, null);
    }

    let detail = props.detail; // FIXME validation

    if (!detail) {
        return (<Dialog
            open={props.open}
            onClose={handleClose}><NoData></NoData></Dialog>);
    } else {
        return (
            <Dialog
                open={props.open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{'Usuario: ' + detail.user}</DialogTitle>
                <DialogContent>
                    <List>
                        <ListItem >
                            <ListItemText primary={'Tipo:'} />
                            <ListItemText secondary={detail.tipo} />
                        </ListItem>
                        <ListItem >
                            <ListItemText primary={'Método: '} />
                            <ListItemText secondary={detail.metodo} />
                        </ListItem>
                        <ListItem >
                            <ListItemText primary={'Moneda: '} />
                            <ListItemText secondary={detail.moneda} />
                        </ListItem>
                        <ListItem >
                            <ListItemText primary={'Cantidad: '} />
                            <ListItemText secondary={detail.cantidad} />
                        </ListItem>
                        <ListItem >
                            <ListItemText primary={'Estado: '} />
                            <ListItemText secondary={detail.estado} />
                        </ListItem>
                        <ListItem >
                            <ListItemText primary={'Fecha: '} />
                            <ListItemText secondary={detail.fecha} />
                        </ListItem>
                    </List>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cerrar
          </Button>
                </DialogActions>
            </Dialog>
        );
    }
}