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
import { getSinResume } from "@/redux/slices/applyJobs";
import { openAlert } from "@/redux/slices/alert";
import { SUCCESS } from "@/utils/constants";
import DvrIcon from '@mui/icons-material/Dvr';
import Addinterview from "@/components/Employers/Addinterview/Addinterview";
import { getSchedulesInterview, setinterview } from "@/redux/slices/interviewslice";

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
  const router = useRouter()
  const {appId} = router.query;
  const [appdata, setappdata] = useState({});
  const [status, setstatus] = useState('');
  const [loading, setLoading] = useState(true);
  const [interviewshow, setinterviewshow] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    if (appId !== undefined) {      
      setLoading(true);
  getCand()
    }
      // .then((res) => console.log(res));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appId]);
  const getCand = () =>{
    new applyJobService()
    .getAppliedOnly(appId)
    .then((res) => {
      setappdata(res.data);
      setstatus(res.data.status)
      dispatch(getSinResume(res.data?.resumeId))
      const ids = {
        cid:res.data?.candidateId?._id,
        jid:res.data?.jobId
      }
      dispatch(getSchedulesInterview(ids))
      setLoading(false);
    })
  }
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
  const candidate = appdata?.candidateId;
  const resume = useSelector((state) => state.apply.resume);
  const scheduleinterview = useSelector((state) => state.sinterview.partcInt);
  const recroot = `https://preprod.recroot.au/api/downloadResume?resume=${resume?.resume?.replace(
    /\\/g,
    "/"
  )}`;
  const isItPdfFile = recroot.includes("pdf");
  const getImageUrl = (candi) => {
    return candi?.profpicFileLocation?.photo
      ? `https://preprod.recroot.au/api/openProfpic?photo=${candi?.profpicFileLocation?.photo}`
      : `data:image/jpeg;base64,${candi?.headShot}`;
  };
  const handleChange = (e) =>{
    if (e.target.value === status) {
      return
    }
  new applyJobService().updateAppStatus(appdata?._id,{status:e.target.value}).then((res)=>{
    if (res?.status === 200) {
      dispatch(openAlert({
        type:SUCCESS,
        message:'Application status was updated'
      }))
      getCand()
    }
  })
  }
  const handleInterview = () => {
    setinterviewshow(true)
  }
  const handleEditInterview = () => {
    dispatch(setinterview(scheduleinterview[0]))
    setinterviewshow(true)
  }
