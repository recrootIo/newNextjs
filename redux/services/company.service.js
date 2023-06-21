import http from "../http-common";

class companyservice {
  editExper(value, compId) {
    return http.post(`updateCompanyDetails/${compId}`, value);
  }
  getCompany() {
    const user = JSON.parse(localStorage.getItem("User"));
    return http.get(`getCompanyDetails/${user.User.companyId}`);
  }
  getSearchCandidates(value, page) {
    return http.post(`searchCandidatesNew?page=${page}`, value);
  }
  getJobsla() {
    const user = JSON.parse(localStorage.getItem("User"));
    return http.get(`getSlajobs/${user.User.companyId}`);
  }
  compLogo(value, compId) {
    const formData = new FormData();
    const compLogos = value;
    formData.append("logo", compLogos);
    return http.post(`updateCompanyLogo/${compId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
  getBillings() {
    const rs = JSON.parse(localStorage.getItem("User"));
    return http.get(`/getSuscribeDetails/${rs.User.companyId}`);
  }
  addRestCandidates(id) {
    const rs = JSON.parse(localStorage.getItem("User"));
    return http.post(`/addReqstcandidates/${rs?.User?.companyId}/${id}`);
  }
  getRestCandidates() {
    const rs = JSON.parse(localStorage.getItem("User"));
    return http.get(`/getReqstcandidates/${rs?.User?.companyId}`);
  }
  jobRestCandidates(id) {
    return http.get(`/jobReqstcandidates/${id}`);
  }
  candidatesFreqst(value) {
    return http.post(`/candidatesForReqst`, value);
  }

  addFreeEmp() {
    const rs = JSON.parse(localStorage.getItem("User"));
    return http.post(`/addFreePlan/${rs?.User?.companyId}`);
  }
  getMatchingCandidates(value) {
    return http.get(`/matchCandidate/${value?.id}?page=${value?.page}`);
  }

  getMatchingApplicants(value) {
    return http.get(`/matchApplicant/${value?.id}?page=${value?.page}`);
  }

  getAllInfoSectors() {
    return http.get(`/getAllInfoSectors`);
  }
  getCompanies() {
    return http.get(`/getCompanies`);
  }
  getApplCounts(value) {
    return http.get(`/getApplCounts/${value}`);
  }
  updateTourValue(data) {
    const rs = JSON.parse(localStorage.getItem("User"));
    return http.post(`/updateTourValue/${rs?.User?.companyId}`, data);
  }
}

export default companyservice;
