"use client";
import { NEUTRAL } from "@/theme/colors";
import { MAX } from "@/theme/spacings";
import { Container, Grid, Stack, styled } from "@mui/material";
import Image from "next/image";
import React from "react";
import { CustomTypography } from "../../ui-components/CustomTypography/CustomTypography";

const StyledButton = styled("button")({
  height: "62px",
  backgroundColor: "#034275",
  color: NEUTRAL,
  borderRadius: "5px",
  width: "263px",
  fontWeight: 700,
  fontSize: "20px",
});

const AboutHome = () => {
  return (
    <div
      style={{
        padding: "40px 0",
        minHeight: "600px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container>
        <Grid container>
          <Grid
            order={{ md: 1, sm: 2, xs: 2 }}
            item
            md={6}
            sm={12}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: { md: "flex-start", sm: "center", xs: "center" },
              alignItems: { md: "flex-start", sm: "center", xs: "center" },
            }}
          >
            <Stack
              sx={{
                width: "90%",
                gap: "20px",
                textAlign: { md: "left", sm: "center", xs: "center" },
                alignItems: { md: "flex-start", sm: "center", xs: "center" },
              }}
            >
              <CustomTypography
                sx={{
                  fontSize: MAX,
                  fontWeight: "700",
                  fontFamily: "Inter-Bold",
                }}
              >
                About Us
              </CustomTypography>
              <CustomTypography sx={{ fontSize: "18px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </CustomTypography>
              <StyledButton>Know More</StyledButton>
            </Stack>
          </Grid>

          <Grid
            item
            order={{ md: 2, sm: 1, xs: 1 }}
            md={6}
            sm={12}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: { md: "flex-end", sm: "center", xs: "center" },
              alignItems: "center",
            }}
          >
            <Image
              src="/aboutUsImage.png"
              className="aboutImage"
              // data-aos="fade-up"
              alt=""
              width="0"
              height="0"
              sizes="100vw"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AboutHome;
