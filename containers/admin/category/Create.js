import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import validate from "validate.js";
import { useDispatch, useSelector } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { LANGUAGE_LIST } from "../../../store/type";
import { categoryCreate } from "../../../store/actions/admin/user";
// import { channelCreateArticle } from "../../../store/actions/user/channel";

const schema = {
  category: {
    presence: { allowEmpty: false, message: "is required" },
  },
  localCategory: {
    presence: { allowEmpty: false, message: "is required" },
  },
};

const CategoryCreate = ({ id }) => {
  const [open, setOpen] = React.useState(false);
  const [language, setLanguage] = React.useState("");
  const [formData, setFormData] = React.useState({
    isValid: false,
    values: {
      link: "",
    },
    touched: {
      error: "It is not worth of it",
    },
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
      error: false,
    }));
  };
  const hasError = (field) =>
    formData.touched[field] && formData.errors[field] ? true : false;
  const { category, localCategory } = formData.values;

  const handleClickOpen = () => {
    setOpen(true);
  };
  const dispatch = useDispatch();
  const handleClose1 = async () => {
    //     setFormData({ ...formData, values: { ...formData.values } });
    let form = { ...formData.values, language };
    setOpen(false);
    dispatch(categoryCreate(form));
    await setFormData({
      ...formData,
      values: { category: "", localCategory: "" },
    });
  };
  const handleClose = async () => {
    setOpen(false);
  };
  const locale = useSelector((state) => state.locale);
  const languages = useSelector((state) => state.language);
  const handleChange1 = (event) => {
    setLanguage(event.target.value);
  };
  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        {locale.createPost}{" "}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Submit your link</DialogTitle>
        <DialogContent>
          <DialogContentText>
            While coping link from third party websites make sure you copy them
            fully and correctly.
          </DialogContentText>
          <TextField
            required
            value={category || ""}
            onChange={handleChange}
            label="Category"
            margin="normal"
            variant="outlined"
            autoFocus
            fullWidth
            name="category"
            error={hasError("category")}
            helperText={
              hasError("category") ? formData.errors.category[0] : null
            }
          />
          <TextField
            required
            value={localCategory || ""}
            onChange={handleChange}
            label="Local Category"
            margin="normal"
            variant="outlined"
            autoFocus
            fullWidth
            name="localCategory"
            error={hasError("localCategory")}
            helperText={
              hasError("localCategory")
                ? formData.errors.localCategory[0]
                : null
            }
          />
          <FormControl variant="outlined" style={{ width: 150 }}>
            <InputLabel id="demo-simple-select-outlined-label">
              Language
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={language}
              onChange={handleChange1}
              label="Age"
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {languages.languages.map((item) => (
                <MenuItem key={item._id} value={item._id}>
                  {item.language}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleClose1}
            color="primary"
            disabled={!formData.isValid}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default CategoryCreate;
