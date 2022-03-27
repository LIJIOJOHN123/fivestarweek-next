import { LOCALE_LIST } from "../../type";

export const localeList = (result) => (dispatch) => {
  dispatch({ type: LOCALE_LIST, payload: result });
};
