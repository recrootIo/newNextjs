"use client";
import * as React from "react";
import {
  Box,
  Stack,
  Button,
  TextField,
  Container,
  Stepper,
  Step,
  StepLabel,
  FormControl,
} from "@mui/material";
import Image from "next/image";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
} from "react-google-places-autocomplete";
import { NEUTRAL } from "@/theme/colors";

const steps = [
  "Select master blaster campaign settings",
  "Create an ad group",
  "Create an ad",
  "Select master blaster campaign settings",
  "Create an ad group",
];

const LocationDetails = ({ ...props }) => {
  const { scroll, setinputPersonalDetailsCountry, position } = props;

  const [address, setAddress] = React.useState(null);
  const [inputPersonalDetailsCountry, setInputPersonalDetailsCountry] =
    React.useState({
      country: "",
      state: "",
      city: "",
    });

  const handleSelect = async (selected) => {
    const results = await geocodeByAddress(selected.label);
    console.log(handleSelect, "handleSelect");
    setInputPersonalDetailsCountry({
      country: results[0].address_components.find((c) =>
        c.types.includes("country")
      )?.long_name,
      state: results[0].address_components.find((c) =>
        c.types.includes("administrative_area_level_1")
      )?.long_name,
      city: results[0].address_components.find((c) =>
        c.types.includes("locality")
      )?.long_name,
    });
  };

  const enableButton =
    inputPersonalDetailsCountry?.country &&
    inputPersonalDetailsCountry?.state &&
    inputPersonalDetailsCountry?.city;

  // const { innerWidth } = window;

  const actionNext = () => {
    scroll(position + 1);
    setinputPersonalDetailsCountry(() => ({ ...inputPersonalDetailsCountry }));
  };

  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            width: { md: "70%", sm: "100%", xs: "100%" },
          }}
        >
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
            <Stepper sx={{ width: "50%" }} activeStep={2} alternativeLabel>
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
              Great Effort!
            </CustomTypography>
            <CustomTypography className="resumeUploadText" gutterBottom>
              Lets input the location information
            </CustomTypography>
          </Box>
          <Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Stack sx={{ width: "100%" }} spacing={3}>
                <GooglePlacesAutocomplete
                  sx={{ width: "100%" }}
                  apiKey="AIzaSyCLT3fP1-59v2VUVoifXXJX-MQ0HA55Jp4"
                  selectProps={{
                    isClearable: true,
                    placeholder: "",
                    value: address,
                    onChange: (val) => {
                      setAddress(val);
                      handleSelect(val);
                    },
                    onSelect: { handleSelect },
                    styles: {
                      input: (provided) => ({
                        ...provided,
                        height: "2.8em",
                        paddingTop: "10px",
                        // minWidth: widthGoogle,
                      }),
                      option: (provided) => ({
                        ...provided,
                        height: "2.8em",
                        // minWidth: widthGoogle,
                      }),
                      singleValue: (provided) => ({
                        ...provided,
                        height: "2.8em",
                        paddingTop: "10px",
                        // minWidth: widthGoogle,
                      }),
                    },
                  }}
                />

                {inputPersonalDetailsCountry?.country && (
                  <Stack
                    direction={{ md: "row", xs: "column" }}
                    spacing={2}
                    marginTop={2}
                    sx={{ alignItems: "flex-start", width: { xs: "100%" } }}
                  >
                    <FormControl fullWidth>
                      <CustomTypography fontSize="20px">
                        Country
                      </CustomTypography>
                      <TextField
                        autoComplete="given-name"
                        name="country"
                        fullWidth
                        id="about"
                        placeholder="Country"
                        value={inputPersonalDetailsCountry?.country}
                        sx={{
                          backgroundColor: NEUTRAL,
                          width: { xs: "100%" },
                        }}
                      />
                    </FormControl>
                    <FormControl fullWidth>
                      <CustomTypography fontSize="20px">State</CustomTypography>
                      <TextField
                        autoComplete="given-name"
                        name="state"
                        fullWidth
                        id="about"
                        placeholder="State"
                        sx={{
                          backgroundColor: NEUTRAL,
                          width: { xs: "100%" },
                        }}
                        onChange={(e) =>
                          setInputPersonalDetailsCountry((state) => ({
                            ...state,
                            state: e.target.value,
                          }))
                        }
                        value={inputPersonalDetailsCountry?.state}
                      />
                    </FormControl>
                    <FormControl fullWidth>
                      <CustomTypography fontSize="20px">City</CustomTypography>
                      <TextField
                        autoComplete="given-name"
                        name="city"
                        fullWidth
                        id="about"
                        placeholder="City"
                        sx={{
                          backgroundColor: NEUTRAL,
                          width: { xs: "100%" },
                        }}
                        onChange={(e) =>
                          setInputPersonalDetailsCountry((state) => ({
                            ...state,
                            city: e.target.value,
                          }))
                        }
                        value={inputPersonalDetailsCountry?.city}
                      />
                    </FormControl>
                  </Stack>
                )}

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
                    display={!enableButton}
                  >
                    Next
                  </Button>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default LocationDetails;
