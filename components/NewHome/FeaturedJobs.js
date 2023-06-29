import React from "react";
import { Box, Grid, Container, Button, CardContent, Card } from "@mui/material";
import Image from "next/image";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import SimilarJobCard from "../JobDetails/similarCard";
import FeaturedJobCard from "./FeaturedJobCard";

const FeaturedJobs = () => {
  return (
    <Box>
      <Container>
        <CustomTypography
          sx={{
            fontSize: "30px",
            fontWeight: 700,
            color: "#01313F",
            textAlign: "center",
            mb: "80px",
            textTransform: "uppercase",
          }}
        >
          Featured Jobs
        </CustomTypography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <FeaturedJobCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <FeaturedJobCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <FeaturedJobCard />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturedJobs;
