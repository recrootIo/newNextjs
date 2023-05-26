import * as React from "react";
import {
  Box,
  Grid,
  Container,
  IconButton,
  // Avatar
} from "@mui/material";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import { EditRounded } from "@mui/icons-material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const CandidateProfileHeader = (data) => {
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
            {/* <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: "200px", height: "200px" }}
            /> */}
            <IconButton
              sx={{
                position: "relative",
                top: "-36px",
                left: "34px",
                backgroundColor: "#4fa9ff",
              }}
              onClick={() => {
                handleClickOpen();
              }}
            >
              <EditRounded sx={{ color: "#ffff" }} />
            </IconButton>
          </Grid>
          <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ width: "100%" }}>
              <CustomTypography
                variant="h4"
                color="white"
                fontFamily="Inter-bold"
                gutterBottom
              >
               {data?.firstName}
              </CustomTypography>
              <CustomTypography variant="subtitle1" color="white" gutterBottom>
              {data?.jobTitle}{bull} {data?.resume?.totalWorkExperience} Years
              </CustomTypography>
              <Box sx={{ display: "flex", gap: "20px", mt: "25px" }}>
                <CustomTypography
                  variant="subtitle1"
                  color="white"
                  minWidth="30%"
                  gutterBottom
                >
                  <PlaceOutlinedIcon /> {data?.resume?.location?.city},{data?.resume?.location?.state},{data?.resume?.location?.country}.
                </CustomTypography>
                <CustomTypography
                  variant="subtitle1"
                  color="white"
                  gutterBottom
                >
                  <PhoneOutlinedIcon /> +{data?.mobile}
                </CustomTypography>
              </Box>
              <Box sx={{ display: "flex", gap: "20px" }}>
                <CustomTypography
                  variant="subtitle1"
                  color="white"
                  minWidth="30%"
                  gutterBottom
                >
                  <EmailOutlinedIcon />{data?.email}
                </CustomTypography>
                <CustomTypography
                  variant="subtitle1"
                  color="white"
                  gutterBottom
                >
                  <LocalAtmOutlinedIcon /> {data?.resume?.currentSalary?.salary !== null ? `${data?.resume?.currentSalary?.salary} ${data?.resume?.currentSalary?.denomination}` : ''}
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

export default React.memo(CandidateProfileHeader);
