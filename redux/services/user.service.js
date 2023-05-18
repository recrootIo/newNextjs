import authHeader from "./auth-header";
import http from "../http-common";
import { getUserId } from "@/utils/HelperFunctions";

const getPublicContent = () => {
  return http.get(API_URL + "all");
};
const getUserBoard = () => {
  return http.get(API_URL + "user", { headers: authHeader() });
};
const getModeratorBoard = () => {
  return http.get(API_URL + "mod", { headers: authHeader() });
};
const getAdminBoard = () => {
  return http.get(API_URL + "admin", { headers: authHeader() });
};
const getLaidOffUsers = (page) => {
  return http.get(`${API_URL}getLaidOffs?page=${page}`, {
    headers: authHeader(),
  });
};
const searchCandidates = async (data) => {
  return await http.get(`${API_URL}searchCandidates?search=${data}`, {
    headers: authHeader(),
  });
};
const opentoWork = (user) => {
  return http.put(`opentowork`, user, {
    headers: authHeader(),
  });
};

const updateSettings = (settings) => {
  return http.put(`updateSettings`, settings, {
    headers: authHeader(),
  });
};

const updateOpenWork = (id, data) => {
  return http.put(`editOpenTo/${id}`, data, {
    headers: authHeader(),
  });
};
const getCandsPrefInfo = (id) => {
  return http.get(`getCandsPrefInfo/${id}`, {
    headers: authHeader(),
  });
};
const insertNewJobType = (id, type) => {
  return http.put(
    `insertNewJobType/${id}`,
    { JobType: type },
    {
      headers: authHeader(),
    }
  );
};
const reomvoeJobType = (id, type) => {
  return http.put(
    `reomvoeJobType/${id}`,
    { JobType: type },
    {
      headers: authHeader(),
    }
  );
};
const insertNewPlace = (id, place) => {
  return http.put(
    `insertNewPlace/${id}`,
    { newPlace: place },
    {
      headers: authHeader(),
    }
  );
};

const removeThePlace = (id, place) => {
  return http.put(
    `removeThePlace/${id}`,
    { place: place },
    {
      headers: authHeader(),
    }
  );
};
const insertNewTitle = (id, Title) => {
  return http.post(
    `insertNewTitle/${id}`,
    { newTitle: Title },
    {
      headers: authHeader(),
    }
  );
};
const removeTheTitle = (id, Title) => {
  return http.put(
    `removeTheTitle/${id}`,
    { title: Title },
    {
      headers: authHeader(),
    }
  );
};
const insertNewLocation = (id, location) => {
  return http.post(
    `insertNewLocation/${id}`,
    { location: location },
    {
      headers: authHeader(),
    }
  );
};
const removeTheLocation = (id, Title) => {
  return http.put(
    `removeTheLocation/${id}`,
    { title: Title },
    {
      headers: authHeader(),
    }
  );
};
const updateAvailablity = (id, val) => {
  return http.put(
    `updateAvailablity/${id}`,
    { availablity: val },
    {
      headers: authHeader(),
    }
  );
};
const getOpenWork = (id, token) => {
  return http.get(`getOpenTo/${id}`, {
    headers: { "x-access-token": `${token}` },
  });
};
const verifyMobile = (mobile, token) => {
  return http.post(
    `verifyMobile`,
    { mobile },
    {
      headers: { "x-access-token": `${token}` },
    }
  );
};

const confirmMobile = (code, mobile, id, token) => {
  return http.post(
    `confirmMobile`,
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
