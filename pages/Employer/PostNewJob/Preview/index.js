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
  Tabs,
  Tab,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  AppBar,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
  Divider,
  Switch,
  FormControlLabel,
  InputAdornment,
  TextField,
  IconButton,
  Autocomplete,
  Chip,
  RadioGroup,
  Radio,
  FormHelperText,
  FormGroup,
} from "@mui/material";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Close } from "@mui/icons-material";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { BOLD } from "@/theme/fonts";
import EmployerNavbar from "@/components/EmployerNavbar/EmployerNavbar";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import AddIcon from "@mui/icons-material/Add";
import EditorToolbar, {
  modules,
  formats,
} from "@/components/EditorToolbar/EditorToolbar";
// import ReactQuill from "react-quill";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import ScreeningQuestions from "@/components/Employers/ScreeningQuestions/ScreeningQuestions";
import styled from "styled-components";
import styles from "./postNewJobPreview.module.css";
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

const EssentialInformation = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [apiAddress, setapiAddress] = useState("");
  //   const member = useSelector((state) => state.company.members);
  //   const [memberrole, setMemberrole] = React.useState(member);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const handleAddInput = () => {
    setMemberrole([
      ...memberrole,
      { id: uuidv4(), memberId: "", role: "", fname: "" },
    ]);
  };

  return (
    <>
      <EmployerNavbar />
      <Box
        sx={{
          backgroundImage: 'url("/EmployerDashboardBG.svg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "250px",
        }}
      ></Box>

      <Container>
        <div style={{ position: "absolute", top: "200px" }}>
          <Grid container spacing={2} sx={{ pb: "50px" }}>
            <Grid item xs={2}>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 110,
                  bgcolor: "#034275",
                  borderRadius: "10px",
                  pb: "20px",
                }}
              >
                <List component="nav" aria-label="main mailbox folders">
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "center" }}
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                  >
                    <img src="/empImg.png" alt="" />
                  </ListItemButton>
                  <Divider variant="middle" color="gray" />
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "center" }}
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                  >
                    <img src="/home.png" alt="" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "center" }}
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                  >
                    <img src="/profile.png" alt="" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "center" }}
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 3)}
                  >
                    <img src="/jobs.png" alt="" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "center" }}
                    selected={selectedIndex === 4}
                    onClick={(event) => handleListItemClick(event, 4)}
                  >
                    <img src="/team.png" alt="" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "center" }}
                    selected={selectedIndex === 5}
                    onClick={(event) => handleListItemClick(event, 5)}
                  >
                    <img src="/convo.png" alt="" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "center" }}
                    selected={selectedIndex === 6}
                    onClick={(event) => handleListItemClick(event, 6)}
                  >
                    <img src="/subscription.png" alt="" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "center" }}
                    selected={selectedIndex === 7}
                    onClick={(event) => handleListItemClick(event, 7)}
                  >
                    <img src="/myAccount.png" alt="" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "center" }}
                    selected={selectedIndex === 8}
                    onClick={(event) => handleListItemClick(event, 8)}
                  >
                    <img src="/power-icon.png" alt="" />
                  </ListItemButton>
                </List>
              </Box>
            </Grid>
            <Grid item xs={10}>
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
                      <img src="/post-newjob-thirdstep-img.png" alt="" />
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
                        <Box sx={{ display: "flex" }}>
                          <CustomTypography className={styles.JobPreviewTypo}>
                            {" "}
                            Job Title :
                          </CustomTypography>
                          <CustomTypography className={styles.JobPreviewData}>
                            &nbsp;&nbsp;Lorem Ipsum
                          </CustomTypography>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                          <CustomTypography className={styles.JobPreviewTypo}>
                            Job Description :
                          </CustomTypography>
                          <CustomTypography className={styles.JobPreviewData}>
                            &nbsp;&nbsp;Are you looking for the next
                            professional opportunity that will challenge you and
                            advance your career? Join our team now!
                          </CustomTypography>
                        </Box>
                        <Box sx={{ display: "flex" }}>
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
                        <Box sx={{ display: "flex" }}>
                          <CustomTypography className={styles.JobPreviewTypo}>
                            Job Requirements :
                          </CustomTypography>
                          <CustomTypography className={styles.JobPreviewData}>
                            {bull} Bachelor's degree
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
                        </Box>
                      </Stack>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default EssentialInformation;
