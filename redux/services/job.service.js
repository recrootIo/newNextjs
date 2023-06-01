import http from "../http-common";

class jobsService {
  addJobss(value, companyId) {
    return http.post(`addJob/${companyId}`, value);
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

// eslint-disable-next-line import/no-anonymous-default-export
export default new jobsService();
