import { getUserId } from "@/utils/HelperFunctions";
import http from "../http-common";

const updateService = async (user) => {
  console.log(user);
  return http.put(`updateUser`, { ...user });
};

const updateMyPreference = async (user) => {
  return http.put(`updateMyPreference/${getUserId()}`, { ...user });
};

const editMyPersonalDetails = async (user) => {
  return http.put(`editMyPersonalDetails/${getUserId()}`, { ...user });
};

const editPersonalEducation = (value, id) => {
  return http.put(`editEducation/${id}`, value);
};

const addPersonalEducation = (value, id) => {
  return http.post(`addEducation/${getUserId()}`, value);
};

const editExperience = (value, id) => {
  return http.put(`editExperience/${id}`, value);
};

const addExperience = (value) => {
  return http.post(`addExperience/${getUserId()}`, value);
};

const addSkill = (value) => {
  return http.post(`addSkills/${getUserId()}`, value);
};

const editSkills = (value) => {
  return http.put(`editSkills/${value?._id}`, value);
};

const addProjects = (value) => {
  return http.post(`addProjects/${getUserId()}`, value);
};

const editProjects = (value, id) => {
  return http.put(`editProjects/${id}`, value);
};

const addTrainings = (value) => {
  return http.post(`addTrainings/${getUserId()}`, value);
};

const editTrainings = (value, id) => {
  return http.put(`editTrainings/${id}`, value);
};

const candidateServices = {
  updateService,
  updateMyPreference,
  editMyPersonalDetails,
  editPersonalEducation,
  addPersonalEducation,
  addExperience,
  editExperience,
  addSkill,
  editSkills,
  addProjects,
  editProjects,
  editTrainings,
  addTrainings,
};
export default candidateServices;
