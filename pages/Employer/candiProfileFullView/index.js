"use client";
import * as React from "react";
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
  Avatar,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  InputAdornment,
  IconButton,
  LinearProgress,
  useMediaQuery,
  Typography,
  Backdrop,
  CircularProgress,
  Dialog,
} from "@mui/material";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import FactoryOutlinedIcon from "@mui/icons-material/FactoryOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import BoyIcon from "@mui/icons-material/Boy";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { BOLD } from "@/theme/fonts";
import EmployerNavbar from "@/components/EmployerNavbar/EmployerNavbar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TwitterIcon from "@mui/icons-material/Twitter";
import PropTypes from "prop-types";
import EventNoteIcon from "@mui/icons-material/EventNote";
import EditorToolbar, {
  modules,
  formats,
} from "@/components/EditorToolbar/EditorToolbar";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
// import styles from "./candidateView.module.css";
import Image from "next/image";
import styled from "styled-components";
import { AccountCircle } from "@mui/icons-material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import BeenhereOutlinedIcon from "@mui/icons-material/BeenhereOutlined";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styles from "./candiProfileFullView.module.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import applyJobService from "@/redux/services/applyjobs.service";
import { useState } from "react";
import moment from "moment";
import download from "downloadjs";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
import { useDispatch, useSelector } from "react-redux";
import { getCandi, getSinResume, updateNote } from "@/redux/slices/applyJobs";
import { openAlert } from "@/redux/slices/alert";
import { SUCCESS } from "@/utils/constants";
import DvrIcon from "@mui/icons-material/Dvr";
import Addinterview from "@/components/Employers/Addinterview/Addinterview";
import {
  getSchedulesInterview,
  setinterview,
} from "@/redux/slices/interviewslice";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import dynamic from "next/dynamic";
import axios from "axios";
import Cookies from "js-cookie";
import { isEmpty } from "lodash";
import { useRef } from "react";
import companyservice from "@/redux/services/company.service";
// import { C } from "@fullcalendar/core/internal-common";
const Tour = dynamic(() => import("reactour"), { ssr: false });

const bull = (
  <Box
    component="span"
    sx={{
      display: "inline-block",
      mx: "2px",
      transform: "scale(0.8)",
      color: "rgba(1, 49, 63, 0.4)",
    }}
  >
    •
  </Box>
);

export const StyledAvatar = styled(Avatar)(({}) => ({
  "& .MuiAvatar-img": {
    width: "150px",
    height: "165px",
  },
  height: "200px",
  width: "200px",
}));

