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
  // FormControlLabel,
  // FormLabel,
  // Radio,
  // RadioGroup,
  IconButton,
  Card,
  CardContent,
} from "@mui/material";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { useState } from "react";
// import { Theme, useTheme } from "@mui/material/styles";
// import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select"; //  SelectChangeEvent
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "@/utils/HelperFunctions";
import http from "@/redux/http-common";
import { ERROR, JOB_NATURE, SUCCESS, WORK_PREFERENCE } from "@/utils/constants";
import {
  GetCandsPrefInfo,
  // insertNewJobTitles,
  // insertNewJobType,
  // insertNewLocation,
  // insertNewPlace,
  // updateAvailablity,
} from "@/redux/slices/personal";
import { updateCurrentScreen } from "@/redux/slices/candidate";
import userService from "@/redux/services/user.service";
import { openAlert } from "@/redux/slices/alert";

const AddCareerPreference = () => {
  const user = JSON.parse(localStorage.getItem("User"));
  const { myPreferenceInfo } = useSelector(
    (state) => state?.personal?.myPreferenceInfo
  );

  const [careerPre, setCareerPre] = useState({
    immediateJoiner: myPreferenceInfo?.immediateJoiner,
    jobLocations: myPreferenceInfo?.jobLocations,
    jobTitles: myPreferenceInfo?.jobTitles,
    jobTypes: myPreferenceInfo?.jobTypes,
    workPlaces: myPreferenceInfo?.workPlaces,
  });

  const [address, setaddress] = useState("");
  const [type, setType] = useState([]);
  const [timetoLoad, setTimeTLoad] = useState(null);
  const [titleLoading, setTitleLoading] = useState(false);
  const [preference, setPreference] = useState("");
  const [jobTypes, setJobTypes] = useState("");
  const dispatch = useDispatch();

  const handleAvailabilityChange = (event) => {
    setCareerPre((state) => ({
      ...state,
      immediateJoiner: event.target.value,
    }));
  };

  const requestTitles = (e) => {
    setTitleLoading(true);
    http
      .get(`getTitles?searchTitle=${e}`, {
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

  const handleTitle = (e) => {
    let jobTitleList = careerPre.jobTitles;
    jobTitleList = [...jobTitleList, e];
    setCareerPre((state) => ({ ...state, jobTitles: jobTitleList }));
  };

  const handleSelect = (selected) => {
    if (selected?.label) {
      let located = selected?.label;
      setCareerPre((state) => ({
        ...state,
        jobLocations: [located, ...state.jobLocations],
      }));
      setaddress("");
    }
  };

  const removeTitle = (e) => {
    let newTitles = careerPre.jobTitles.filter((j) => e != j);
    setCareerPre((state) => ({ ...state, jobTitles: newTitles }));
  };

  const handlePreference = (e, val) => {
    setPreference(() => val);
  };

  const addPreference = () => {
    if (preference) {
      let preferences = careerPre.workPlaces;
      preferences = [...preferences, preference];
      preferences = Array.from(new Set(preferences));
      setCareerPre((state) => ({ ...state, workPlaces: preferences }));
      setPreference("");
    }
  };

  const removePreferences = (e) => {
    let newPreferences = careerPre.workPlaces.filter((j) => e != j);
    setCareerPre((state) => ({ ...state, workPlaces: newPreferences }));
  };

  const addWork = (e, val) => {
    setJobTypes(() => val);
  };

  const addWordType = () => {
    let work = careerPre.jobTypes;
    work = [...work, jobTypes];
    work = Array.from(new Set(work));
    setCareerPre((state) => ({ ...state, jobTypes: work }));
    setJobTypes(() => "");
  };

  const removeJobs = (e) => {
    let newJobs = careerPre.jobTypes.filter((j) => e != j);
    setCareerPre((state) => ({ ...state, jobTypes: newJobs }));
  };

  const removeTheLocation = (e) => {
    let newLocation = careerPre.jobLocations.filter((j) => e != j);
    setCareerPre((state) => ({ ...state, jobLocations: newLocation }));
  };

  const updateData = () => {
    userService
      .updateMyPreference(careerPre)
      .then(() => {
        dispatch(
          openAlert({
            type: SUCCESS,
            message: "User Preferences Updated",
          })
        );
        dispatch(updateCurrentScreen(""));
        dispatch(GetCandsPrefInfo());
      })
      .catch((errpr) => {
        console.log(errpr);
        dispatch(
          openAlert({
            type: ERROR,
            message: "Something went wrong",
          })
        );
      });
  };

  return (
    <div>
      <Container>
        <Card variant="outlined">
          <Box sx={{ bgcolor: "#2699FF" }}>
            <Button
              variant="text"
              startIcon={<ArrowBackIcon />}
              sx={{
                color: "white",
                textTransform: "capitalize",
                fontSize: "18px",
              }}
              onClick={() => dispatch(updateCurrentScreen(""))}
            >
              Back
            </Button>
          </Box>

          <CardContent sx={{ p: "50px", paddingBottom: "100px !important" }}>
            <CustomTypography
              className="personalDetailTitle"
              sx={{
                display: "flex",
                justifyContent: "center",
                fontFamily: "Inter-bold",
                fontSize: "33px",
              }}
            >
              Add Career Preference
            </CustomTypography>

            <Stack sx={{ mt: "50px", gap: "30px" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Availability
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={careerPre.immediateJoiner}
                  label="Availability"
                  onChange={handleAvailabilityChange}
                >
                  <MenuItem value={"yes"}>
                    Immediately, I’m actively applying
                  </MenuItem>
                  <MenuItem value={"no"}>
                    Flexible, I’m casually browsing
                  </MenuItem>
                </Select>
              </FormControl>

              <Stack sx={{ gap: "10px" }}>
                <Autocomplete
                  freeSolo
                  id="free-solo-2-demo"
                  disableClearable
                  fullWidth
                  name="jobTitle"
                  value={""}
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

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                  {careerPre.jobTitles.map((ne, index) => (
                    <Chip
                      key={index}
                      label={ne}
                      onDelete={() => removeTitle(ne)}
                      deleteIcon={<CloseIcon />}
                      sx={{
                        fontSize: "17px",
                        bgcolor: "#D4F0FC",
                        padding: "10px",
                      }}
                    />
                  ))}
                </Box>
              </Stack>

              <Stack gap={1}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Autocomplete
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable
                    fullWidth
                    disablePortal={true}
                    name="workPreference"
                    value={preference}
                    onChange={handlePreference}
                    options={WORK_PREFERENCE}
                    renderInput={(params) => (
                      <TextField
                        variant="outlined"
                        {...params}
                        label="Work Preference"
                        name="workPreference"
                        InputProps={{
                          ...params.InputProps,
                          type: "search",
                        }}
                      />
                    )}
                  />
                  <IconButton onClick={() => addPreference()}>
                    <AddIcon sx={{ color: "#1976d2" }} />
                  </IconButton>
                </Box>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                  {careerPre.workPlaces.map((ne, index) => (
                    <Chip
                      key={index}
                      label={ne}
                      onDelete={() => removePreferences(ne)}
                      deleteIcon={<CloseIcon />}
                      sx={{ fontSize: "17px", bgcolor: "#D4F0FC" }}
                    />
                  ))}
                </Box>
              </Stack>

              <Stack gap={1}>
                <CustomTypography sx={{ fontSize: "1.2rem" }}>
                  Locations
                </CustomTypography>
                <Box sx={{ width: "100%" }}>
                  <GooglePlacesAutocomplete
                    apiKey="AIzaSyCLT3fP1-59v2VUVoifXXJX-MQ0HA55Jp4"
                    selectProps={{
                      isClearable: true,
                      placeholder: "Enter Your Location",
                      value: address,
                      onChange: (val) => {
                        setaddress(val);
                        handleSelect(val);
                      },
                      styles: {
                        textInputContainer: (provided) => ({
                          ...provided,
                          backgroundColor: "red",
                        }),
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

                <Box sx={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
                  {careerPre.jobLocations.map((t, index) => (
                    <Chip
                      key={index}
                      label={t}
                      onDelete={() => removeTheLocation(t)}
                      deleteIcon={<CloseIcon />}
                      sx={{ fontSize: "17px", bgcolor: "#D4F0FC" }}
                    />
                  ))}
                </Box>
              </Stack>

              <Stack gap={1}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Autocomplete
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable
                    fullWidth
                    disablePortal={true}
                    name="jobtype"
                    value={jobTypes}
                    options={JOB_NATURE}
                    onChange={addWork}
                    renderInput={(params) => (
                      <TextField
                        variant="outlined"
                        {...params}
                        label="Job Type"
                        name="jobtype"
                        InputProps={{
                          ...params.InputProps,
                          type: "search",
                        }}
                      />
                    )}
                  />

                  <IconButton onClick={() => addWordType()}>
                    <AddIcon sx={{ color: "#1976d2" }} />
                  </IconButton>
                </Box>{" "}
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                  {careerPre.jobTypes.map((j, index) => (
                    <Chip
                      key={index}
                      label={j}
                      onDelete={() => removeJobs(j)}
                      deleteIcon={<CloseIcon />}
                      sx={{ fontSize: "17px", bgcolor: "#D4F0FC" }}
                    />
                  ))}
                </Box>
              </Stack>

              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#015FB1 !important",
                    width: "50%",
                    borderRadius: "8px",
                  }}
                  onClick={() => dispatch(updateCurrentScreen(""))}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#015FB1 !important",
                    width: "50%",
                    borderRadius: "8px",
                  }}
                  onClick={() => updateData()}
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

export default React.memo(AddCareerPreference);
