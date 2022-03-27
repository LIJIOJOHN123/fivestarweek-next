import { getCookie } from "../../../utils/auth";
import { LANGUAGE_LIST } from "../../type";

const intialState = {
  languages: [],
  loading: true,
  // language: getCookie("language"),
};

const languageReducer = (state = intialState, action) => {
  switch (action.type) {
    case LANGUAGE_LIST:
      return {
        ...state,
        languages: action.payload,
        langauage: getCookie("language"),
        loading: false,
      };

    default:
      return {
        ...state,
      };
  }
};

export default languageReducer;
