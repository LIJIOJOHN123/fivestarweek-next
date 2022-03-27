import React, { Fragment } from "react";
import validate from "validate.js";
import { Grid, Paper, Typography, TextField, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Link from "next/link";
import Router from "next/router";
import { resetPassword } from "../../utils/auth";

const useStyle = makeStyles((theme) => ({
  paper: {
    padding: "5%",
  },
  button: {
    paddingLeft: "35%",
  },
}));
const schema = {
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
const SignIn = ({ token }) => {
  //context

  //formRelated
  const classes = useStyle();
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
  const { password } = formData.values;
  const handleSubmit = async () => {
    setFormData({ ...formData, values: { ...formData.values } });
    const user = { password };
    await resetPassword(user, token);
    await Router.push("/login");
  };

  const buttons = (
    <Button
      variant="contained"
      color="primary"
      onClick={handleSubmit}
      disabled={!formData.isValid}
    >
      SUBMIT
    </Button>
  );

  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}></Grid>
        <Grid item xs={12} sm={12} md={6} lg={5} xl={5}>
          <Paper className={classes.paper}>
            <Typography
              variant="h4"
              color="primary"
              align="center"
              gutterBottom
            >
              Reset your password
            </Typography>

            <br />
            <form>
              <TextField
                required
                onChange={handleChange}
                label="Password"
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
              <div className={classes.button}>{buttons}</div>
            </form>
            <br />
            <Typography>
              Do not have accout?
              <Link href="/register"> Register</Link>
            </Typography>
            <Typography style={{ textDecoration: "none" }} variant="body2">
              Have account ?<Link href="/login"> Login</Link>
            </Typography>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Link href="/about/tc">
                <a style={{ textDecoration: "none" }}> Terms and condtion</a>
              </Link>
              <Link href="/contactus">
                <a style={{ textDecoration: "none" }}>Privacy Notice</a>
              </Link>
              <Link href="/contactus">
                <a style={{ textDecoration: "none" }}>Tutorial</a>
              </Link>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default SignIn;
