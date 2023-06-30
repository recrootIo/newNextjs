"use client";
import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import ScreeningQuestions from "@/components/Employers/ScreeningQuestions/ScreeningQuestions";
import styled from "styled-components";
import styles from "./postNewJobPreview.module.css";
import Image from "next/image";
import dynamic from "next/dynamic";
import moment from "moment";
import companyservice from "@/redux/services/company.service";
import { setpremium } from "@/redux/slices/job";
import { isEmpty } from "lodash";
const Tour = dynamic(() => import("reactour"), { ssr: false });

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

const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const JobPreview = (props) => {
  const details = useSelector((state) => state.jobs.details);
  const essen = useSelector((state) => state.jobs.essential);
  const addres = useSelector((state) => state.jobs.location);
  const quiz = useSelector((state) => state.jobs.question);
  const descript = useSelector((state) => state.jobs.jobDescription);
  const level = useSelector((state) => state.jobs.jobRole);
  const showq = useSelector((state) => state.jobs.queshow);

  const [isTourOpen, setTourOpen] = React.useState(false);

  const salaryType = details && details.salary.salaryType;

  const settingIndex = (index) => {
    props.Pages(index);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setpremium(false));
  }, [dispatch]);
  const updateValue = async () => {
    const companyService = new companyservice();
    await companyService.updateTourValue({ jobPreview: false });
  };

  const closeTour = () => {
    setTourOpen(false);
    updateValue();
  };

  const accentColor = "#5cb7b7";

  const tourConfig = [
    {
      selector: ".previewJob",
      style: {
        color: "black",
      },
      content: ({ goTo }) => (
        <Stack
          sx={{
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CustomTypography>
            Ensure that all the information you provided is accurate before
            submitting
          </CustomTypography>
          <Button onClick={() => closeTour()}>SKIP</Button>
        </Stack>
      ),
    },
    {
      selector: ".nextButton",
      style: {
        color: "black",
      },
      content: ({ goTo }) => (
        <Stack
          sx={{
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CustomTypography>
            Click on &quot;Submit&quot; button to make your job post live on
            Recroot
          </CustomTypography>
          <Button onClick={() => closeTour()}>DONE</Button>
        </Stack>
      ),
    },
  ];

  const company = useSelector((state) => state?.company?.companyDetl);

  useEffect(() => {
    setTourOpen(() => company?.tours?.jobPreview);
  }, [company?.tours?.jobPreview]);
  useEffect(() => {
    const element = document.getElementById("top");
    element.scrollIntoView({
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <CardContent sx={{ position: "relative" }}>
        <Box className="previewJob">
          <Image
            src="/corn-img.png"
            alt="Corn image for the background"
            priority={true}
            width="200"
            height="200"
            style={{
              position: "absolute",
              zIndex: 1,
              top: "450px",
              left: "500px",
            }}
          />
          <Image
            src="/shaded-ring-ng.png"
            alt="Corn image for the background"
            priority={true}
            width="200"
            height="200"
            style={{
              position: "absolute",
              zIndex: 1,
              top: "-169px",
            }}
          />
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
            <IconButton
              onClick={() => {
                settingIndex(0);
              }}
            >
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
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  gap: "10px",
                }}
              >
                <CustomTypography className={styles.JobPreviewTypo}>
                  Job Description :
                </CustomTypography>
                <Box>
                  <ReactQuill
                    value={descript}
                    readOnly={true}
                    theme={"bubble"}
                    style={{ m: 0 }}
                  />
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
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: "10px",
                }}
              >
                <CustomTypography className={styles.JobPreviewTypo}>
                  Required Skills :
                </CustomTypography>
                <Stack
                  direction="row"
                  flexWrap={"wrap"}
                  gap={"10px"}
                  spacing={2}
                >
                  {details &&
                    details.requiredSkill.map((skill) => (
                      <>
                        <Chip
                          label={skill.skill}
                          sx={{
                            bgcolor: "#D4F0FC",
                            marginLeft: "0px !important",
                          }}
                        />
                      </>
                    ))}
                </Stack>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: "10px",
                }}
              >
                <CustomTypography className={styles.JobPreviewTypo}>
                  Mandotary Skills :
                </CustomTypography>
                {isEmpty(details.mandatorySkill) ? (
                  <CustomTypography className={styles.JobPreviewData}>
                    Not Provided
                  </CustomTypography>
                ) : (
                  <Stack
                    direction="row"
                    flexWrap={"wrap"}
                    gap={"10px"}
                    spacing={2}
                  >
                    {details &&
                      details.mandatorySkill.map((skill) => (
                        <>
                          <Chip
                            label={skill.skill}
                            sx={{
                              bgcolor: "#D4F0FC",
                              marginLeft: "0px !important",
                            }}
                          />
                        </>
                      ))}
                  </Stack>
                )}
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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  p: "20px",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    fontSize: "16px",
                    lineHeight: "18px",
                  }}
                >
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
            <IconButton
              onClick={() => {
                settingIndex(1);
              }}
            >
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
                  {details && details?.notice === undefined
                    ? "Not Provided"
                    : details?.notice}
                </CustomTypography>
              </Box>
              <Box sx={{ display: "flex", gap: "10px" }}>
                <CustomTypography className={styles.JobPreviewTypo}>
                  Job Type :
                </CustomTypography>
                <CustomTypography className={styles.JobPreviewData}>
                  {details && details?.jobType === undefined
                    ? "Not Provided"
                    : details?.jobType}
                </CustomTypography>
              </Box>
              {details?.salary?.salaryType !== undefined &&
              details?.salary?.salaryType !== "noprovide" ? (
                <>
                  <Box sx={{ display: "flex", gap: "10px" }}>
                    <CustomTypography>Salary :</CustomTypography>
                    <CustomTypography sx={styles.contentprv}>
                      {salaryType && capitalizeFirstLetter(salaryType)} (
                      {details && details.salary.minSalary} to{" "}
                      {details && details.salary.maxSalary})
                    </CustomTypography>
                  </Box>
                  <Box sx={{ display: "flex", gap: "10px" }}>
                    <CustomTypography>Salary Currency : </CustomTypography>
                    <CustomTypography sx={styles.contentprv}>
                      {details && details.salary.salaryCrrancy}
                    </CustomTypography>
                  </Box>
                </>
              ) : (
                <>
                  <Box sx={{ display: "flex", gap: "10px" }}>
                    <CustomTypography>Salary :</CustomTypography>
                    <CustomTypography sx={styles.contentprv}>
                      Negotiable
                    </CustomTypography>
                  </Box>
                </>
              )}
            </Stack>
          </Box>
        </Box>
      </CardContent>

      <Tour
        onRequestClose={closeTour}
        disableInteraction={true}
        steps={tourConfig}
        isOpen={isTourOpen}
        maskClassName={styles.mask}
        className={styles.helper}
        rounded={8}
        accentColor={accentColor}
      />
    </>
  );
};

export default JobPreview;
