/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ProfileCard from "./ProfileCard";
import Navbar from "@/components/Navbar/Navbar";
import { useSearchParams } from "next/navigation";
import { setJobID } from "@/redux/slices/personal";
import { singleJobs } from "@/redux/slices/job";
import { useRouter } from "next/router";

const CandidateProfile = () => {
  const { query } = useRouter();
  const dispatch = useDispatch();
  const jobId = query.jobid;

  useEffect(() => {
    if (jobId !== null) {
      dispatch(singleJobs(jobId)).then((res) => {
        dispatch(
          setJobID({
            companyId: res?.payload?.data?.company,
            jobId: res?.payload?.data?._id,
            question: res?.payload?.data?.question,
            name: res?.payload?.data?.jobRole,
            show: res?.payload?.data?.queshow,
          })
        );
      });
    }
  }, []);

  return (
    <div style={{ height: "100%" }}>
      <Navbar />
      <ProfileCard jobId={jobId} />
    </div>
  );
};

export default CandidateProfile;
