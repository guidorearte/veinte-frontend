import React from 'react';
import {
    TextField
} from "@material-ui/core";

export default function LoginForm(props) {

    const handleInputChange = (event) => {
        event.persist(); // https://fb.me/react-event-pooling
        const newValue = {
            value: event.target.value,
            error: false, // validate
        };
        props.onChange(event.target.name, newValue);
    }

    return (
        <form>
            <TextField
                autoFocus
                error={props.form.username.error}
                margin="dense"
                id="username"
                name="username"
                label="Username"
                type="text"
                onChange={handleInputChange}
                value={props.form.username.value}
            />
            <TextField
                error={props.form.password.error}
                margin="dense"
                id="password"
                name="password"
                label="Password"
                type="password"
                onChange={handleInputChange}
                value={props.form.password.value}
            />
        </form>
    );
}