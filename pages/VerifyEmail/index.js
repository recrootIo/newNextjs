"use client";
import React from "react";
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
        backgroundImage: `url("/verify-screen-bg.svg")`,
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
            height: "320px",
          }}
        >
          <Image src="/verify-email-img.png" alt="" width="261" height="228" />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <CustomTypography
            variant="h5"
            sx={{ fontFamily: BOLD, color: "#034275", fontSize: "26px" }}
            gutterBottom
          >
            Verify Email
          </CustomTypography>
          <CustomTypography
            variant="h5"
            sx={{ color: "#034275", fontSize: "18px" }}
            gutterBottom
          >
            To verify the Email Address, enter the code below
          </CustomTypography>
          <Box sx={{ display: "flex", justifyContent: "center", mt: "40px" }}>
            <OtpInput
              separator={
                <span>
                  <strong>.</strong>
                </span>
              }
              onChange={setOtp}
              value={otp}
              numInputs={4}
              className="otpinput"
              inputStyle={{
                width: "4rem",
                height: "4rem",
                backgroundColor: "#D4F0FC",
                margin: "0 10px",
                fontSize: "2rem",
                borderRadius: 4,
              }}
              isInputNum={true}
              renderInput={(props) => <input {...props} />}
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mt: "40px" }}>
            <Button
              variant="contained"
              sx={{
                width: "259px",
                height: "45px",
                fontSize: "18px",
                bgcolor: "#015FB1 !important",
                textTransform: "capitalize",
              }}
            >
              Verify
            </Button>
          </Box>
          <CustomTypography
            variant="h5"
            sx={{
              color: "#034275",
              fontSize: "18px",
              mt: "40px",
              mb: { xs: "40px", md: "100px" },
            }}
            gutterBottom
          >
            If you didn t receive the OTP, Click Here to Resend
          </CustomTypography>
        </Box>
      </Container>
    </div>
  );
};

export default VerifyEmail;
