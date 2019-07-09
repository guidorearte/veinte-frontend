import React from 'react';
import { useState } from "react";
import {
    Button,
    TextField,
    Checkbox,
    FormControlLabel
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function LoginForm(props) {

    const classes = useStyles();
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

    const handleInputChange = (event) => {
        event.persist(); // https://fb.me/react-event-pooling
        const newValue = {
            value: event.target.value,
            error: false, // validate
        };
        setLoginForm(loginForm => ({
            ...loginForm,
            [event.target.name]: newValue
        }));
    }

    const handleOnClickButton = () => {
        props.onChange(loginForm);
    }

    return (
        <div>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                autoComplete="username"
                autoFocus
                error={loginForm.username.error}
                id="username"
                name="username"
                label="Username"
                onChange={handleInputChange}
                value={loginForm.username.value}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                error={loginForm.password.error}
                onChange={handleInputChange}
                value={loginForm.password.value}
            />
            <FormControlLabel
                // TODO implement
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
            />
            <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleOnClickButton}
            >
                Sign In
            </Button>
        </div>
    );
}