import { getCookie } from "../../../utils/auth";
import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  AUTH_LOADED,
  LOGOUT,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  GOOGLE_LOGIN_FAIL,
  FACEBOOK_LOGIN_FAIL,
  FACEBOOK_LOGIN_SUCCESS,
  GOOGLE_LOGIN_SUCCESS,
  AUTH_USER_EDIT,
  AUTH_USER_EMAIL_CHANGE,
  AUTH_USER_PASSWORD_CHANGE,
  AUTH_USERNAME_CHANGE,
  PUBLIC_PROFILE,
  PUBLIC_REFER_MESSAGE,
} from "../../type";

const intialState = {
  // token: getCookie("token"),
  isAuthenticated: false,
  loading: true,
  user: null,
  publicProfile: {},
  languages: [],
  refer: {},
};

const authReducer = (state = intialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
    case FACEBOOK_LOGIN_SUCCESS:
    case GOOGLE_LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        isAuthenticated: true,
        loading: false,
        user: action.payload.user,
      };
    case LOGIN_FAIL:
    case REGISTER_FAIL:
    case GOOGLE_LOGIN_FAIL:
    case FACEBOOK_LOGIN_FAIL:
      return {
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    case AUTH_LOADED:
      return {
        ...state,
        loading: false,
        user: action.payload,
        token: state.token,
        isAuthenticated: true,
      };
    case AUTH_USER_EDIT:
    case AUTH_USER_EMAIL_CHANGE:
    case AUTH_USER_PASSWORD_CHANGE:
    case AUTH_USERNAME_CHANGE:
      return {
        ...state,
        loading: false,
        user: action.payload,
        isAuthenticated: true,
      };
    case LOGOUT:
      return {
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    case PUBLIC_PROFILE:
      return {
        ...state,
        publicProfile: action.payload,
      };
    case PUBLIC_REFER_MESSAGE:
      return {
        ...state,
        refer: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default authReducer;
