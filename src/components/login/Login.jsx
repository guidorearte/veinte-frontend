import React from 'react';
import { useState } from "react";
import {
    Container,
} from "@material-ui/core";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import axios from 'axios';
import Alert from '../common/Alert';

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Login(props) {

    const alertInitialState = { 
        show: false, 
        msg: { title: '', description: ''
    }};
    const [alert, setAlert] = useState(alertInitialState);
    const classes = useStyles();
    const [tab, setTab] = useState(0);

    const handleTabChange = (event, newTab) => {
        setTab(newTab);
    }

    const handleInputLoginChange = async (form) => {
        const body = {
            username: form.username.value,
            password: form.password.value
        }
        try {
            const response = await axios.post(window.APIS.LOGIN, body);
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
    }

    const handleInputRegisterChange = async (form) => {
        const body = {
            username: form.username.value,
            password: form.password.value,
            confirmPassword: form.confirmPassword.value
        }
        try {
            const response = await axios.post(window.APIS.REGISTER, body);
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

    return (
        <Container component="main" maxWidth="xs">
        <Alert show={alert.show} msg={alert.msg} handleClose={() => setAlert({ ...alertInitialState })}></Alert>
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Tabs value={tab} onChange={handleTabChange}>
                    <Tab label="Login" />
                    <Tab label="Register" />
                </Tabs>
                {tab === 0 && <LoginForm onChange={handleInputLoginChange}></LoginForm>}
                {tab === 1 && <RegisterForm onChange={handleInputRegisterChange}></RegisterForm>}
            </div>
        </Container>
    );
}