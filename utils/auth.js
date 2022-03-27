import cookie from "js-cookie";
import cookies from "cookie";

/* Set cookie  */
export const setCookie = (key, value) => {
  if (process.browser) {
    cookie.set(key, value);
  }
};

/* Remove cookie */

export const removeCookie = (key) => {
  if (process.browser) {
    cookie.remove(key, {
      expires: 1,
    });
  }
};

/* Get cookie   */
export const getCookie = (key) => {
  if (process.browser) {
    if (cookie.get(key) === "undefined") {
      removeCookie("token");
    }
    return cookie.get(key);
  }
};
/* Set Local storage */

export const getLangauge = (key) => {
  if (process.browser) {
    if (!cookie.get(key)) {
      setCookie("language", process.env.language);
      setCookie("languageName", process.env.languageName);
    }
    return cookie.get(key);
  }
};

export const setLocalStorage = (key, value) => {
  if (process.browser) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};
/* Remove Local storage */
export const removeLocalStorage = (key) => {
  if (process.browser) {
    localStorage.removeItem(key);
  }
};

/* Authentication  */

export const authenticate = (data, next) => {
  setCookie("token", data.token);
  setLocalStorage("user", data.user);
  next();
};

/* to verity authentication  */

export const isAuth = () => {
  if (process.browser) {
    const cookieChecked = getCookie("token");
    if (cookieChecked) {
      if (localStorage.getItem("user") === "undefined") {
        return removeLocalStorage("user");
      } else if (localStorage.getItem("user")) {
        return JSON.parse(localStorage.getItem("user"));
      } else {
        return false;
      }
    }
  }
};

//forgot password

export const forgotPassword = (formData) => {
  return fetch(`${process.env.SERVER_API}/forgot_password`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

//resetpassword
export const resetPassword = (formData, token) => {
  return fetch(`${process.env.SERVER_API}/reset_password?token=${token}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export function parseCookies(req) {
  return cookies.parse(req ? req.headers.cookie || "" : document.cookie);
}
