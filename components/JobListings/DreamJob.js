import React from "react";
import { Box, Grid, Container } from "@mui/material";
import Image from "next/image";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { BOLD } from "@/theme/fonts";

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
                fontFamily={BOLD}
                gutterBottom
              >
                Find your Dream Job
              </CustomTypography>
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
