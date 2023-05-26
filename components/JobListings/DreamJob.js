import React from "react";
import { Box, Grid, Container } from "@mui/material";
import Image from "next/image";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import styles from "./joblistings.module.css";

const DreamJob = () => {
  return (
    <Box className={styles.dreamjob}>
      <Container>
        <Grid container spacing={2}>
          <Grid item className={styles.dreamJobTypoGrid} xs={12} md={6}>
            <Box className={styles.dreamjobTypoBox} xs={12}>
              <CustomTypography
                className={styles.dreamjobTypo}
                variant="h3"
                gutterBottom
              >
                Find your Dream Job
              </CustomTypography>
            </Box>
          </Grid>
          <Grid className={styles.dreamjobGrid} item xs={12} md={6}>
            <Box className={styles.dreamjobImgBox}>
              <Image
                className={styles.dreamJobImage}
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
