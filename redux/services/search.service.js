import http from "../http-common";

const getLatestJObs = (
  value,
  names,
  exper,
  title,
  address,
  jobVariant,
  selectedCompanies,
  selectedSector,
  selectedCategory,
  limit = 10
) => {
  return http
    .post(`getLatestJobs?page=${value}&limit=${limit}`, {
      names,
      exper,
      title,
      address,
      jobVariant,
      selectedCompanies,
      selectedSector,
      selectedCategory,
    })
    .then((response) => {
      return response;
    });
};
const getSingleJObs = (id, title, no, names, exper) => {
  return http
    .post(`getJobsbyId/${id}/${title}?page=${no}`, { names, exper })
    .then((response) => {
      return response;
    });
};

const searchJobs = (keyword, location, type, value, names, exper) => {
  return http
    .post(
      `search?keyword=${keyword}&location=${location}&type=${type}&page=${value}`,
      { names, exper }
    )
    .then((response) => {
      return response;
    });
};

/**
 * Gets All the Featured Jobs
 * @param {*} keyword
 * @param {*} location
 * @param {*} type
 * @returns
 */
const featuredJobs = (no, names, exper) => {
  return http
    .post(`getFeaturedJobs?page=${no}`, { names, exper })
    .then((response) => {
      return response;
    });
};

/**
 * Gets All the Immediate Jobs
 * @param {*} keyword
 * @param {*} location
 * @param {*} type
 * @returns
 */
const ImmediateJobs = (page) => {
  return http.get(`getImmediateJobs?page=${page}`).then((response) => {
    return response;
  });
};

const getSingleImmediateJobs = (id, title, no, names, exper) => {
  return http
    .get(`getImmediateJobsbyId/${id}/${title}?page=${1}`, {
      names,
      exper,
    })
    .then((response) => {
      return response;
    });
};

const getImmediateOpenings = (page) => {
  return http.get(`getImmediateOpenings?page=${page}`).then((response) => {
    return response;
  });
};

const searchService = {
  getLatestJObs,
  searchJobs,
  getSingleJObs,
  featuredJobs,
  ImmediateJobs,
  getImmediateOpenings,
  getSingleImmediateJobs,
};
export default searchService;
