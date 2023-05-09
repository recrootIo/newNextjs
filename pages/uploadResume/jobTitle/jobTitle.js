"use client";
import * as React from "react";
import {
  Box,
  Stack,
  Button,
  TextField,
  Container,
  Autocomplete,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import Image from "next/image";

const steps = [
  "Select master blaster campaign settings",
  "Create an ad group",
  "Create an ad",
  "Select master blaster campaign settings",
  "Create an ad group",
];

const JobTitle = () => {
  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
  ];

  return (
    <div
      style={{
        backgroundImage: `url("/Frame 300.svg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box className="topbar"></Box>
      <Container>
        <Box className="logoContainer">
          <Image
            className="logoImage"
            src="/logo 8.png"
            alt=""
            width="0"
            height="0"
            sizes="100vw"
          />
        </Box>
        <Box className="stepperContainer">
          <Stepper sx={{ width: "50%" }} activeStep={1} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel></StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        <Box>
          <CustomTypography
            className="resumeUploadTitle"
            variant="h5"
            gutterBottom
          >
            Make Your Recroot Profile Shine!
          </CustomTypography>
          <CustomTypography className="resumeUploadText" gutterBottom>
            Job title that closely Relevant with your professional experience
          </CustomTypography>
        </Box>
        <Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Stack
              spacing={3}
              sx={{ width: { md: "70%", sm: "100%", xs: "100%" } }}
            >
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ display: "flex", justifyContent: "center" }}
                renderInput={(params) => (
                  <TextField
                    fullWidth
                    {...params}
                    label="Job Title *"
                    sx={{
                      background: "#FFFFFF",
                      borderColor: "#949494",
                      borderRadius: "8px",
                      marginTop: "30px",
                    }}
                  />
                )}
              />
              <TextField
                required
                id="outlined-required"
                label="Overall Work Experience"
                sx={{
                  background: "#FFFFFF",
                  borderColor: "#949494",
                  borderRadius: "8px",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Button className="nextBtn" variant="contained">
                  Next
                </Button>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default JobTitle;
