import http from "../http-common";

class applyJobService {
  getDetails(companyId, page, data) {
    return http.post(`getApplyCanditates/${companyId}?page=${page || 1}`, data);
  }
  getFilterDetails(id, page, data) {
    return http.post(`getApplyjobsByJobs/${id}?page=${page || 1}`, data);
  }
  getResume(id) {
    return http.get(`getResumeSin/${id}`);
  }
  getCover(id) {
    return http.get(`getOneCover/${id}`);
  }
  getJobs(companyId) {
    return http.get(`getJobsComp/${companyId}`);
  }
  getAll(id) {
    return http.get(`/getExperience/${id}`);
  }
  getEmailTemplapes(value) {
    console.log(value,'service')
    return http.get(`/getEmailTemplates/${value.id}/${value.type}`);
  }
  updateEmailTemplapes(id, data) {
    return http.post(`/updateEmailTemplapes/${id}`, data);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new applyJobService();
