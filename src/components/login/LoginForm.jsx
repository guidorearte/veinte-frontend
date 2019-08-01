import React from "react";
import { useState } from "react";
import {
  Button,
  TextField,
  Checkbox,
  FormControlLabel
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import "./validation.css";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mailValidation, setMailValidation] = useState(false);

  const handleInputChange = event => {
    event.persist(); // https://fb.me/react-event-pooling
    const newValue = {
      value: event.target.value,
      error: validateEmail(event.target.value) // validate
    };
    setLoginForm(loginForm => ({
      ...loginForm,
      [event.target.name]: newValue
    }));
  };

  const handleOnClickButton = () => {
    props.onChange(loginForm);
  };
  const handleEmail = event => {
    setEmail(event.target.value);
    setMailValidation(validateEmail(event.target.value));

    console.log(validateEmail(event.target.value));
  };
  const handlePassword = event => {
    setPassword(event.target.value);
    validatePassword(event.target.value);
  };

  const validateEmail = email => {
    const validEmailRegex = RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );
    return validEmailRegex.test(String(email).toLowerCase());
  };
  const validatePassword = password => {
    const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
    return regex.test(String(password));
  };
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, { setSubmitting }) => {
        console.log("Submiting");
      }}
      //   validate={values => {
      //     let errors = {};
      //     if (!values.email) {
      //       errors.email = "Required";
      //     } else if (!EmailValidator.validate(values.email)) {
      //       errors.email = "Invalid Email Address";
      //     }
      //     const passwordRegex = /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])/;
      //     if (!values.password) {
      //       errors.password = "Required";
      //     } else if (values.password.length < 8) {
      //       errors.password = "Password must be at least 8 characters long.";
      //     } else if (!passwordRegex.test(values.password)) {
      //       errors.password =
      //         "Invalid password. It must contain at least one number, one upper case letter and one lower case letter";
      //     }
      //     return errors;
      //   }}
      //********Handling validation messages yourself*******/
      // validate={values => {
      //   let errors = {};
      //   if (!values.email) {
      //     errors.email = "Required";
      //   } else if (!EmailValidator.validate(values.email)) {
      //     errors.email = "Invalid email address";
      //   }

      //   const passwordRegex = /(?=.*[0-9])/;
      //   if (!values.password) {
      //     errors.password = "Required";
      //   } else if (values.password.length < 8) {
      //     errors.password = "Password must be 8 characters long.";
      //   } else if (!passwordRegex.test(values.password)) {
      //     errors.password = "Invalida password. Must contain one number";
      //   }

      //   return errors;
      // }}
      //********Using Yum for validation********/

      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required("Required"),
        password: Yup.string()
          .required("No password provided.")
          .min(8, "Password is too short - should be 8 chars minimum.")
          .matches(
            /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])/,
            "Password must at least contain a number, an upper case letter and a lower case letter."
          )
      })}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              autoComplete="email"
              autoFocus
              // error={!mailValidation}
              id="email"
              name="email"
              label="Email"
              onChange={handleChange}
              onblur={handleBlur}
              value={values.email}
              className={errors.email && touched.email && "error"}
            />

            {errors.email && touched.email && (
              <div className="input-feedback">{errors.email}</div>
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
              //error={validatePassword}
              className={errors.email && touched.email && "error"}
              onChange={handleChange}
              onblur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && (
              <div className="input-feedback">{errors.password}</div>
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
              disabled={isSubmitting}
              className={classes.submit}
              //   onClick={handleOnClickButton}
            >
              Sign In
            </Button>
          </form>
        );
      }}
    </Formik>
  );
}
