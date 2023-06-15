"use client";
import { Box, Stack, Button, Container, Grid } from "@mui/material";
import Carousel from "react-elastic-carousel";
import { CustomTypography } from "../../ui-components/CustomTypography/CustomTypography";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import SimilarJobCard from "./similarCard";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import searchService from "@/redux/services/search.service";
import styles from "./jobDetail.module.css";

const breakPoints = [
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 6 },
];

const SimilarJobs = ({ jobRole }) => {
  const [similar, setSimilar] = useState([]);

  const similarJobs = () => {
    searchService
      .getLatestJObs(1, [], [], jobRole, "", "", "", "", "", 10)
      .then((res) => {
        console.log(res);
        setSimilar(res.data.posts);
      })
      .catch(() => {});
  };

  useEffect(() => {
    if (jobRole) {
      similarJobs();
    }
  }, []);

  const carouselRef = useRef(null);
  const totalPages = 4;
  let resetTimeout;

  if (similar.length < 1) return;

  return (
    <Box
      sx={{
        pb: "30px",
      }}
    >
      <Container>
        <CustomTypography
          className={styles.similarTopic}
          fontWeight={700}
          gutterBottom
        >
          <span style={{ color: "#034275" }}>Similar&nbsp;</span>
          <span style={{ color: "#02A9F7" }}>Jobs</span>
        </CustomTypography>

        <Grid container spacing={3}>
          {similar.slice(0, 9).map((simi, index) => (
            <Grid item xs={12} md={4} key={index}>
              <SimilarJobCard data={simi} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SimilarJobs;
