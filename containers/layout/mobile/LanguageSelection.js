import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCookie, setCookie } from "../../../utils/auth";
import { localeList } from "../../../store/actions/user/locale";
import { profileEdit } from "../../../store/actions/user/auth";
import { articleHome } from "../../../store/actions/user/article";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
export default function RadioButtonsGroup() {
  const item = getCookie("language");
  const [value, setValue] = React.useState(item);
  const dispatch = useDispatch();
  const token = getCookie("token");
  const languages = useSelector((state) => state.language);

  const handleChange = async (event) => {
    setValue(event.target.value);
    await setCookie("language", event.target.value);
    dispatch(articleHome());
    if (token) {
      dispatch(profileEdit({ value: event.target.value }));
    }
    let one = languages.languages.find(
      (item) => item._id === event.target.value
    );
    dispatch(localeList(one.language));
    await setCookie("languageName", one.language);
  };
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Select Your Langauge</FormLabel>
      <br />
      <RadioGroup
        aria-label="langauge"
        name="language"
        value={value}
        onChange={handleChange}
      >
        {languages.languages.map((language) => {
          return (
            <Fragment key={language._id}>
              <FormControlLabel
                value={language._id}
                control={<Radio />}
                label={language.languageLoc}
              />
              <br />
            </Fragment>
          );
        })}
      </RadioGroup>
    </FormControl>
  );
}
