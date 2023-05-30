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
  CircularProgress,
} from "@mui/material";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import Image from "next/image";
import http from "@/redux/http-common";
import { NEUTRAL } from "@/theme/colors";
import { debounce } from "@/utils/HelperFunctions";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const steps = [
  "Select master blaster campaign settings",
  "Create an ad group",
  "Create an ad",
  "Select master blaster campaign settings",
  "Create an ad group",
];

const JobTitle = ({ ...props }) => {
  const { scroll, setCreateResume, setTotalExperience, position } = props;

  const [tempTitles, setTempTitles] = React.useState("");
  const [type, setType] = React.useState([]);
  const [titleLoading, setTitleLoading] = React.useState(false);
  const [timetoLoad, setTimeTLoad] = React.useState(null);
  const [experience, setExperience] = React.useState("");

  const handleTitle = (e) => {
    setTempTitles(e);
  };

  const selectExperience = (e) => {
    setExperience(e.target.value);
  };

  const requestTitles = (e) => {
    setTitleLoading(true);
    http
      .get(`getTitles?searchTitle=${e}`)
      .then((response) => {
        const titleArray = response.data.map((e) => e.jobTitle);
        setType(titleArray);
        setTitleLoading(false);
      })
      .catch(() => {
        setTitleLoading(false);
      });
  };

  const getJobTitles = (e) => {
    debounce(requestTitles, null, timetoLoad, setTimeTLoad, e);
  };

  const enableButton = experience && tempTitles;
  const actionNext = () => {
    setCreateResume((state) => ({ ...state, jobTitle: tempTitles }));
    setTotalExperience(experience);
    scroll(position + 1);
  };

  return (
    <>
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
          <Stepper activeStep={1} alternativeLabel>
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
                id="free-solo-2-demo"
                disableClearable
                fullWidth
                disablePortal={true}
                name="jobTitle"
                value={tempTitles}
                options={type.map((option) => option)}
                onChange={(e, a) => {
                  handleTitle(a);
                }}
                filterOptions={(x) => x}
                noOptionsText="No data found"
                loading={titleLoading}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Job Title"
                    name="jobTitle"
                    required={true}
                    InputProps={{
                      ...params.InputProps,
                      type: "search",
                      endAdornment: (
                        <React.Fragment>
                          {titleLoading ? (
                            <CircularProgress color="inherit" size={20} />
                          ) : null}
                          {params.InputProps.endAdornment}
                        </React.Fragment>
                      ),
                    }}
                    onChange={(e) => {
                      getJobTitles(e.target.value);
                    }}
                    loading={titleLoading}
                  />
                )}
                sx={{ backgroundColor: NEUTRAL }}
              />

              <TextField
                variant="outlined"
                value={experience}
                name="currentSalary"
                label="Overall Work Experience"
                type="number"
                required={true}
                onChange={selectExperience}
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 2);
                }}
              />

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
                  disabled={!enableButton}
                >
                  Next
                </Button>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default JobTitle;
