import axios from "axios";
import { LANGUAGE_LIST } from "../../type";

export const languageList = () => async (dispatch) => {
  const res = await axios.get(`${process.env.SERVER_API}/languages`);
  dispatch({
    type: LANGUAGE_LIST,
    payload: res.data,
  });
};
