"use client";
import * as React from "react";
import {
  Stack,
  Button,
  TextField,
  Container,
  Autocomplete,
  Card,
  CardContent,
  Box,
  FormControl,
} from "@mui/material";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch, useSelector } from "react-redux";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
} from "react-google-places-autocomplete";
import { convertDate } from "@/utils/HelperFunctions";
import { updateCurrentScreen } from "@/redux/slices/candidate";
import { MobileDatePicker } from "@mui/x-date-pickers";
import {
  AddExperinceAndThenGet,
  EditExperinceAndGet,
  GetCandsPrefInfo,
} from "@/redux/slices/personal";
import dayjs from "dayjs";
import candidateServices from "@/redux/services/candidate.services";
import { openAlert } from "@/redux/slices/alert";
import { ERROR, SUCCESS } from "@/utils/constants";

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
];

const AddExperience = () => {
  const resume = useSelector((state) => state.personal.exper);
  const dispatch = useDispatch();

  const [experienceFields, setExperienceFields] = React.useState({
    companyName: "",
    role: "",
    country: "",
    state: "",
    city: "",
    experience: "",
    fromDate: "",
    toDate: "",
  });

  React.useEffect(() => {
    setExperienceFields(() => ({
      companyName: resume?.companyName,
      role: resume?.role,
      country: resume?.country,
      state: resume?.state,
      city: resume?.city,
      experience: resume?.experience,
      fromDate: resume?.fromDate,
      toDate: resume?.toDate,
      jobProfile: resume?.jobProfile,
      _id: resume?._id,
    }));
    setValue(() => dayjs(resume?.fromDate));
    setValue2(() => dayjs(resume?.toDate));
  }, [resume]);

  const [value, setValue] = React.useState("");
  const [value2, setValue2] = React.useState("");
  const [empType, setEmpType] = React.useState("");

  const handleEmpTypeChange = (event) => {
    setEmpType(event.target.value);
  };

  const onChange = (e) => {
    let { name, value } = e.target;
    setExperienceFields({
      ...experienceFields,
      [name]: value,
    });
  };

  const handleSelect = async (selected) => {
    const results = await geocodeByAddress(selected.label);
    setExperienceFields({
      ...experienceFields,
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

  const handleChange = (newValue) => {
    let val = convertDate(newValue);
    setValue(() => newValue);
    setExperienceFields((state) => ({
      ...state,
      fromDate: val,
    }));
  };

  const handleChangeto = (newValue2) => {
    let val = convertDate(newValue2);
    setValue2(() => newValue2);
    setExperienceFields((state) => ({
      ...state,
      toDate: val,
    }));
  };

  const gotoHome = () => {
    dispatch(updateCurrentScreen(""));
  };

  const addExperience = () => {
    if (resume?._id) {
      editMyExperience();
    } else {
      addMyExperience(AddExperinceAndThenGet(experienceFields));
    }
  };

  const editMyExperience = () => {
    candidateServices
      .editExperience(experienceFields, resume?._id)
      .then(() => {
        dispatch(
          openAlert({
            type: SUCCESS,
            message: "User Preferences Updated",
          })
        );
        dispatch(updateCurrentScreen(""));
        dispatch(retrievePersonal());
      })
      .catch((error) => {
        dispatch(
          openAlert({
            type: ERROR,
            message: error.response.data.message || "Something went wrong",
          })
        );
      });
  };

  const addMyExperience = () => {
    candidateServices
      .addExperience(experienceFields)
      .then(() => {
        dispatch(
          openAlert({
            type: SUCCESS,
            message: "User Preferences Updated",
          })
        );
        dispatch(updateCurrentScreen(""));
        dispatch(retrievePersonal());
      })
      .catch((error) => {
        dispatch(
          openAlert({
            type: ERROR,
            message: error.response.data.message || "Something went wrong",
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
              onClick={() => gotoHome()}
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
              Add Experience
            </CustomTypography>

            <Stack spacing={2} sx={{ mt: "50px" }}>
              <TextField
                autoComplete="given-name"
                name="role"
                required
                fullWidth
                id="companyRole"
                label="Role"
                autoFocus
                value={experienceFields?.role}
                onChange={onChange}
              />

              <TextField
                autoComplete="given-name"
                name="companyName"
                required
                fullWidth
                id="cmopanyName"
                label="Company Name"
                autoFocus
                value={experienceFields?.companyName}
                onChange={onChange}
              />

              <Box sx={{ width: "100%" }}>
                <GooglePlacesAutocomplete
                  apiKey="AIzaSyCLT3fP1-59v2VUVoifXXJX-MQ0HA55Jp4"
                  selectProps={{
                    isClearable: true,
                    placeholder: "Enter Your Location",
                    value: experienceFields?.country,
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

              {experienceFields?.country === "" ? (
                ""
              ) : (
                <Stack
                  sx={{
                    flexDirection: { md: "row", sm: "column", xs: "column" },
                    alignItems: "center",
                    gap: "10px",
                  }}
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
                      value={experienceFields?.country}
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
                      value={experienceFields?.state}
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
                      value={experienceFields?.city}
                      onChange={onChange}
                    />
                  </FormControl>
                </Stack>
              )}

              <TextField
                id="outlined-basic"
                label="Total Experience(Years)"
                type="number"
                variant="outlined"
                onChange={onChange}
                name="experience"
                value={experienceFields?.experience}
              />

              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Employement Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={empType}
                  label="Employement Type"
                  onChange={handleEmpTypeChange}
                >
                  <MenuItem value={"Permanent"}>Permanent</MenuItem>
                  <MenuItem value={"Contract"}>Contract</MenuItem>
                  <MenuItem value={"Contract"}>Freelancing</MenuItem>
                </Select>
              </FormControl>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { md: "row", sm: "column", xs: "column" },
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

              <TextField
                required
                id="outlined-basic"
                label="Salary"
                variant="outlined"
              />

              <TextField
                id="outlined-multiline-static"
                label="Job Profile"
                multiline
                name="jobProfile"
                rows={4}
                value={experienceFields.jobProfile}
                onChange={onChange}
              />

              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#015FB1 !important",
                    width: "50%",
                    borderRadius: "8px",
                  }}
                  onClick={() => gotoHome()}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  sx={{ bgcolor: "#015FB1 !important", width: "50%" }}
                  onClick={() => addExperience()}
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

export default AddExperience;
