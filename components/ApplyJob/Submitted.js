import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import {
  Backdrop,
  Checkbox,
  CircularProgress,
  Dialog,
  FormGroup,
  Stack,
  Switch,
  Container,
} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Navbar from "@/components/Navbar/Navbar";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { BOLD } from "@/theme/fonts";
import { useRouter } from "next/router";

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
  },
};

const Submitted = () => {
  const router = useRouter();

  const goBack = () => {
    router.push(`/jobs`);
  };

  return (
    <div
      style={{
        backgroundImage: `url("/selectResumeBg.svg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Navbar />
      <Box
        sx={{
          height: "100px",
          backgroundImage: 'url("/Group 86.png")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
        }}
      ></Box>
      <div style={styles.container}>
        <img
          src="/applyConfirmation Img.png"
          alt="Centered Image"
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
        <img
          src="/tickImg.png"
          alt="Centered Image"
          style={{ maxHeight: "80px", maxWidth: "80px" }}
        />
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
          onClick={() => goBack()}
          sx={{
            bgcolor: "#015FB1 !important",
            width: { md: "40%", sm: "100%", xs: "100%" },
            height: "40px",
            textTransform: "capitalize",
            mt: "50px",
            mb: "100px",
          }}
        >
          Search For More Jobs
        </Button>
      </Box>
    </div>
  );
};

export default Submitted;
