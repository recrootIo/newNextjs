import { getUserId } from "@/utils/HelperFunctions";
import http from "../http-common";

const getAll = () => {
  const user = JSON.parse(localStorage.getItem("User"));
  return http.get(`/getExperience/${user.User._id}`);
};
const getPercent = () => {
  return http.get(`/getPercent`);
};
const addPercent = (value) => {
  const user = JSON.parse(localStorage.getItem("User"));
  return http.post(`/addPercentUser/${user.User._id}`, { percent: value });
};
const addPercentDisplay = (value) => {
  const user = JSON.parse(localStorage.getItem("User"));
  return http.post(`/addPercentDisplay/${user.User._id}`, { Display: value });
};
const getOneExp = (id) => {
  return http.get(`getOne/${id}`);
};
const getOneSkill = (id) => {
  return http.get(`getOneSkill/${id}`);
};
const getOneEduca = (id) => {
  return http.get(`getOneEdu/${id}`);
};
const getOneProject = (id) => {
  return http.get(`getOneProject/${id}`);
};
const getOneTrain = (id) => {
  return http.get(`getOneTraining/${id}`);
};
const getOneCert = (id) => {
  return http.get(`getOneCertificate/${id}`);
};
const getOneSocial = (id) => {
  return http.get(`getOneSocial/${id}`);
};
const getOneResume = (id) => {
  return http.get(`getOneResume/${id}`);
};
const getOneCover = (id) => {
  return http.get(`getOneCover/${id}`);
};
const addResume = (formData) => {
  const user = JSON.parse(localStorage.getItem("User"));
  return http.post(`addResume/${user.User._id}`, formData);
};
const addCover = (formData) => {
  const user = JSON.parse(localStorage.getItem("User"));
  return http.post(`addCover/${user.User._id}`, formData);
};
const addCertificate = (formData) => {
  const user = JSON.parse(localStorage.getItem("User"));
  return http.post(`addCertificate/${user.User._id}`, formData);
};
const addExperience = (value) => {
  const user = JSON.parse(localStorage.getItem("User"));
  return http.post(`postExp/${user.User._id}`, value);
};
const addSkill = (value) => {
  const user = JSON.parse(localStorage.getItem("User"));
  return http.post(`postSkill/${user.User._id}`, value);
};
const addEducation = (value) => {
  return http.post(`postEdu/${getUserId()}`, value);
};
const addProject = (value) => {
  const user = JSON.parse(localStorage.getItem("User"));
  return http.post(`postProject/${user.User._id}`, value);
};
const addTrain = (value) => {
  const user = JSON.parse(localStorage.getItem("User"));
  return http.post(`postTraining/${user.User._id}`, value);
};
const addSocial = (value) => {
  const user = JSON.parse(localStorage.getItem("User"));
  return http.post(`postSocial/${user.User._id}`, value);
};
const addPhoto = (formData) => {
  const user = JSON.parse(localStorage.getItem("User"));
  return http.post(`addProfpic/${user.User._id}`, formData);
};
const applyJob = (value) => {
  return http.post("/applyJob", value);
};
const delResume = (id) => {
  return http.delete(`deleteResume/${id}`);
};
const delCover = (id) => {
  return http.delete(`deleteCover/${id}`);
};
const delCertificate = (id) => {
  return http.delete(`deleteCertificate/${id}`);
};
const delExper = (id) => {
  return http.delete(`deleteExp/${id}`);
};
const delSkil = (id) => {
  return http.delete(`deleteSkill/${id}`);
};
const delEduca = (id) => {
  return http.delete(`deleteEdu/${id}`);
};
const delProject = (id) => {
  return http.delete(`deleteProject/${id}`);
};
const delTrain = (id) => {
  return http.delete(`deleteTraining/${id}`);
};
const delSocial = (id) => {
  return http.delete(`deleteSocial/${id}`);
};
const editExper = (value, id) => {
  return http.put(`editExp/${id}`, value);
};
const editSkill = (value, id) => {
  return http.put(`editSkill/${id}`, value);
};
const editEducation = (value, id) => {
  return http.put(`editEdu/${id}`, value);
};
const editProject = (value, id) => {
  return http.put(`editProject/${id}`, value);
};
const editTrain = (value, id) => {
  return http.put(`editTraining/${id}`, value);
};
const editSocial = (value, id) => {
  return http.put(`editSocial/${id}`, value);
};
const editPersonal = (value) => {
  const user = JSON.parse(localStorage.getItem("User"));
  return http.put(`editPersonal/${user.User._id}`, value);
};

const editPersonalName = (value) => {
  const user = JSON.parse(localStorage.getItem("User"));
  return http.put(`editPersonalName/${user.User._id}`, value);
};

const editPersonalNotice = (value) => {
  const user = JSON.parse(localStorage.getItem("User"));
  return http.put(`editNotice/${user.User._id}`, { notice: value });
};
const editVerify = (value) => {
  return http.put(`verifyEmail`, value);
};
const resendCode = (value) => {
  return http.put(`resendCode`, value);
};
const getRetrenchedCandidates = () => {
  return http.get(`getRetrenchCandidates`);
};
const getAppliedJobs = (value = "unview") => {
  const user = JSON.parse(localStorage.getItem("User"));
  return http.get(`fetchAppliedJobs/${user.User._id}?status=${value}&page=10`);
};

const personalService = {
  getAll,
  getPercent,
  addPercent,
  addPercentDisplay,
  getOneExp,
  getOneSkill,
  getOneEduca,
  getOneProject,
  getOneTrain,
  getOneCert,
  getOneSocial,
  getOneResume,
  getOneCover,
  addResume,
  addCover,
  addCertificate,
  addExperience,
  addSkill,
  addEducation,
  addProject,
  addTrain,
  addSocial,
  addPhoto,
  applyJob,
  delResume,
  delCover,
  delCertificate,
  delExper,
  delSkil,
  delEduca,
  delProject,
  delTrain,
  delSocial,
  editExper,
  editSkill,
  editEducation,
  editProject,
  editTrain,
  editSocial,
  editPersonal,
  editPersonalName,
  editPersonalNotice,
  editVerify,
  resendCode,
  getRetrenchedCandidates,
  getAppliedJobs,
};

export default personalService;
