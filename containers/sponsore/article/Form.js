import React, { Fragment } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import validate from "validate.js";
import { Grid, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@mui/styles";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { countryLists, stateLists } from "../../../action/common";
import { useDispatch, useSelector } from "react-redux";
import { paymentList } from "../../../store/actions/user/payment";
import Router from "next/router";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
const schema = {
  title: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      minimum: 6,
      maximum: 40,
    },
  },
  description: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      minimum: 6,
      maximum: 130,
    },
  },
  askedViews: {
    presence: { allowEmpty: false, message: "is required" },
  },
  redirect: {
    presence: { allowEmpty: false, message: "is required" },
  },
};
const age = [
  12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
  50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68,
  69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87,
  88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
];

const FormArticle = ({ ouSubmit, ids, buttonName, titles }) => {
  let [formData, setFormData] = React.useState({
    isValid: false,
    values: {
      title: "This is all about my article",
      description: "About my article promotion",
      askedViews: 1000,
      redirect:
        "https://www.cricbuzz.com/cricket-news/119480/bangladesh-bounce-back-with-stifling-win-over-oman",
    },
    touched: { error: "Please give me something" },
    errors: {},
  });
  const classes = useStyles();
  const [gender, setGender] = React.useState("All");
  const [country, setCountry] = React.useState("All");
  const [state, setState] = React.useState("All");
  const [ageFrom, setAgeFrom] = React.useState(12);
  const [ageTo, setAgeTo] = React.useState(100);
  const [countryList, setCountryList] = React.useState([]);
  const [stateList, setStateList] = React.useState([]);
  const [language, setLanguage] = React.useState("All");
  const [open, setOpen] = React.useState(false);
  React.useEffect(async () => {
    const res = await countryLists();
    setCountryList(res.country);
  }, []);
  const languages = useSelector((state) => state.language);
  React.useEffect(() => {
    const errors = validate(formData.values, schema);
    setFormData((formData) => ({
      ...formData,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formData.values]);

  const handleChange = (e) => {
    setFormData((formData) => ({
      ...formData,
      values: { ...formData.values, [e.target.name]: e.target.value },
      touched: { ...formData.touched, [e.target.name]: true },
    }));
  };

  const handleChanges = (e) => {
    setFormData((formData) => ({
      ...formData,
      values: {
        ...formData.values,
        [e.target.name]: e.target.value.replace(/[^0-9]/g),
      },
      touched: { ...formData.touched, [e.target.name]: true },
    }));
  };

  const hasError = (field) =>
    formData.touched[field] && formData.errors[field] ? true : false;
  const { title, description, askedViews, redirect } = formData.values;

  const handleChangeGender = (e) => {
    setGender(e.target.value);
  };
  const handleClose = async (event) => {
    setFormData({
      ...formData,
      values: {
        title: "About my article promotion",
        description: "About my article promotion",
        askedViews: 1000,
      },
    });
    await ouSubmit({
      ...formData.values,
      articleId: ids,
      country,

      state,
      ageFrom,
      ageTo,
      gender,
      language,
      estimate: formData.values.askedViews * (0.1).toFixed(2),
    });

    await setFormData({
      ...formData,
      values: { channel: "", description: "", introduction: "", keywords: "" },
    });
    await Router.push("/publisher/list");
  };
  const handelChangeCountry = async (e) => {
    setCountry(e.target.value);
    if (e.target.value === "All") {
    } else {
      const res = await stateLists(e.target.value);
      await setStateList(res.state);
    }
  };
  const handelChangeState = async (e) => {
    setState(e.target.value);
    if (e.target.value === "All") {
    }
  };
  let handleChangeLanguage = async (e) => {
    setLanguage(e.target.value);
  };
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(paymentList());
  }, []);
  const payment = useSelector((state) => state.payment);
  const cashinhand = payment.payment[0] ? payment.payment[0].balance : 0;
  let total = formData.values.askedViews * 0.1;

  const cashvalue = cashinhand < 0 || cashinhand < total ? true : false;
  const views = (
    <Fragment>
      <Grid container>
        <Grid item xs={1} sm={1} md={1} lg={3} xl={2}></Grid>
        <Grid item xs={10} sm={10} md={10} lg={6} xl={8}>
          <Typography variant="h4" color="primary" align="center" gutterBottom>
            {titles}
          </Typography>
          <TextField
            autoFocus
            value={title || ""}
            onChange={handleChange}
            id="title"
            label="Title"
            type="emachannelil"
            margin="normal"
            variant="outlined"
            fullWidth
            name="title"
            error={hasError("title")}
            helperText={hasError("title") ? formData.errors.title[0] : null}
          />
          <TextField
            value={description || ""}
            onChange={handleChange}
            id="description"
            label="Description"
            type="text"
            margin="normal"
            variant="outlined"
            fullWidth
            error={hasError("description")}
            name="description"
            helperText={
              hasError("description") ? formData.errors.description[0] : null
            }
          />
          <TextField
            value={askedViews}
            onChange={handleChanges}
            id="askedViews"
            label="Required view"
            type="number"
            margin="normal"
            variant="outlined"
            name="askedViews"
            error={hasError("askedViews")}
            helperText={
              hasError("askedViews") ? formData.errors.askedViews[0] : null
            }
          />
          <TextField
            value={redirect || ""}
            onChange={handleChange}
            id="description"
            label="Redirect"
            type="text"
            margin="normal"
            variant="outlined"
            fullWidth
            name="redirect"
            helperText={
              hasError("description") ? formData.errors.description[0] : null
            }
          />
          <br />
          <br />
          {/* <Button gutterBottom onClick={() => setOpen(!open)}>
            Advanced Setting{" "}
          </Button>
          <br />
          {open ? (
            <Fragment>
              <Typography
                color="primary"
                style={{ marginTop: 20, marginBottom: 20 }}
              >
                Partipants qualification
              </Typography>
              <div
                style={{ display: "flex", flexGrow: 1, flexDirection: "row" }}
              >
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Age from
                  </InputLabel>
                  <Select
                    native
                    value={ageFrom}
                    onChange={(e) => setAgeFrom(e.target.value)}
                    style={{ marginLeft: -8 }}
                    label="Age from "
                    inputProps={{
                      name: "age",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    {age.map((item) => (
                      <option key={item._id} value={item}>
                        {item}
                      </option>
                    ))}
                  </Select>
                </FormControl>
                <div style={{ marginLeft: 20 }}>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel htmlFor="outlined-age-native-simple">
                      Age to
                    </InputLabel>
                    <Select
                      native
                      value={ageTo}
                      onChange={(e) => setAgeTo(e.target.value)}
                      style={{ marginLeft: -8 }}
                      label="Age"
                      inputProps={{
                        name: "age",
                        id: "outlined-age-native-simple",
                      }}
                    >
                      {age.map((item, index) => (
                        <option
                          key={item._id}
                          value={age[age.length - 1 - index]}
                        >
                          {age[age.length - 1 - index]}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </div>
              <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                  aria-label="gender"
                  name="gender1"
                  value={gender}
                  onChange={handleChangeGender}
                  className={classes.radios}
                  row
                >
                  <FormControlLabel
                    value="All"
                    control={<Radio />}
                    label="All"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />

                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
              <FormControl
                variant="outlined"
                className={classes.formControl}
                fullWidth
              >
                <InputLabel htmlFor="outlined-age-native-simple">
                  Langauge
                </InputLabel>
                <Select
                  native
                  value={language}
                  onChange={(e) => handleChangeLanguage(e)}
                  style={{ marginLeft: -8 }}
                  label="Language"
                  inputProps={{
                    name: "language",
                    id: "outlined-age-native-simple",
                  }}
                >
                  <option value="All">All</option>
                  {languages.languages.map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.language}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <FormControl
                variant="outlined"
                className={classes.formControl}
                fullWidth
              >
                <InputLabel htmlFor="outlined-age-native-simple">
                  Country
                </InputLabel>
                <Select
                  native
                  value={country}
                  onChange={(e) => handelChangeCountry(e)}
                  style={{ marginLeft: -8 }}
                  label="Age"
                  inputProps={{
                    name: "age",
                    id: "outlined-age-native-simple",
                  }}
                >
                  <option value="All">Global</option>
                  {countryList.map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.country}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <FormControl
                variant="outlined"
                className={classes.formControl}
                fullWidth
              >
                <InputLabel htmlFor="outlined-age-native-simple">
                  State
                </InputLabel>
                <Select
                  native
                  value={state}
                  onChange={(e) => handelChangeState(e, country)}
                  style={{ marginLeft: -8 }}
                  label="State"
                  inputProps={{
                    name: "state",
                    id: "outlined-age-native-simple",
                  }}
                >
                  <option value="All">All</option>
                  {stateList.map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.state}
                    </option>
                  ))}
                </Select>
              </FormControl>
            </Fragment>
          ) : (
            ""
          )} */}
          <br />
          <br />
          <Typography variant="h6" color="primary">
            Estimated expense
          </Typography>
          <br />
          <Typography>balance:{cashinhand.toFixed(2)}</Typography>
          <br />
          <Typography>Estimated price :{total.toFixed(2)}</Typography>
          <br />
          <br />
          {cashinhand < total && (
            <Typography>
              You do not have suffient balance in your account. Please recharge
            </Typography>
          )}
          <Button
            color="primary"
            onClick={() => Router.push("/publisher/list")}
          >
            Cancel
          </Button>
          <Button
            disabled={cashvalue}
            onClick={handleClose}
            color="primary"
            variant="contained"
          >
            {buttonName}
          </Button>
        </Grid>
      </Grid>
      <br />
      <br />
    </Fragment>
  );
  return <Fragment>{views}</Fragment>;
};

export default FormArticle;
