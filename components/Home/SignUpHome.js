"use client";
import React from "react";
import Container from "@mui/material/Container";
import { CustomTypography } from "../../ui-components/CustomTypography/CustomTypography";
import { Box, Button, Grid, Stack, styled } from "@mui/material";
import { NEUTRAL } from "../../theme/colors";
import { MAX } from "../../theme/spacings";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "next/link";
const StyledButton = styled("button")({
  background: "#F3FCFF",
  borderRadius: "5px",
  height: "49px",
  width: "185px",
  fontFamily: "Inter",
  fontWeight: 700,
  fontSize: "20px",
});

const SignUpHome = () => {
  const tablet = useMediaQuery("(max-width:1106px)");
  const background = tablet ? "" : "url(/sector.png),url(/sector2.png)";

  return (
    <div
      style={{
        backgroundImage: "url(/cropped.svg)",
        height: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Container
        className="signUpContainer"
        sx={{
          backgroundImage: background,
          backgroundRepeat: "no-repeat,no-repeat",
          backgroundPosition: "right,left",
          backgroundSize: "319px,304px",
        }}
      >
        <Stack
          data-aos="zoom-out"
          data-aos-delay="100"
          sx={{
            width: { sm: "100%", md: "55%" },
            gap: "30px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CustomTypography
            sx={{
              fontWeight: "700",
              fontSize: MAX,
              color: NEUTRAL,
              fontFamily: "Inter-Bold",
            }}
          >
            Connecting talent with opportunity - Your trusted career partner
          </CustomTypography>
          <CustomTypography
            sx={{ fontSize: "18px", fontWeight: 500, color: NEUTRAL }}
          >
            Find your dream job today. With thousands of job listings from top
            companies, we connect you to opportunities that match your skills
            and career goals. Start your journey towards a fulfilling career
            with us.
          </CustomTypography>
          <Stack direction={"row"} sx={{ gap: "10px" }}>
            <Link href={'/signin'}>
            <StyledButton >SIGN IN</StyledButton>
            </Link>
            <Link href={'/signup'}>
            <StyledButton >SIGN UP</StyledButton>
            </Link>
          </Stack>
        </Stack>
        {tablet && (
          <img
            src="/sector.png"
            style={{ height: "524px" }}
            className="signHomeImage"
          />
        )}
      </Container>
    </div>
  );
};

export default SignUpHome;
