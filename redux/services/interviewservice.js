import http from "../http-common";

class InterviewData {
  getAll(companyId) {
    return http.get(`/getInterview/${companyId}`);
  }
  getScheduleInt(cid,jid) {
    return http.get(`/getScheduleInterview/${cid}/${jid}`);
  }
}


export default  InterviewData;

