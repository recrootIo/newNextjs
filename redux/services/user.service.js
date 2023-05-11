import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://localhost:3000/api/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};
const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};
const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};
const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};
const getLaidOffUsers = (page) => {
  return axios.get(`${API_URL}getLaidOffs?page=${page}`, {
    headers: authHeader(),
  });
};
const searchCandidates = async (data) => {
  return await axios.get(`${API_URL}searchCandidates?search=${data}`, {
    headers: authHeader(),
  });
};
const opentoWork = (user) => {
  return axios.put(`${API_URL}opentowork`, user, {
    headers: authHeader(),
  });
};

const updateSettings = (settings) => {
  return axios.put(`${API_URL}updateSettings`, settings, {
    headers: authHeader(),
  });
};

const updateOpenWork = (id, data) => {
  return axios.put(`${API_URL}editOpenTo/${id}`, data, {
    headers: authHeader(),
  });
};
const getCandsPrefInfo = (id) => {
  return axios.get(`${API_URL}getCandsPrefInfo/${id}`, {
    headers: authHeader(),
  });
};
const insertNewJobType = (id, type) => {
  return axios.put(
    `${API_URL}insertNewJobType/${id}`,
    { JobType: type },
    {
      headers: authHeader(),
    }
  );
};
const reomvoeJobType = (id, type) => {
  return axios.put(
    `${API_URL}reomvoeJobType/${id}`,
    { JobType: type },
    {
      headers: authHeader(),
    }
  );
};
const insertNewPlace = (id, place) => {
  return axios.put(
    `${API_URL}insertNewPlace/${id}`,
    { newPlace: place },
    {
      headers: authHeader(),
    }
  );
};

const removeThePlace = (id, place) => {
  return axios.put(
    `${API_URL}removeThePlace/${id}`,
    { place: place },
    {
      headers: authHeader(),
    }
  );
};
const insertNewTitle = (id, Title) => {
  return axios.post(
    `${API_URL}insertNewTitle/${id}`,
    { newTitle: Title },
    {
      headers: authHeader(),
    }
  );
};
const removeTheTitle = (id, Title) => {
  return axios.put(
    `${API_URL}removeTheTitle/${id}`,
    { title: Title },
    {
      headers: authHeader(),
    }
  );
};
const insertNewLocation = (id, location) => {
  return axios.post(
    `${API_URL}insertNewLocation/${id}`,
    { location: location },
    {
      headers: authHeader(),
    }
  );
};
const removeTheLocation = (id, Title) => {
  return axios.put(
    `${API_URL}removeTheLocation/${id}`,
    { title: Title },
    {
      headers: authHeader(),
    }
  );
};
const updateAvailablity = (id, val) => {
  return axios.put(
    `${API_URL}updateAvailablity/${id}`,
    { availablity: val },
    {
      headers: authHeader(),
    }
  );
};
const getOpenWork = (id, token) => {
  return axios.get(`${API_URL}getOpenTo/${id}`, {
    headers: { "x-access-token": `${token}` },
  });
};
const verifyMobile = (mobile, token) => {
  return axios.post(
    `${API_URL}verifyMobile`,
    { mobile },
    {
      headers: { "x-access-token": `${token}` },
    }
  );
};

const confirmMobile = (code, mobile, id, token) => {
  return axios.post(
    `${API_URL}confirmMobile`,
    { code, mobile, id },
    {
      headers: { "x-access-token": `${token}` },
    }
  );
};
const userService = {
  searchCandidates,
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
  getLaidOffUsers,
  opentoWork,
  updateSettings,
  updateOpenWork,
  getOpenWork,
  getCandsPrefInfo,
  updateAvailablity,
  insertNewJobType,
  reomvoeJobType,
  insertNewPlace,
  removeThePlace,
  insertNewTitle,
  removeTheTitle,
  insertNewLocation,
  removeTheLocation,
  verifyMobile,
  confirmMobile,
};
export default userService;
