import React from 'react';
import { useState, useEffect } from "react";
// import axios from 'axios';
import { Container } from '@material-ui/core/';
import Alert from '../common/Alert';
import AdminDashList from './AdminDashList';
import AdminActions from './AdminActions';
import AdminDetails from './AdminDetails';

function createData(user, tipo, metodo, moneda, cantidad, estado, operador, fecha) {
  return { user, tipo, metodo, moneda, cantidad, estado, operador, fecha };
}

const rows = [
  createData('Admin', 'tipo1', 'Metodo1', 'Moneda1', 10, 'Pendiente', 'Operador1', '10/06/2019'),
  createData('User1', 'tipo1', 'Metodo1', 'Moneda4', 4, 'Aprobada', 'Operador2', '07/02/2019'),
  createData('User2', 'tipo2', 'Metodo4', 'Moneda2', 2, 'Rechazada', 'Operador3', '14/07/2019'),
  createData('User3', 'tipo4', 'Metodo3', 'Moneda3', 19, 'Pendiente', 'Operador4', '1/03/2019'),
];

export default function AdminDash() {

  const [data, setData] = useState({ transactions: [] });
  const [IsLoading, setIsLoading] = useState(true);

  // FIXME: make alert component reusable 
  const alertInitialState = {
    show: false,
    msg: {
      title: '', description: ''
    }
  };
  const [alert, setAlert] = useState(alertInitialState);

  useEffect(() => {
    // component did mount
    getTransaction();
  });

  const getTransaction = () => {
    try {
      setData({ transactions: rows });
      console.log('transactions', data.transactions);
      setIsLoading(false);
      // FIXME: implement api get
      // const transactions = axios.get(window.API.TRANSACTION)
    } catch (error) {
      setAlert({
        show: true,
        msg: { title: 'Error in getTransaction.', description: 'Error description.' }
      });
      if (error.response) {
        console.log('error in getTransaction', error.response.data);
      } else {
        console.log('error in getTransaction', error);
      }
    }
  };

  // Admindetails state/function
  const [Detail, setDetail] = useState();

  const [openDetails, setOpenDetails] = useState(false);

  const handleDetails = (open, detail) => {
    console.log('param', open ,detail);
    
    setDetail(detail);
    setOpenDetails(open);
  }

  return (
    <Container>
      <AdminActions></AdminActions>
      <AdminDetails open={openDetails} detail={Detail} setOpen={handleDetails}></AdminDetails>
      <Alert show={alert.show} msg={alert.msg} handleClose={() => setAlert({ ...alertInitialState })}></Alert>
      <AdminDashList isLoading={IsLoading} transactions={data.transactions} openDetails={handleDetails}></AdminDashList>
    </Container>
  );
}
