import axios from "axios";
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
    return axios.get(`https://preprod.recroot.au/api/getSingleJob/${id}`);
  }
  updateViewCount(id) {
    return http.get(`https://preprod.recroot.au/api/updateViewCount/${id}`);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new jobsService();
