"use client";
import * as React from "react";
import {
  Box,
  Stack,
  Button,
  TextField,
  Container,
  Autocomplete,
  Chip,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  IconButton,
  Card,
  CardContent,
} from "@mui/material";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { useState } from "react";

import InputLabel from "@mui/material/InputLabel";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import MenuItem from "@mui/material/MenuItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentScreen } from "@/redux/slices/candidate";
import axios from "axios";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { debounce } from "@/utils/HelperFunctions";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
} from "react-google-places-autocomplete";
import { DENOMINATIONS, ERROR, LANGUAGES, SUCCESS } from "@/utils/constants";
import { CURRENCY } from "@/utils/currency";
import { NEUTRAL } from "@/theme/colors";
import {
  // EditPersonalandGet,
  // editPersonalsName,
  getCandsPrefInfo,
} from "@/redux/slices/personal";
import { BOLD } from "@/theme/fonts";
// import personalService from "@/redux/services/personal.service";
// import userService from "@/redux/services/user.service";
import { openAlert } from "@/redux/slices/alert";
import candidateServices from "@/redux/services/candidate.services";

const EditPersonalDetails = () => {
  const { data = {} } = useSelector((state) => state?.personal);
  const { firstName, jobTitle, lastName, mobile, about, resume } = data;
  const user = JSON.parse(localStorage.getItem("User"));

  const dispatch = useDispatch();

  const [titleLoading, setTitleLoading] = useState(false);
  const [personal, setPersonal] = useState({
    firstName: firstName,
    lastName: lastName,
    jobTitle: jobTitle,
    languages: resume?.languages,
    currentOffer: resume.currentOffer,
    notice: resume.notice,
    salaryCurrency: resume.salaryCurrency,
    currentSalary: resume?.currentSalary,
    workPrefence: resume?.resume,
    mobile: mobile,
    country: resume.location.country,
    state: resume.location.state,
    city: resume.location.city,
    totalWorkExperience: resume?.totalWorkExperience,
    about: about,
  });

  const [type, setType] = useState([]);
  const [timetoLoad, setTimeTLoad] = useState(null);
  const [language, setLanguage] = useState("");

  const gotToPersonalDetails = () => {
    dispatch(updateCurrentScreen(""));
  };

  const handleChangeName = (e) => {
    let { name, value } = e.target;
    setPersonal({
      ...personal,
      [name]: value,
    });
  };

  const handleTitle = (e) => {
    setPersonal({
      ...personal,
      jobTitle: e,
    });
  };

  const requestTitles = (e) => {
    setTitleLoading(true);
    axios
      .get(`http://localhost:3000/api/getTitles?searchTitle=${e}`, {
        headers: { "x-access-token": `${user.token}` },
      })
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

  const handlePhoneNumber = (e, count) => {
    console.log(count);
    setPersonal({
      ...personal,
      mobile: parseInt(e),
    });
  };

  const addTitle = () => {
    if (language) {
      setPersonal((state) => ({
        ...state,
        languages: [...state.languages, language],
      }));
      setLanguage("");
    }
  };

  const handleSelect = async (selected) => {
    const results = await geocodeByAddress(selected.label);
    setPersonal({
      ...personal,
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

  const changeLanguages = (e) => {
    setLanguage(e);
  };

  const handleDelete = (e) => {
    let array = personal.languages.filter((l) => l != e);
    setPersonal((state) => ({
      ...state,
      languages: [...array],
    }));
  };

  const changeOffers = (e, a) => {
    setPersonal((state) => ({
      ...state,
      currentOffer: a,
    }));
  };

  const handleEdit = () => {
    candidateServices
      .editMyPersonalDetails(personal)
      .then(() => {
        dispatch(
          openAlert({
            type: SUCCESS,
            message: "Personal details updated",
          })
        );
        dispatch(updateCurrentScreen(""));
        dispatch(getCandsPrefInfo());
      })
      .catch(() => {
        dispatch(
          openAlert({
            type: ERROR,
            message: "Something went wrong",
          })
        );
      });
  };

  const changeSalaries = (e, a) => {
    console.log(a);
    const { name, value } = e.target;
    const salary = personal.currentSalary.salary;
    const denomination = personal.currentSalary.denomination;

    let currentSalary = {
      salary,
      denomination,
    };

    if (name === "salary") {
      currentSalary.salary = value;
    } else {
      currentSalary.denomination = value;
    }

    setPersonal((state) => ({
      ...state,
      currentSalary: currentSalary,
    }));
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
              onClick={() => gotToPersonalDetails()}
            >
              Back
            </Button>
          </Box>

          <CardContent sx={{ p: "50px", paddingBottom: "100px !important" }}>
            <CustomTypography
              className="personalDetailTitle"
              variant="h4"
              sx={{
                display: "flex",
                justifyContent: "center",
                fontWeight: 600,
                fontFamily: BOLD,
                fontSize: "33px",
              }}
            >
              Edit Personal Details
            </CustomTypography>

            <Stack spacing={2} sx={{ mt: "50px" }}>
              <Stack
                sx={{
                  gap: "10px",
                  flexDirection: { md: "row", sm: "column", xs: "column" },
                }}
              >
                <TextField
                  required
                  id="outlined-basic"
                  label="First Name"
                  name="firstName"
                  variant="outlined"
                  value={personal.firstName}
                  autoComplete="user-name"
                  onChange={handleChangeName}
                  sx={{ width: "100%" }}
                />

                <TextField
                  required
                  id="outlined-basic"
                  label="Last Name"
                  name="lastName"
                  variant="outlined"
                  value={personal.lastName}
                  autoComplete="user-name"
                  onChange={handleChangeName}
                  sx={{ width: "100%" }}
                />
              </Stack>

              <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                fullWidth
                name="jobTitle"
                value={personal.jobTitle}
                disablePortal={true}
                options={type.map((option) => option)}
                onChange={(e, a) => {
                  handleTitle(a);
                }}
                required
                loading={titleLoading}
                sx={{ display: "flex", justifyContent: "center" }}
                renderInput={(params) => (
                  <TextField
                    fullWidth
                    {...params}
                    label="Job Title"
                    name="jobTitle"
                    InputProps={{
                      ...params.InputProps,
                      type: "search",
                    }}
                    onChange={(e) => {
                      getJobTitles(e.target.value);
                    }}
                    loading={titleLoading}
                    required
                    sx={{
                      background: "#FFFFFF",
                      borderColor: "#949494",
                      borderRadius: "8px",
                    }}
                  />
                )}
              />

              <TextField
                autoComplete="given-name"
                name="about"
                fullWidth
                id="about"
                label="About"
                autoFocus
                multiline
                rows={4}
                required
                value={personal.about}
                onChange={handleChangeName}
              />

              <ReactPhoneInput
                inputExtraProps={{
                  name: "phoneNumber",
                  required: true,
                  autoFocus: true,
                }}
                id="phoneNumber"
                name="phoneNumber"
                specialLabel="Mobile Number"
                defaultCountry={"au"}
                value={`+${personal.mobile}`}
                onChange={handlePhoneNumber}
                inputStyle={{
                  width: "100%",
                  height: "3.7375em",
                  fontSize: "16px",
                }}
              />

              <Box sx={{ width: "100%" }}>
                <GooglePlacesAutocomplete
                  apiKey="AIzaSyCLT3fP1-59v2VUVoifXXJX-MQ0HA55Jp4"
                  selectProps={{
                    isClearable: true,
                    placeholder: "Enter Your Location",
                    value: personal.country,
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

              {personal?.country === "" ? (
                ""
              ) : (
                <Stack
                  sx={{
                    flexDirection: { md: "row", sm: "column", xs: "column" },
                  }}
                  spacing={2}
                  marginTop={2}
                >
                  <FormControl fullWidth>
                    <CustomTypography variant="body2">Country</CustomTypography>
                    <TextField
                      autoComplete="given-name"
                      name="country"
                      fullWidth
                      id="about"
                      placeholder="Country"
                      value={personal?.country}
                      onChange={handleChangeName}
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
                      value={personal?.state}
                      onChange={handleChangeName}
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
                      value={personal?.city}
                      onChange={handleChangeName}
                    />
                  </FormControl>
                </Stack>
              )}

              <Stack gap={1}>
                <Stack
                  sx={{
                    flexDirection: "row",
                    gap: "10px",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Autocomplete
                    id="free-solo-2-demo"
                    fullWidth
                    disablePortal={true}
                    name="language"
                    onChange={(event, newValue) => {
                      changeLanguages(newValue);
                    }}
                    value={language}
                    options={LANGUAGES}
                    getOptionLabel={(option) => option}
                    required
                    renderInput={(params) => (
                      <TextField
                        variant="outlined"
                        {...params}
                        label="Languages"
                        name="language"
                        InputProps={{
                          ...params.InputProps,
                          type: "search",
                        }}
                      />
                    )}
                  />

                  <IconButton onClick={() => addTitle()}>
                    <AddIcon sx={{ color: "#1976d2" }} />
                  </IconButton>
                </Stack>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                  {personal.languages.map((l, index) => (
                    <Chip
                      key={index}
                      label={l}
                      deleteIcon={<CloseIcon />}
                      onDelete={() => handleDelete(l)}
                      sx={{
                        fontSize: "17px",
                        bgcolor: "#D4F0FC",
                        padding: "3px",
                      }}
                    />
                  ))}
                </Box>
              </Stack>

              <TextField
                autoComplete="given-name"
                name="totalWorkExperience"
                fullWidth
                label="Experience"
                required
                value={personal.totalWorkExperience}
                onChange={handleChangeName}
              />

              <FormControl sx={{ width: "100%" }}>
                <InputLabel id="demo-simple-select-label">
                  Salary Currency
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={personal.salaryCurrency}
                  name="salaryCurrency"
                  label="Salary Currency"
                  onChange={handleChangeName}
                  required
                >
                  {CURRENCY.map((data, ind) => (
                    <MenuItem key={ind} value={data.country}>
                      {data.country} {data.symbol}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <Stack
                sx={{
                  flexDirection: { md: "row", sm: "column", xs: "column" },
                }}
                spacing={2}
              >
                <TextField
                  variant="outlined"
                  value={personal?.currentSalary?.salary}
                  name="salary"
                  label="Current Salary(Per Annum)"
                  type="number"
                  onChange={changeSalaries}
                  sx={{ width: "100%" }}
                  required
                />

                {/* DENOMINATIONS */}
                <FormControl sx={{ width: "100%" }}>
                  <InputLabel id="demo-simple-select-label">
                    Denomination *
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={personal?.currentSalary?.denomination}
                    name="denomination"
                    label="Denomination *"
                    sx={{ backgroundColor: NEUTRAL, width: "100%" }}
                    onChange={changeSalaries}
                    required
                  >
                    {DENOMINATIONS.map((data, ind) => (
                      <MenuItem key={ind} value={data}>
                        {data}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Stack>

              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Do you already have an offer?*
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  sx={{ gap: "100px", mt: "12px" }}
                  value={personal?.currentOffer}
                  onChange={changeOffers}
                  required
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>

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
                  onClick={() => handleEdit()}
                >
                  Save
                </Button>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default EditPersonalDetails;
