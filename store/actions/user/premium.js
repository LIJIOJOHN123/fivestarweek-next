import axios from "axios";
import { getCookie } from "../../../utils/auth";
import { PREMIUM_REGISTRATION } from "../../type";

export const premiumusercreate = (formData) => async (dispatch) => {
  const token = getCookie("token");
  if (token) {
    let res = await axios.post(
      `${process.env.SERVER_API}/createpremiumrequest`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: PREMIUM_REGISTRATION,
      payload: res.data,
    });
  } else {
    let res = await axios.post(
      `${process.env.SERVER_API}/createpremiumrequest`,
      formData
    );
    dispatch({
      type: PREMIUM_REGISTRATION,
      payload: res.data,
    });
  }
};
