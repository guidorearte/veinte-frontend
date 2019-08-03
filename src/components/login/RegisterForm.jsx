import React from "react";
import { useState } from "react";
import {
  Button,
  Grid,
  FormControlLabel,
  Checkbox,
  TextField
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
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function RegisterForm(props) {
  const classes = useStyles();
  const [pristine, setPristine] = useState(true);
  const [form, setForm] = useState({
    email: {
      value: "",
      error: false
    },
    password: {
      value: "",
      error: false
    },
    confirmPassword: {
      value: "",
      error: false
    }
  });

  const isInvalid =
    pristine ||
    Object.values(form)
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
    } else if (event.target.name === "password") {
      newValue = {
        value: event.target.value,
        error: !validPasswordRegex.test(event.target.value)
      };
    } else {
      newValue = {
        value: event.target.value,
        error: !(form.password.value === event.target.value)
      };
    }

    setForm(form => ({
      ...form,
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
        //error: !validEmailRegex.test(event.target.value)
      };
    } else if (event.target.name === "password") {
      newValue = {
        value: event.target.value
        //error: !validPasswordRegex.test(event.target.value)
      };
    } else {
      newValue = {
        value: event.target.value
        // error: !(form.password.value === event.target.value)
      };
    }
    setForm(form => ({
      ...form,
      [event.target.name]: newValue
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    !isInvalid && props.onChange(form);
  };

  return (
    <form className={classes.form} noValidate>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            autoComplete="email"
            variant="outlined"
            required
            fullWidth
            autoFocus
            error={form.email.error}
            id="email"
            name="email"
            label="Email"
            onChange={handleInputChange}
            value={form.email.value}
            onBlur={handleInputBlur}
          />
          {form.email.error && (
            <h4 style={{ color: "red" }}>Please insert a valid email</h4>
          )}
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            error={form.password.error}
            autoComplete="current-password"
            onChange={handleInputChange}
            value={form.password.value}
            onBlur={handleInputBlur}
          />
          {form.password.error && (
            <h4 style={{ color: "red" }}>
              Password may have at least one upper case letter, one number and
              one lower case letter, and 8 characters minimum
            </h4>
          )}
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            error={form.confirmPassword.error}
            onChange={handleInputChange}
            value={form.confirmPassword.value}
            onBlur={handleInputBlur}
          />
          {form.confirmPassword.error && (
            <h4 style={{ color: "red" }}>Password Confirm do not match</h4>
          )}
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox value="allowExtraEmails" color="primary" />}
            label="I read the terms and conditions."
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        disabled={isInvalid}
      >
        Sign Up
      </Button>
    </form>
  );
}