const CandiFullProfileView = () => {
  const router = useRouter();
  const { appId } = router.query;
  const { canId } = router.query;
  const [appdata, setappdata] = useState({});
  const [status, setstatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [interviewshow, setinterviewshow] = useState(false);
  const [isTourOpen, setTourOpen] = React.useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (appId !== undefined) {
      setLoading(true);
      getCand();
    }
    if (canId) {
      setLoading(true);
      getCanddet();
    }
    // .then((res) => console.log(res));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appId, canId]);

  const getCanddet = () => {
    dispatch(getCandi(canId))
      .unwrap()
      .then((originalPromiseResult) => {
        setcandidate(originalPromiseResult);
        dispatch(
          getSinResume(
            originalPromiseResult?.resume?.resumeFileLocation[0]?._id
          )
        );
        setLoading(false);
      });
  };

  const getCand = () => {
    new applyJobService().getAppliedOnly(appId).then((res) => {
      setappdata(res.data);
      setNote(res.data?.notes);
      setstatus(res.data.status);
      setcandidate(res.data?.candidateId);
      dispatch(getSinResume(res.data?.resumeId));
      const ids = {
        cid: res.data?.candidateId?._id,
        jid: res.data?.jobId,
      };
      dispatch(getSchedulesInterview(ids));
      setLoading(false);
    });
  };
  const [candidate, setcandidate] = useState({});
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offSet) {
    setPageNumber((prevPageNumber) => prevPageNumber + offSet);
  }

  function changePageBack() {
    changePage(-1);
  }

  function changePageNext() {
    changePage(+1);
  }
  const matches = useMediaQuery("(max-width:600px)");
  const match = useMediaQuery("(max-width:1050px)");
  const resume = useSelector((state) => state.apply.resume);
  const scheduleinterview = useSelector((state) => state.sinterview.partcInt);
  const recroot = `https://api.arinnovate.io/api/downloadResume?resume=${resume?.resume?.replace(
    /\\/g,
    "/"
  )}`;

  const isItPdfFile = recroot.includes("pdf");

  const getImageUrl = (candi) => {
    return candi?.profpicFileLocation?.photo
      ? `https://api.arinnovate.io/api/openProfpic?photo=${candi?.profpicFileLocation?.photo}`
      : `data:image/jpeg;base64,${candi?.headShot}`;
  };

  const handleChange = (e) => {
    if (e.target.value === status) {
      return;
    }
    new applyJobService()
      .updateAppStatus(appdata?._id, { status: e.target.value })
      .then((res) => {
        if (res?.status === 200) {
          dispatch(
            openAlert({
              type: SUCCESS,
              message: "Application status was updated",
            })
          );
          getCand();
        }
      });
  };

  const handleInterview = () => {
    setinterviewshow(!interviewshow);
  };

  const handleEditInterview = () => {
    dispatch(setinterview(scheduleinterview[0]));
    setinterviewshow(true);
  };

  useEffect(() => {
    const ids = {
      cid: appdata?.candidateId?._id,
      jid: appdata?.jobId,
    };
    dispatch(getSchedulesInterview(ids));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [interviewshow]);

  const [cvshow, setcvshow] = useState(false);
  const [open, setOpen] = React.useState(false);
  const enableCvAction = () => {
    setinterviewshow(false);
    setcvshow(!cvshow);
  };
  const onChange = (e) => {
    setNote(() => e);
  };
  const oldNotes = useSelector((data) => data.apply.single?.notes);
  React.useEffect(() => {
    setNote(() => oldNotes);
  }, [oldNotes]);
  const [notes, setNote] = React.useState("");
  const user = Cookies.get();
  const saveNote = () => {
    axios
      .post(
        `https://api.arinnovate.io/api/postNote/${appdata._id}`,
        { notes: notes },
        { headers: { "x-access-token": `${user.token}` } }
      )
      .then((res) => {
        handleDialogAction();
        // dispatch(updateNote({ notes, _id: appdata._id }));
        dispatch(
          openAlert({
            type: SUCCESS,
            message: "Note has been saved",
          })
        );
      });
  };
  const handleDialogAction = () => {
    setOpen(!open);
  };
  const back = () => {
    if (canId) {
      router.back();
    } else {
      router.back();
      // router.push(`/Employer/AllApplicants?aid=${appdata?._id}`);
    }
  };

  const updateValue = async () => {
    const companyService = new companyservice();
    await companyService.updateTourValue({ applicantView: false });
  };

  const closeTour = () => {
    setTourOpen(false);
    updateValue();
  };

  const accentColor = "#5cb7b7";

  const tourConfig = [
    {
      selector: ".action",
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
            This section allows you to update the applicants&apos; status and
            schedule interviews with them
          </CustomTypography>
          <Button onClick={() => closeTour()}>SKIP</Button>
        </Stack>
      ),
    },
    {
      selector: ".cvDownload",
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
            Click here to download the resume of the applicant
          </CustomTypography>
          <Button onClick={() => closeTour()}>DONE</Button>
        </Stack>
      ),
    },
  ];

  const company = useSelector((state) => state?.company?.companyDetl);

  useEffect(() => {
    setTourOpen(() => company?.tours?.applicantView);
  }, [company?.tours?.applicantView]);

  console.log(candidate, "candidate");

  return (
    <>
      <EmployerNavbar />
      <Box
        sx={{
          backgroundImage: 'url("/EmployerDashboardBG.svg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "250px",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Container>
          <Button
            sx={{
              color: "white",
              fontWeight: "500",
              fontSize: "20px",
              textTransform: "capitalize",
              zIndex: "100",
            }}
            startIcon={<ArrowBackIcon />}
            onClick={() => back()}
          >
            Back
          </Button>
        </Container>
      </Box>

      <Container>
        <div style={{ position: "relative", top: "-150px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              mb: "30px",
            }}
          >
            <CustomTypography
              variant="h6"
              sx={{
                fontFamily: BOLD,
                fontSize: "28px",
                color: "white",
              }}
              gutterBottom
            >
              Profile
            </CustomTypography>
          </Box>
          <Stack spacing={3}>
            <Box
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: "15px",
                backgroundImage:
                  'url("/candidate-full-profile-view-card-bg.svg")',
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                display: "flex",
                alignItems: "center",
                p: "40px 20px 20px 20px",
              }}
            >
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  md={4}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <StyledAvatar
                    alt=""
                    src={getImageUrl(candidate)}
                    sx={{
                      objectFit: "contain",
                      height: "180px",
                      width: "180px",
                      border: "6px solid #E4F7FF",
                      bgcolor: "#F4FBFE",
                      border: "10px solid rgba(228, 247, 255, 0.46)",
                    }}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  sx={{
                    borderRight: { xs: "none", sm: "1px solid white" },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    pt: { xs: "normal", sm: "0px !important", md: "normal" },
                    mt: { xs: "none", sm: "20px", md: "none" },
                  }}
                >
                  <CustomTypography
                    variant="h6"
                    sx={{
                      fontFamily: BOLD,
                      fontSize: "24px",
                      color: "white",
                    }}
                    gutterBottom
                  >
                    {candidate?.firstName} {candidate?.lastName}
                  </CustomTypography>
                  <CustomTypography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 500,
                      color: "white",
                    }}
                    gutterBottom
                  >
                    {candidate?.jobTitle}
                  </CustomTypography>
                  <CustomTypography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 500,
                      color: "white",
                    }}
                    gutterBottom
                  >
                    +{candidate?.mobile}
                  </CustomTypography>
                  <CustomTypography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 500,
                      color: "white",
                    }}
                    gutterBottom
                  >
                    {candidate?.email}
                  </CustomTypography>
                  <CustomTypography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 500,
                      color: "white",
                    }}
                    gutterBottom
                  >
                    {candidate?.resume?.location?.country}
                  </CustomTypography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    paddingLeft: { xs: 0, md: "60px !important" },
                    pt: { xs: "normal", sm: "0px !important", md: "normal" },
                    mt: { xs: "none", sm: "20px", md: "none" },
                  }}
                >
                  <CustomTypography
                    variant="h6"
                    sx={{
                      fontSize: "18px",
                      color: "white",
                      fontWeight: 600,
                    }}
                    gutterBottom
                  >
                    Other Info:
                  </CustomTypography>
                  {candidate?.resume?.location?.country?.length === 0 ? (
                    <CustomTypography
                      style={{
                        fontWeight: 500,
                        fontSize: "18px",
                        color: "white",
                      }}
                      gutterBottom
                    >
                      Country : N/A
                    </CustomTypography>
                  ) : (
                    <CustomTypography
                      sx={{
                        fontSize: "18px",
                        fontWeight: 500,
                        color: "white",
                      }}
                      gutterBottom
                    >
                      Country : {candidate?.resume?.location?.country}
                    </CustomTypography>
                  )}
                  {candidate?.resume?.nationality?.length === 0 ? (
                    <CustomTypography
                      style={{
                        fontWeight: 500,
                        fontSize: "18px",
                        color: "white",
                      }}
                      gutterBottom
                    >
                      Nationality : N/A
                    </CustomTypography>
                  ) : (
                    <CustomTypography
                      sx={{
                        fontSize: "18px",
                        fontWeight: 500,
                        color: "white",
                      }}
                      gutterBottom
                    >
                      Nationality : {candidate?.resume?.nationality?.country}
                    </CustomTypography>
                  )}
                  {candidate?.resume?.countrieswithworkingRights?.country
                    ?.length === 0 ? (
                    <CustomTypography
                      style={{
                        fontWeight: 500,
                        fontSize: "18px",
                        color: "white",
                      }}
                      gutterBottom
                    >
                      Working rights : N/A
                    </CustomTypography>
                  ) : (
                    <CustomTypography
                      sx={{
                        fontSize: "18px",
                        fontWeight: 500,
                        color: "white",
                      }}
                      gutterBottom
                    >
                      Working rights :{" "}
                      {candidate?.resume?.countrieswithworkingRights?.country}
                    </CustomTypography>
                  )}
                  {candidate?.resume?.notice?.length === 0 ? (
                    <CustomTypography
                      style={{
                        fontWeight: 500,
                        fontSize: "18px",
                        color: "white",
                      }}
                      gutterBottom
                    >
                      Notice Period : N/A
                    </CustomTypography>
                  ) : (
                    <CustomTypography
                      sx={{
                        fontSize: "18px",
                        fontWeight: 500,
                        color: "white",
                      }}
                      gutterBottom
                    >
                      Notice Period :{candidate?.resume?.notice}
                    </CustomTypography>
                  )}
                  {candidate?.resume?.totalWorkExperience?.length === 0 ? (
                    <CustomTypography
                      style={{
                        fontWeight: 500,
                        fontSize: "18px",
                        color: "white",
                      }}
                      gutterBottom
                    >
                      Total Work Experience : N/A
                    </CustomTypography>
                  ) : (
                    <CustomTypography
                      sx={{
                        fontSize: "18px",
                        fontWeight: 500,
                        color: "white",
                      }}
                      gutterBottom
                    >
                      Total Work Experience :{" "}
                      {candidate?.resume?.totalWorkExperience} Years
                    </CustomTypography>
                  )}
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    alignItems: { xs: "flex-start", sm: "flex-end" },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      width: { xs: "100%", sm: "33%" },
                      justifyContent: { xs: "flex-start", sm: "center" },
                      gap: "10px",
                      borderRight: { xs: "none", sm: "1px solid white" },
                    }}
                  >
                    <LinkedInIcon sx={{ color: "white" }} />
                    <CustomTypography
                      sx={{
                        fontSize: "18px",
                        fontWeight: 500,
                        color: "white",
                        width: "200px", overflowWrap: "anywhere"
                      }}
                    >
                      {candidate?.resume?.socialMediaLink?.linkin}
                    </CustomTypography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      width: { xs: "100%", sm: "33%" },
                      justifyContent: { xs: "flex-start", sm: "center" },
                      gap: "10px",
                    }}
                  >
                    <TwitterIcon sx={{ color: "white" }} />
                    <CustomTypography
                      sx={{
                        fontSize: "18px",
                        fontWeight: 500,
                        color: "white",width: "200px", overflowWrap: "anywhere"
                      }}
                    >
                      {candidate?.resume?.socialMediaLink?.twitter}
                    </CustomTypography>
                  </Box>
                </Grid>
                <Box
                  sx={{
                    ml: { xs: "16px", sm: "auto" },
                    display: "flex",
                    gap: "30px",
                    mt: { xs: "10px", sm: 0 },
                    width: { xs: "100%", sm: "auto" },
                  }}
                >
                  <Button
                    sx={{
                      color: "#black !important",
                      padding: "5px !important",
                      borderRadius: "10px!important",
                      background: "#ffff !important",
                      textTransform: "capitalize !important",
                      maxHeight: "40px",
                      minWidth: "100px",
                      width: "100% !important",
                    }}
                    variant="outlined"
                    onClick={() => enableCvAction()}
                    endIcon={<PersonOutlineIcon />}
                  >
                    View Cv
                  </Button>
                  {canId ? (
                    ""
                  ) : (
                    <Button
                      sx={{
                        color: "#black !important",
                        padding: "5px !important",
                        borderRadius: "10px!important",
                        background: "#ffff !important",
                        textTransform: "capitalize !important",
                        maxHeight: "40px",
                        minWidth: "100px",
                        width: "100% !important",
                      }}
                      variant="outlined"
                      onClick={() => handleDialogAction()}
                      endIcon={<EventNoteIcon />}
                    >
                      Add Note
                    </Button>
                  )}
                </Box>
              </Grid>
            </Box>
            {isEmpty(notes) ? (
              ""
            ) : (
              <Box
                sx={{
                  width: "100%",
                  border: "1px solid #D3EAFF",
                  borderRadius: "15px",
                }}
              >
                <Box
                  sx={{
                    bgcolor: "#D3EAFF",
                    width: "100%",
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                    height: "50px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    p: "0 25px 0 25px",
                  }}
                >
                  <CustomTypography className={styles.FullProfileSectionTitle}>
                    Notes
                  </CustomTypography>
                </Box>
                <Box sx={{ p: "25px" }}>
                  {/* <Stack spacing={1}> */}
                  <ReactQuill value={notes} readOnly={true} theme={"bubble"} />
                  {/* </Stack> */}
                </Box>
              </Box>
            )}
            {cvshow === false ? (
              canId ? (
                ""
              ) : (
                <Box
                  sx={{
                    width: "100%",
                    border: "1px solid #D3EAFF",
                    borderRadius: "15px",
                  }}
                  className="action"
                >
                  <Box
                    sx={{
                      bgcolor: "#D3EAFF",
                      width: "100%",
                      borderTopLeftRadius: "10px",
                      borderTopRightRadius: "10px",
                      height: "50px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      p: "0 25px 0 25px",
                    }}
                  >
                    <CustomTypography
                      className={styles.FullProfileSectionTitle}
                    >
                      Action
                    </CustomTypography>
                  </Box>
                  <Box sx={{ p: "25px" }}>
                    {/* <Stack spacing={1}> */}
                    <Grid container spacing={2} alignItems={"center"}>
                      <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Status
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={status}
                            label="Status"
                            onChange={handleChange}
                          >
                            <MenuItem disabled value={"viewed"}>
                              Viewed
                            </MenuItem>
                            <MenuItem value={"shortlist"}>Shortlist</MenuItem>
                            <MenuItem value={"rejected"}>Reject</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        {scheduleinterview?.length > 0 ? (
                          <Button
                            sx={{
                              color: "#ffff !important",
                              padding: "15px !important",
                              borderRadius: "10px!important",
                              background: "#4fa9ff !important",
                              textTransform: "capitalize !important",
                              width: "100% !important",
                              // marginBottom: "10px",
                            }}
                            variant="contained"
                            onClick={handleEditInterview}
                          >
                            <DvrIcon /> Edit Interview
                          </Button>
                        ) : (
                          <Button
                            sx={{
                              color: "#ffff !important",
                              padding: "15px !important",
                              borderRadius: "10px!important",
                              background: "#4fa9ff !important",
                              textTransform: "capitalize !important",
                              width: "100% !important",
                              // marginBottom: "10px",
                            }}
                            variant="contained"
                            onClick={handleInterview}
                          >
                            <DvrIcon /> Schedule Interview
                          </Button>
                        )}
                      </Grid>
                    </Grid>
                    {/* </Stack> */}
                  </Box>
                </Box>
              )
            ) : (
              ""
            )}
            {interviewshow === false ? (
              <>
                {cvshow === false ? (
                  <>
                    <Box
                      sx={{
                        width: "100%",
                        border: "1px solid #D3EAFF",
                        borderRadius: "15px",
                      }}
                    >
                      <Box
                        sx={{
                          bgcolor: "#D3EAFF",
                          width: "100%",
                          borderTopLeftRadius: "10px",
                          borderTopRightRadius: "10px",
                          height: "50px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          p: "0 25px 0 25px",
                        }}
                      >
                        <CustomTypography
                          className={styles.FullProfileSectionTitle}
                        >
                          Personal Details
                        </CustomTypography>
                      </Box>
                      <Box sx={{ p: "25px" }}>
                        <Stack spacing={1}>
                          <Box
                            sx={{ display: "flex", flexDirection: "column" }}
                          >
                            <CustomTypography
                              className={styles.FullProfileSectionTypo}
                            >
                              About
                            </CustomTypography>
                            {candidate?.about?.length === 0 ? (
                              <CustomTypography
                                style={{
                                  fontWeight: 500,
                                  fontSize: "16px",
                                  marginLeft: "20px",
                                  color: "red",
                                }}
                              >
                                N/P
                              </CustomTypography>
                            ) : (
                              <CustomTypography
                                className={styles.FullProfileSectionData}
                              >
                                {candidate?.about}
                              </CustomTypography>
                            )}
                          </Box>
                          <Box
                            className={styles.FullProfilePersonalDetailsTypoBox}
                          >
                            <CustomTypography
                              className={styles.FullProfileSectionTypo}
                            >
                              Current Salary :
                            </CustomTypography>
                            <CustomTypography
                              className={styles.FullProfileSectionData}
                            >
                              {candidate?.resume?.currentSalary?.salary}{" "}
                              {candidate?.resume?.currentSalary?.denomination}
                            </CustomTypography>
                          </Box>
                          <Box
                            className={styles.FullProfilePersonalDetailsTypoBox}
                          >
                            <CustomTypography
                              className={styles.FullProfileSectionTypo}
                            >
                              Expected Salary :
                            </CustomTypography>
                            <CustomTypography
                              className={styles.FullProfileSectionData}
                            >
                              {candidate?.resume?.expectedSalary?.salary}{" "}
                              {candidate?.resume?.expectedSalary?.denomination}
                            </CustomTypography>
                          </Box>
                          <Box
                            className={styles.FullProfilePersonalDetailsTypoBox}
                          >
                            <CustomTypography
                              className={styles.FullProfileSectionTypo}
                            >
                              Notice Period :
                            </CustomTypography>
                            <CustomTypography
                              className={styles.FullProfileSectionData}
                            >
                              {candidate?.resume?.notice}
                            </CustomTypography>
                          </Box>
                          <Box
                            className={styles.FullProfilePersonalDetailsTypoBox}
                          >
                            <CustomTypography
                              className={styles.FullProfileSectionTypo}
                            >
                              Work Preference :
                            </CustomTypography>
                            <CustomTypography
                              className={styles.FullProfileSectionData}
                            >
                              {candidate?.resume?.workPrefence.join("| ")}
                            </CustomTypography>
                          </Box>
                          <Box
                            className={styles.FullProfilePersonalDetailsTypoBox}
                          >
                            <CustomTypography
                              className={styles.FullProfileSectionTypo}
                            >
                              Current Offer :
                            </CustomTypography>
                            <CustomTypography
                              className={styles.FullProfileSectionData}
                            >
                              {candidate?.resume?.currentOffer}
                            </CustomTypography>
                          </Box>
                        </Stack>
                      </Box>
                    </Box>
                    {appdata?.jobId?.queshow === "true" ? (
                      <Box
                        sx={{
                          width: "100%",
                          border: "1px solid #D3EAFF",
                          borderRadius: "15px",
                        }}
                      >
                        <Box
                          sx={{
                            bgcolor: "#D3EAFF",
                            width: "100%",
                            borderTopLeftRadius: "10px",
                            borderTopRightRadius: "10px",
                            height: "50px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            p: "0 25px 0 25px",
                          }}
                        >
                          <CustomTypography
                            className={styles.FullProfileSectionTitle}
                          >
                            Questions
                          </CustomTypography>
                        </Box>
                        <Box sx={{ p: "25px" }}>
                          {appdata?.question?.map((ques) => (
                            <>
                              <Stack spacing={1}>
                                <Box
                                  className={
                                    styles.FullProfilePersonalDetailsTypoBox
                                  }
                                >
                                  <CustomTypography
                                    className={styles.FullProfileSectionTypo}
                                  >
                                    Question:
                                  </CustomTypography>
                                  <CustomTypography
                                    className={styles.FullProfileSectionData}
                                  >
                                    {ques?.questions}
                                  </CustomTypography>
                                </Box>
                                <Box
                                  className={
                                    styles.FullProfilePersonalDetailsTypoBox
                                  }
                                >
                                  <CustomTypography
                                    className={styles.FullProfileSectionTypo}
                                  >
                                    Answer:
                                  </CustomTypography>
                                  <CustomTypography
                                    className={styles.FullProfileSectionData}
                                  >
                                    {ques?.answer}
                                  </CustomTypography>
                                </Box>
                              </Stack>
                            </>
                          ))}
                        </Box>
                      </Box>
                    ) : (
                      ""
                    )}
                    <Box
                      sx={{
                        width: "100%",
                        height: "auto",
                        border: "1px solid #D3EAFF",
                        borderRadius: "15px",
                      }}
                    >
                      <Box
                        sx={{
                          bgcolor: "#D3EAFF",
                          width: "100%",
                          borderTopLeftRadius: "10px",
                          borderTopRightRadius: "10px",
                          height: "50px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          p: "0 25px 0 25px",
                        }}
                      >
                        <CustomTypography
                          className={styles.FullProfileSectionTitle}
                        >
                          Work Experience
                        </CustomTypography>
                      </Box>
                      <Box sx={{ p: "25px" }}>
                        {candidate.resume?.workExperience?.length === 0 ? (
                          <span
                            style={{
                              fontWeight: 600,
                              fontSize: "16px",
                              marginLeft: "20px",
                              color: "#fe7171",
                            }}
                          >
                            No Data Provided
                          </span>
                        ) : (
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              gap: "15px",
                              flexWrap: "wrap",
                              justifyContent: "flex-start",
                            }}
                          >
                            {candidate?.resume?.workExperience?.map(
                              (wrk, index) => (
                                <Box
                                  key={index}
                                  className={styles.ViewFullCandiProfileCard}
                                >
                                  <BeenhereOutlinedIcon
                                    sx={{ color: "rgba(3, 66, 117, 0.8)" }}
                                  />
                                  <Stack spacing={1}>
                                    <Stack direction={"row"}>
                                      <CustomTypography
                                        className={
                                          styles.FullProfileSectionTypo
                                        }
                                      >
                                        Role :
                                      </CustomTypography>
                                      <CustomTypography
                                        variant="subtitle2"
                                        className={styles.ViewFullInfoMainText}
                                      >
                                        &nbsp;{wrk?.role}
                                      </CustomTypography>
                                    </Stack>
                                    <Stack direction={"row"}>
                                      <CustomTypography
                                        className={
                                          styles.FullProfileSectionTypo
                                        }
                                      >
                                        Organization :
                                      </CustomTypography>
                                      <CustomTypography
                                        variant="subtitle2"
                                        className={styles.ViewFullInfoText}
                                      >
                                        &nbsp; {wrk?.companyName}
                                      </CustomTypography>
                                    </Stack>
                                    {wrk?.city !== "" ? (
                                      <Stack direction={"row"}>
                                        <CustomTypography
                                          className={
                                            styles.FullProfileSectionTypo
                                          }
                                        >
                                          Location :
                                        </CustomTypography>
                                        <CustomTypography
                                          variant="subtitle2"
                                          className={styles.ViewFullInfoText}
                                        >
                                          &nbsp; {wrk?.city},{wrk?.state},
                                          {wrk?.country}
                                        </CustomTypography>
                                      </Stack>
                                    ) : (
                                      ""
                                    )}
                                    {wrk?.jobProfile !== "" ? (
                                      <Stack direction={"row"}>
                                        <CustomTypography
                                          className={
                                            styles.FullProfileSectionTypo
                                          }
                                        >
                                          Job Profile :
                                        </CustomTypography>
                                        <CustomTypography
                                          variant="subtitle2"
                                          className={styles.ViewFullInfoText}
                                        >
                                          &nbsp; {wrk?.jobProfile}
                                        </CustomTypography>
                                      </Stack>
                                    ) : (
                                      ""
                                    )}
                                    <CustomTypography
                                      variant="subtitle2"
                                      className={styles.ViewFullInfoText}
                                    >
                                      {moment(wrk?.fromDate).format("LL")} -{" "}
                                      {moment(wrk?.toDate).format("LL")} {bull}{" "}
                                      {wrk?.experience} Years
                                    </CustomTypography>
                                  </Stack>
                                </Box>
                              )
                            )}
                          </Box>
                        )}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        height: "auto",
                        border: "1px solid #D3EAFF",
                        borderRadius: "15px",
                      }}
                    >
                      <Box
                        sx={{
                          bgcolor: "#D3EAFF",
                          width: "100%",
                          borderTopLeftRadius: "10px",
                          borderTopRightRadius: "10px",
                          height: "50px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          p: "0 25px 0 25px",
                        }}
                      >
                        <CustomTypography
                          className={styles.FullProfileSectionTitle}
                        >
                          Education
                        </CustomTypography>
                      </Box>
                      <Box sx={{ p: "25px" }}>
                        {candidate.resume?.education?.length === 0 ? (
                          <span
                            style={{
                              fontWeight: 600,
                              fontSize: "16px",
                              marginLeft: "20px",
                              color: "#fe7171",
                            }}
                          >
                            No Data Provided
                          </span>
                        ) : (
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              gap: "15px",
                              flexWrap: "wrap",
                              justifyContent: "flex-start",
                            }}
                          >
                            {candidate?.resume?.education?.map((edu, index) => (
                              <Box
                                key={index}
                                className={styles.ViewFullCandiProfileCard}
                              >
                                <BeenhereOutlinedIcon
                                  sx={{ color: "rgba(3, 66, 117, 0.8)" }}
                                />
                                <Stack spacing={1}>
                                  <Stack direction={"row"}>
                                    <CustomTypography
                                      variant="subtitle2"
                                      className={styles.ViewFullInfoMainText}
                                    >
                                      Degree Name :
                                    </CustomTypography>
                                    <CustomTypography
                                      variant="subtitle2"
                                      className={styles.ViewFullInfoMainText}
                                    >
                                      &nbsp;{edu?.degreeName}
                                    </CustomTypography>
                                  </Stack>
                                  <Stack direction={"row"}>
                                    <CustomTypography
                                      className={styles.FullProfileSectionTypo}
                                    >
                                      Graduate :
                                    </CustomTypography>
                                    <CustomTypography
                                      variant="subtitle2"
                                      className={styles.ViewFullInfoText}
                                    >
                                      &nbsp;{edu?.graduate}
                                    </CustomTypography>
                                  </Stack>
                                  {edu?.collegeName !== "" ? (
                                    <Stack direction={"row"}>
                                      <CustomTypography
                                        className={
                                          styles.FullProfileSectionTypo
                                        }
                                      >
                                        College Name :
                                      </CustomTypography>
                                      <CustomTypography
                                        variant="subtitle2"
                                        className={styles.ViewFullInfoText}
                                      >
                                        &nbsp; {edu?.collegeName}
                                      </CustomTypography>
                                    </Stack>
                                  ) : (
                                    ""
                                  )}
                                  {edu?.city !== "" ? (
                                    <Stack direction={"row"}>
                                      <CustomTypography
                                        className={
                                          styles.FullProfileSectionTypo
                                        }
                                      >
                                        Location :
                                      </CustomTypography>
                                      <CustomTypography
                                        variant="subtitle2"
                                        className={styles.ViewFullInfoText}
                                      >
                                        &nbsp; {edu?.city},{edu?.state},
                                        {edu?.country}
                                      </CustomTypography>
                                    </Stack>
                                  ) : (
                                    ""
                                  )}
                                  <CustomTypography
                                    variant="subtitle2"
                                    className={styles.ViewFullInfoText}
                                  >
                                    {moment(edu?.fromDate).format("LL")} -{" "}
                                    {moment(edu?.toDate).format("LL")} {bull}{" "}
                                    {edu?.experience} Years
                                  </CustomTypography>
                                </Stack>
                              </Box>
                            ))}
                          </Box>
                        )}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        height: "auto",
                        border: "1px solid #D3EAFF",
                        borderRadius: "15px",
                      }}
                    >
                      <Box
                        sx={{
                          bgcolor: "#D3EAFF",
                          width: "100%",
                          borderTopLeftRadius: "10px",
                          borderTopRightRadius: "10px",
                          height: "50px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          p: "0 25px 0 25px",
                        }}
                      >
                        <CustomTypography
                          className={styles.FullProfileSectionTitle}
                        >
                          Skills
                        </CustomTypography>
                      </Box>
                      <Box sx={{ p: "25px" }}>
                        {candidate.resume?.skills?.length === 0 ? (
                          <span
                            style={{
                              fontWeight: 600,
                              fontSize: "16px",
                              marginLeft: "20px",
                              color: "#fe7171",
                            }}
                          >
                            No Data Provided
                          </span>
                        ) : (
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              gap: "15px",
                              flexWrap: "wrap",
                              justifyContent: "flex-start",
                            }}
                          >
                            {candidate?.resume?.skills?.map((skil, index) => (
                              <Box
                                key={index}
                                className={styles.ViewFullCandiProfileSkillCard}
                              >
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    width: "100%",
                                  }}
                                >
                                  <Box sx={{ width: "30%" }}>
                                    <CustomTypography
                                      variant="subtitle2"
                                      className={styles.ViewFullInfoMainText}
                                    >
                                      {skil?.skillName}
                                    </CustomTypography>
                                  </Box>
                                  <LinearProgress
                                    variant="determinate"
                                    value={
                                      skil?.Compitance === "intermediate"
                                        ? 75
                                        : skil?.Compitance === "expert"
                                        ? 100
                                        : skil?.Compitance === "beginner"
                                        ? 25
                                        : ""
                                    }
                                    sx={{
                                      width: "70%",
                                      height: "10px",
                                      borderRadius: "5px",
                                      "& .MuiLinearProgress-bar": {
                                        backgroundColor: "#7AC1DA", // Replace with your desired color
                                      },
                                    }}
                                  />
                                </Box>
                              </Box>
                            ))}
                          </Box>
                        )}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        height: "auto",
                        border: "1px solid #D3EAFF",
                        borderRadius: "15px",
                      }}
                    >
                      <Box
                        sx={{
                          bgcolor: "#D3EAFF",
                          width: "100%",
                          borderTopLeftRadius: "10px",
                          borderTopRightRadius: "10px",
                          height: "50px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          p: "0 25px 0 25px",
                        }}
                      >
                        <CustomTypography
                          className={styles.FullProfileSectionTitle}
                        >
                          Project
                        </CustomTypography>
                      </Box>
                      <Box sx={{ p: "25px" }}>
                        {candidate.resume?.projects?.length === 0 ? (
                          <span
                            style={{
                              fontWeight: 600,
                              fontSize: "16px",
                              marginLeft: "20px",
                              color: "#fe7171",
                            }}
                          >
                            No Data Provided
                          </span>
                        ) : (
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              gap: "15px",
                              flexWrap: "wrap",
                              justifyContent: "flex-start",
                            }}
                          >
                            {candidate?.resume?.projects?.map((pro, index) => (
                              <Box
                                key={index}
                                className={styles.ViewFullCandiProfileCard}
                              >
                                <BeenhereOutlinedIcon
                                  sx={{ color: "rgba(3, 66, 117, 0.8)" }}
                                />
                                <Stack spacing={1}>
                                  <Stack direction={"row"}>
                                    <CustomTypography
                                      className={styles.FullProfileSectionTypo}
                                    >
                                      Title :
                                    </CustomTypography>
                                    <CustomTypography
                                      variant="subtitle2"
                                      className={styles.ViewFullInfoMainText}
                                    >
                                      &nbsp;{pro?.ProjectName}
                                    </CustomTypography>
                                  </Stack>
                                  <Stack direction={"row"}>
                                    <CustomTypography
                                      className={styles.FullProfileSectionTypo}
                                    >
                                      Organization :
                                    </CustomTypography>
                                    <CustomTypography
                                      variant="subtitle2"
                                      className={styles.ViewFullInfoText}
                                    >
                                      &nbsp; {pro?.Organization}
                                    </CustomTypography>
                                  </Stack>
                                  <Stack direction={"row"}>
                                    <CustomTypography
                                      className={styles.FullProfileSectionTypo}
                                    >
                                      Description :
                                    </CustomTypography>
                                    <CustomTypography
                                      variant="subtitle2"
                                      className={styles.ViewFullInfoText}
                                    >
                                      &nbsp;{pro?.Description}
                                    </CustomTypography>
                                  </Stack>
                                  <Stack direction={"row"}>
                                    <CustomTypography
                                      className={styles.FullProfileSectionTypo}
                                    >
                                      Link :
                                    </CustomTypography>
                                    <CustomTypography
                                      component="a"
                                      href={pro?.portafolioLink}
                                      className={styles.ViewFullInfoText}
                                    >
                                      &nbsp; {pro?.portafolioLink}
                                    </CustomTypography>
                                  </Stack>
                                </Stack>
                              </Box>
                            ))}
                          </Box>
                        )}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        height: "auto",
                        border: "1px solid #D3EAFF",
                        borderRadius: "15px",
                      }}
                    >
                      <Box
                        sx={{
                          bgcolor: "#D3EAFF",
                          width: "100%",
                          borderTopLeftRadius: "10px",
                          borderTopRightRadius: "10px",
                          height: "50px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          p: "0 25px 0 25px",
                        }}
                      >
                        <CustomTypography
                          className={styles.FullProfileSectionTitle}
                        >
                          Certification
                        </CustomTypography>
                      </Box>
                      <Box sx={{ p: "25px" }}>
                        {candidate.resume?.certificateFileLocation?.length ===
                        0 ? (
                          <span
                            style={{
                              fontWeight: 600,
                              fontSize: "16px",
                              marginLeft: "20px",
                              color: "#fe7171",
                            }}
                          >
                            No Data Provided
                          </span>
                        ) : (
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              gap: "15px",
                              flexWrap: "wrap",
                              justifyContent: "flex-start",
                            }}
                          >
                            {candidate?.resume?.certificateFileLocation?.map(
                              (cert, index) => (
                                <Box
                                  key={index}
                                  className={styles.ViewFullCandiProfileCard}
                                >
                                  <Box
                                    sx={{
                                      flex: "1",
                                      display: "flex",
                                      gap: "10px",
                                    }}
                                  >
                                    <BeenhereOutlinedIcon
                                      sx={{ color: "rgba(3, 66, 117, 0.8)" }}
                                    />
                                    <Stack spacing={1}>
                                      <Stack direction={"row"}>
                                        <CustomTypography
                                          className={
                                            styles.FullProfileSectionTypo
                                          }
                                        >
                                          Title :
                                        </CustomTypography>
                                        <CustomTypography
                                          variant="subtitle2"
                                          className={
                                            styles.ViewFullInfoMainText
                                          }
                                        >
                                          &nbsp; {cert?.title}
                                        </CustomTypography>
                                      </Stack>
                                      <Stack direction={"row"}>
                                        <CustomTypography
                                          className={
                                            styles.FullProfileSectionTypo
                                          }
                                        >
                                          Organization :
                                        </CustomTypography>
                                        <CustomTypography
                                          variant="subtitle2"
                                          className={styles.ViewFullInfoText}
                                        >
                                          &nbsp; {cert?.organization}
                                        </CustomTypography>
                                      </Stack>
                                      <Stack direction={"row"}>
                                        <CustomTypography
                                          className={
                                            styles.FullProfileSectionTypo
                                          }
                                        >
                                          Duration :
                                        </CustomTypography>
                                        <CustomTypography
                                          variant="subtitle2"
                                          className={styles.ViewFullInfoText}
                                        >
                                          &nbsp;{" "}
                                          {moment(cert?.issueDate).format("LL")}{" "}
                                          -{" "}
                                          {moment(cert?.expireDate).format(
                                            "LL"
                                          )}
                                        </CustomTypography>
                                      </Stack>
                                      {cert?.certificateLink !== undefined ? (
                                        <Stack direction={"row"}>
                                          <CustomTypography
                                            className={
                                              styles.FullProfileSectionTypo
                                            }
                                          >
                                            Link :
                                          </CustomTypography>
                                          <CustomTypography
                                            variant="subtitle2"
                                            className={styles.ViewFullInfoText}
                                          >
                                            &nbsp;
                                            <span>
                                              <a href={cert?.certificateLink}>
                                                {cert?.certificateLink}
                                              </a>
                                            </span>
                                          </CustomTypography>
                                        </Stack>
                                      ) : (
                                        ""
                                      )}
                                    </Stack>
                                  </Box>
                                  <IconButton
                                    onClick={async () => {
                                      const res = await fetch(
                                        `https://api.arinnovate.io/api/downloadResume?resume=${cert?.certificatepath?.replace(
                                          /\\/g,
                                          "/"
                                        )}`
                                      );
                                      const blob = await res.blob();
                                      download(blob, `${cert.certificateName}`);
                                    }}
                                  >
                                    <FileDownloadOutlinedIcon
                                      sx={{ cursor: "pointer" }}
                                    />
                                  </IconButton>
                                </Box>
                              )
                            )}
                          </Box>
                        )}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        height: "auto",
                        border: "1px solid #D3EAFF",
                        borderRadius: "15px",
                      }}
                    >
                      <Box
                        sx={{
                          bgcolor: "#D3EAFF",
                          width: "100%",
                          borderTopLeftRadius: "10px",
                          borderTopRightRadius: "10px",
                          height: "50px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          p: "0 25px 0 25px",
                        }}
                      >
                        <CustomTypography
                          className={styles.FullProfileSectionTitle}
                        >
                          Training
                        </CustomTypography>
                      </Box>
                      <Box sx={{ p: "25px" }}>
                        {candidate.resume?.traning?.length === 0 ? (
                          <span
                            style={{
                              fontWeight: 600,
                              fontSize: "16px",
                              marginLeft: "20px",
                              color: "#fe7171",
                            }}
                          >
                            No Data Provided
                          </span>
                        ) : (
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              gap: "15px",
                              flexWrap: "wrap",
                              justifyContent: "flex-start",
                            }}
                          >
                            {candidate?.resume?.traning?.map((trn, index) => (
                              <Box
                                key={index}
                                className={styles.ViewFullCandiProfileCard}
                              >
                                <BeenhereOutlinedIcon
                                  sx={{ color: "rgba(3, 66, 117, 0.8)" }}
                                />
                                <Stack spacing={1}>
                                  <Stack direction={"row"}>
                                    <CustomTypography
                                      className={styles.FullProfileSectionTypo}
                                    >
                                      Title :
                                    </CustomTypography>
                                    <CustomTypography
                                      variant="subtitle2"
                                      className={styles.ViewFullInfoMainText}
                                    >
                                      &nbsp;{trn?.title}
                                    </CustomTypography>
                                  </Stack>
                                  <Stack direction={"row"}>
                                    <CustomTypography
                                      className={styles.FullProfileSectionTypo}
                                    >
                                      Organization :
                                    </CustomTypography>
                                    <CustomTypography
                                      variant="subtitle2"
                                      className={styles.ViewFullInfoText}
                                    >
                                      &nbsp; {trn?.instituete}
                                    </CustomTypography>
                                  </Stack>
                                  <Stack direction={"row"}>
                                    <CustomTypography
                                      className={styles.FullProfileSectionTypo}
                                    >
                                      Duration :
                                    </CustomTypography>
                                    <CustomTypography
                                      variant="subtitle2"
                                      className={styles.ViewFullInfoText}
                                    >
                                      &nbsp;{moment(trn?.fromDate).format("LL")}{" "}
                                      - {moment(trn?.toDate).format("LL")}
                                    </CustomTypography>
                                  </Stack>
                                </Stack>
                              </Box>
                            ))}
                          </Box>
                        )}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        height: "auto",
                        border: "1px solid #D3EAFF",
                        borderRadius: "15px",
                      }}
                    >
                      <Box
                        sx={{
                          bgcolor: "#D3EAFF",
                          width: "100%",
                          borderTopLeftRadius: "10px",
                          borderTopRightRadius: "10px",
                          height: "50px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          p: "0 25px 0 25px",
                        }}
                      >
                        <CustomTypography
                          className={styles.FullProfileSectionTitle}
                        >
                          Resume
                        </CustomTypography>
                      </Box>
                      <Box sx={{ p: "25px" }}>
                        {isItPdfFile === false ? (
                          <Typography>
                            To view this file needs to be download.
                          </Typography>
                        ) : (
                          ""
                        )}
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                          }}
                        >
                          <Button
                            variant="contained"
                            className="cvDownload"
                            startIcon={<FileDownloadOutlinedIcon />}
                            sx={{
                              bgcolor: "#00339B !important",
                              height: "50px",
                              width: "200px",
                              textTransform: "capitalize",
                              borderRadius: "10px",
                            }}
                            onClick={async () => {
                              const res = await fetch(recroot);
                              const blob = await res.blob();
                              download(blob, `${resume.resumeName}`);
                            }}
                          >
                            Download
                          </Button>
                        </Box>
                        {isItPdfFile === false ? (
                          ""
                        ) : (
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              flexDirection: "column",
                              mt: 4,
                            }}
                          >
                            <p>
                              Page {pageNumber} of {numPages}
                            </p>
                            {pageNumber > 1 && (
                              <IconButton onClick={changePageBack}>
                                <SkipPreviousRoundedIcon
                                  sx={{ color: "#4fa9ff", fontSize: "2rem" }}
                                />
                              </IconButton>
                            )}
                            {pageNumber < numPages && (
                              <IconButton onClick={changePageNext}>
                                <SkipNextRoundedIcon
                                  sx={{ color: "#4fa9ff", fontSize: "2rem" }}
                                />
                              </IconButton>
                            )}
                            <center>
                              <header className="App-header">
                                <Document
                                  file={recroot}
                                  onLoadSuccess={onDocumentLoadSuccess}
                                >
                                  <Page
                                    width={
                                      matches === true
                                        ? 300
                                        : 700 && match === true
                                        ? 500
                                        : 700
                                    }
                                    pageNumber={pageNumber}
                                    renderTextLayer={false}
                                    renderAnnotationLayer={false}
                                  />
                                </Document>
                              </header>
                            </center>
                          </Box>
                        )}
                      </Box>
                    </Box>
                  </>
                ) : (
                  <Box
                    sx={{
                      width: "100%",
                      height: "auto",
                      border: "1px solid #D3EAFF",
                      borderRadius: "15px",
                    }}
                  >
                    <Box
                      sx={{
                        bgcolor: "#D3EAFF",
                        width: "100%",
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                        height: "50px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        p: "0 25px 0 25px",
                      }}
                    >
                      <CustomTypography
                        className={styles.FullProfileSectionTitle}
                      >
                        Resume
                      </CustomTypography>
                    </Box>
                    <Box sx={{ p: "25px" }}>
                      {isItPdfFile === false ? (
                        <Typography>
                          To view this file needs to be download.
                        </Typography>
                      ) : (
                        ""
                      )}
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "flex-end",
                        }}
                      >
                        <Button
                          variant="contained"
                          startIcon={<FileDownloadOutlinedIcon />}
                          sx={{
                            bgcolor: "#00339B !important",
                            height: "50px",
                            width: "200px",
                            textTransform: "capitalize",
                            borderRadius: "10px",
                          }}
                          onClick={async () => {
                            const res = await fetch(recroot);
                            const blob = await res.blob();
                            download(blob, `${resume.resumeName}`);
                          }}
                        >
                          Download
                        </Button>
                      </Box>
                      {isItPdfFile === false ? (
                        ""
                      ) : (
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                            mt: 4,
                          }}
                        >
                          <p>
                            Page {pageNumber} of {numPages}
                          </p>
                          {pageNumber > 1 && (
                            <IconButton onClick={changePageBack}>
                              <SkipPreviousRoundedIcon
                                sx={{ color: "#4fa9ff", fontSize: "2rem" }}
                              />
                            </IconButton>
                          )}
                          {pageNumber < numPages && (
                            <IconButton onClick={changePageNext}>
                              <SkipNextRoundedIcon
                                sx={{ color: "#4fa9ff", fontSize: "2rem" }}
                              />
                            </IconButton>
                          )}
                          <center>
                            <header className="App-header">
                              <Document
                                file={recroot}
                                onLoadSuccess={onDocumentLoadSuccess}
                              >
                                <Page
                                  width={
                                    matches === true
                                      ? 300
                                      : 700 && match === true
                                      ? 500
                                      : 700
                                  }
                                  pageNumber={pageNumber}
                                  renderTextLayer={false}
                                  renderAnnotationLayer={false}
                                />
                              </Document>
                            </header>
                          </center>
                        </Box>
                      )}
                    </Box>
                  </Box>
                )}
              </>
            ) : (
              <Box
                sx={{
                  width: "100%",
                  border: "1px solid #D3EAFF",
                  borderRadius: "15px",
                }}
              >
                <Box
                  sx={{
                    bgcolor: "#D3EAFF",
                    width: "100%",
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                    height: "50px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    p: "0 25px 0 25px",
                  }}
                >
                  <CustomTypography className={styles.FullProfileSectionTitle}>
                    Schedule Interview
                  </CustomTypography>
                  <Button
                    onClick={() => {
                      setinterviewshow(false);
                    }}
                    sx={{ textTransform: "capitalize" }}
                  >
                    Close
                  </Button>
                </Box>
                <Addinterview
                  setinterviewshow={setinterviewshow}
                  users={appdata}
                />
              </Box>
            )}
          </Stack>
          <Dialog fullWidth open={open} onClose={handleDialogAction}>
            <Box sx={{ p: "40px" }}>
              <Typography variant="h5" sx={{ textAlign: "center" }}>
                Add a Note
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  mt: "15px",
                }}
              >
                <EditorToolbar />
                <ReactQuill
                  value={notes}
                  onChange={onChange}
                  theme={"snow"}
                  className="textareaQuestion"
                  modules={modules}
                  formats={formats}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: "10px",
                  gap: "5px",
                }}
              >
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#4fa9ff !important" }}
                  type="submit"
                  onClick={() => saveNote()}
                >
                  Save
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => {
                    handleDialogAction();
                  }}
                >
                  Cancel
                </Button>
              </Box>
            </Box>
          </Dialog>
        </div>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </Container>
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

export default CandiFullProfileView;
