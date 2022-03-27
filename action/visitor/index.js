//article

import axios from "axios";
import { getCookie } from "./../../utils/auth";

//auth view
export const articleAuthView = async (id, token, formData) => {
  await axios.post(`${process.env.SERVER_API}/article/${id}/view`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// ip view
export const articleIPView = async (id, formData) => {
  await axios.post(`${process.env.SERVER_API}/article/ipview/${id}`, formData);
};

//auth visit
export const articleAuthVisit = async (id, token, formData) => {
  await axios.post(`${process.env.SERVER_API}/article/${id}/visit`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// ip visit
export const articleIPVisit = async (id, formData) => {
  await axios.post(
    `${process.env.SERVER_API}/article/ipvisitor/${id}`,
    formData
  );
};

//channel
//auth view
export const channelAuthView = async (id, token, formData) => {
  await axios.post(`${process.env.SERVER_API}/channel/${id}/view`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// ip view
export const channelIPView = async (id, formData) => {
  await axios.post(`${process.env.SERVER_API}/channel/ipview/${id}`, formData);
};

//auth visit
export const channelAuthVisit = async (id, token, formData) => {
  await axios.post(`${process.env.SERVER_API}/channel/${id}/visit`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// ip visit
export const channelIPVisit = async (id, formData) => {
  const res = await axios.post(
    `${process.env.SERVER_API}/channel/ipvisitor/${id}`,
    formData
  );
};

//preference

export const articleuserPrference = (id, formData, token) => {
  return fetch(`${process.env.SERVER_API}/userpreference/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },

    body: JSON.stringify(formData),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const articleAnalytics = (id, token) => {
  return fetch(`${process.env.SERVER_API}/articlestatics/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const requestEmailOtp = (token) => {
  return fetch(`${process.env.SERVER_API}/emailverification/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
