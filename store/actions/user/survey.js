import axios from "axios";
import { getCookie } from "../../../utils/auth";
import {
  SURVEY_BY_ID_END_USER,
  SURVEY_BY_ID_USER,
  SURVEY_CLEAR,
  SURVEY_LIST_END_USER,
  SURVEY_LIST_USER,
} from "../../type";
import { alertSet } from "./alert";

//clean previous state
export const surveyClear = () => {
  return {
    type: SURVEY_CLEAR,
  };
};

//user sponsored list  crated user
export const userSurveyList = () => async (dispatch) => {
  const token = getCookie("token");
  const res = await axios.get(`${process.env.SERVER_API}/surveylist`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return dispatch({
    type: SURVEY_LIST_USER,
    payload: res.data,
  });
};

export const createSurvey = (formData) => async (dispatch) => {
  try {
    const token = getCookie("token");
    const res = await axios.post(
      `${process.env.SERVER_API}/surveycreate`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(userSurveyList());
    dispatch(
      alertSet(
        "Survey has been created successfully and waiting for FiveStarWeek team approval",
        "success"
      )
    );
  } catch (error) {
    dispatch(alertSet(error.response.data.message, "error"));
  }
};

export const surveyById = (id) => async (dispatch) => {
  dispatch(surveyClear());
  const token = getCookie("token");
  const res = await axios.get(`${process.env.SERVER_API}/surveybyid/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  dispatch({
    type: SURVEY_BY_ID_USER,
    payload: res.data,
  });
};
export const editSurvey = (id, formData) => async (dispatch) => {
  const token = getCookie("token");
  const res = await axios.post(
    `${process.env.SERVER_API}/surveycreate/${id}`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  dispatch(surveyById(id));
  dispatch(userSurveyList());
};

export const deleteSurvey = (id) => async (dispatch) => {
  try {
    const token = getCookie("token");
    const res = await axios.post(
      `${process.env.SERVER_API}/surveydelete/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(userSurveyList());
    dispatch(alertSet("This survey has been deleted successfully", "success"));
  } catch (error) {}
};

//user sponsored list  end user

//list
export const surveyListEndUser = () => async (dispatch) => {
  const token = getCookie("token");
  const res = await axios.get(`${process.env.SERVER_API}/surveylistenduser`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return dispatch({
    type: SURVEY_LIST_END_USER,
    payload: res.data,
  });
};

//id
export const surveyByIdEndUser = (id) => async (dispatch) => {
  dispatch(surveyClear());
  const token = getCookie("token");
  const res = await axios.get(
    `${process.env.SERVER_API}/surveybyidenduser/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  dispatch({
    type: SURVEY_BY_ID_END_USER,
    payload: res.data,
  });
};

//accept
export const surveyAccept = (id) => async (dispatch) => {
  try {
    const token = getCookie("token");
    const res = await axios.post(
      `${process.env.SERVER_API}/surveyaccepteligibility/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(surveyByIdEndUser(id));
  } catch (error) {
    dispatch(alertSet(error.response.data.message, "error"));
  }
};
//response
export const surveyResponse = (id, forData, result) => async (dispatch) => {
  const token = getCookie("token");
  const res = await axios.post(
    `${process.env.SERVER_API}/surveyresponsoe/${id}/${result}`,
    forData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  dispatch(surveyByIdEndUser(id));
  dispatch(
    alertSet(
      "Your responsore has been submitted and will soon review",
      "success"
    )
  );
};

//return
export const surveyReturn = (id, result) => async (dispatch) => {
  const token = getCookie("token");
  const res = await axios.post(
    `${process.env.SERVER_API}/surveyreturn/${id}/${result}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  dispatch(surveyByIdEndUser(id));
  dispatch(alertSet("Successfully returned from the survey.", "success"));
};

//abandon
export const surveyAbandon = (id, result) => async (dispatch) => {
  const token = getCookie("token");
  const res = await axios.post(
    `${process.env.SERVER_API}/surveyabandon/${id}/${result}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  dispatch(surveyByIdEndUser(id));
};

//survey approve end user
export const surveyApprove = (id, result) => async (dispatch) => {
  const token = getCookie("token");
  const res = await axios.post(
    `${process.env.SERVER_API}/surveyapprove/${id}/${result}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  dispatch(surveyById(id));
};

//survey reject end user
export const surveyReject = (id, result) => async (dispatch) => {
  const token = getCookie("token");
  const res = await axios.post(
    `${process.env.SERVER_API}/surveyreject/${id}/${result}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  dispatch(surveyById(id));
};

//survey approve all
export const surveyApproveAll = (id) => async (dispatch) => {
  const token = getCookie("token");
  const res = await axios.post(
    `${process.env.SERVER_API}/surveyapproveall/${id}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  dispatch(surveyById(id));
};

//surveyById(id)
