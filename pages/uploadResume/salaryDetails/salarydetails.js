"use client";
import * as React from "react";
import {
  Box,
  Stack,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
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

const Salary = () => {
  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
  ];

  const [currentDenomination, setCurrentDenomination] = React.useState("");
  const [expectedDenomination, setExpectedDenomination] = React.useState("");

  const handleCurrentDenomination = (event) => {
    setCurrentDenomination(event.target.value);
  };

  const handleExpectedDenomination = (event) => {
    setExpectedDenomination(event.target.value);
  };

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
          <Stepper sx={{ width: "50%" }} activeStep={4} alternativeLabel>
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
            Fantastic Work!
          </CustomTypography>
          <CustomTypography className="resumeUploadText" gutterBottom>
            You are making great progress
          </CustomTypography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Stack
            sx={{ width: { md: "70%", sm: "100%", xs: "100%" } }}
            spacing={3}
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
                  label="Currency of your Salary"
                  sx={{
                    background: "#FFFFFF",
                    borderColor: "#949494",
                    borderRadius: "8px",
                    marginTop: "30px",
                  }}
                />
              )}
            />
            <div style={{ display: "flex" }}>
              <TextField
                id="outlined-number"
                label="Current Annual Salary"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{ width: "80%", mr: "5px" }}
              />
              <FormControl sx={{ width: "20%" }}>
                <InputLabel id="demo-simple-select-required-label">
                  Denomination
                </InputLabel>
                <Select
                  labelId="demo-simple-select-required-label"
                  id="demo-simple-select-required"
                  value={currentDenomination}
                  label="Denomination *"
                  onChange={handleCurrentDenomination}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div style={{ display: "flex" }}>
              <TextField
                id="outlined-number"
                label="Expected Annual Salary"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{ width: "80%", mr: "5px" }}
              />
              <FormControl sx={{ width: "20%" }}>
                <InputLabel id="demo-simple-select-required-label">
                  Denomination
                </InputLabel>
                <Select
                  labelId="demo-simple-select-required-label"
                  id="demo-simple-select-required"
                  value={expectedDenomination}
                  label="Denomination *"
                  onChange={handleExpectedDenomination}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <Box
              sx={{ display: "flex", justifyContent: "flex-end", mb: "120px" }}
            >
              <Button className="searchJobsBtn" variant="contained">
                Search For Jobs
              </Button>
            </Box>
          </Stack>
        </Box>
      </Container>
    </div>
  );
};

export default Salary;
