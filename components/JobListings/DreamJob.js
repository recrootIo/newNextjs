import React from "react";
import { Typography, Box, Grid, Container } from "@mui/material";
import Image from "next/image";

const DreamJob = () => {
  return (
    <Box className="dreamjob">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box className="dreamjobTypoBox" xs={12}>
              <Typography
                className="dreamjobTypo"
                variant="h4"
                fontWeight={700}
                gutterBottom
              >
                Find your Dream Job
              </Typography>
            </Box>
          </Grid>
          <Grid className="dreamjobGrid" item xs={12} md={6}>
            <Box className="dreamjobImgBox">
              <Image
                className="dreamJobImage"
                src="/image head.png"
                alt=""
                width="0"
                height="0"
                sizes="100vw"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DreamJob;
