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

  const handleInputChange = event => {
    event.persist(); // https://fb.me/react-event-pooling
    const newValue = {
      value: event.target.value,
      error: false // validate
    };
    setForm(form => ({
      ...form,
      [event.target.name]: newValue
    }));
  };

  const handleOnClickButton = () => {
    const formValues = Object.assign({}, form);
    props.onChange(formValues).then(() => {
      setForm({
        username: {
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
    });
  };

  return (
    <div className={classes.form} noValidate>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            autoComplete="email"
            variant="outlined"
            required
            fullWidth
            autoFocus
            id="email"
            name="email"
            label="Email"
            onChange={handleInputChange}
            value={form.email.value}
          />
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
            autoComplete="current-password"
            onChange={handleInputChange}
            value={form.password.value}
          />
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
            onChange={handleInputChange}
            value={form.confirmPassword.value}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox value="allowExtraEmails" color="primary" />}
            label="I read the terms and conditions."
          />
        </Grid>
      </Grid>
      <Button
        type="button"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={handleOnClickButton}
      >
        Sign Up
      </Button>
    </div>
  );
}
