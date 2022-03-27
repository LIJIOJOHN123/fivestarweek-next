import axios from "axios";
import {
  REPLY_CLEAR,
  REPLY_ERROR,
  REPLY_LIST,
  REPLY_VIOLATION,
} from "../../type";
import { getCookie } from "../../../utils/auth";
import { alertSet } from "./alert";

const token = getCookie("token");
const replyClear = () => {
  return { type: REPLY_CLEAR };
};
export const replyList =
  (id, refresh = true) =>
  async (dispatch) => {
    refresh === false && dispatch(replyClear);
    const res = await axios.get(
      `${process.env.SERVER_API}/comment/${id}/reply`
    );
    return dispatch({
      type: REPLY_LIST,
      payload: res.data,
    });
  };

export const replyCreate = (formData, id) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${process.env.SERVER_API}/comment/${id}/reply`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(alertSet("Your reply has been created successfully!", "success"));
    dispatch(replyList(id, false));
  } catch (error) {
    dispatch(alertSet(error.response.data.message, "error"));
    dispatch({
      type: REPLY_ERROR,
      payload: error.response.data.message,
    });
  }
};

export const replyDelete = (id) => async (dispatch) => {
  const res = await axios.post(
    `${process.env.SERVER_API}/reply/block/${id}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  dispatch(alertSet("Your reply has been delete successfully!", "success"));
  dispatch(replyList(id, false));
};

export const replyLike = (id, comment) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${process.env.SERVER_API}/reply/${id}/like`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(replyList(comment, false));
  } catch (error) {
    dispatch(alertSet(error.response.data.message, "error"));
  }
};

export const replyUnlike = (id, comment) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${process.env.SERVER_API}/reply/${id}/unlike`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(replyList(comment, false));
  } catch (error) {
    dispatch(alertSet(error.response.data.message, "error"));
  }
};
export const replyViolation = (formData, id) => async (dispatch) => {
  const res = await axios.post(
    `${process.env.SERVER_API}/reply/violation/${id}`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  dispatch(
    alertSet(
      "Thanks you for notifying us. We will review and take action soon.",
      "success"
    )
  );
  dispatch({
    type: REPLY_VIOLATION,
  });
};
