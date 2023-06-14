"use client";
import {
  Box,
  Grid,
  Stack,
  Button,
  Card,
  CardContent,
  IconButton,
  Container,
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";
import { CustomTypography } from "../../ui-components/CustomTypography/CustomTypography";
// import dynamic from "next/dynamic";
import { getImageLogo, getSalary } from "../JobListings/SearchSection";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { CANDIDATE } from "@/utils/constants";
import { useEffect, useState } from "react";
import { fetchAppliedJobs, retrievePersonal } from "@/redux/slices/personal";
import Cookies from "js-cookie";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import EventRepeatIcon from "@mui/icons-material/EventRepeat";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SchoolIcon from "@mui/icons-material/School";
import CampaignIcon from "@mui/icons-material/Campaign";
import ShareForm from "../ShareForm/ShareForm";

const JobDetailCard = ({ ...props }) => {
  const {
    essentialInformation,
    // jobTitle,
    jobRole,
    company,
    salary,
    jobType,
    address = [],
    notice,
    _id,
  } = props;

  const { appliedJobs = [], data } = useSelector((state) => state?.personal);

  const router = useRouter();
  const dispatch = useDispatch();

  const appliedIds = appliedJobs.map((i) => i.jobId[0]);
  const isApplied = appliedIds.includes(_id);
  const isUserType = data?.recrootUserType === CANDIDATE;

  const [loginCallBackURL, setLoginCallBackURL] = useState("");

  useEffect(() => {
    setLoginCallBackURL(`${window.location}`);
  }, []);

  const gotApply = () => {
    if (data.profilePercentage < 70) {
      localStorage.setItem("redirect", `/applyJob?jobid=${_id}`);
      router.push(`/uploadResume`);

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
    router.push(`/signin`);
    localStorage.setItem("redirect", `/applyJob?jobid=${_id}`);
  };

  useEffect(() => {
    dispatch(fetchAppliedJobs());
    dispatch(retrievePersonal());
  }, [dispatch]);

  const userType = Cookies.get("userType");

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

  const compImage = company?.companyLogo?.logo
    ? getImageLogo(company?.companyLogo?.logo)
    : "/defaultCompany.svg";

  return (
    <Box
      sx={{
        mt: "40px",
      }}
    >
      <Container>
        <Card
          variant="outlined"
          sx={{
            minWidth: 275,
            border: 0,
            backgroundImage: `url("/Job detail page Background.svg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            padding: "8px 16px",
          }}
        >
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={8}>
                <Stack spacing={1}>
                  <Box
                    // className="mobileLogo"
                    sx={{ display: "flex", justifyContent: "flex-start" }}
                  >
                    <Image
                      src={compImage}
                      alt=""
                      width={120}
                      height={35}
                      style={{
                        maxWidth: "160px",
                        maxHeight: "160px",
                      }}
                    />
                  </Box>

                  <Box>
                    <CustomTypography
                      variant="h6"
                      sx={{
                        fontSize: 30,
                        fontWeight: "bold",
                        color: "#034275",
                      }}
                    >
                      {jobRole}
                    </CustomTypography>
                    <CustomTypography
                      variant="body1"
                      sx={{
                        fontSize: 23,
                        color: "#02A9F7",
                        fontWeight: "500",
                      }}
                      gutterBottom
                    >
                      {company?.basicInformation?.cmpname}
                    </CustomTypography>
                  </Box>

                  <Box>
                    <Grid container spacing={2}>
                      <Grid item md={4} xs={12}>
                        <Stack
                          direction={"row"}
                          sx={{
                            alignItems: "center",
                            gap: "10px",
                            color: "#034275 !important",
                          }}
                        >
                          <CurrencyExchangeIcon sx={{ color: "#02A9F7" }} />
                          {getSalary(salary, false)}
                        </Stack>
                      </Grid>

                      <Grid item md={4} xs={12}>
                        <Stack
                          direction={"row"}
                          sx={{ alignItems: "center", gap: "10px" }}
                        >
                          <AddBusinessIcon sx={{ color: "#02A9F7" }} />
                          <CustomTypography
                            variant="body2"
                            sx={{
                              fontSize: 17,
                              color: "#034275",
                            }}
                          >
                            {jobType}
                          </CustomTypography>
                        </Stack>
                      </Grid>

                      <Grid item md={4} xs={12}>
                        <Stack
                          direction={"row"}
                          sx={{ alignItems: "center", gap: "10px" }}
                        >
                          <EventRepeatIcon sx={{ color: "#02A9F7" }} />
                          <CustomTypography
                            variant="body2"
                            sx={{
                              fontSize: 17,
                              color: "#034275",
                            }}
                          >
                            {essentialInformation?.experience}
                          </CustomTypography>
                        </Stack>
                      </Grid>

                      <Grid item md={4} xs={12}>
                        <Stack
                          direction={"row"}
                          sx={{ alignItems: "center", gap: "10px" }}
                        >
                          <AccountBoxIcon sx={{ color: "#02A9F7" }} />
                          <CustomTypography
                            variant="body2"
                            sx={{
                              fontSize: 17,
                              color: "#034275",
                            }}
                          >
                            {essentialInformation?.careerlevel}
                          </CustomTypography>
                        </Stack>
                      </Grid>

                      <Grid item md={4} xs={12}>
                        <Stack
                          direction={"row"}
                          sx={{ alignItems: "center", gap: "10px" }}
                        >
                          <CampaignIcon sx={{ color: "#02A9F7" }} />
                          <CustomTypography
                            variant="body2"
                            sx={{
                              fontSize: 17,
                              color: "#034275",
                            }}
                          >
                            {notice}
                          </CustomTypography>
                        </Stack>
                      </Grid>

                      <Grid item md={4} xs={12}>
                        <Stack
                          direction={"row"}
                          sx={{ alignItems: "center", gap: "10px" }}
                        >
                          <SchoolIcon sx={{ color: "#02A9F7" }} />
                          <CustomTypography
                            variant="body2"
                            sx={{
                              fontSize: 17,
                              color: "#034275",
                            }}
                          >
                            {essentialInformation?.qualification}
                          </CustomTypography>
                        </Stack>
                      </Grid>
                    </Grid>

                    <Grid container spacing={2} sx={{ mt: "20px" }}>
                      {address.map((add, index) => (
                        <Grid item md={4} xs={12} key={index}>
                          <Stack
                            direction={"row"}
                            sx={{ alignItems: "flex-start", gap: "10px" }}
                          >
                            <AddLocationAltIcon sx={{ color: "#02A9F7" }} />
                            <CustomTypography
                              variant="body2"
                              sx={{
                                fontSize: 17,
                                color: "#034275",
                              }}
                            >
                              {add}
                            </CustomTypography>
                          </Stack>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Stack>
              </Grid>
              <Grid item xs={12} sm={4} style={{ display: "grid" }}>
                <Box
                  className="logo"
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                  {/* <Image
                    src={`${
                      getImageLogo(company?.companyLogo?.logo) ||
                      "/service2.png"
                    }`}
                    alt=""
                    height={14}
                    width={14}
                    style={{
                      width: "100px !important",
                      height: "100px !important",
                      marginTop: "5px !important",
                    }}
                  /> */}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "flex-start", md: "flex-end" },
                    alignItems: "flex-end",
                  }}
                >
                  <Stack
                    direction="row"
                    sx={{
                      alignItems: "center",
                      justifyContent: "flex-end",
                      gap: "10px",
                      width: "100%",
                    }}
                  >
                    <IconButton
                      aria-label="share"
                      size="large"
                      sx={{
                        color: "#02a9f7",
                        fontSize: "14px",
                        padding: 0,
                      }}
                      onClick={() => handleBookmark()}
                    >
                      <BookmarkBorderIcon />
                    </IconButton>

                    <ShareForm url={loginCallBackURL} title={jobRole} />

                    {isUserType ? (
                      <Button
                        variant="contained"
                        size="medium"
                        className={
                          isApplied ? "disabledButtons" : "activeButton"
                        }
                        disabled={isApplied}
                        onClick={() => gotApply()}
                      >
                        {isApplied ? "applied" : " Apply now"}
                      </Button>
                    ) : userType === "Employer" ? (
                      ""
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
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default JobDetailCard;
