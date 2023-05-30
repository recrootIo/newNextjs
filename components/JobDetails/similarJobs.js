"use client";
import { Box, Stack, Button, Container } from "@mui/material";
import Carousel from "react-elastic-carousel";
import { CustomTypography } from "../../ui-components/CustomTypography/CustomTypography";
import React, { useRef } from "react";
import { useState } from "react";
import SimilarJobCard from "./similarCard";
import Image from "next/image";

const breakPoints = [
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 6 },
];

const SimilarJobs = () => {
  const carouselRef = useRef(null);
  const totalPages = 4;
  let resetTimeout;

  const [isShown, setIsShown] = useState(false);

  const handleClick = () => {
    setIsShown((current) => !current);
  };

  return (
    <Box
      sx={{
        pb: "30px",
      }}
    >
      <Container>
        <CustomTypography
          className="similarTopic"
          fontWeight={700}
          gutterBottom
        >
          <span style={{ color: "#034275" }}>Similar&nbsp;</span>
          <span style={{ color: "#02A9F7" }}>Jobs</span>
        </CustomTypography>

        <Stack
          className="carouselstack"
          direction={{ xs: "column", md: "row" }}
          spacing={2}
        >
          <Carousel
            breakPoints={breakPoints}
            enableAutoPlay
            ref={carouselRef}
            showArrows={false}
            onNextEnd={({ index }) => {
              clearTimeout(resetTimeout);
              if (index + 1 === totalPages) {
                resetTimeout = setTimeout(() => {
                  carouselRef?.current?.goTo(0);
                }, 1500); // same time
              }
            }}
          >
            <SimilarJobCard />
            <SimilarJobCard />
            <SimilarJobCard />
            <SimilarJobCard />
            <SimilarJobCard />
            <SimilarJobCard />
            <SimilarJobCard />
            <SimilarJobCard />
          </Carousel>
        </Stack>

        {/* <Box className="mobileSimilarJobs">
          <Stack spacing={2}>
            <SimilarJobCard />
            <SimilarJobCard />
            <SimilarJobCard />
            <SimilarJobCard />
          </Stack>
          {!isShown && (
            <Box className="viewmoreContainer">
              <Button
                className="similarjobsViewmorebtn"
                onClick={handleClick}
                variant="contained"
              >
                View more
              </Button>
            </Box>
          )}
          {isShown && (
            <div>
              <SimilarJobCard />
              <SimilarJobCard />
              <SimilarJobCard />
              <SimilarJobCard />
              <Box className="viewmoreContainer">
                <Button
                  className="similarjobsViewmorebtn"
                  onClick={handleClick}
                  variant="contained"
                >
                  View less
                </Button>
              </Box>
            </div>
          )}
        </Box> */}

        <Box
          sx={{
            mt: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="./Frame 93.png" alt="" />
        </Box>
      </Container>
    </Box>
  );
};

export default SimilarJobs;