useEffect(() => {
  const ids = {
    cid:appdata?.candidateId?._id,
    jid:appdata?.jobId
  }
  dispatch(getSchedulesInterview(ids))
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [interviewshow])
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
              zIndex:'100'
            }}
            startIcon={<ArrowBackIcon />}
            onClick={()=>{router.push('/Employer/AllApplicants')}}
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
                height: "310px",
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
                  xs={4}
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
                  xs={4}
                  sx={{
                    borderRight: "1px solid white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
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
                  xs={4}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    paddingLeft: "60px !important",
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
                  <CustomTypography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 500,
                      color: "white",
                    }}
                    gutterBottom
                  >
                    Country :  {candidate?.resume?.location?.country}
                  </CustomTypography>
          {candidate?.resume?.nationality?.length > 0 ?
                  <CustomTypography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 500,
                      color: "white",
                    }}
                    gutterBottom
                  >
                    Nationality :  {candidate?.resume?.nationality?.country}
                  </CustomTypography> : ''}
    {candidate?.resume?.countrieswithworkingRights?.length > 0 ?              
                  <CustomTypography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 500,
                      color: "white",
                    }}
                    gutterBottom
                  >
                    Working rights :  {candidate?.resume?.countrieswithworkingRights?.country}
                  </CustomTypography> : ''}
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
                  <CustomTypography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 500,
                      color: "white",
                    }}
                    gutterBottom
                  >
                    Total Work Experience : {candidate?.resume?.totalWorkExperience} Years
                  </CustomTypography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-end",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      width: "33%",
                      justifyContent: "center",
                      gap: "10px",
                      borderRight: "1px solid white",
                    }}
                  >
                    <LinkedInIcon sx={{ color: "white" }} />
                    <CustomTypography
                      sx={{
                        fontSize: "18px",
                        fontWeight: 500,
                        color: "white",
                      }}
                    >
                      https://Lorem Ipsum
                    </CustomTypography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      width: "33%",
                      justifyContent: "center",
                      gap: "10px",
                    }}
                  >
                    <TwitterIcon sx={{ color: "white" }} />
                    <CustomTypography
                      sx={{
                        fontSize: "18px",
                        fontWeight: 500,
                        color: "white",
                      }}
                    >
                      https://Lorem Ipsum
                    </CustomTypography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
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
                 Action
                </CustomTypography>
              </Box>
              <Box sx={{ p: "25px" }}>
                {/* <Stack spacing={1}> */}
                  <Grid container spacing={2} alignItems={'center'}>
                    <Grid item xs={6}>
                <FormControl fullWidth> 
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
               <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={status}
                label="Status"
                onChange={handleChange}
              >
                <MenuItem disabled value={'viewed'}>Viewed</MenuItem>
                <MenuItem value={'shortlist'}>Shortlist</MenuItem>
                <MenuItem value={'rejected'}>Reject</MenuItem>
              </Select>
            </FormControl>
                    </Grid>
                    <Grid item xs={6}>
        {
        scheduleinterview?.length > 0 ?
            <Button sx={{
  color: "#ffff !important",
  padding: "15px !important",
  borderRadius: "10px!important",
  background: "#4fa9ff !important",
  textTransform: "capitalize !important",
  width: "100% !important",
  // marginBottom: "10px",
}} variant="contained" 
onClick={handleEditInterview}
>
            <DvrIcon />  Edit Interview
            </Button > :         <Button sx={{
  color: "#ffff !important",
  padding: "15px !important",
  borderRadius: "10px!important",
  background: "#4fa9ff !important",
  textTransform: "capitalize !important",
  width: "100% !important",
  // marginBottom: "10px",
}} variant="contained" onClick={handleInterview}>
            <DvrIcon />  Schedule Interview
            </Button >}
                    </Grid>
                  </Grid>
                {/* </Stack> */}
              </Box>
            </Box>
        {interviewshow === false ?
         <>
            <Box
              sx={{
                width: "100%",
                height: "310px",
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
                  Personal Details
                </CustomTypography>
              </Box>
              <Box sx={{ p: "25px" }}>
                <Stack spacing={1}>
                  <CustomTypography className={styles.FullProfileSectionTypo}>
                    About
                  </CustomTypography>
                  <CustomTypography className={styles.FullProfileSectionData}>
                   {candidate?.about}
                  </CustomTypography>
                  <Box className={styles.FullProfilePersonalDetailsTypoBox}>
                    <CustomTypography className={styles.FullProfileSectionTypo}>
                      Current Salary :
                    </CustomTypography>
                    <CustomTypography className={styles.FullProfileSectionData}>
                      {candidate?.resume?.currentSalary?.salary}  {candidate?.resume?.currentSalary?.denomination}
                    </CustomTypography>
                  </Box>
                  <Box className={styles.FullProfilePersonalDetailsTypoBox}>
                    <CustomTypography className={styles.FullProfileSectionTypo}>
                      Expected Salary :
                    </CustomTypography>
                    <CustomTypography className={styles.FullProfileSectionData}>
                    {candidate?.resume?.expectedSalary?.salary}  {candidate?.resume?.expectedSalary?.denomination}
                    </CustomTypography>
                  </Box>
                  <Box className={styles.FullProfilePersonalDetailsTypoBox}>
                    <CustomTypography className={styles.FullProfileSectionTypo}>
                      Notice Period :
                    </CustomTypography>
                    <CustomTypography className={styles.FullProfileSectionData}>
                     {candidate?.resume?.notice}
                    </CustomTypography>
                  </Box>
                  <Box className={styles.FullProfilePersonalDetailsTypoBox}>
                    <CustomTypography className={styles.FullProfileSectionTypo}>
                      Work Preference :
                    </CustomTypography>
                    <CustomTypography className={styles.FullProfileSectionData}>
                     {candidate?.resume?.workPrefence.join('| ')}
                    </CustomTypography>
                  </Box>
                  <Box className={styles.FullProfilePersonalDetailsTypoBox}>
                    <CustomTypography className={styles.FullProfileSectionTypo}>
                     Current Offer :
                    </CustomTypography>
                    <CustomTypography className={styles.FullProfileSectionData}>
                     {candidate?.resume?.currentOffer}
                    </CustomTypography>
                  </Box>
                </Stack>
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
                <CustomTypography className={styles.FullProfileSectionTitle}>
                  Work Experience
                </CustomTypography>
              </Box>
              <Box sx={{ p: "25px" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "15px",
                    flexWrap: "wrap",
                    justifyContent: "flex-start",
                  }}
                >
                  {candidate?.resume?.workExperience?.map((wrk,index)=>(
                  <Box key={index} className={styles.ViewFullCandiProfileCard}>
                    <BeenhereOutlinedIcon
                      sx={{ color: "rgba(3, 66, 117, 0.8)" }}
                    />
                    <Stack spacing={1}>
                      <Stack direction={'row'} >
                      <CustomTypography className={styles.FullProfileSectionTypo}>
                     Role :
                    </CustomTypography>
                      <CustomTypography
                        variant="subtitle2"
                        className={styles.ViewFullInfoMainText}
                      >
                       {wrk?.role}
                      </CustomTypography>
                      </Stack>
                      <Stack direction={'row'} >

                      <CustomTypography className={styles.FullProfileSectionTypo}>
                     Organization :
                    </CustomTypography>
                      <CustomTypography
                        variant="subtitle2"
                        className={styles.ViewFullInfoText}
                      >
                        {wrk?.companyName}
                      </CustomTypography>
                      </Stack>
                      <CustomTypography
                        variant="subtitle2"
                        className={styles.ViewFullInfoText}
                      >
                       {moment(wrk?.fromDate).format('LL')} - {moment(wrk?.toDate).format('LL')} {bull} {wrk?.experience} Years
                      </CustomTypography>
                    </Stack>
                  </Box>
                  ))}
                </Box>
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
                <CustomTypography className={styles.FullProfileSectionTitle}>
                  Education
                </CustomTypography>
              </Box>
              <Box sx={{ p: "25px" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "15px",
                    flexWrap: "wrap",
                    justifyContent: "flex-start",
                  }}
                >
                  {candidate?.resume?.education?.map((edu,index)=>(
                  <Box key={index} className={styles.ViewFullCandiProfileCard}>
                    <BeenhereOutlinedIcon
                      sx={{ color: "rgba(3, 66, 117, 0.8)" }}
                    />
                    <Stack spacing={1}>
                      <Stack direction={'row'} >
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
                       {edu?.degreeName}
                      </CustomTypography>
                      </Stack>
                      <Stack direction={'row'} >
                        
                      <CustomTypography className={styles.FullProfileSectionTypo}>
                    Graduate :
                    </CustomTypography>
                      <CustomTypography
                        variant="subtitle2"
                        className={styles.ViewFullInfoText}
                      >
                          {edu?.graduate}
                      </CustomTypography>
                      </Stack>
                      <CustomTypography
                        variant="subtitle2"
                        className={styles.ViewFullInfoText}
                      >
                          {moment(edu?.fromDate).format('LL')} -   {moment(edu?.toDate).format('LL')} {bull} {edu?.experience} Years
                      </CustomTypography>
                    </Stack>
                  </Box>
                  ))}
                </Box>
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
                <CustomTypography className={styles.FullProfileSectionTitle}>
                  Skills
                </CustomTypography>
              </Box>
              <Box sx={{ p: "25px" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "15px",
                    flexWrap: "wrap",
                    justifyContent: "flex-start",
                  }}
                >
                    {candidate?.resume?.skills?.map((skil,index)=>(
                  <Box   key={index} className={styles.ViewFullCandiProfileSkillCard}>
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
                        Skill :  {skil?.skillName}
                        </CustomTypography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={skil?.Compitance === 'intermediate' ? 75 : skil?.Compitance === 'expert' ? 100 : skil?.Compitance === 'beginner' ? 25 : ''} 
                        sx={{
                          width: "70%",
                          height: "10px",
                          borderRadius: "5px",
                        }}
                      />
                    </Box>
                  </Box>
                    ))
                    }
                </Box>
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
                <CustomTypography className={styles.FullProfileSectionTitle}>
                  Project
                </CustomTypography>
              </Box>
              <Box sx={{ p: "25px" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "15px",
                    flexWrap: "wrap",
                    justifyContent: "flex-start",
                  }}
                >
                  {
                    candidate?.resume?.projects?.map((pro,index)=>(
                  <Box key={index} className={styles.ViewFullCandiProfileCard}>
                    <BeenhereOutlinedIcon
                      sx={{ color: "rgba(3, 66, 117, 0.8)" }}
                    />
                    <Stack spacing={1}>
                    <Stack direction={'row'} >
                    <CustomTypography className={styles.FullProfileSectionTypo}>
                     Title :
                    </CustomTypography>
                      <CustomTypography
                        variant="subtitle2"
                        className={styles.ViewFullInfoMainText}
                      >
                        &nbsp;{pro?.ProjectName}
                      </CustomTypography>
                    </Stack>
                    <Stack direction={'row'} >
                    <CustomTypography className={styles.FullProfileSectionTypo}>
                     Organization :
                    </CustomTypography>
                      <CustomTypography
                        variant="subtitle2"
                        className={styles.ViewFullInfoText}
                      >
                      &nbsp; {pro?.Organization}
                      </CustomTypography>
                      </Stack>
                      <Stack direction={'row'} >
                    <CustomTypography className={styles.FullProfileSectionTypo}>
                     Description :
                    </CustomTypography>
                      <CustomTypography
                        variant="subtitle2"
                        className={styles.ViewFullInfoText}
                      >
                       &nbsp;{pro?.Description}
                      </CustomTypography>
                      </Stack>
                      <Stack direction={'row'} >
                    <CustomTypography className={styles.FullProfileSectionTypo}>
                     Link :
                    </CustomTypography>
                      <CustomTypography
                        component="a"
                        href={pro?.portafolioLink}
                        className={styles.ViewFullInfoText}
                      >
                      &nbsp;  {pro?.portafolioLink}
                      </CustomTypography>
                    </Stack>
                    </Stack>
                  </Box>
                    ))
                  }
                </Box>
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
                <CustomTypography className={styles.FullProfileSectionTitle}>
                  Certification
                </CustomTypography>
              </Box>
              <Box sx={{ p: "25px" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "15px",
                    flexWrap: "wrap",
                    justifyContent: "flex-start",
                  }}
                >
                  {candidate?.resume?.certificateFileLocation?.map((cert,index)=>(
                  <Box key={index} className={styles.ViewFullCandiProfileCard}>
                    <Box sx={{ flex: "1", display: "flex", gap: "10px" }}>
                      <BeenhereOutlinedIcon
                        sx={{ color: "rgba(3, 66, 117, 0.8)" }}
                      />
                      <Stack spacing={1}>
                      <Stack direction={'row'} >
                    <CustomTypography className={styles.FullProfileSectionTypo}>
                     Title :
                    </CustomTypography>
                        <CustomTypography
                          variant="subtitle2"
                          className={styles.ViewFullInfoMainText}
                        >
                         &nbsp; {cert?.title}
                        </CustomTypography>
                        </Stack>
                        <Stack direction={'row'} >
                    <CustomTypography className={styles.FullProfileSectionTypo}>
                     Organization :
                    </CustomTypography>
                        <CustomTypography
                          variant="subtitle2"
                          className={styles.ViewFullInfoText}
                        >
                       &nbsp;  {cert?.organization}
                        </CustomTypography>
                        </Stack>
                        <Stack direction={'row'} >
                    <CustomTypography className={styles.FullProfileSectionTypo}>
                     Duration :
                    </CustomTypography>
                        <CustomTypography
                          variant="subtitle2"
                          className={styles.ViewFullInfoText}
                        >
                        &nbsp; {moment(cert?.issueDate).format('LL')} - {moment(cert?.expireDate).format('LL')}
                        </CustomTypography>

                      </Stack>
                      </Stack>
                    </Box>
                    <IconButton    onClick={async () => {
              const res = await fetch(`https://preprod.recroot.au/api/downloadResume?resume=${cert?.certificatepath?.replace(/\\/g,"/")}`);
              const blob = await res.blob();
              download(blob, `${cert.certificateName}`);
            }}
           >
                    <FileDownloadOutlinedIcon sx={{ cursor: "pointer" }} />
                    </IconButton>
                  </Box>
                  ))}
                </Box>
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
                <CustomTypography className={styles.FullProfileSectionTitle}>
                  Training
                </CustomTypography>
              </Box>
              <Box sx={{ p: "25px" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "15px",
                    flexWrap: "wrap",
                    justifyContent: "flex-start",
                  }}
                >
                  {
                    candidate?.resume?.traning?.map((trn,index)=>(
                  <Box key={index} className={styles.ViewFullCandiProfileCard}>
                    <BeenhereOutlinedIcon
                      sx={{ color: "rgba(3, 66, 117, 0.8)" }}
                    />
                    <Stack spacing={1}>
                    <Stack direction={'row'} >
                    <CustomTypography className={styles.FullProfileSectionTypo}>
                     Title :
                    </CustomTypography>
                      <CustomTypography
                        variant="subtitle2"
                        className={styles.ViewFullInfoMainText}
                      >
                       &nbsp;{trn?.title}
                      </CustomTypography>
                      </Stack>
                      <Stack direction={'row'} >
                    <CustomTypography className={styles.FullProfileSectionTypo}>
                     Organization :
                    </CustomTypography>
                      <CustomTypography
                        variant="subtitle2"
                        className={styles.ViewFullInfoText}
                      >
                      &nbsp; {trn?.instituete}
                      </CustomTypography>
                      </Stack>
                      <Stack direction={'row'} >
                    <CustomTypography className={styles.FullProfileSectionTypo}>
                     Duration :
                    </CustomTypography>
                      <CustomTypography
                        variant="subtitle2"
                        className={styles.ViewFullInfoText}
                      >
                       &nbsp;{moment(trn?.fromDate).format('LL')} - {moment(trn?.toDate).format('LL')} 
                      </CustomTypography>
                    </Stack>
                    </Stack>
                  </Box>
                    ))
                  }
                </Box>
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
                <CustomTypography className={styles.FullProfileSectionTitle}>
                  Resume
                </CustomTypography>
              </Box>
              <Box sx={{ p: "25px" }}>
              {isItPdfFile === false ? (
              <Typography>To view this file needs to be download.</Typography>
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
            <Box sx={{display: "flex",
            alignItems:"center",
            flexDirection: "column",mt:4}}>
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
                  <Document file={recroot} onLoadSuccess={onDocumentLoadSuccess}>
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
         :
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
              </Box>
              <Addinterview setinterviewshow={setinterviewshow} users={appdata} />
              </Box>}

          </Stack>
        </div>
        <Backdrop
  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
  open={loading}
>
  <CircularProgress color="inherit" />
</Backdrop>
      </Container>
    </>
  );
};

export default CandiFullProfileView;
