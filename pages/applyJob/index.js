/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import ProfileCard from "../../components/ApplyJob/ProfileCard";
import Navbar from "@/components/Navbar/Navbar";
import { setJobID } from "@/redux/slices/personal";
import { singleJobs } from "@/redux/slices/job";
import { useRouter } from "next/router";
import jobsService from "@/redux/services/job.service";
import { openAlert } from "@/redux/slices/alert";
import { ERROR } from "@/utils/constants";

const CandidateProfile = ({ ...companyDetails }) => {
  return (
    <div style={{ height: "100%" }}>
      <Navbar />
      <ProfileCard {...companyDetails} />
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { jobid = "" } = context.query;

  const newService = new jobsService();
  let companyDetails = {};
  let jobTitle = "";

  await newService
    .getSingleJob(jobid)
    .then((res) => {
      console.log(res.data.data, "res");
      companyDetails.companyId = res.data.data.company._id;
      companyDetails._id = res.data.data?._id;
      companyDetails.question = res.data.data.question;
      companyDetails.name = res.data.data.jobRole;
      companyDetails.show = res.data.data?.queshow;
      companyDetails.jobTitle = res.data.data?.jobTitle;
    })
    .catch((error) => {
      console.log("Something went wrong");
    });

  return {
    props: {
      companyDetails,
      jobTitle,
    },
  };
};

export default CandidateProfile;
