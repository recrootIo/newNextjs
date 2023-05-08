"use client";
import React from "react";
import Container from "@mui/material/Container";
import { Stack } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { NEUTRAL } from "@/theme/colors";
import { MAX } from "@/theme/spacings";

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
              textAlign: { md: "left", xs: "center", sm: "center" },
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
            <button className="signUpButton">SIGN IN</button>
            <button className="signUpButton">SIGN UP</button>
          </Stack>
        </Stack>
        {tablet && (
          <Image
            src="/sector.png"
            className="signHomeImage"
            alt=""
            width="0"
            height="0"
            sizes="100vw"
          />
        )}
      </Container>
    </div>
  );
};

export default SignUpHome;
