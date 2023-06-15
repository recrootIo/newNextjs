"use client";
import React from "react";
import { Box, Container } from "@mui/material";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import Image from "next/image";
// import OtpInput from "react-otp-input";
import { BOLD } from "@/theme/fonts";

const VerifyEmail = () => {
  // const [otp, setOtp] = React.useState("");

  return (
    <div
      style={{
        backgroundImage: `url("/beforebuild-profile-bg.svg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box className="topbar"></Box>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box className="logoContainer">
            <Image
              className="logoImage"
              src="/recroot-logo-sec.png"
              alt=""
              width="0"
              height="0"
              sizes="100vw"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "320px",
              backgroundImage: `url("/before-buildprofile-img-bg.svg")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <Image
              src="/before-buildprofile-img.png"
              alt=""
              width="319"
              height="319"
            />
          </Box>
          <Box
            sx={{
              textAlign: "center",
              mt: { xs: "40px", md: "100px" },
              mb: { xs: "40px", md: "100px" },
              width: { xs: "100%", md: "50%" },
            }}
          >
            <CustomTypography
              variant="h5"
              sx={{ fontFamily: BOLD, color: "#034275", fontSize: "26px" }}
              gutterBottom
            >
              Let s build your Recroot profile before applying for jobs
            </CustomTypography>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default VerifyEmail;
