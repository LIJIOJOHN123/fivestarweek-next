import axios from "axios";
import {
  ARTICLE_BY_ID,
  ARTICLE_CLEAR,
  ARTICLE_FOLLOWED_CHANNELS,
  ARTICLE_HOME,
  ARTICLE_SPONORE,
  ARTICLE_VIOLATION,
} from "../../type";
import { getCookie } from "../../../utils/auth";
import { channelArticle } from "./channel";
import { alertSet } from "./alert";

const token = getCookie("token");

//clean previous state
export const articleClearState = () => {
  return {
    type: ARTICLE_CLEAR,
  };
};

//get  single article

export const articleById = (id, limit, refresh) => async (dispatch) => {
  refresh === true && dispatch(articleClearState());
  const res = await axios.get(`${process.env.SERVER_API}/articles/${id}`);
  return dispatch({
    type: ARTICLE_BY_ID,
    payload: res.data,
  });
};
//get all the articles from followed channels
export const articleFollowChannel = (page) => async (dispatch) => {
  const tokens = getCookie("token");
  const res = await axios.get(
    `${process.env.SERVER_API}/ariclechannel/followers?page=${page}`,
    {
      headers: {
        Authorization: `Bearer ${tokens}`,
      },
    }
  );
  return dispatch({
    type: ARTICLE_FOLLOWED_CHANNELS,
    payload: res.data,
    page: page,
  });
};
//article like
export const articleLike = (id) => async (dispatch) => {
  const tokens = getCookie("token");
  try {
    await axios.post(
      `${process.env.SERVER_API}/article/${id}/like`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    dispatch(alertSet(error.response.data.message, "error"));
  }
};

//article unlike

export const articleUnlike = (id) => async (dispatch) => {
  const tokens = getCookie("token");

  try {
    await axios.post(
      `${process.env.SERVER_API}/article/${id}/unlike`,
      {},
      {
        headers: {
          Authorization: `Bearer ${tokens}`,
        },
      }
    );
  } catch (error) {
    dispatch(alertSet(error.response.data.message, "error"));
  }
};

//article delete
export const articleDelete = (id, channel, limit) => async (dispatch) => {
  const res = await axios.post(
    `${process.env.SERVER_API}/articles/delete/${id}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  dispatch(channelArticle(channel, limit, true));
  dispatch(alertSet("You have successufully deleted article", "success"));
};
//article violation
export const articleViolation = (formData, id) => async (dispatch) => {
  const res = await axios.post(
    `${process.env.SERVER_API}/article/violation/${id}`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  dispatch(
    alertSet(
      "Thank you for notifying us. We will review and take action immediately",
      "success"
    )
  );
  dispatch({
    type: ARTICLE_VIOLATION,
    payload: res.data,
    id: id,
  });
};

export const articleByIpAddress = (id) => async (dispatch) => {
  const ipdetails = await axios.get("https://extreme-ip-lookup.com/json/");
  await axios.post(
    `${process.env.SERVER_API}/article/ipvisitor/${id}`,
    ipdetails.data
  );
};
export const articleVisitByAuth = (id) => async (dispatch) => {
  try {
    const tokens = getCookie("token");
    await axios.post(
      `${process.env.SERVER_API}/article/${id}/visit`,
      {},
      {
        headers: {
          Authorization: `Bearer ${tokens}`,
        },
      }
    );
  } catch (error) {}
};
export const articleuserPreferece = (id) => async (dispatch) => {
  const tokens = getCookie("token");
  const ipdetails = await axios.get("https://extreme-ip-lookup.com/json/");
  await axios.post(
    `${process.env.SERVER_API}/userpreference/${id}`,
    ipdetails.data,
    {
      headers: {
        Authorization: `Bearer ${tokens}`,
      },
    }
  );
};

export const articleSponsorePublic = (limit) => async (dispatch) => {
  try {
    const tokens = getCookie("token");
    const res = await axios.get(
      `${process.env.SERVER_API}/articlesponsorelist?limit=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${tokens}`,
        },
      }
    );
    dispatch({
      type: ARTICLE_SPONORE,
      payload: res.data,
      limit: limit,
    });
  } catch (error) {
    console.log(error);
  }
};

export const articleHome = (limit) => async (dispatch) => {
  const language = getCookie("language");
  try {
    const res = await axios.get(
      `${process.env.SERVER_API}/article/home?language=${language}&&limit=${limit}`,
      {}
    );
    dispatch({
      type: ARTICLE_HOME,
      payload: res.data,
      limit: limit,
    });
  } catch (error) {
    console.log(error);
  }
};
