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
  useMediaQuery,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import Image from "next/image";
import { WORK_PREFERENCE } from "@/utils/constants";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const steps = [
  "Select master blaster campaign settings",
  "Create an ad group",
  "Create an ad",
  "Select master blaster campaign settings",
  "Create an ad group",
];

const NoticePeriodInputs = ({ ...props }) => {
  const { scroll, setCreateResume, position } = props;
  const [notice, setNotice] = React.useState("Immediate Joiner");
  const [hasAnOffer, setHasAnOffer] = React.useState("no");
  const [state, setState] = React.useState({
    Remote: false,
    Onsite: false,
    Hybrid: false,
  });
  // const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const handleNoticePeriod = (event) => {
    setNotice(event.target.value);
  };

  const handleHasAnOffer = (event) => {
    setHasAnOffer(event.target.value);
  };

  const actionNext = () => {
    let preferencesArray = [];
    if (state.Remote) preferencesArray.push("Remote");
    if (state.Onsite) preferencesArray.push("Onsite");
    if (state.Hybrid) preferencesArray.push("Hybrid");

    setCreateResume((state) => ({
      ...state,
      notice,
      currentOffer: hasAnOffer,
      workPrefence: preferencesArray,
    }));

    scroll(position + 1);
  };

  const hasPreference = state.Hybrid || state.Onsite || state.Remote;
  const hasPeriodOffer = notice && hasPreference;

  return (
    <>
      <Container>
        <Box className="logoContainer">
          <Image
            className="logoImage"
            src="/recroot-logo-sec.png"
            alt=""
            width="0"
            height="0"
            sizes="100vw"
          />
        </Box>
        <Stack
          sx={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            display: { md: "flex", padding: { md: "130px 0", xs: "20px 0" } },
          }}
        >
          <Button
            onClick={() => scroll(position - 1)}
            startIcon={<KeyboardBackspaceIcon />}
            sx={{ color: "black", textDecoration: "underline" }}
            variant="text"
          >
            Back
          </Button>
        </Stack>
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
                value={notice}
                onChange={handleNoticePeriod}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  marginTop: "10px",
                }}
              >
                <FormControlLabel
                  value="Immediate Joiner"
                  control={<Radio />}
                  label="Immediate"
                  sx={{ width: { xs: "45%", sm: "auto" } }}
                />
                <FormControlLabel
                  value="15 Days"
                  control={<Radio />}
                  label="15 Days"
                  sx={{ width: { xs: "45%", sm: "auto" } }}
                />
                <FormControlLabel
                  value="30 days"
                  control={<Radio />}
                  label="30 Days"
                  sx={{ width: { xs: "45%", sm: "auto" } }}
                />
                <FormControlLabel
                  value="45 Days"
                  control={<Radio />}
                  label="45 Days"
                  sx={{ width: { xs: "45%", sm: "auto" } }}
                />
                <FormControlLabel
                  value="60 Days"
                  control={<Radio />}
                  label="60 Days"
                  sx={{ width: { xs: "45%", sm: "auto" } }}
                />
                <FormControlLabel
                  value="90 Days"
                  control={<Radio />}
                  label="90 Days"
                  sx={{ width: { xs: "45%", sm: "auto" } }}
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
                sx={{ columnGap: { xs: "none", sm: "14%" }, marginTop: "10px" }}
              >
                <FormControlLabel
                  value="yes"
                  control={<Radio />}
                  label="Yes"
                  sx={{ width: { xs: "45%", sm: "auto" } }}
                />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>

            <FormControl component="fieldset">
              <FormLabel component="legend">Work Preference *</FormLabel>
              <FormGroup
                aria-label="position"
                sx={{
                  columnGap: { xs: "none", sm: "10%" },
                  marginTop: "10px",
                }}
                row
              >
                {WORK_PREFERENCE.map((prefer, index) => (
                  <FormControlLabel
                    key={index}
                    value="top"
                    control={
                      <Checkbox
                        checked={state[prefer]}
                        onChange={handleChange}
                        name={prefer}
                      />
                    }
                    label={prefer}
                    labelPlacement="end"
                    sx={{ width: { xs: "45%", sm: "auto" } }}
                  />
                ))}
              </FormGroup>
            </FormControl>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button
                className={!hasPeriodOffer ? "disabledButtons" : "nextBtn"}
                sx={{
                  height: "50px",
                  width: "30%",
                  textAlign: "center",
                  textTransform: "capitalize",
                  marginBottom: "50px",
                }}
                variant="contained"
                onClick={() => actionNext()}
                disabled={!hasPeriodOffer}
              >
                Next
              </Button>
            </Box>
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default NoticePeriodInputs;
