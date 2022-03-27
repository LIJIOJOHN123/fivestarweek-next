import axios from "axios";
import { getCookie } from "../../../utils/auth";
import {
  COMMENT_BY_ID,
  COMMENT_CLEAR,
  COMMENT_ERROR,
  COMMENT_LIST,
  COMMENT_USER,
  COMMENT_VIOLATION,
} from "../../type";
import { alertSet } from "./alert";

const token = getCookie("token");
const commentClear = () => {
  return { type: COMMENT_CLEAR };
};

export const commentList = (id, limit) => async (dispatch) => {
  const res = await axios.get(
    `${process.env.SERVER_API}/articles/${id}/comments?limit=${limit}`
  );
  dispatch({
    type: COMMENT_LIST,
    payload: res.data,
    limit: limit,
  });
};
export const commentById = (id, value) => async (dispatch) => {
  value !== true && dispatch(commentClear());
  const res = await axios.get(`${process.env.SERVER_API}/comments/${id}`);
  dispatch({ type: COMMENT_BY_ID, payload: res.data });
};

export const commentCreate = (formData, id, limit) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${process.env.SERVER_API}/article/${id}/comment`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(alertSet("You comment has been posted successfully!", "success"));
    dispatch(commentList(id, limit));
  } catch (error) {
    dispatch(alertSet(error.response.data.message, "error"));
    dispatch({
      type: COMMENT_ERROR,
      payload: error.response.data.message,
    });
  }
};

export const commentEdit = (formData, id, artId, limit) => async (dispatch) => {
  try {
    const res = await axios.put(
      `${process.env.SERVER_API}/comment/${id}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(commentList(artId, limit));
    dispatch(alertSet("You comment has been updated successfully!", "success"));
  } catch (error) {
    dispatch(alertSet(error.response.data.message, "error"));
  }
};

export const commentDelete = (id, posts, limit) => async (dispatch) => {
  const res = await axios.post(
    `${process.env.SERVER_API}/comment/block/${id}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  dispatch(commentList(posts, limit));
  dispatch(alertSet("You comment has been deleted successfully!", "success"));
};

export const commentLike = (id, article, limit) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${process.env.SERVER_API}/comment/${id}/like`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(commentById(id, true));
    dispatch(commentList(article, limit));
  } catch (error) {
    dispatch(alertSet(error.response.data.message, "error"));
  }
};

export const commentUnlike = (id, article, limit) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${process.env.SERVER_API}/comment/${id}/unlike`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(commentById(id, true));
    dispatch(commentList(article, limit));
  } catch (error) {
    dispatch(alertSet(error.response.data.message, "error"));
  }
};
export const commentViolation = (formData, id) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${process.env.SERVER_API}/comment/violation/${id}`,
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
      type: COMMENT_VIOLATION,
    });
  } catch (error) {}
};

export const commetByUser = (id, limit) => async (dispatch) => {
  const res = await axios.get(
    `${process.env.SERVER_API}/commentsbyuser?limit=${limit}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  dispatch({
    type: COMMENT_USER,
    payload: res.data,
    limit: limit,
  });
};
