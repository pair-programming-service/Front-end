import axios from "axios";

// const token = localStorage.getItem("token");
// const refreshToken = localStorage.getItem("refreshToken");
// console.log("token: ", token);
// console.log("refreshToken: ", refreshToken);

const request = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    // Authorization: token,
    // "Refresh-Token": refreshToken,
    withCredentials: true,
  },
});

request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    const res = response;
    return res;
  },

  (error) => {
    return Promise.reject(error);
  }
);

export default request;
