"use client";
import { Box, Stack, Button, Container } from "@mui/material";
import Carousel from "react-elastic-carousel";
import { CustomTypography } from "../../ui-components/CustomTypography/CustomTypography";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import SimilarJobCard from "./similarCard";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import searchService from "@/redux/services/search.service";

const breakPoints = [
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 6 },
];

const SimilarJobs = () => {
  const { data } = useSelector((state) => state?.personal);
  console.log(data, "data");
  const router = useRouter();

  const [similar, setSimilar] = useState([]);

  const similarJobs = () => {
    searchService
      .getLatestJObs(1, [], [], data.jobTitle, "", "", "", "", "", 10)
      .then((res) => {
        console.log(res);
        setSimilar(res.data.posts);
      })
      .catch(() => {});
  };

  const handleNavigate = (jobTitle, jobRole, _id) => {
    router.push(`/jobs/${jobTitle}/${jobRole}/${_id}`);
  };

  useEffect(() => {
    if (data.jobTitle) {
      similarJobs();
    }
  }, []);

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
            {similar.map((simi, index) => (
              <SimilarJobCard key={index} data={simi} />
            ))}
          </Carousel>
        </Stack>

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
