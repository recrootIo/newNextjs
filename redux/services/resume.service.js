import http from "../http-common";

const updateResume = (uplodedFiles, userId) => {
  const formData = new FormData();
  formData.append("userId", userId);
  const user = JSON.parse(localStorage.getItem("User"));
  uplodedFiles.forEach((file) => {
    formData.append("uplodedFiles", file);
  });
  return http
    .post(API_URL + "updateResumeDetails", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "x-access-token": `${user.token}`,
      },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.warn(err, "service");
      return err;
    });
};

const createResumeDetails = (value, userId) => {
  return http.put(`createResumeDetails/${userId}`, value);
};

const finalResumeForm = (value, userId) => {
  const user = JSON.parse(localStorage.getItem("User"));
  return http
    .post(`finalCreateResume/${userId}`, value, {
      headers: {
        "Content-type": "application/json",
        "x-access-token": `${user.token}`,
      },
    })
    .then((res) => {})
    .catch((err) => console.warn(err));
};

const coverLetter = (value, userId) => {
  if (value.coverFileLocation?.length === 0) {
    return;
  }
  const user = JSON.parse(localStorage.getItem("User"));
  const formData = new FormData();
  const coverLettters = value.coverFileLocation;
  formData.append("userId", userId);
  coverLettters.forEach((file) => {
    formData.append("coverLettters", file);
  });
  return http
    .post(API_URL + "updateCoverLetterFiles", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "x-access-token": `${user.token}`,
      },
    })
    .then((res) => {})
    .catch((err) => console.warn(err));
};

const certificates = (value, userId) => {
  if (value.inputCertificate?.length === 0) {
    return;
  }
  const user = JSON.parse(localStorage.getItem("User"));
  const formData = new FormData();
  const certificates = value.inputCertificate;
  formData.append("userId", userId);
  certificates.forEach((file) => {
    formData.append("certificates", file.certificate);
    formData.append("title", file.title);
    formData.append("organization", file.organization);
    formData.append("issueDate", file.issueDate);
    formData.append("expireDate", file.expireDate);
    formData.append("certificateLink", file.certificateLink);
  });

  return http
    .post(API_URL + "updateCertificatesFiles", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "x-access-token": `${user.token}`,
      },
    })
    .then((res) => {})
    .catch((err) => console.warn(err));
};

const certificatesAdd = (value) => {
  const user = JSON.parse(localStorage.getItem("User"));
  const userId = user.User._id;
  const formData = new FormData();
  formData.append("userId", userId);
  formData.append("certificates", value.certificate);
  formData.append("title", value?.title);
  formData.append("organization", value.organization);
  formData.append("issueDate", value.issueDate);
  formData.append("expireDate", value.expireDate);
  formData.append("certificateLink", value.certificateLink);
  return http
    .post(`addCertificate`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "x-access-token": `${user.token}`,
      },
    })
    .then((res) => {})
    .catch((err) => console.warn(err));
};

const certificatesEdit = (value) => {
  const user = JSON.parse(localStorage.getItem("User"));
  const formData = new FormData();

  if (value?.certificate) {
    formData.append("certificates", value?.certificate);
  }

  formData.append("certificateLink", value?.certificateLink);
  formData.append("name", value?.certificateName);
  formData.append("path", value?.certificatepath);
  formData.append("expireDate", value?.expireDate);
  formData.append("Id", value?.id);
  formData.append("issueDate", value?.issueDate);
  formData.append("organization", value?.organization);
  formData.append("title", value?.title);

  return http
    .put(`editCertficates`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "x-access-token": `${user.token}`,
      },
    })
    .then((res) => {})
    .catch((err) => console.warn(err));
};

const validResume = (uplodedFiles) => {
  const formData = new FormData();
  console.log(uplodedFiles, "service");
  uplodedFiles.forEach((file) => {
    console.log(file, "fromdata");
    formData.append("uplodedFiles", file);
  });
  return http
    .post("validateFile", formData)
    .then((res) => {
      return res;
    })
    .catch((err) => console.warn(err, "errr"));
};

const resumeService = {
  updateResume,
  createResumeDetails,
  finalResumeForm,
  coverLetter,
  certificates,
  certificatesAdd,
  certificatesEdit,
  validResume,
};
export default resumeService;
