import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { countryLists, stateLists } from "../../../action/common";
import { addAdditionalChannelDetails } from "../../../store/actions/admin/user";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const AddChannelDetails = ({ id }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [country, setCountry] = React.useState("All");
  const [state, setState] = React.useState("All");
  const [countryList, setCountryList] = React.useState([]);
  const [stateList, setStateList] = React.useState([]);
  const [language, setLanguage] = React.useState("All");
  const [ids, setIds] = React.useState("");
  const [home, setHome] = React.useState("false");
  const handleChange = (event) => {
    if (event.target.value === "true") {
      setHome(true);
    } else {
      setHome(false);
    }
  };
  const [formData, setFormData] = React.useState({
    isValid: false,
    values: {},
    touched: {
      error: "It is not worth of it",
    },
    errors: {},
  });
  React.useEffect(async () => {
    const res = await countryLists();
    setCountryList(res.country);
  }, []);
  const languages = useSelector((state) => state.language);

  React.useEffect(() => {
    setFormData((formData) => ({
      ...formData,
    }));
  }, [formData.values]);

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

  const handleClickOpen = (ird) => {
    setOpen(true);
    setIds(ird);
  };
  const dispatch = useDispatch();
  const handleClose = async () => {
    setFormData({ ...formData, values: { ...formData.values } });
    setOpen(false);
    dispatch(
      addAdditionalChannelDetails(ids, { state, country, language, home }, 20)
    );
    await setFormData({ ...formData, values: {} });
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleClickOpen(id)}
      >
        Add Details
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            While coping link from third party websites make sure you copy them
            fully and correctly.
          </DialogContentText>
          <div>
            <div>
              <FormControl
                variant="outlined"
                className={classes.formControl}
                fullWidth
              >
                <InputLabel htmlFor="outlined-age-native-simple">
                  Language
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
            </div>
            <div>
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
            </div>
            <div>
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
            </div>
            <FormControl component="fieldset">
              <FormLabel component="legend">Home</FormLabel>
              <RadioGroup
                aria-label="home"
                name="home1"
                value={home}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="true"
                  control={<Radio />}
                  label="True"
                />
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  label="False"
                />
              </RadioGroup>
            </FormControl>
          </div>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default AddChannelDetails;
