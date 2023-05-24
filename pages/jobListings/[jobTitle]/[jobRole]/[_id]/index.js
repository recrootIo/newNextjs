import Header from "@/components/Header";
import FooterHome from "@/components/Home/FooterHome";
import SubscribHome from "@/components/Home/SubscribHome";
import BackBar from "@/components/JobDetails/BackBar";
import JobDetail from "@/components/JobDetails/jobDetail";
import JobDetailCard from "@/components/JobDetails/jobDetailCard";
import SimilarJobs from "@/components/JobDetails/similarJobs";
import Navbar from "@/components/Navbar/Navbar";
import jobsService from "@/redux/services/job.service";
import React from "react";

const JobDetails = ({ jobTitle, job, jobRole }) => {
  return (
    <>
      <Header title={jobRole} description={job?.jobDescription} />
      <Navbar />
      <BackBar />
      <JobDetailCard {...job} />
      <JobDetail {...job} />
      <SimilarJobs />
      <SubscribHome />
      <FooterHome />
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { jobTitle, jobRole, _id } = context.query;
  const newService = new jobsService();
  let job;

  await newService.getSingleJob(_id).then((res) => {
    job = res.data.data;
  });

  await newService.updateViewCount(_id).then((res) => {
    console.log(res.data);
  });

  return {
    props: {
      jobTitle,
      jobRole,
      job,
    },
  };
};

export default JobDetails;
