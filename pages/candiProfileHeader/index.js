import * as React from "react";
import { Box, Grid, Container, IconButton, Avatar } from "@mui/material";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import index from "../uploadResume/jobTitle";
import Image from "next/image";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const CandidateProfileHeader = ({ ...data }) => {
  const { firstName, jobTitle, email, lastName, mobileNumber, resume } = data;
  // console.log(totalWorkExperience, "data");

  const fullName = `${firstName} ${lastName}`;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundImage: 'url("/CandiHeaderImg.svg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "330px",
        pb: "40px",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <IconButton
            aria-label="notifications"
            size="large"
            sx={{ color: "white", width: "20px", p: 0 }}
          >
            <NotificationsOutlinedIcon sx={{ fontSize: "2rem" }} />
          </IconButton>
        </Box>
        <Grid container spacing={2}>
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <Image
              src="/candiImgBg.png"
              alt=""
              style={{ position: "absolute" }}
            /> */}
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: "200px", height: "200px" }}
            />
          </Grid>
          <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ width: "100%" }}>
              <CustomTypography
                variant="h4"
                color="white"
                fontFamily="Inter-bold"
                gutterBottom
              >
                {fullName}
              </CustomTypography>
              <CustomTypography variant="subtitle1" color="white" gutterBottom>
                {jobTitle} {bull} {resume?.totalWorkExperience} years
              </CustomTypography>
              <Box sx={{ display: "flex", gap: "20px", mt: "25px" }}>
                <CustomTypography
                  variant="subtitle1"
                  color="white"
                  minWidth="30%"
                  gutterBottom
                >
                  <PlaceOutlinedIcon /> Bhopal, India
                </CustomTypography>
                <CustomTypography
                  variant="subtitle1"
                  color="white"
                  gutterBottom
                >
                  <PhoneOutlinedIcon /> {mobileNumber}
                </CustomTypography>
              </Box>
              <Box sx={{ display: "flex", gap: "20px" }}>
                <CustomTypography
                  variant="subtitle1"
                  color="white"
                  minWidth="30%"
                  gutterBottom
                >
                  <EmailOutlinedIcon /> {email}
                </CustomTypography>
                <CustomTypography
                  variant="subtitle1"
                  color="white"
                  gutterBottom
                >
                  <LocalAtmOutlinedIcon /> {resume?.currentSalary?.salary}
                </CustomTypography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                position: "absolute",
                top: "100px",
                backgroundImage: 'url("/profileprecentageborder.png")',
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                height: "200px",
              }}
            >
              <CustomTypography
                variant="h6"
                sx={{
                  position: "absolute",
                  fontFamily: "Inter-bold",
                  zIndex: "1",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                100%
              </CustomTypography>
              <CustomTypography
                variant="subtitle1"
                sx={{
                  mt: "25px",
                  fontSize: "14px",
                  position: "relative",
                  top: "20px",
                }}
              >
                Profile completed (Excellent)
              </CustomTypography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CandidateProfileHeader;
