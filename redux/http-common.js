"use client";
import axios from "axios";
import Cookies from "js-cookie";
const http = axios.create({
  baseURL: "http://localhost:3000/api/",
  // baseURL: "https://preprod.recroot.au/api/",
  headers: {
    "Content-type": "application/json",
  },
});

http.interceptors.request.use((config) => {
  const token = Cookies.get("token");
  config.headers = config.headers || {};
  config.headers["x-access-token"] = token;

  return config;
});

export default http;
