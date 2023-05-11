import * as React from "react";
import { Box, Grid, Container, IconButton, Avatar } from "@mui/material";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import index from "../uploadResume/jobTitle";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const CandidateProfileHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundImage: 'url("/CandiHeaderImg.svg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "325px",
        paddingTop: "20px",
        paddingBottom: "20px",
      }}
    >
      <Container>
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
            <img
              src="/candiImgBg.png"
              alt=""
              style={{ position: "absolute" }}
              //style={{ width: "160px", height: "40px" }}
            />
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
                Candidate Name
              </CustomTypography>
              <CustomTypography variant="subtitle1" color="white" gutterBottom>
                Graphic Designer {bull} 3 Years, 5 Months
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
                  <PhoneOutlinedIcon /> + 91 7424300000
                </CustomTypography>
              </Box>
              <Box sx={{ display: "flex", gap: "20px" }}>
                <CustomTypography
                  variant="subtitle1"
                  color="white"
                  minWidth="30%"
                  gutterBottom
                >
                  <EmailOutlinedIcon /> abc@gmail.com
                </CustomTypography>
                <CustomTypography
                  variant="subtitle1"
                  color="white"
                  gutterBottom
                >
                  <LocalAtmOutlinedIcon /> 5,00,000
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
                justifyContent: "flex-end",
                position: "absolute",
                right: "200px",
                top: "10px",
              }}
            >
              <IconButton
                aria-label="notifications"
                size="large"
                sx={{ color: "white", width: "20px" }}
              >
                <NotificationsOutlinedIcon sx={{ fontSize: "2rem" }} />
              </IconButton>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <img
                src="/profileprecentageborder.png"
                alt=""
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              />
              <CustomTypography
                variant="h6"
                sx={{
                  position: "absolute",
                  bottom: "660px",
                  fontFamily: "Inter-bold",
                  right: "280px",
                  zIndex: "1",
                }}
              >
                100%
              </CustomTypography>
              <CustomTypography variant="subtitle1" sx={{ mt: "5px" }}>
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
