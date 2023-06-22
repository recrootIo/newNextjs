import http from "../http-common";

class jobsService {
  addJobss(value, companyId) {
    return http.post(`addJob/${companyId}`, value);
  }
  addJobNew(value, companyId) {
    return http.post(`addJobNew/${companyId}`, value);
  }
  editJobss(value, id, companyId) {
    return http.post(`editJob/${id}/${companyId}`, value);
  }
  getJobss(companyId) {
    return http.get(`getCompanyJobs/${companyId}`);
  }
  getSingleJob(id) {
    return http.get(`getSingleJob/${id}`);
  }
  updateViewCount(id) {
    return http.get(`updateViewCount/${id}`);
  }

  getJobsCatCount() {
    return http.get(`getJobsCatCount`);
  }
}

export default jobsService;
