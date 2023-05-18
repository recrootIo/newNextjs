"use client";
import * as React from "react";
import {
  Box,
  Stack,
  Button,
  FormControl,
  Checkbox,
  FormGroup,
  Container,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import Image from "next/image";

const steps = [
  "Select master blaster campaign settings",
  "Create an ad group",
  "Create an ad",
  "Select master blaster campaign settings",
  "Create an ad group",
];

const NoticePeriod = ({ ...props }) => {
  const { scroll, setCreateResume, setTotalExperience, position } = props;
  const [NoticePeriod, setNoticePeriod] = React.useState("Immediate");
  const [hasAnOffer, setHasAnOffer] = React.useState("Yes");
  const [checked, setChecked] = React.useState(false);

  const handleNoticePeriod = (event) => {
    setNoticePeriod(event.target.value);
  };

  const handleHasAnOffer = (event) => {
    setHasAnOffer(event.target.value);
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const actionNext = () => {
    // setCreateResume((state) => ({ ...state, jobTitle: tempTitles }));
    // setTotalExperience(experience);
    scroll(position + 1);
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
          <Stepper sx={{ width: "50%" }} activeStep={3} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel></StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        <Box sx={{ marginBottom: "71px" }}>
          <CustomTypography
            className="resumeUploadTitle"
            variant="h5"
            gutterBottom
          >
            Great Work!
          </CustomTypography>
          <CustomTypography className="resumeUploadText" gutterBottom>
            Lets add a little more Information
          </CustomTypography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Stack
            sx={{ width: { md: "70%", sm: "100%", xs: "100%" } }}
            spacing={3}
          >
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Notice Period *
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={NoticePeriod}
                onChange={handleNoticePeriod}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <FormControlLabel
                  value="Immediate"
                  control={<Radio />}
                  label="Immediate"
                />
                <FormControlLabel
                  value="noticeOne"
                  control={<Radio />}
                  label="15 Days"
                />
                <FormControlLabel
                  value="noticeTwo"
                  control={<Radio />}
                  label="30 Days"
                />
                <FormControlLabel
                  value="noticeThree"
                  control={<Radio />}
                  label="45 Days"
                />
                <FormControlLabel
                  value="noticeFour"
                  control={<Radio />}
                  label="60 Days"
                />
              </RadioGroup>
            </FormControl>

            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Do you already have an offer? *
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={hasAnOffer}
                onChange={handleHasAnOffer}
                sx={{ columnGap: "14%", marginTop: "10px" }}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>

            <FormControl component="fieldset">
              <FormLabel component="legend">Work Preference *</FormLabel>
              <FormGroup
                aria-label="position"
                sx={{ columnGap: "10%", marginTop: "10px" }}
                row
              >
                <FormControlLabel
                  value="top"
                  control={
                    <Checkbox checked={checked} onChange={handleChange} />
                  }
                  label="Remote"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="start"
                  control={<Checkbox />}
                  label="On-site"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="bottom"
                  control={<Checkbox />}
                  label="Hybrid"
                  labelPlacement="end"
                />
              </FormGroup>
            </FormControl>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button
                className="nextBtn"
                variant="contained"
                onClick={() => actionNext()}
              >
                Next
              </Button>
            </Box>
          </Stack>
        </Box>
      </Container>
    </div>
  );
};

export default NoticePeriod;
