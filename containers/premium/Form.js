import React, { Fragment } from "react";
import validate from "validate.js";
import { Grid, Typography, TextField, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { useDispatch } from "react-redux";
import { premiumusercreate } from "../../store/actions/user/premium";
import { getCookie } from "../../utils/auth";
import axios from "axios";
import Router, { useRouter } from "next/router";

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
  name: {
    presence: {
      allowEmpty: false,
      message: "is required",
    },
  },
  mobile: {
    presence: {
      allowEmpty: false,
      message: "is required",
    },
  },
};
const PremiumForm = ({ amount }) => {
  //formRelated
  const router = useRouter();
  const [formData, setFormData] = React.useState({
    isValid: false,
    values: { refer: router.query.refer },
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
  const { refer, name, email, mobile } = formData.values;

  const handleSubmit = async () => {
    let data = {
      ...formData.values,
      amount,
      purpose: "Premium subscription request",
      message: "Subscription",
    };
    const token = getCookie("token");
    let res;
    if (token) {
      res = await axios.post(
        `${process.env.SERVER_API}/createpremiumrequest`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } else {
      res = await axios.post(
        `${process.env.SERVER_API}/createpremiumrequest`,
        data
      );
    }
    Router.push(res.data);
  };

  return (
    <Fragment>
      <Grid container>
        <Grid item xs={1} sm={1} md={1} lg={3} xl={4}></Grid>
        <Grid item xs={10} sm={10} md={10} lg={6} xl={6}>
          <Typography
            variant="h4"
            color="primary"
            align="center"
            gutterBottom
            style={{ marginTop: 40 }}
          >
            Premium user registration
          </Typography>
          <br />

          <form>
            <TextField
              required
              onChange={handleChange}
              label="Name"
              type="text"
              margin="normal"
              variant="outlined"
              helperText={hasError("name") ? formData.errors.name[0] : null}
              fullWidth
              error={hasError("name")}
              name="name"
              value={name || ""}
            />
            <TextField
              required
              onChange={handleChange}
              label="Email"
              margin="normal"
              variant="outlined"
              autoFocus
              value={email || ""}
              error={hasError("email")}
              helperText={hasError("email") ? formData.errors.email[0] : null}
              fullWidth
              name="email"
            />
            <TextField
              required
              onChange={handleChange}
              label="Mobile"
              type="text"
              margin="normal"
              variant="outlined"
              helperText={hasError("mobile") ? formData.errors.mobile[0] : null}
              fullWidth
              error={hasError("mobile")}
              name="mobile"
              value={mobile || ""}
            />
            <TextField
              onChange={handleChange}
              label="Refer id (Optional)"
              type="text"
              margin="normal"
              variant="outlined"
              fullWidth
              error={hasError("refer")}
              name="refer"
              value={refer || ""}
            />
            <div>
              <br />
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                fullWidth
              >
                Register
              </Button>
            </div>
          </form>
          <br />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default PremiumForm;
