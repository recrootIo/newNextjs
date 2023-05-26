"use client";
import React, { useEffect, useState } from "react";
import { Box, Button, Container } from "@mui/material";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import Image from "next/image";
import OtpInput from "react-otp-input";
import { BOLD } from "@/theme/fonts";
import { useDispatch, useSelector } from "react-redux";
import { editReferVer, resendVerify } from "@/redux/slices/personal";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { openAlert } from "@/redux/slices/alert";
import { ERROR, SUCCESS } from "@/utils/constants";

const VerifyEmail = () => {
  const [otp, setOtp] = React.useState("");
  const dispatch = useDispatch();
  const userId = Cookies.get("userId");
  const vcode = Cookies.get("verifyCode");
  const { push } = useRouter();
  const code = useSelector((state) => state.personal.code);
  const path = useSelector((state) => state.personal.pricing);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("User"));
    if (user === null) {
      push("/");
    } else {
      if (user.User.email_is_verified === true) {
        push("/");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (code.codes === undefined) {
    } else {
      const loggedInUser = JSON.parse(localStorage.getItem("User"));
      loggedInUser.User.referral_code = code.codes;
      localStorage.setItem("User", JSON.stringify(loggedInUser));
      Cookies.set("verifyCode", code.codes);
    }
  }, [code]);
  const redirect = Cookies.get("Redirect");
  const handleVerify = () => {
    // eslint-disable-next-line eqeqeq
    if (vcode == otp) {
      dispatch(editReferVer({ code: true, id: userId }));
      const loggedInUser = JSON.parse(localStorage.getItem("User"));
      loggedInUser.User.email_is_verified = true;
      localStorage.setItem("User", JSON.stringify(loggedInUser));

      dispatch(
        openAlert({
          type: SUCCESS,
          message:
            "Your account verification is successful and is ready to go!",
        })
      );
      // notify("Your account verification is successful and is ready to go!");
      if (
        loggedInUser.User.recrootUserType === "Employer" ||
        loggedInUser.User.recrootUserType === "Member"
      ) {
        if (path === true) {
          push("/Pricing");
          return;
        }
        if (redirect === null) {
          push("/Pricing");
        } else {
          push(redirect);
        }
      } else if (loggedInUser.User.resume.resumeFileLocation.length === 0) {
        push("/uploadResume");
      } else {
        push("/");
      }
    } else {
      // notifye("Your Otp Is Wrong");
      dispatch(
        openAlert({
          type: ERROR,
          message: "Your Otp Is Wrong",
        })
      );
      setOtp("");
    }
  };

  const sendCode = () => {
    const user = JSON.parse(localStorage.getItem("User"));
    dispatch(
      resendVerify({
        id: user.User._id,
        email: user.User.email,
        name: user.User.firstName,
      })
    ).then(
      dispatch(
        openAlert({
          type: SUCCESS,
          message: "New Otp Has Been Sent",
        })
      )
    );

    // notify("New Otp Has Been Sent");
  };
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
              onClick={handleVerify}
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
            If you {"didn't"} receive the OTP, Click Here to
            <span>
              <Button onClick={sendCode}>Resend</Button>
            </span>
          </CustomTypography>
        </Box>
      </Container>
    </div>
  );
};

export default VerifyEmail;
