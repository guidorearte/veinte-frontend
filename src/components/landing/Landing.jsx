import React from 'react';
import NavBar from './NavBar';
import { Container } from '@material-ui/core';
import { useState } from "react";
import ModalLoginRegister from '../login/ModalLoginRegister';
import axios from 'axios';
import Alert from '../common/Alert';

export default function Landing(props) {
    const [showLogin, setShowLogin] = useState(false);
    const alertInitialState = { 
        show: false, 
        msg: { title: '', description: ''
    }};
    const [alert, setAlert] = useState(alertInitialState);

    const handleSubmit = async (tab, form) => {
        if (tab === 0) { // login
            const body = {
                username: form.username.value,
                password: form.password.value
            }
            try {
                const response = await axios.post(window.APIS.LOGIN, body);
                setShowLogin(false);
                axios.defaults.headers.common['x-access-token'] = response.data.token;
                localStorage.setItem('token', response.data.token);
                props.history.push('/dashboard');
            } catch (error) {
                setAlert({
                    show: true,
                    msg: { title: 'Error in login.' , description: 'Error description.'}
                });
                console.log('error', error.response.data);
            }
        } else if (tab === 1) { // register
            const body = {
                username: form.username.value,
                password: form.password.value,
                confirmPassword: form.confirmPassword.value
            }
            try {
                const response = await axios.post(window.APIS.REGISTER, body);
                setShowLogin(false);
                axios.defaults.headers.common['x-access-token'] = response.data.token;
                localStorage.setItem('token', response.data.token);
                props.history.push('/dashboard');
            } catch (error) {
                setAlert({
                    show: true,
                    msg: { title: 'Error in register.' , description: 'Error description.'}
                });
                console.log('error', error.response.data);
            }
        }
    }

    return (
        <Container>
            <NavBar onClickLogin={() => setShowLogin(true)}></NavBar>
            <Alert show={alert.show} msg={alert.msg} handleClose={() => setAlert({ ...alertInitialState })}></Alert>
            <ModalLoginRegister
                open={showLogin}
                handleClose={() => setShowLogin(false)}
                handleSubmit={handleSubmit}
            ></ModalLoginRegister>
            <p>landing...</p>
        </Container>
    );
}