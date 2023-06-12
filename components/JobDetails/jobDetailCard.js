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
import { useEffect } from "react";
import { fetchAppliedJobs, retrievePersonal } from "@/redux/slices/personal";
import Cookies from "js-cookie";

const JobDetailCard = ({ ...props }) => {
  const {
    essentialInformation,
    // jobTitle,
    jobRole,
    company,
    salary,
    jobType,
    address = [],
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
                    {company.companyLogo?.logo && (
                      <Image
                        src={getImageLogo(company.companyLogo?.logo)}
                        alt=""
                        width={120}
                        height={35}
                        style={{
                          maxWidth: "160px",
                          maxHeight: "160px",
                        }}
                      />
                    )}
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
                  <Stack
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      marginRight: { xs: "10px", md: "0px" },
                      flexWrap: "wrap",
                    }}
                    spacing={1}
                  >
                    <Box className="imgTypo" sx={{ alignItems: "center" }}>
                      <Image
                        className="firsticonImg"
                        src="/currency.png"
                        alt=""
                        height={14}
                        width={14}
                      />
                      <CustomTypography
                        variant="body2"
                        sx={{
                          fontSize: 17,
                          color: "#034275",
                          marginTop: "8px",
                        }}
                        gutterBottom
                      >
                        {getSalary(salary)}
                      </CustomTypography>
                    </Box>
                    <Box className="imgTypo">
                      <Image
                        className="iconImg"
                        src="/bag.png"
                        alt=""
                        height={14}
                        width={14}
                      />
                      <CustomTypography
                        variant="body2"
                        sx={{
                          fontSize: 17,
                          color: "#034275",
                        }}
                        gutterBottom
                      >
                        {jobType}
                      </CustomTypography>
                    </Box>
                    <Box className="imgTypo">
                      <Image
                        className="iconImg"
                        src="/hourglass.png"
                        alt=""
                        height={14}
                        width={14}
                      />
                      <CustomTypography
                        variant="body2"
                        sx={{
                          fontSize: 17,
                          color: "#034275",
                        }}
                        gutterBottom
                      >
                        {essentialInformation?.experience}
                      </CustomTypography>
                    </Box>
                  </Stack>
                  <Box>
                    <Stack
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: { xs: "0px", md: "0px" },
                        flexWrap: "wrap",
                      }}
                      spacing={1}
                    >
                      <Box className="imgTypo" sx={{ alignItems: "center" }}>
                        <Image
                          className="iconImg"
                          src="/location.png"
                          alt=""
                          height={14}
                          width={14}
                        />
                        <CustomTypography
                          variant="body2"
                          sx={{
                            fontSize: 17,
                            color: "#034275",
                            marginTop: "8px",
                          }}
                          gutterBottom
                        >
                          {address[0]}
                        </CustomTypography>
                      </Box>
                      <Box className="imgTypo">
                        <Image
                          className="iconImg"
                          src="/professional.png"
                          alt=""
                          height={14}
                          width={14}
                        />
                        <CustomTypography
                          variant="body2"
                          sx={{
                            fontSize: 17,
                            color: "#034275",
                          }}
                          gutterBottom
                        >
                          {essentialInformation?.careerlevel}
                        </CustomTypography>
                      </Box>
                      <Box className="imgTypo">
                        <Image
                          className="iconImg"
                          src="/degree.png"
                          alt=""
                          height={14}
                          width={14}
                        />
                        <CustomTypography
                          variant="body2"
                          sx={{
                            fontSize: 17,
                            color: "#034275",
                          }}
                          gutterBottom
                        >
                          {essentialInformation?.qualification}
                        </CustomTypography>
                      </Box>
                    </Stack>
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
                  <Stack direction="row" spacing={1}>
                    <IconButton
                      aria-label="share"
                      size="large"
                      sx={{
                        color: "#02a9f7",
                        fontSize: "14px",
                        padding: 0,
                      }}
                    >
                      <BookmarkBorderIcon />
                    </IconButton>
                    <IconButton
                      aria-label="share"
                      sx={{ color: "#02a9f7", fontSize: "14px" }}
                    >
                      <ShareIcon />
                    </IconButton>
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
