import axios from "axios";
import { CATEGORY_BY_ID, CATEGORY_LIST, CATEGORY_CLEAR } from "../../type";
import { getCookie } from "../../../utils/auth";

const categoryClear = () => {
  return { type: CATEGORY_CLEAR };
};
export const categoryList = (limit, id) => async (dispatch) => {
  const res = await axios.get(
    `${process.env.SERVER_API}/categorylist/${id}?limit=${limit}`
  );
  return dispatch({
    type: CATEGORY_LIST,
    payload: res.data,
    limit: limit,
  });
};
export const categoryById = (id, limit, loading) => async (dispatch) => {
  loading === true && dispatch(categoryClear());
  const res = await axios.get(
    `${process.env.SERVER_API}/category_by_id_website/${id}?limit=${limit}`
  );
  return dispatch({
    type: CATEGORY_BY_ID,
    payload: res.data,
    limit: limit,
  });
};

export const categorySubscribe = (id, limit) => async (dispatch) => {
  const token = getCookie("token");
  try {
    await axios.post(
      `${process.env.SERVER_API}/category_subscribe//${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(categoryList(limit));
  } catch (error) {}
};

export const categoryUnsubsribe = (id, limit) => async (dispatch) => {
  const token = getCookie("token");
  try {
    await axios.post(
      `${process.env.SERVER_API}/category_unsubscribe/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(categoryList(limit));
  } catch (error) {}
};
