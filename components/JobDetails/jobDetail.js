/* eslint-disable @next/next/no-img-element */
"use client";
import {
  Box,
  Grid,
  Stack,
  Button,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Container,
} from "@mui/material";
import CardActions from "@mui/material/CardActions";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Chip from "@mui/material/Chip";
import { CustomTypography } from "../../ui-components/CustomTypography/CustomTypography";
// import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { getImageLogo } from "../JobListings/SearchSection";
// import { getAddress } from "@/utils/HelperFunctions";
import moment from "moment";
import Image from "next/image";
import { getUserId } from "@/utils/HelperFunctions";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAppliedJobs,
  retrievePersonal,
  setJobID,
} from "@/redux/slices/personal";
import { useEffect, useState } from "react";
import { CANDIDATE } from "@/utils/constants";
import ShareForm from "../ShareForm/ShareForm";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const JobDetail = ({ ...props }) => {
  const {
    jobDescription,
    requiredSkill = [],
    company,
    applicationDeadline,
    createdAt,
    question,
    jobRole,
    queshow,
    _id,
  } = props;

  const { appliedJobs = [], data } = useSelector((state) => state?.personal);

  const router = useRouter();
  const dispatch = useDispatch();

  const appliedIds = appliedJobs.map((i) => i.jobId[0]);
  const isApplied = appliedIds.includes(_id);
  const isUserType = data?.recrootUserType === CANDIDATE;

  const gotApply = () => {
    if (data.profilePercentage < 70) {
      localStorage.setItem("redirect", `/applyJob?jobid=${_id}`);
      router.push(`/Candidate/Dashboard`);

      dispatch(
        setJobID({
          companyId: company?._id,
          jobId: _id,
          question: question,
          name: jobRole,
          show: queshow,
        })
      );
    } else {
      router.push(`/applyJob?jobid=${_id}`);
    }
  };

  const goToLogin = () => {
    localStorage.setItem("redirect", `/applyJob?jobid=${_id}`);
    router.push(`/signin`);
  };

  useEffect(() => {
    dispatch(fetchAppliedJobs());
    dispatch(retrievePersonal());
  }, [dispatch]);

  const [loginCallBackURL, setLoginCallBackURL] = useState("");

  useEffect(() => {
    setLoginCallBackURL(`${window.location}`);
  }, []);

  const handleBookmark = () => {
    const currentPage = window.location.href;

    // Check if localStorage is supported by the browser
    if (typeof localStorage !== "undefined") {
      let bookmarks = localStorage.getItem("bookmarks");

      if (bookmarks) {
        // Parse existing bookmarks from localStorage
        bookmarks = JSON.parse(bookmarks);

        // Add current page to the bookmarks if it doesn't already exist
        if (!bookmarks.includes(currentPage)) {
          bookmarks.push(currentPage);
        }
      } else {
        // Create a new array with the current page as the bookmark
        bookmarks = [currentPage];
      }

      // Save the updated bookmarks to localStorage
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    } else {
      console.log("localStorage is not available.");
    }
  };

  return (
    <Box
      sx={{
        mt: "20px",
      }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Card
              variant="outlined"
              sx={{
                height: "100%",
                width: "100%",
                borderRadius: "7px",
                borderColor: "#d3eaff",
              }}
            >
              <CardHeader
                title="Job Description"
                titleTypographyProps={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "#01313F",
                }}
                sx={{
                  bgcolor: "#EDF8FD",
                  padding: "8px 16px",
                  paddingLeft: "24px",
                }}
              />
              <CardContent sx={{ paddingLeft: "24px" }}>
                <ReactQuill
                  value={jobDescription}
                  readOnly={true}
                  theme={"bubble"}
                />
              </CardContent>
              <CardActions sx={{ mb: "20px", paddingLeft: "24px" }}>
                {isUserType ? (
                  <Button
                    variant="contained"
                    size="medium"
                    className={isApplied ? "disabledButtons" : "activeButton"}
                    disabled={isApplied}
                    onClick={() => gotApply()}
                  >
                    {isApplied
                      ? "applied"
                      : data.profilePercentage < 70
                      ? "Complete Profile"
                      : " Apply now"}
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    size="medium"
                    className="activeButton"
                    onClick={() => goToLogin()}
                  >
                    Sign In
                  </Button>
                )}

                <ShareForm url={loginCallBackURL} title={jobRole} />

                <Button
                  className="bookmarkBtn"
                  size="small"
                  variant="outlined"
                  bgcolor="#02A9F7 !important"
                  onClick={() => handleBookmark()}
                >
                  <BookmarkBorderIcon sx={{ fontSize: "21px" }} />
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack spacing={2}>
              <Card
                variant="outlined"
                sx={{
                  width: "100%",
                  borderRadius: "7px",
                  borderColor: "#d3eaff",
                }}
              >
                <CardHeader
                  title="Job Overview"
                  titleTypographyProps={{
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#01313F",
                  }}
                  sx={{ bgcolor: "#EDF8FD", padding: "8px 16px" }}
                />
                <CardContent>
                  <Stack spacing={2}>
                    <CustomTypography
                      variant="body2"
                      sx={{
                        fontSize: 16,
                        color: "rgba(1, 49, 63, 0.8)",
                        mt: "10px",
                      }}
                      gutterBottom
                    >
                      <CalendarMonthIcon fontSize="16px" />{" "}
                      {moment(createdAt).fromNow()}
                    </CustomTypography>
                    <CustomTypography
                      variant="body2"
                      sx={{
                        fontSize: 16,
                        color: "rgba(1, 49, 63, 0.8)",
                      }}
                      gutterBottom
                    >
                      <FavoriteBorderIcon fontSize="16px" /> 41 People
                      Interested
                    </CustomTypography>
                    <CustomTypography
                      variant="body2"
                      sx={{
                        fontSize: 16,
                        color: "rgba(1, 49, 63, 0.8)",
                      }}
                      gutterBottom
                    >
                      <AdsClickIcon fontSize="16px" /> 31 People Applied
                    </CustomTypography>
                    <CustomTypography
                      variant="body2"
                      sx={{
                        fontSize: 16,
                        color: "rgba(1, 49, 63, 0.8)",
                      }}
                      gutterBottom
                    >
                      <AccessTimeIcon fontSize="16px" /> Expires{" "}
                      {moment(applicationDeadline).endOf("day").fromNow()}
                    </CustomTypography>
                  </Stack>
                </CardContent>
              </Card>
              <Card
                variant="outlined"
                sx={{
                  width: "100%",
                  borderRadius: "7px",
                  borderColor: "#d3eaff",
                }}
              >
                <CardHeader
                  title="Key Skills"
                  titleTypographyProps={{
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#01313F",
                  }}
                  sx={{ bgcolor: "#EDF8FD", padding: "8px 16px" }}
                />

                <CardContent sx={{ rowGap: "70px" }}>
                  {requiredSkill?.map((skill, index) => (
                    <Chip
                      key={index}
                      label={skill.skill}
                      size="small"
                      className="skillChip"
                    />
                  ))}
                </CardContent>
              </Card>
              <Card
                variant="outlined"
                sx={{
                  width: "100%",
                  borderRadius: "7px",
                  borderColor: "#d3eaff",
                }}
              >
                <CardHeader
                  title="Company Profile"
                  titleTypographyProps={{
                    fontSize: 17,
                    fontWeight: "bold",
                    color: "#01313F",
                  }}
                  sx={{ bgcolor: "#EDF8FD", padding: "8px 16px" }}
                />
                <CardContent>
                  <Box>
                    <Grid container spacing={1}>
                      <Grid
                        item
                        xs={3}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <Avatar
                          className="similarAvatar"
                          alt="logo"
                          src={getImageLogo(company?.companyLogo?.logo)}
                          size={100}
                          sx={{
                            "& .MuiAvatar-img": {
                              height: "35px",
                              width: "35px",
                            },
                            height: "65px",
                            width: "65px",
                          }}
                        />
                      </Grid>
                      <Grid
                        item
                        xs={9}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                      >
                        <CustomTypography
                          variant="body2"
                          fontSize="18px"
                          fontWeight="700"
                          color="#034275"
                        >
                          {company?.basicInformation?.cmpname}
                        </CustomTypography>
                        <CustomTypography
                          variant="body2"
                          fontSize="17px"
                          color="#034275"
                        >
                          {company?.address[0]?.address?.label}
                        </CustomTypography>
                        <CustomTypography
                          variant="body2"
                          fontSize="16px"
                          color="#034275"
                          gutterBottom
                        >
                          50-100 Employees
                        </CustomTypography>
                      </Grid>
                    </Grid>
                  </Box>
                  <CustomTypography
                    variant="body2"
                    // color="text.secondary"
                    lineHeight="27px"
                    fontSize="16px"
                    color="rgba(1, 49, 63, 0.8)"
                    sx={{ mt: "15px" }}
                    gutterBottom
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. .
                  </CustomTypography>
                  <Stack spacing={1} sx={{ mt: "25px" }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <CallIcon
                        fontSize="14px"
                        sx={{ color: "rgba(3, 66, 117, 0.8)" }}
                      />
                      <CustomTypography
                        variant="body2"
                        color="text.secondary"
                        fontSize="16px"
                        sx={{ marginBottom: 0 }}
                      >
                        &nbsp;&nbsp;+00 0000000000
                      </CustomTypography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <MailOutlineIcon
                        fontSize="14px"
                        sx={{ color: "rgba(3, 66, 117, 0.8)" }}
                      />
                      <CustomTypography
                        variant="body2"
                        color="text.secondary"
                        fontSize="16px"
                        sx={{ marginBottom: 0 }}
                      >
                        &nbsp;&nbsp;lorem@recroot.io
                      </CustomTypography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Image src="/url.png" alt="" width={16} height={16} />
                      <CustomTypography
                        variant="body2"
                        color="text.secondary"
                        fontSize="16px"
                        sx={{ marginBottom: 0 }}
                      >
                        &nbsp;&nbsp;lorem@recroot.io
                      </CustomTypography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default dynamic(() => Promise.resolve(JobDetail), { ssr: false });
