import React from 'react';
import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogActions,
    Button,
} from "@material-ui/core";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

export default function ModalLoginRegister(props) {

    const [tab, setTab] = useState(0);
    const [loginForm, setLoginForm] = useState({
        username: {
            value: '',
            error: false
        },
        password: {
            value: '',
            error: false
        }
    });

    const [registerForm, setRegisterForm] = useState({
        username: {
            value: '',
            error: false
        },
        password: {
            value: '',
            error: false
        },
        confirmPassword: {
            value: '',
            error: false
        }
    });

    const handleClose = () => {
        props.handleClose(false);
    }

    const handleSubmit = () => {
        const form = tab === 0 ? loginForm : registerForm;
        props.handleSubmit(tab, form);
    }

    const handleTabChange = (event, newTab) => {
        setTab(newTab);
    }

    const handleInputLoginChange = (name, newValue) => {
        setLoginForm(loginForm => ({ ...loginForm, [name]: newValue }));
    }

    const handleInputRegisterChange = (name, newValue) => {
        setRegisterForm(registerForm => ({ ...registerForm, [name]: newValue }));
    }

    return (
        <Dialog open={props.open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <Tabs value={tab} onChange={handleTabChange}>
                <Tab label="Login" />
                <Tab label="Register" />
            </Tabs>
            <DialogContent>
                {tab === 0 && <LoginForm form={loginForm} onChange={handleInputLoginChange}></LoginForm>}
                {tab === 1 && <RegisterForm form={registerForm} onChange={handleInputRegisterChange}></RegisterForm>}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleSubmit} color="primary">
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    );
}