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
import Layout from "../../layout";

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

const JobPreview = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [apiAddress, setapiAddress] = useState("");
  //   const member = useSelector((state) => state.company.members);
  //   const [memberrole, setMemberrole] = React.useState(member);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <Layout>
      <Box sx={{ display: "flex", width: "100%", mb: "30px" }}>
        <CustomTypography
          variant="h6"
          sx={{
            fontFamily: BOLD,
            fontSize: "28px",
            flex: 1,
            color: "white",
          }}
          gutterBottom
        >
          Create New Job
        </CustomTypography>
      </Box>
      <Card
        sx={{
          width: "100%",
          backgroundColor: "#F2F8FD",
          mt: "40px",
          p: "25px 25px 80px 25px",
        }}
      >
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
              <EditOutlinedIcon color="white" sx={{ color: "white" }} />
            </Box>
            <Box sx={{ p: "20px 15px 0px 15px" }}>
              <Stack spacing={3}>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <CustomTypography className={styles.JobPreviewTypo}>
                    Job Title :
                  </CustomTypography>
                  <CustomTypography className={styles.JobPreviewData}>
                    Lorem Ipsum
                  </CustomTypography>
                </Box>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <CustomTypography className={styles.JobPreviewTypo}>
                    Job Description :
                  </CustomTypography>
                  <CustomTypography className={styles.JobPreviewData}>
                    Are you looking for the next professional opportunity that
                    will challenge you and advance your career? Join our team
                    now!
                  </CustomTypography>
                </Box>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <CustomTypography className={styles.JobPreviewTypo}>
                    Requirements :
                  </CustomTypography>
                  <CustomTypography className={styles.JobPreviewData}>
                    {bull} Collaborate with other team members and stakeholders
                    <br></br>
                    {bull} Contribute to team productivity, product quality, and
                    tech adoption<br></br>
                    {bull} Communicate technical design, requirements,
                    functionality, and limitations
                    <br></br>
                    {bull} Be overall responsible for all the deliverables and
                    for meeting targets<br></br>
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
                    {bull} At least 1+ years of prior experience in a similar
                    area<br></br>
                    {bull} Ability to work effectively both individually and in
                    a team environment
                    <br></br>
                    {bull} Excellent verbal and written communication skills
                    <br></br>
                    {bull} Great attention to detail<br></br>
                  </CustomTypography>
                </Box>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <CustomTypography className={styles.JobPreviewTypo}>
                    Required Skills :
                  </CustomTypography>
                  <Stack direction="row" spacing={2}>
                    <Chip
                      label="Deletable"
                      onDelete={handleDelete}
                      sx={{ bgcolor: "#D4F0FC" }}
                    />
                  </Stack>
                </Box>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <CustomTypography className={styles.JobPreviewTypo}>
                    Job Location :
                  </CustomTypography>
                  <CustomTypography className={styles.JobPreviewData}>
                    Lorem Ipsum
                  </CustomTypography>
                </Box>
              </Stack>
            </Box>
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
              <EditOutlinedIcon color="white" sx={{ color: "white" }} />
            </Box>
            <Box sx={{ p: "20px 15px 0px 15px" }}>
              <Stack spacing={3}>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <CustomTypography className={styles.JobPreviewTypo}>
                    Career Level :
                  </CustomTypography>
                  <CustomTypography className={styles.JobPreviewData}>
                    Lorem Ipsum
                  </CustomTypography>
                </Box>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <CustomTypography className={styles.JobPreviewTypo}>
                    Experience :
                  </CustomTypography>
                  <CustomTypography className={styles.JobPreviewData}>
                    3+ Years
                  </CustomTypography>
                </Box>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <CustomTypography className={styles.JobPreviewTypo}>
                    Qualifications :
                  </CustomTypography>
                  <CustomTypography className={styles.JobPreviewData}>
                    Postgraduate Diploma
                  </CustomTypography>
                </Box>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <CustomTypography className={styles.JobPreviewTypo}>
                    Application Deadline :
                  </CustomTypography>
                  <CustomTypography className={styles.JobPreviewData}>
                    05/26/2023
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
                    Remote
                  </CustomTypography>
                </Box>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <CustomTypography className={styles.JobPreviewTypo}>
                    Salary :
                  </CustomTypography>
                  <CustomTypography className={styles.JobPreviewData}>
                    Negotiable
                  </CustomTypography>
                </Box>
              </Stack>
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: "40px",
                }}
              >
                <Button
                  variant="outlined"
                  sx={{ width: "50%", height: "55px" }}
                >
                  Previous
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    width: "50%",
                    bgcolor: "#015FB1 !important",
                    height: "55px",
                  }}
                >
                  Submit
                </Button>
              </Stack>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default JobPreview;
