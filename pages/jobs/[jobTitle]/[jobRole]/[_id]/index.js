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

const JobDetails = ({ job, jobRole, similar }) => {
  return (
    <>
      <Header title={jobRole} description={job?.jobDescription} />
      <Navbar />
      <BackBar />
      <JobDetailCard {...job} />
      <JobDetail {...job} />
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
    .getLatestJObs(1, [], [], jobRole, "", "", "", "", "", 10)
    .then((res) => {
      similar = res.data.posts;
      console.log(res.data.posts);
    })
    .catch(() => {});

  return {
    props: {
      jobTitle,
      jobRole,
      job,
      similar,
    },
  };
};

export default JobDetails;
