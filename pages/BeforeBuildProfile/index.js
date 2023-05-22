"use client";
import React, { useState } from "react";
import { Box, Button, Container } from "@mui/material";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import Image from "next/image";
import OtpInput from "react-otp-input";
import { BOLD } from "@/theme/fonts";

const VerifyEmail = () => {
  const [otp, setOtp] = React.useState("");

  return (
    <div
      style={{
        backgroundImage: `url("/verify-email-bg.svg")`,
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
              src="/logo 8.png"
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
              Let's build your Recroot profile before applying for jobs
            </CustomTypography>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default VerifyEmail;
