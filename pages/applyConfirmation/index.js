import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Navbar from "@/components/Navbar/Navbar";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { BOLD } from "@/theme/fonts";
import ApplyJobStepper from "@/components/ApplyJobStepper/ApplyJobStepper";
import { useRouter } from "next/router";
import { Stack } from "@mui/material";
import Image from "next/image";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "50vh",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
    backgroundImage: `url("/successImgBg.svg")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
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

      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
          mt: "20px",
          mb: "60px",
        }}
      >
        <ApplyJobStepper activeStep={2} />
      </Stack>

      <div style={styles.container}>
        <Image
          src={"/applyConfirmation-Img.png"}
          alt=""
          height={325}
          width={245}
          style={styles.image}
        />
      </div>
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
          sx={{ color: "#2699FF", fontFamily: BOLD }}
        >
          Thank You For Applying
        </CustomTypography>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#015FB1 !important",
            width: "40%",
            height: "50px",
            textTransform: "capitalize",
            mt: "50px",
            mb: "100px",
            fontSize: "16px",
          }}
          onClick={() => goBack()}
        >
          Search For More Jobs
        </Button>
      </Box>
    </div>
  );
};

export default ApplyConfirmation;
