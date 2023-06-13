"use client";
import React, { useState } from "react";
import {
  Box,
  Grid,
  Container,
  List,
  ListItemButton,
  Button,
  Card,
  CardContent,
  Stack,
  Divider,
  Chip,
  IconButton,
  Typography,
} from "@mui/material";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { BOLD } from "@/theme/fonts";
import EmployerNavbar from "@/components/EmployerNavbar/EmployerNavbar";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useSelector } from "react-redux";
import ScreeningQuestions from "@/components/Employers/ScreeningQuestions/ScreeningQuestions";
import styled from "styled-components";
import styles from "./postNewJobPreview.module.css";
import Image from "next/image";
import dynamic from "next/dynamic";
import moment from "moment";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.9)" }}
  >
    •
  </Box>
);

const style = {
  txtinput: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
        width: { md: "100%", xs: "100%" },
        height: "60px",
        color: "#BAD4DF",
        backgroundColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "#BAD4DF",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#BAD4DF",
      },
    },
  },
};

const JobPreview = (props) => {
  const details = useSelector((state) => state.jobs.details);
  const essen = useSelector((state) => state.jobs.essential);
  const addres = useSelector((state) => state.jobs.location);
  const quiz = useSelector((state) => state.jobs.question);
  const descript = useSelector((state) => state.jobs.jobDescription);
  const level = useSelector((state) => state.jobs.jobRole);
  const showq = useSelector((state) => state.jobs.queshow);

  const settingIndex = (index) => {
    props.Pages(index);
  };
  return (
    <>
      <CardContent>
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        mt: "30px",
                        mb: "100px",
                      }}
                    >
                      <Image
                        src="/post-newjob-thirdstep-img.png"
                        alt=""
                        width="320"
                        height="20"
                      />
                    </Box>
                    <CustomTypography
                      sx={{
                        color: "#034275",
                        fontFamily: BOLD,
                        fontSize: "28px",
                        mb: "25px",
                      }}
                    >
                      Preview
                    </CustomTypography>
                    <Box
                      sx={{
                        bgcolor: "#2699FF",
                        height: "55px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        p: "0px 15px 0px 15px",
                      }}
                    >
                      <CustomTypography
                        sx={{
                          color: "white",
                          fontSize: "16px",
                        }}
                      >
                        Basic Information
                      </CustomTypography>
                      <IconButton    onClick={() => {
              settingIndex(0);
            }}>
        <EditOutlinedIcon color="white" sx={{ color: "white" }} />
            </IconButton>
                    </Box>
                    <Box sx={{ p: "20px 15px 0px 15px" }}>
                      <Stack spacing={3}>
                        <Box sx={{ display: "flex", gap: "10px" }}>
                          <CustomTypography className={styles.JobPreviewTypo}>
                            Job Title :
                          </CustomTypography>
                          <CustomTypography className={styles.JobPreviewData}>
                          {level}
                          </CustomTypography>
                        </Box>
                        <Box sx={{ display: "flex", gap: "10px" }}>
                          <CustomTypography className={styles.JobPreviewTypo}>
                            Job Description :
                          </CustomTypography>
                         <Box>
                <ReactQuill value={descript} readOnly={true} theme={"bubble"} />
                         </Box>
                        </Box>
                        {/* <Box sx={{ display: "flex", gap: "10px" }}>
                          <CustomTypography className={styles.JobPreviewTypo}>
                            Requirements :
                          </CustomTypography>
                          <CustomTypography className={styles.JobPreviewData}>
                            {bull} Collaborate with other team members and
                            stakeholders
                            <br></br>
                            {bull} Contribute to team productivity, product
                            quality, and tech adoption<br></br>
                            {bull} Communicate technical design, requirements,
                            functionality, and limitations
                            <br></br>
                            {bull} Be overall responsible for all the
                            deliverables and for meeting targets<br></br>
                            {bull} Recommend and execute<br></br>
                          </CustomTypography>
                        </Box>
                        <Box sx={{ display: "flex", gap: "10px" }}>
                          <CustomTypography className={styles.JobPreviewTypo}>
                            Job Requirements :
                          </CustomTypography>
                          <CustomTypography className={styles.JobPreviewData}>
                            {bull} Bachelor&apos;s degree
                            <br></br>
                            {bull} At least 1+ years of prior experience in a
                            similar area<br></br>
                            {bull} Ability to work effectively both individually
                            and in a team environment
                            <br></br>
                            {bull} Excellent verbal and written communication
                            skills<br></br>
                            {bull} Great attention to detail<br></br>
                          </CustomTypography>
                        </Box> */}
                        <Box sx={{ display: "flex", gap: "10px" }}>
                          <CustomTypography className={styles.JobPreviewTypo}>
                            Required Skills :
                          </CustomTypography>
                          <Stack direction="row" flexWrap={'wrap'} gap={'10px'} spacing={2}>
                          {details &&
                  details.requiredSkill.map((skill)=>(
                    <>
                            <Chip
                              label={skill.skill}
                              sx={{ bgcolor: "#D4F0FC" }}
                            />
                    </>
                  ))}
                          </Stack>
                        </Box>
                        <Box sx={{ display: "flex", gap: "10px" }}>
                          <CustomTypography className={styles.JobPreviewTypo}>
                            Job Location :
                          </CustomTypography>
                          <CustomTypography className={styles.JobPreviewData}>
                          {addres?.join(" | ")}
                          </CustomTypography>
                        </Box>
                      </Stack>
                    </Box>
                    {showq === "true" || showq === undefined ? (
              <>
                <Box sx={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    p: "20px",
  }}>
                  <Typography variant="h5" sx={{
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "18px",
  }}>
                    Screening Questions
                  </Typography>
                </Box>
                {quiz.map((qiz, index) => (
                  <>
                  <Box
                    sx={{
                      backgroundColor: "white",
                      p: "10px",
                      m: "0px 20px 15px 20px",
                      borderRadius: "16px",
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{ ml: "26px", color: "#4fa9ff" }}
                    >
                      Question {index + 1}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        fontSize: "16px",
                        lineHeight: "18px",
                        ml: "26px",
                      }}
                    >
                      {qiz.questions}
                    </Typography>
                    <br></br>
                    <Typography
                      variant="body1"
                      sx={{ ml: "26px", color: "#4fa9ff" }}
                    >
                      Prefered Answer
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        fontSize: "16px",
                        lineHeight: "18px",
                        ml: "26px",
                      }}
                    >
                      {qiz.preferedAns}
                    </Typography>
                  </Box>
                  </>
                ))}
                <Divider />
              </>
            ) : (
              ""
            )}        
                    <Box
                      sx={{
                        bgcolor: "#2699FF",
                        height: "55px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        p: "0px 15px 0px 15px",
                        mt: "25px",
                      }}
                    >
                      <CustomTypography
                        sx={{
                          color: "white",
                          fontSize: "16px",
                        }}
                      >
                        Essential Information
                      </CustomTypography>
                      <IconButton  onClick={() => {
              settingIndex(1);
            }}>
                      <EditOutlinedIcon color="white" sx={{ color: "white" }} />
                      </IconButton>
                    </Box>
                    <Box sx={{ p: "20px 15px 0px 15px" }}>
                      <Stack spacing={3}>
                        <Box sx={{ display: "flex", gap: "10px" }}>
                          <CustomTypography className={styles.JobPreviewTypo}>
                            Career Level :
                          </CustomTypography>
                          <CustomTypography className={styles.JobPreviewData}>
                          {essen && essen.careerlevel}
                          </CustomTypography>
                        </Box>
                        <Box sx={{ display: "flex", gap: "10px" }}>
                          <CustomTypography className={styles.JobPreviewTypo}>
                            Experience :
                          </CustomTypography>
                          <CustomTypography className={styles.JobPreviewData}>
                          {essen && essen.experience}
                          </CustomTypography>
                        </Box>
                        <Box sx={{ display: "flex", gap: "10px" }}>
                          <CustomTypography className={styles.JobPreviewTypo}>
                            Qualifications :
                          </CustomTypography>
                          <CustomTypography className={styles.JobPreviewData}>
                          {essen && essen.qualification}
                          </CustomTypography>
                        </Box>
                        <Box sx={{ display: "flex", gap: "10px" }}>
                          <CustomTypography className={styles.JobPreviewTypo}>
                            Application Deadline :
                          </CustomTypography>
                          <CustomTypography className={styles.JobPreviewData}>
                          {details && moment(details.applicationDeadline).format("L")}
                          </CustomTypography>
                        </Box>
                        <Box sx={{ display: "flex", gap: "10px" }}>
                          <CustomTypography className={styles.JobPreviewTypo}>
                            Notice Period :
                          </CustomTypography>
                          <CustomTypography className={styles.JobPreviewData}>
                            15 Days
                          </CustomTypography>
                        </Box>
                        <Box sx={{ display: "flex", gap: "10px" }}>
                          <CustomTypography className={styles.JobPreviewTypo}>
                            Job Type :
                          </CustomTypography>
                          <CustomTypography className={styles.JobPreviewData}>
                          {details && details?.notice === undefined ? 'Not Provided' : details?.notice}
                          </CustomTypography>
                        </Box>
                        {details?.salary?.salaryType !== undefined &&
            details?.salary?.salaryType !== "noprovide" ? (
              <>
                 <Box sx={{ display: "flex", gap: "10px" }}>
                  <Typography>Salary :</Typography>
                  <Typography sx={styles.contentprv}>
                    {details && details.salary.salaryType} (
                    {details && details.salary.minSalary} to{" "}
                    {details && details.salary.maxSalary})
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <Typography>Salary Currency : </Typography>
                  <Typography sx={styles.contentprv}>
                    {details && details.salary.salaryCrrancy}
                  </Typography>
                </Box>
              </>
            ) : (
              <>
                 <Box sx={{ display: "flex", gap: "10px" }}>
                  <Typography>Salary :</Typography>
                  <Typography sx={styles.contentprv}>Negotiable</Typography>
                </Box>
             
              </>
            )}
                      </Stack>
                    </Box>
                  </Box>
                </CardContent>
    </>
  );
};

export default JobPreview;
