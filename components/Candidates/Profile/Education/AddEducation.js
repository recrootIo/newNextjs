"use client";
import * as React from "react";
import {
  Box,
  Stack,
  Button,
  TextField,
  Container,
  Autocomplete,
  Card,
  CardContent,
  Radio,
  RadioGroup,
  FormControl,
} from "@mui/material";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { useState } from "react";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch, useSelector } from "react-redux";
import { EDUCATION_LEVELS } from "@/utils/constants";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import moment from "moment";
import dayjs from "dayjs";
import { AddEducaAndThenGet, EditEducaAndGet } from "@/redux/slices/personal";
import { updateCurrentScreen } from "@/redux/slices/candidate";
import { geocodeByAddress } from "react-google-places-autocomplete";

const AddEducation = () => {
  const education = useSelector((state) => state.personal.education);

  const dispatch = useDispatch();

  const [value, setValue] = React.useState("");
  const [value2, setValue2] = React.useState("");

  const [educationDetails, setEducationDetails] = useState({
    graduate: "",
    degreeName: "",
    country: "",
    state: "",
    city: "",
    experience: "",
    collegeName: "",
    fromDate: "",
    toDate: "",
  });

  React.useEffect(() => {
    setEducationDetails(() => ({
      graduate: education?.graduate,
      degreeName: education?.degreeName,
      country: education?.country,
      state: education?.state,
      city: education?.city,
      experience: education?.experience,
      collegeName: education?.collegeName,
      fromDate: education?.fromDate,
      toDate: education?.toDate,
      _id: education?._id,
    }));
    setValue(() => dayjs(education?.fromDate));
    setValue2(() => dayjs(education?.toDate));
  }, [education]);

  const convertDate = (date) => {
    const dateObj = new Date(date);
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");
    const year = String(dateObj.getFullYear());

    return `${month}/${day}/${year}`;
  };

  const handleChange = (newValue) => {
    let val = convertDate(newValue);
    setValue(() => newValue);
    setEducationDetails((state) => ({
      ...state,
      fromDate: val,
    }));
  };

  const handleChangeto = (newValue2) => {
    let val = convertDate(newValue2);
    setValue2(() => newValue2);
    setEducationDetails((state) => ({
      ...state,
      toDate: val,
    }));
  };

  const onChange = (e, n) => {
    let { name, value } = e.target;

    setEducationDetails({
      ...educationDetails,
      [name]: value,
    });
  };

  const handleAdd = () => {
    if (educationDetails?._id) {
      dispatch(EditEducaAndGet(educationDetails, educationDetails?._id));
    } else {
      dispatch(AddEducaAndThenGet(educationDetails));
    }
  };

  const gotoHome = () => {
    dispatch(updateCurrentScreen(""));
  };

  const handleSelect = async (selected) => {
    const results = await geocodeByAddress(selected.label);
    setEducationDetails({
      ...educationDetails,
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

  return (
    <div>
      <Container>
        <Card>
          <Box sx={{ bgcolor: "#2699FF" }}>
            <Button
              variant="text"
              startIcon={<ArrowBackIcon />}
              sx={{
                color: "white",
                textTransform: "capitalize",
                fontSize: "18px",
              }}
              onClick={() => gotoHome()}
            >
              Back
            </Button>
          </Box>
          <CardContent sx={{ p: "70px", paddingBottom: "100px !important" }}>
            <CustomTypography
              className="personalDetailTitle"
              variant="h4"
              sx={{
                display: "flex",
                justifyContent: "center",
                fontWeight: 600,
                fontFamily: "Inter-bold",
                mt: "60px",
              }}
              gutterBottom
            >
              Add Education
            </CustomTypography>
            <Stack spacing={2} sx={{ mt: "100px" }}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={EDUCATION_LEVELS}
                name="graduate"
                sx={{ display: "flex", justifyContent: "center" }}
                value={educationDetails.graduate}
                onChange={(event, education) => {
                  setEducationDetails({
                    ...educationDetails,
                    graduate: education,
                  });
                }}
                renderInput={(params) => (
                  <TextField
                    fullWidth
                    {...params}
                    label="Degree*"
                    value={educationDetails.graduate}
                    sx={{
                      background: "#FFFFFF",
                      borderColor: "#949494",
                      borderRadius: "8px",
                    }}
                  />
                )}
              />

              <TextField
                fullWidth
                id="degree"
                label="Degree"
                name="degreeName"
                value={educationDetails.degreeName}
                onChange={onChange}
              />

              <Box sx={{ width: "100%" }}>
                <GooglePlacesAutocomplete
                  apiKey="AIzaSyCLT3fP1-59v2VUVoifXXJX-MQ0HA55Jp4"
                  selectProps={{
                    isClearable: true,
                    placeholder: "Enter Your Location",
                    value: educationDetails.country,
                    onChange: (val) => {
                      handleSelect(val);
                    },
                    styles: {
                      input: (provided) => ({
                        ...provided,
                        boxShadow: 0,
                        height: "40px",
                        "&:hover": {
                          border: "1px solid purple",
                        },
                      }),
                      singleValue: (provided) => ({
                        ...provided,
                        boxShadow: 0,
                        "&:hover": {
                          border: "1px solid purple",
                        },
                      }),
                    },
                  }}
                />
              </Box>

              {educationDetails?.country === "" ? (
                ""
              ) : (
                <Stack direction="row" spacing={2} marginTop={2}>
                  <FormControl fullWidth>
                    <CustomTypography variant="body2">Country</CustomTypography>
                    <TextField
                      autoComplete="given-name"
                      name="country"
                      fullWidth
                      id="about"
                      placeholder="Country"
                      value={educationDetails?.country}
                      onChange={onChange}
                    />
                  </FormControl>
                  <FormControl fullWidth>
                    <CustomTypography variant="body2">State</CustomTypography>
                    <TextField
                      autoComplete="given-name"
                      name="state"
                      fullWidth
                      id="about"
                      placeholder="State"
                      value={educationDetails?.state}
                      onChange={onChange}
                    />
                  </FormControl>
                  <FormControl fullWidth>
                    <CustomTypography variant="body2">City</CustomTypography>
                    <TextField
                      autoComplete="given-name"
                      name="city"
                      fullWidth
                      id="about"
                      placeholder="City"
                      value={educationDetails?.city}
                      onChange={onChange}
                    />
                  </FormControl>
                </Stack>
              )}

              <TextField
                fullWidth
                id="duaration"
                label="Duration(Years)"
                name="experience"
                type="number"
                value={educationDetails?.experience}
                autoComplete="user-name"
                onChange={onChange}
              />

              <TextField
                fullWidth
                id="institute"
                label="Institute"
                name="collegeName"
                value={educationDetails.collegeName}
                autoComplete="user-name"
                onChange={onChange}
              />

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "20px",
                  width: "100%",
                }}
              >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <MobileDatePicker
                    label="From"
                    // inputFormat="MM/dd/YYYY"
                    name="fromDate"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => (
                      <TextField {...params} sx={{ width: "100%" }} />
                    )}
                  />

                  <MobileDatePicker
                    label="To"
                    // inputFormat="MM/dd/YYYY"
                    name="toDate"
                    value={value2}
                    onChange={handleChangeto}
                    renderInput={(params) => (
                      <TextField {...params} sx={{ width: "100%" }} />
                    )}
                  />
                </LocalizationProvider>
              </Box>

              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#015FB1 !important",
                    width: "50%",
                    borderRadius: "8px",
                  }}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  sx={{ bgcolor: "#015FB1 !important", width: "50%" }}
                  onClick={() => handleAdd()}
                >
                  Add
                </Button>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default AddEducation;