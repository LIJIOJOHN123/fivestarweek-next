import React, { Fragment } from "react";
import validate from "validate.js";
import { Grid, Typography, TextField, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Link from "next/link";
import GoogleLogin from "./Google";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/actions/user/auth";
import Router from "next/router";

const useStyle = makeStyles((theme) => ({
  paper: {
    padding: "5%",
  },
}));
const schema = {
  email: {
    presence: { allowEmpty: false, message: "is required" },
    email: true,
    length: {
      maximum: 40,
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
};
const SignIn = () => {
  //formRelated
  const classes = useStyle();
  const locale = useSelector((state) => state.locale);
  const [formData, setFormData] = React.useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });
  React.useEffect(() => {
    const errors = validate(formData.values, schema);
    setFormData((formData) => ({
      ...formData,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
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
  const { email, password } = formData.values;
  const dispatch = useDispatch();
  const handleSubmit = async () => {
    dispatch(login(formData.values));
  };

  const buttons = (
    <Button
      variant="contained"
      color="primary"
      onClick={handleSubmit}
      fullWidth
    >
      {locale.login}
    </Button>
  );
  return (
    <Fragment>
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
            {locale.login}
          </Typography>

          <br />
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <GoogleLogin message="Login with Google" />
            </Grid>
          </Grid>
          <br />
          <Typography style={{ textAlign: "center" }}>Or </Typography>

          <br />

          <form>
            <TextField
              required
              onChange={handleChange}
              label={locale.email}
              margin="normal"
              variant="outlined"
              autoFocus
              value={email || ""}
              error={hasError("email")}
              helperText={hasError("email") ? formData.errors.email[0] : null}
              fullWidth
              name={"email"}
            />
            <TextField
              required
              onChange={handleChange}
              label={locale.password}
              type="password"
              margin="normal"
              variant="outlined"
              helperText={
                hasError("password") ? formData.errors.password[0] : null
              }
              fullWidth
              error={hasError("password")}
              name="password"
              value={password || ""}
            />
            <div>
              <br />
              {buttons}
            </div>
          </form>
          <br />
          <Typography variant="body2" align="center">
            {locale.forgotPassword}
            <Link href="/forgotpassword"> Click here</Link>
          </Typography>
          <br />
          <div style={{ justifyContent: "center", display: "flex" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => Router.push("/register")}
            >
              {locale.createAccount}
            </Button>
          </div>
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 30,
            }}
          >
            <Link href="/about/tc">
              <a style={{ textDecoration: "none" }}>
                {locale.termsAndCondition}
              </a>
            </Link>
            <Link href="/about/pn">
              <a style={{ textDecoration: "none" }}>{locale.privacyNotice}</a>
            </Link>
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default SignIn;
