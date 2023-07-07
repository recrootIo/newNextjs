import React from "react";
import { Box, Grid, Container } from "@mui/material";
import Image from "next/image";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";

const DreamJob = () => {
  return (
    <Box className="dreamjob">
      <Container>
        <Grid container spacing={2}>
          <Grid item className="dreamJobTypoGrid" xs={12} md={6}>
            <Box className="dreamjobTypoBox" xs={12}>
              <CustomTypography
                className="dreamjobTypo"
                variant="h4"
                fontWeight={700}
                gutterBottom
              >
                Explore Your Dream Job Here
              </CustomTypography>
              <CustomTypography
                className="dreamjobsubTypo"
                fontWeight={700}
                gutterBottom
              >
                Let’s begin your journey toward professional success with us
                today!
              </CustomTypography>
            </Box>
          </Grid>
          <Grid className="dreamjobGrid" item xs={12} md={6}>
            <Box className="dreamjobImgBox">
              <Image
                className="dreamJobImage"
                src="/man-with-pc-img.png"
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
