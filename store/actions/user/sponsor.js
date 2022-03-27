import axios from "axios";
import { getCookie } from "../../../utils/auth";
import { USER_SPONSORE_LIST } from "../../type";

//user sponsored list
export const userSponsoredList = () => async (dispatch) => {
  const token = getCookie("token");
  const res = await axios.get(`${process.env.SERVER_API}/sponsoruserlist`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return dispatch({
    type: USER_SPONSORE_LIST,
    payload: res.data,
  });
};

export const createChannelSponsore = (formData) => async (dispatch) => {
  const token = getCookie("token");
  const res = await axios.post(
    `${process.env.SERVER_API}/channelsponsor`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  dispatch(userSponsoredList());
};
export const createArticleSponsore = (formData) => async (dispatch) => {
  const token = getCookie("token");
  const res = await axios.post(
    `${process.env.SERVER_API}/articlesponsor`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  dispatch(userSponsoredList());
};

export const channelSponsoreDelete = (id) => async (dispatch) => {
  const token = getCookie("token");
  const res = await axios.post(
    `${process.env.SERVER_API}/channelsponsordelete/${id}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  dispatch(userSponsoredList());
};

export const articleSponsoreDelete = (id) => async (dispatch) => {
  const token = getCookie("token");
  const res = await axios.post(
    `${process.env.SERVER_API}/articlesponosordelete/${id}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  dispatch(userSponsoredList());
};
