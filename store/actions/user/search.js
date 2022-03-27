import axios from "axios";
import { getCookie } from "../../../utils/auth";
import { POST_SEARCH_RESULT, PRE_SEARCH_RESULT } from "../../type";

export const presearchresult = () => async (dispatch) => {
  const res = await axios.get(`${process.env.SERVER_API}/presearchresult`);
  dispatch({
    type: PRE_SEARCH_RESULT,
    payload: res.data,
  });
};

export const postSearchResult =
  (query, limit, limits, limited, limiting) => async (dispatch) => {
    const token = getCookie("token");

    if (token) {
      let res = await axios.get(
        `${process.env.SERVER_API}/searching?key=${query}&&limit=${limit}&&limits=${limits}&&limited=${limited}&&limiting=${limiting}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({
        type: POST_SEARCH_RESULT,
        payload: res.data,
        query: query,
        limit: limit,
        limit: limits,
        limited: limited,
        limiting: limiting,
      });
    } else {
      let res = await axios.get(
        `${process.env.SERVER_API}/searching?key=${query}&&limit=${limit}&&limits=${limits}&&limited=${limited}&&limiting=${limiting}`,
        {}
      );
      dispatch({
        type: POST_SEARCH_RESULT,
        payload: res.data,
        query: query,
        limit: limit,
        limit: limits,
        limited: limited,
        limiting: limiting,
      });
    }
  };
