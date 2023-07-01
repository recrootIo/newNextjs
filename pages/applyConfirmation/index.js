import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Navbar from "@/components/Navbar/Navbar";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { BOLD } from "@/theme/fonts";
import ApplyJobStepper from "@/components/ApplyJobStepper/ApplyJobStepper";
import { useRouter } from "next/router";
import { Container, Stack } from "@mui/material";
import Image from "next/image";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "50vh",
  },
  // image: {
  //   maxWidth: "100%",
  //   maxHeight: "100%",
  //   backgroundImage: `url("/successImgBg.svg")`,
  //   backgroundRepeat: "no-repeat",
  //   backgroundSize: "cover",
  // },
};

const ApplyConfirmation = () => {
  const router = useRouter();

  const goBack = () => {
    router.push(`/jobs`);
  };

  return (
    <div
      style={{
        backgroundImage: `url("/Successful applied for jo bg.svg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Navbar />
      <Box
        sx={{
          height: "100px",
          backgroundImage: 'url("/blue-background-bg.png")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
        }}
      ></Box>

      <Container>
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "center",
            gap: "40px",
            mt: "20px",
          }}
        >
          <ApplyJobStepper activeStep={2} />
        </Stack>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Grid container spacing={2} sx={{ mt: "30px" }}>
            <Grid
              item
              xs={6}
              sx={{
                maxWidth: "100%",
                maxHeight: "100%",
                backgroundImage: `url("/successImgBg.svg")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
              }}
            >
              <div style={styles.container}>
                <Image
                  src={"/applyConfirmation-Img.png"}
                  alt=""
                  height={425}
                  width={345}
                  style={styles.image}
                />
              </div>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Image src={"/tickImg.png"} alt="" height={65} width={80} />
                <CustomTypography variant="body1" gutterBottom>
                  Your Application is Submitted
                </CustomTypography>
                <CustomTypography
                  variant="h4"
                  gutterBottom
                  sx={{
                    color: "#2699FF",
                    fontFamily: BOLD,
                    textAlign: "center",
                  }}
                >
                  Thank You For Applying
                </CustomTypography>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#015FB1 !important",
                    width: "60%",
                    height: "50px",
                    textTransform: "capitalize",
                    mt: "50px",
                    fontSize: "16px",
                  }}
                  onClick={() => goBack()}
                >
                  Search For More Jobs
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default ApplyConfirmation;
