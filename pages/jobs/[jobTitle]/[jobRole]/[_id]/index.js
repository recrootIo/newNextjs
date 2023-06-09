import Header from "@/components/Header";
import FooterHome from "@/components/Home/FooterHome";
import SubscribHome from "@/components/Home/SubscribHome";
import BackBar from "@/components/JobDetails/BackBar";
import JobDetail from "@/components/JobDetails/jobDetail";
import JobDetailCard from "@/components/JobDetails/jobDetailCard";
import SimilarJobs from "@/components/JobDetails/similarJobs";
import Navbar from "@/components/Navbar/Navbar";
import jobsService from "@/redux/services/job.service";
import searchService from "@/redux/services/search.service";

const JobDetails = ({ job, jobRole, similar, count, appcount }) => {
  return (
    <>
      <Header title={jobRole} description={job?.jobDescription} />
      <Navbar />
      <BackBar />
      <JobDetailCard {...job} />
      <JobDetail {...job} count={count} appcount={appcount} />
      <SimilarJobs similar={similar} />
      <SubscribHome />
      <FooterHome />
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { jobTitle = "", jobRole = "", _id = "" } = context.query;
  const newService = new jobsService();
  let job = {};
  let similar = [];
  let count = 0;
  let appcount = 0;

  await newService
    .getSingleJob(_id)
    .then((res) => {
      job = res?.data?.data;
    })
    .catch((error) => console.log(error));

  await newService
    .updateViewCount(_id)
    .then(() => {})
    .catch((error) => console.log(error));

  await searchService
    .getLatestJObs(1, [], [], "", "", "", "", "", jobTitle, 10)
    .then((res) => {
      similar = res.data.posts;
    })
    .catch(() => {});

  await searchService
    .getsaveCount(_id)
    .then((res) => {
      count = res?.count;
      appcount = res?.appCount;
    })
    .catch(() => {});

  return {
    props: {
      jobTitle,
      jobRole,
      job,
      similar,
      count,
      appcount,
    },
  };
};

export default JobDetails;
