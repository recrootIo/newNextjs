/* eslint-disable @next/next/no-img-element */
"use client";
import { MAX } from "../../theme/spacings";
import { CustomTypography } from "../../ui-components/CustomTypography/CustomTypography";
import { Grid, Typography, Box, Stack, Container } from "@mui/material";
import { createElement, useContext, useRef, Fragment } from "react";
// import "./homepage.css";
import Carousel from "react-elastic-carousel";

const BrandsHome = () => {
  const breakPoints = [
    // { width: 451, itemsToShow: 1 },
    { width: 687, itemsToShow: 2 },
    { width: 873, itemsToShow: 3 },
    { width: 974, itemsToShow: 4 },
  ];

  return (
    <div>
      <Box
        className="brands"
        sx={{
          mt: "30px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          textAlign: "center",
          color: "white",
          fontWeight: "800",
        }}
      >
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <CustomTypography
                sx={{
                  fontSize: MAX,
                  fontWeight: "900",
                  fontFamily: "Inter-Bold",
                }}
              >
                Brands We work
              </CustomTypography>
            </Grid>
            <Grid item xs={12}>
              <CustomTypography
                gutterBottom
                style={{
                  textAlign: "center",
                  position: "relative",
                  fontWeight: "900",
                  fontSize: "18px",
                }}
              >
                Find great tech talent with customizable solutions from
                Recroot.io
              </CustomTypography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container>
        <Stack
          direction="row"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            position: "relative",
            bottom: "100px",
            zIndex: "2",
          }}
        >
          <Carousel breakPoints={breakPoints}>
            <img src="/Polygon1.png" alt="" className="brandsBackgroundImage" />
            <img src="/Polygon1.png" alt="" className="brandsBackgroundImage" />
            <img src="/Polygon1.png" alt="" className="brandsBackgroundImage" />
            <img src="/Polygon1.png" alt="" className="brandsBackgroundImage" />
          </Carousel>
        </Stack>
      </Container>
    </div>
  );
};

export default BrandsHome;
