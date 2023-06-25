/* eslint-disable @next/next/no-img-element */
"use client";
import { Box, Stack, Button, Container, Grid } from "@mui/material";
import Carousel from "react-elastic-carousel";
import { CustomTypography } from "../../ui-components/CustomTypography/CustomTypography";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import SimilarJobCard from "./similarCard";
import styles from "./jobDetail.module.css";
import dynamic from "next/dynamic";

const SimilarJobs = ({ similar }) => {
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

export default dynamic(() => Promise.resolve(SimilarJobs), { ssr: false });
