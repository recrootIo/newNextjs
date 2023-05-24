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
    return http.get(`http://localhost:3000/api/getSingleJob/${id}`);
  }
  updateViewCount(id) {
    return http.get(`http://localhost:3000/api/updateViewCount/${id}`);
  }
}

export default jobsService;
