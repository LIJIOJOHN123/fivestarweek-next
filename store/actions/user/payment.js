import axios from "axios";
import { getCookie } from "../../../utils/auth";
import {
  BANK_ACCOUNT_EDIT,
  EARNING_LIST,
  PAYMENT_LIST,
  SCORE_LIST,
  WITHDRAW_REQUEST,
} from "../../type";
import { alertSet } from "./alert";
export const paymentList = () => async (dispatch) => {
  const token = getCookie("token");
  const res = await axios.get(`${process.env.SERVER_API}/user/transactions`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  dispatch({
    type: PAYMENT_LIST,
    payload: res.data,
  });
};

export const scoreList = (limit) => async (dispatch) => {
  const token = getCookie("token");
  const res = await axios.get(
    `${process.env.SERVER_API}/scorelist?limit=${limit}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  dispatch({
    type: SCORE_LIST,
    payload: res.data,
  });
};
export const scoreSocialMedia = () => async (dispatch) => {
  const token = getCookie("token");
  try {
    const res = await axios.post(
      `${process.env.SERVER_API}/scoresocial`,
      { requestedPoint: 500 },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(
      alertSet("Your request has been submitted successfully", "success")
    );
  } catch (error) {
    await dispatch(alertSet(error.response.data, "error"));
  }
};

export const earninList = (limit) => async (dispatch) => {
  const token = getCookie("token");
  const res = await axios.get(
    `${process.env.SERVER_API}/earnings?limit=${limit}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  dispatch({
    type: EARNING_LIST,
    payload: res.data,
  });
};

export const withdrawalRequest = (formData) => async (dispatch) => {
  const token = getCookie("token");
  try {
    const res = await axios.post(
      `${process.env.SERVER_API}/withdraw`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: WITHDRAW_REQUEST,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addBankDetails = (formData) => async (dispatch) => {
  const token = getCookie("token");
  try {
    const res = await axios.post(
      `${process.env.SERVER_API}/bankaccount`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(earninList(50));
  } catch (error) {
    console.log(error);
  }
};
export const editBankAccount = (formData) => async (dispatch) => {
  const token = getCookie("token");
  try {
    const res = await axios.put(
      `${process.env.SERVER_API}/earnings`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: BANK_ACCOUNT_EDIT,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
