import React, { Fragment } from "react";
import validate from "validate.js";
import Link from "next/link";
import Router from "next/router";
import { register } from "../../store/actions/user/auth";
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "../../utils/auth";
import GoogleLogin from "./Google";
import { Grid, Typography, TextField, Button, Paper } from "@mui/material";

const schema = {
  name: {
    presence: { allowEmpty: false, message: "is required" },
  },
  email: {
    presence: { allowEmpty: false, message: "is required" },
    email: true,
    length: {
      maximum: 30,
    },
  },
  password: {
    presence: {
      allowEmpty: false,
      message: "is required",
    },
    length: {
      maximum: 20,
      minimum: 6,
      tooShort: "needs to have %{count} words or more",
    },
  },
  mobile: {
    presence: {
      allowEmpty: false,
      message: "is required",
    },
  },
};

const RegisterPage = () => {
  const [formData, setFormData] = React.useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });

  React.useEffect(() => {
    const errors = validate(formData.values, schema);

    let fetch = async () => {
      setFormData((formData) => ({
        ...formData,
        isValid: errors ? false : true,
        errors: errors || {},
      }));
    };
    return fetch;
  }, [formData.values]);

  const handleChange = (e) => {
    e.persist();
    setFormData((formData) => ({
      ...formData,
      values: { ...formData.values, [e.target.name]: e.target.value },
      touched: { ...formData.touched, [e.target.name]: true },
    }));
  };

  const hasError = (field) =>
    formData.touched[field] && formData.errors[field] ? true : false;
  const { email, password, name, mobile } = formData.values;

  const dispatch = useDispatch();
  const language = getCookie("language");

  const handleSubmit = async () => {
    const refer = Router.query.refer;
    const values = {
      ...formData.values,
    };
    dispatch(await register(values, refer));
  };

  const locale = useSelector((state) => state.locale);

  return (
    <Fragment>
      <Paper style={{ paddingBottom: 0 }}>
        <Grid container>
          <Grid item xs={1} sm={1} md={1} lg={2} xl={2}></Grid>
          <Grid item xs={10} sm={10} md={10} lg={8} xl={8}>
            <Typography
              variant="h4"
              color="primary"
              align="center"
              gutterBottom
              style={{ marginTop: 40 }}
            >
              {locale.register}
            </Typography>
            <br />
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <GoogleLogin message="Register with Google" />
              </Grid>
            </Grid>
            <br />
            <Typography style={{ textAlign: "center" }}>Or </Typography>
            <br />
            <form>
              <Fragment>
                <TextField
                  error={hasError("name")}
                  fullWidth
                  helperText={hasError("name") ? formData.errors.name[0] : null}
                  label={locale.name}
                  autoComplete="off"
                  name="name"
                  onChange={handleChange}
                  type="text"
                  value={name || ""}
                  variant="outlined"
                  autoFocus
                />
                <TextField
                  required
                  error={hasError("email")}
                  autoComplete="email"
                  name="email"
                  helperText={
                    hasError("email") ? formData.errors.email[0] : null
                  }
                  label={locale.email}
                  margin="normal"
                  onChange={handleChange}
                  value={email || ""}
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  required
                  label={locale.password}
                  name="password"
                  helperText={
                    hasError("password") ? formData.errors.password[0] : null
                  }
                  error={hasError("password")}
                  onChange={handleChange}
                  value={password || ""}
                  type="password"
                  margin="normal"
                  variant="outlined"
                  fullWidth
                />{" "}
                <TextField
                  required
                  label={locale.mobile}
                  name="mobile"
                  helperText={
                    hasError("mobile") ? formData.errors.mobile[0] : null
                  }
                  error={hasError("mobile")}
                  onChange={handleChange}
                  value={mobile || ""}
                  type="text"
                  margin="normal"
                  variant="outlined"
                  fullWidth
                />
                <br />
                <br />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                  fullWidth
                >
                  {locale.register}
                </Button>
              </Fragment>
            </form>
            <br />

            <Typography variant="body2" align="center">
              {locale.forgotPassword}
              <Link href="/forgotpassword"> Click here</Link>
            </Typography>
            <br />
            <div style={{ justifyContent: "center", display: "flex" }}>
              <Button variant="contained" onClick={() => Router.push("/login")}>
                {locale.login}
              </Button>
            </div>
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 20,
              }}
            >
              <Link href="/about/tc">
                <a style={{ textDecoration: "none" }}>
                  {" "}
                  {locale.termsAndCondition}
                </a>
              </Link>
              <Link href="/contactus">
                <a style={{ textDecoration: "none" }}>{locale.privacyNotice}</a>
              </Link>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </Fragment>
  );
};

export default RegisterPage;
