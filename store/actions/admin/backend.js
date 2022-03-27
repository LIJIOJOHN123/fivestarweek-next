import axios from "axios";
import { getCookie } from "../../../utils/auth";
import {
  ADMIN_EARNING_LIST,
  ADMIN_PAYMENT_LIST,
  ADMIN_PREMIUM_LIST,
  ADMIN_SCORE_LIST,
  ADMIN_WITHDRAWAL_LIST,
  USER_LIST,
} from "../../type";

export const userList = (limit) => async (dispatch) => {
  const token = getCookie("token");
  try {
    const res = await axios.get(
      `${process.env.SERVER_API}/admin/users?limit=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: USER_LIST,
      payload: res.data,
    });
  } catch (error) {}
};

export const userBlock = (id) => async (dispatch) => {
  const token = getCookie("token");
  try {
    await axios.post(
      `${process.env.SERVER_API}/admin/blockuser/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(userList());
  } catch (error) {}
};

export const userUnblock = (id) => async (dispatch) => {
  const token = getCookie("token");
  try {
    await axios.post(
      `${process.env.SERVER_API}/admin/unblockuser/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(userList());
  } catch (error) {}
};

//payment
export const paymentList = (limit, id) => async (dispatch) => {
  const token = getCookie("token");
  try {
    const res = await axios.get(
      `${process.env.SERVER_API}/admin/paymentlist/${id}?limit=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: ADMIN_PAYMENT_LIST,
      payload: res.data,
    });
  } catch (error) {}
};
export const paymentAdd = (id, formData) => async (dispatch) => {
  const token = getCookie("token");
  try {
    await axios.post(
      `${process.env.SERVER_API}/admin/addpayment/${id}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {}
};
export const paymentRemove = (id, formData) => async (dispatch) => {
  const token = getCookie("token");
  try {
    await axios.post(
      `${process.env.SERVER_API}/admin/removepayment/${id}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {}
};
//earnings
export const earningList = (limit, id) => async (dispatch) => {
  const token = getCookie("token");
  try {
    const res = await axios.get(
      `${process.env.SERVER_API}/admin/earninglist/${id}?limit=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: ADMIN_EARNING_LIST,
      payload: res.data,
    });
  } catch (error) {}
};
export const earningAdd = (id, formData) => async (dispatch) => {
  const token = getCookie("token");
  try {
    await axios.post(
      `${process.env.SERVER_API}/admin/addearning/${id}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(earningList(50));
  } catch (error) {}
};
export const earningRemove = (id, formData) => async (dispatch) => {
  const token = getCookie("token");
  try {
    await axios.post(
      `${process.env.SERVER_API}/admin/removeearning/${id}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(earningList(50));
  } catch (error) {}
};
//withdrawal
export const withdrawalList = (limit) => async (dispatch) => {
  const token = getCookie("token");
  try {
    const res = await axios.get(
      `${process.env.SERVER_API}/admin/withdrawallist?limit=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: ADMIN_WITHDRAWAL_LIST,
      payload: res.data,
    });
  } catch (error) {}
};
export const withdrawalApprove = (id, formData) => async (dispatch) => {
  const token = getCookie("token");
  try {
    await axios.post(
      `${process.env.SERVER_API}/admin/approvewithdrawal/${id}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(withdrawalList(50));
  } catch (error) {}
};

//score
export const scoreList = (limit, id) => async (dispatch) => {
  const token = getCookie("token");
  try {
    const res = await axios.get(
      `${process.env.SERVER_API}/adminscorelist/${id}?limit=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: ADMIN_SCORE_LIST,
      payload: res.data,
    });
  } catch (error) {}
};
export const scoreAdd = (id, formData) => async (dispatch) => {
  const token = getCookie("token");
  try {
    await axios.post(
      `${process.env.SERVER_API}/admin/scoreadd/${id}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(scoreList(50));
  } catch (error) {}
};
export const scoreRemove = (id, formData) => async (dispatch) => {
  const token = getCookie("token");
  try {
    await axios.post(
      `${process.env.SERVER_API}/admin/scoreremove/${id}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(scoreList(50));
  } catch (error) {}
};
export const premiumUserList = (limit) => async (dispatch) => {
  const token = getCookie("token");
  try {
    let res = await axios.get(
      `${process.env.SERVER_API}/premieruserlist?limit=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(res);
    dispatch({
      type: ADMIN_PREMIUM_LIST,
      payload: res.data,
    });
  } catch (error) {}
};

//preimium user list
export const premiumUserApprove = (id) => async (dispatch) => {
  const token = getCookie("token");
  try {
    let res = await axios.get(
      `${process.env.SERVER_API}/premieruserlistapprove/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(premiumUserList(200));
  } catch (error) {}
};
