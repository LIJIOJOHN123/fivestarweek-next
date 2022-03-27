import Router from "next/router";
import axios from "axios";
import {
  authenticate,
  getCookie,
  removeCookie,
  removeLocalStorage,
} from "../../../utils/auth";
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT,
  GOOGLE_LOGIN_SUCCESS,
  GOOGLE_LOGIN_FAIL,
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL,
  AUTH_LOADED,
  AUTH_USER_EDIT,
  AUTH_USER_EMAIL_CHANGE,
  AUTH_USER_PASSWORD_CHANGE,
  AUTH_USERNAME_CHANGE,
  PROFILE_EDIT_ERROR,
  PUBLIC_PROFILE,
  PUBLIC_REFER_MESSAGE,
} from "../../type";
import { alertSet } from "../user/alert";

//login as a user
export const login = (formData) => async (dispatch) => {
  try {
    let res = await axios.post(`${process.env.SERVER_API}/login`, formData);
    await authenticate(res.data, () => {
      Router.push("/home");
      dispatch(alertSet("You have successfully logged in", "success"));
    });

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    await dispatch(alertSet(error.response.data.message, "error"));
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.message,
    });
  }
};

//register
export const register = (formData, refer) => async (dispatch) => {
  try {
    let res = await axios.post(
      `${process.env.SERVER_API}/register?refer=${refer}`,
      formData
    );
    await authenticate(res.data, () => {
      Router.push("/home");
    });

    await dispatch(alertSet("You have successfully registered", "success"));
    await axios.post(
      `${process.env.SERVER_API}/refer/link`,
      {},
      {
        headers: {
          Authorization: `Bearer ${res.data.token}`,
        },
      }
    );
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    await dispatch(alertSet(error.response.data.message, "error"));
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data.message,
    });
  }
};
// login / register as user

export const googleLogin = (formData) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${process.env.SERVER_API}/google_login`,
      formData
    );
    await authenticate(res.data, () => {
      Router.push("/home");
      dispatch(alertSet("You have successfully logged in", "success"));
    });

    dispatch({
      type: GOOGLE_LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GOOGLE_LOGIN_FAIL,
      payload: error.response.data.message,
    });
  }
};
// login  or register a s user
export const facebookLogin = async (formData) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${process.env.SERVER_API}/facebook_login`,
      formData
    );
    await authenticate(res.data, () => {
      Router.push("/home");
    });
    await dispatch(alertSet("You have successfully logged in", "success"));
    dispatch({
      type: FACEBOOK_LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: FACEBOOK_LOGIN_FAIL,
      payload: error.response.data.message,
    });
  }
};
// if user is authenticated = persist
export const authUserLoaded = (tokens) => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.SERVER_API}/user`, {
      headers: {
        Authorization: `Bearer ${tokens}`,
      },
    });
    return dispatch({
      type: AUTH_LOADED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL });
  }
};

// logout as user

export const logout = (token, next) => async (dispatch) => {
  const token = getCookie("token");
  removeCookie("token");
  removeLocalStorage("user");
  next();
  dispatch(alertSet("You have successfully logged out", "success"));

  try {
    const res = await axios.post(
      `${process.env.SERVER_API}/logout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch({
      type: LOGOUT,
      payload: res.data,
    });
  } catch (error) {}
};

export const profileEdit = (formData) => async (dispatch) => {
  const token = getCookie("token");
  try {
    let res = await axios.put(`${process.env.SERVER_API}/user`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(alertSet("You have successfully updated your profile", "success"));

    dispatch({
      type: AUTH_USER_EDIT,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    await dispatch(alertSet(error.response, "error"));
    dispatch({
      type: PROFILE_EDIT_ERROR,
      payload: error.response.data.message,
    });
  }
};

export const emailChange = (formData) => async (dispatch) => {
  const token = getCookie("token");
  try {
    let res = await axios.post(
      `${process.env.SERVER_API}/changeemail`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(alertSet("You have successfully updated your email", "success"));
    dispatch({
      type: AUTH_USER_EMAIL_CHANGE,
      payload: res.data,
    });
  } catch (error) {
    await dispatch(alertSet(error.response.data.message, "error"));
    dispatch({
      type: PROFILE_EDIT_ERROR,
      payload: error.response.data.message,
    });
  }
};

export const passwordChange = (formData) => async (dispatch) => {
  const token = getCookie("token");
  try {
    let res = await axios.post(
      `${process.env.SERVER_API}/changepassword`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    await dispatch(
      alertSet("Your password has been updated successfully!", "success")
    );

    dispatch({
      type: AUTH_USER_PASSWORD_CHANGE,
      payload: res.data,
    });
  } catch (error) {
    await dispatch(alertSet(error.response.data.message, "error"));
    dispatch({
      type: PROFILE_EDIT_ERROR,
      payload: error.response.data.message,
    });
  }
};
export const userNameChange = (formData) => async (dispatch) => {
  const token = getCookie("token");

  try {
    let res = await axios.patch(
      `${process.env.SERVER_API}/user/userName`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(
      alertSet("You have successfully updated your username", "success")
    );
    dispatch({
      type: AUTH_USERNAME_CHANGE,
      payload: res.data,
    });
  } catch (error) {
    await dispatch(alertSet(error.response.data.message, "error"));
    dispatch({
      type: PROFILE_EDIT_ERROR,
      payload: error.response.data.message,
    });
  }
};

export const publicProfile = (id) => async (dispatch) => {
  const token = getCookie("token");

  const res = await axios.get(
    `${process.env.SERVER_API}/getpublicprofile/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return dispatch({
    type: PUBLIC_PROFILE,
    payload: res.data,
  });
};

export const forgotPassword = (formData) => async (dispatch) => {
  const res = await axios.put(
    `${process.env.SERVER_API}/forgot_password`,
    formData
  );
};

export const publicReferalMessage = (user) => async (dispatch) => {
  const res = await axios.get(
    `${process.env.SERVER_API}/referbyuser?user=${user}`
  );
  return dispatch({
    type: PUBLIC_REFER_MESSAGE,
    payload: res.data,
  });
};

export const sendEmailInvitation = (email) => async (dispatch) => {
  const tokens = getCookie("token");
  const res = await axios.post(
    `${process.env.SERVER_API}/sendemailinviation`,
    {
      email,
    },
    {
      headers: {
        Authorization: `Bearer ${tokens}`,
      },
    }
  );
  return dispatch({
    type: PUBLIC_REFER_MESSAGE,
    payload: res.data,
  });
};

export const emailOTPverify = (otp) => async (dispatch) => {
  const tokens = getCookie("token");
  const res = await axios.post(
    `${process.env.SERVER_API}/emailverifyonline`,
    {
      otp,
    },
    {
      headers: {
        Authorization: `Bearer ${tokens}`,
      },
    }
  );
  return dispatch({
    type: PUBLIC_REFER_MESSAGE,
  });
};

export const premiumUser = (formData) => async (dispatch) => {
  const tokens = getCookie("token");
  const res = await axios.post(
    `${process.env.SERVER_API}/userpremium`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${tokens}`,
      },
    }
  );
};
