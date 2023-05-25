"use client";
import axios from "axios";
const http = axios.create({
  baseURL: "https://preprod.recroot.au/api/",
  headers: {
    "Content-type": "application/json",
  },
});

http.interceptors.request.use((config) => {
  // const token = JSON.parse(localStorage.getItem("User")).token;
  // config.headers = config.headers || {};
  // config.headers["x-access-token"] = token;

  return config;
});

export default http;
