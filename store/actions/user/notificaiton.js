import axios from "axios";
import { NOTIFICATION_LIST, NOTIFICATION_LISTS } from "../../type";
import { getCookie } from "../../../utils/auth";

export const notificationList = (limit) => async (dispatch) => {
  const token = getCookie("token");
  const res = await axios.get(
    `${process.env.SERVER_API}/user/notification?limit=${limit}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  dispatch({
    type: NOTIFICATION_LIST,
    payload: res.data,
    limit: limit,
  });
};

export const notificationsList = (limit) => async (dispatch) => {
  const token = getCookie("token");
  const res = await axios.get(
    `${process.env.SERVER_API}/user/notification?limit=${limit}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  dispatch({
    type: NOTIFICATION_LISTS,
    payload: res.data,
    limit: limit,
  });
};

export const notificationRead = (id, limit) => async (dispatch) => {
  const token = getCookie("token");
  const res = await axios.post(
    `${process.env.SERVER_API}/notification/read/${id}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  dispatch(notificationList(limit, token));
};

export const notificationAllRead = (limit) => async (dispatch) => {
  const token = getCookie("token");
  const res = await axios.post(
    `${process.env.SERVER_API}/notification/allread`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  dispatch(notificationList(limit));
};
