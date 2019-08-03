import React from "react";
import { useState } from "react";
import {
  Button,
  TextField,
  Checkbox,
  FormControlLabel
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function LoginForm(props) {
  const classes = useStyles();
  const [pristine, setPristine] = useState(true);
  const [loginForm, setLoginForm] = useState({
    email: {
      value: "",
      error: false
    },
    password: {
      value: "",
      error: false
    }
  });

  const isInvalid =
    pristine ||
    Object.values(loginForm)
      .map(field => field.error)
      .some(value => value === true);

  const validPasswordRegex = RegExp(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/
  );
  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  const handleInputBlur = event => {
    event.persist();
    let newValue;

    if (event.target.name === "email") {
      newValue = {
        value: event.target.value,
        error: !validEmailRegex.test(event.target.value)
      };
    } else {
      newValue = {
        value: event.target.value,
        error: !validPasswordRegex.test(event.target.value)
      };
    }

    setLoginForm(loginForm => ({
      ...loginForm,
      [event.target.name]: newValue
    }));
    setPristine(false);
  };

  const handleInputChange = event => {
    event.persist(); // https://fb.me/react-event-pooling
    let newValue;
    if (event.target.name === "email") {
      newValue = {
        value: event.target.value
      };
    } else {
      newValue = {
        value: event.target.value
      };
    }

    setLoginForm(loginForm => ({
      ...loginForm,
      [event.target.name]: newValue
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    !isInvalid && props.onChange(loginForm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        autoComplete="email"
        autoFocus
        error={loginForm.email.error}
        id="email"
        name="email"
        label="Email"
        onChange={handleInputChange}
        value={loginForm.email.value}
        onBlur={handleInputBlur}
      />
      {loginForm.email.error && (
        <h4 style={{ color: "red" }}>Please insert a valid email</h4>
      )}
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
        onBlur={handleInputBlur}
      />
      {loginForm.password.error && (
        <h4 style={{ color: "red" }}>
          Password may have at least one upper case letter, one number and one
          lower case letter, and 8 characters minimum
        </h4>
      )}
      <FormControlLabel
        // TODO implement
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        disabled={isInvalid}
      >
        Sign In
      </Button>
    </form>
  );
}
