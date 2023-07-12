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
  OutlinedInput,
  Checkbox,
  ListItemText,
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
  retrievePersonal,
} from "@/redux/slices/personal";
import { BOLD } from "@/theme/fonts";
// import personalService from "@/redux/services/personal.service";
// import userService from "@/redux/services/user.service";
import { openAlert } from "@/redux/slices/alert";
import candidateServices from "@/redux/services/candidate.services";

import { Form, Formik, useFormikContext } from "formik";
import CustomTextField from "@/components/Forms/CustomTextField";
import CustomSelect from "@/components/Forms/CustomSelect";
import { FORM_VALIDATION } from "./personalValidators";
import CalculatePercentage from "@/utils/CalculatePercentange";

const jobs = ["Remote", "Onsite", "Hybrid"];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const NoticePeriod = [
  "Immediate Joiner",
  "15 Days",
  "30 days",
  "45 Days",
  "60 Days",
  "90 Days",
];

const EditPersonalDetails = () => {
  const { data = {} } = useSelector((state) => state?.personal);

  const { firstName, jobTitle, lastName, mobile, about, resume } = data;
  const user = JSON.parse(localStorage.getItem("User"));

  const INITIAL_VALUES = {
    firstName,
    lastName,
    jobTitle,
    mobile,
    salaryCurrency: resume?.salaryCurrency,
    currentSalary: resume?.currentSalary?.salary,
    currentSalaryDenomination: resume?.currentSalary?.denomination,
    expectedSalary: resume?.expectedSalary?.salary,
    expectedSalaryDenomination: resume?.expectedSalary?.denomination,
    country: resume.location?.country,
    state: resume?.location?.state,
    city: resume?.location?.city,
    totalWorkExperience: resume?.totalWorkExperience,
    about,
    currentOffer: resume?.currentOffer,
    workPrefence: resume?.workPrefence,
    languages: resume?.languages,
    notice: resume?.notice,
    utube: resume?.socialMediaLink?.utube,
    twitter: resume?.socialMediaLink?.twitter,
    linkin: resume?.socialMediaLink?.linkin,
    fb: resume?.socialMediaLink?.fb,
  };

  const dispatch = useDispatch();

  const [titleLoading, setTitleLoading] = useState(false);

  const [type, setType] = useState([]);
  const [timetoLoad, setTimeTLoad] = useState(null);
  const [language, setLanguage] = useState("");

  const gotToPersonalDetails = () => {
    dispatch(updateCurrentScreen(""));
  };

  const requestTitles = (e) => {
    setTitleLoading(true);
    axios
      .get(`http://preprod.recroot.au/api/getTitles?searchTitle=${e}`, {
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

  const changeLanguages = (e) => {
    setLanguage(e);
  };

  const handleEdit = (updatedValues) => {
    candidateServices
      .editMyPersonalDetails(updatedValues)
      .then((res) => {
        if (res?.status === 201) {
          dispatch(
            openAlert({
              type: SUCCESS,
              message: "Personal details updated",
            })
          );
          dispatch(updateCurrentScreen(""));
          dispatch(getCandsPrefInfo());
          dispatch(retrievePersonal()).then((res) => {
            if (res?.meta?.requestStatus === "fulfilled") {
              CalculatePercentage();
            }
          });
        }
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

          <CardContent
            sx={{
              p: { md: "50px", sm: "22px", xs: "22px" },
              paddingBottom: "100px !important",
            }}
          >
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
            <Formik
              initialValues={{ ...INITIAL_VALUES }}
              validationSchema={FORM_VALIDATION}
              onSubmit={(values) => {
                console.log(values, "values");
                let currentSalary = {
                  salary: values.currentSalary,
                  denomination: values.currentSalaryDenomination,
                };
                let expectedSalary = {
                  salary: values.expectedSalary,
                  denomination: values.expectedSalaryDenomination,
                };

                let updatedValues = {
                  currentSalary,
                  expectedSalary,
                  salaryCurrency: values.salaryCurrency,
                  firstName: values.firstName,
                  lastName: values.lastName,
                  jobTitle: values.jobTitle,
                  mobile: values.mobile,
                  country: values.country,
                  state: values.state,
                  city: values.city,
                  totalWorkExperience: values?.totalWorkExperience,
                  about: values.about,
                  currentOffer: values.currentOffer,
                  workPrefence: values.workPrefence,
                  languages: values?.languages,
                  notice: values?.notice,
                  socialMediaLink: {
                    utube: values?.utube,
                    twitter: values?.twitter,
                    linkin: values?.linkin,
                    fb: values?.fb,
                  },
                };
                console.log(updatedValues, "values");
                handleEdit(updatedValues);
              }}
            >
              {({ errors, values, setFieldValue, submitForm }) => {
                return (
                  <Form>
                    <Stack spacing={2} sx={{ mt: "50px" }}>
                      <Stack
                        sx={{
                          gap: "10px",
                          flexDirection: {
                            md: "row",
                            sm: "column",
                            xs: "column",
                          },
                        }}
                      >
                        <CustomTextField name="firstName" label="First Name" />
                        <CustomTextField label="Last Name" name="lastName" />
                      </Stack>

                      <Autocomplete
                        freeSolo
                        id="free-solo-2-demo"
                        disableClearable
                        fullWidth
                        name="jobTitle"
                        value={values.jobTitle}
                        disablePortal={true}
                        options={type.map((option) => option)}
                        onChange={(e, a) => {
                          setFieldValue("jobTitle", a);
                        }}
                        required
                        loading={titleLoading}
                        sx={{ display: "flex", justifyContent: "center" }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Job Title"
                            name="jobTitle"
                            loading={titleLoading}
                            InputProps={{
                              ...params.InputProps,
                              type: "search",
                            }}
                            onChange={(e) => {
                              getJobTitles(e.target.value);
                              console.log(e.target.value, "a");
                              if (!e.target.value) {
                                setFieldValue("jobTitle", null);
                              }
                            }}
                            error={errors.jobTitle}
                            helperText={errors.jobTitle}
                          />
                        )}
                      />

                      <CustomTextField
                        name="about"
                        label="About"
                        multiline
                        rows={4}
                        required
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
                        value={`+${values.mobile}`}
                        onChange={(a) => {
                          setFieldValue("mobile", parseInt(a));
                        }}
                        inputStyle={{
                          width: "100%",
                          height: "3.7375em",
                          fontSize: "16px",
                          border: errors.mobile
                            ? "1px solid red"
                            : "1px solid hsl(0, 0%, 80%)",
                        }}
                      />

                      <Box sx={{ width: "100%" }}>
                        <GooglePlacesAutocomplete
                          apiKey="AIzaSyCLT3fP1-59v2VUVoifXXJX-MQ0HA55Jp4"
                          selectProps={{
                            isClearable: true,
                            placeholder: "Enter Your Location",
                            value: values.country,
                            onChange: async (selected) => {
                              const results = await geocodeByAddress(
                                selected.label
                              );
                              setFieldValue(
                                "country",
                                results[0].address_components.find((c) =>
                                  c.types.includes("country")
                                )?.long_name
                              );

                              setFieldValue(
                                "state",
                                results[0].address_components.find((c) =>
                                  c.types.includes(
                                    "administrative_area_level_1"
                                  )
                                )?.long_name
                              );

                              setFieldValue(
                                "state",
                                results[0].address_components.find((c) =>
                                  c.types.includes("locality")
                                )?.long_name
                              );
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

                      {values?.country === "" ? (
                        ""
                      ) : (
                        <Stack
                          sx={{
                            flexDirection: {
                              md: "row",
                              sm: "column",
                              xs: "column",
                            },
                            gap: "5px",
                            alignItems: "center",
                          }}
                          marginTop={2}
                        >
                          <CustomTextField name="country" label="country" />
                          <CustomTextField name="state" label="State" />
                          <CustomTextField name="city" label="city" />
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
                                error={errors.languages}
                              />
                            )}
                          />

                          <IconButton
                            onClick={() => {
                              if (language) {
                                let newLanguage = [...values.languages];
                                newLanguage.push(language);
                                changeLanguages("");
                                setFieldValue("languages", newLanguage);
                              }
                            }}
                          >
                            <AddIcon sx={{ color: "#1976d2" }} />
                          </IconButton>
                        </Stack>

                        <Box
                          sx={{ display: "flex", flexWrap: "wrap", gap: "5px" }}
                        >
                          {values?.languages?.map((lang, index) => (
                            <Chip
                              key={index}
                              label={lang}
                              deleteIcon={<CloseIcon />}
                              onDelete={() => {
                                let array = values?.languages.filter(
                                  (l) => l != lang
                                );
                                setFieldValue("languages", array);
                              }}
                              sx={{
                                fontSize: "17px",
                                bgcolor: "#D4F0FC",
                                padding: "3px",
                              }}
                            />
                          ))}
                        </Box>
                      </Stack>

                      <CustomTextField
                        name="totalWorkExperience"
                        label="Experience"
                      />

                      <FormControl sx={{ width: "100%" }}>
                        <InputLabel id="demo-simple-select-label">
                          Salary Currency
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={values.salaryCurrency}
                          name="salaryCurrency"
                          label="Salary Currency"
                          onChange={(e, a) => {
                            console.log(e.target.value, "e");
                            setFieldValue("salaryCurrency", e.target.value);
                          }}
                          required
                          error={errors.salaryCurrency}
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
                          flexDirection: {
                            md: "row",
                            sm: "column",
                            xs: "column",
                          },
                          gap: "5px",
                        }}
                        spacing={2}
                      >
                        <CustomTextField
                          name="currentSalary"
                          label="Current Salary(Per Annum)"
                        />

                        {/* DENOMINATIONS */}
                        <FormControl sx={{ width: "100%", m: "0 !important" }}>
                          <InputLabel id="demo-simple-select-label">
                            Denomination *
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={values.currentSalaryDenomination}
                            name="denomination"
                            label="Denomination *"
                            sx={{ backgroundColor: NEUTRAL, width: "100%" }}
                            onChange={(e) => {
                              setFieldValue(
                                "currentSalaryDenomination",
                                e.target.value
                              );
                            }}
                            required
                            error={errors.currentSalaryDenomination}
                          >
                            {DENOMINATIONS.map((data, ind) => (
                              <MenuItem key={ind} value={data}>
                                {data}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Stack>

                      <Stack
                        sx={{
                          flexDirection: {
                            md: "row",
                            sm: "column",
                            xs: "column",
                          },
                          gap: "5px",
                        }}
                        spacing={2}
                      >
                        <CustomTextField
                          name="expectedSalary"
                          label="Expected Salary(Per Annum)"
                        />

                        {/* DENOMINATIONS */}
                        <FormControl sx={{ width: "100%", m: "0 !important" }}>
                          <InputLabel id="demo-simple-select-label">
                            Denomination *
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={values.expectedSalaryDenomination}
                            name="denomination"
                            label="Denomination *"
                            sx={{ backgroundColor: NEUTRAL, width: "100%" }}
                            onChange={(a) => {
                              setFieldValue(
                                "expectedSalaryDenomination",
                                a.target.value
                              );
                            }}
                            error={errors.expectedSalaryDenomination}
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
                        <FormLabel
                          sx={{ color: "black" }}
                          id="demo-row-radio-buttons-group-label"
                        >
                          Do you already have an offer?*
                        </FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                          sx={{
                            gap: { md: "100px", sm: "10px", xs: "10px" },
                            mt: "12px",
                          }}
                          value={values?.currentOffer}
                          onChange={(e, a) => {
                            setFieldValue("currentOffer", e.target.value);
                          }}
                        >
                          <FormControlLabel
                            value="yes"
                            control={<Radio />}
                            label="Yes"
                          />
                          <FormControlLabel
                            value="no"
                            control={<Radio />}
                            label="No"
                          />
                        </RadioGroup>
                      </FormControl>

                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Work Preference
                        </InputLabel>
                        <Select
                          labelId="demo-multiple-checkbox-label"
                          id="demo-multiple-checkbox"
                          multiple
                          sx={{
                            backgroundColor: NEUTRAL,
                            width: "100%",
                            textTransform: "capitalize",
                          }}
                          value={values.workPrefence}
                          onChange={(e) => {
                            setFieldValue("workPrefence", e.target.value);
                          }}
                          input={<OutlinedInput label="Work Preference *" />}
                          renderValue={(selected) => selected.join(", ")}
                          MenuProps={MenuProps}
                          name="workPrefence"
                          required
                          error={errors.workPrefence}
                        >
                          {jobs.map((data, ind) => (
                            <MenuItem key={ind} value={data}>
                              <Checkbox
                                checked={values?.workPrefence.includes(data)}
                              />
                              <ListItemText primary={data} />
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>

                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Notice Period
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={values?.notice}
                          label="Notice Period"
                          name="notice"
                          required
                          onChange={(e, a) =>
                            setFieldValue("notice", e.target.value)
                          }
                          error={errors.notice}
                        >
                          {NoticePeriod.map((data, ind) => (
                            <MenuItem key={ind} value={data}>
                              {data}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>

                      <CustomTextField name="utube" label="Youtube" />
                      <CustomTextField name="linkin" label="LinkedIn" />
                      <CustomTextField name="twitter" label="Twitter" />
                      <CustomTextField name="fb" label="Facebook" />
                    </Stack>

                    <Stack direction="row" spacing={2} sx={{ mt: "10px" }}>
                      <Button
                        variant="contained"
                        sx={{
                          bgcolor: "#015FB1 !important",
                          width: "50%",
                          borderRadius: "8px",
                        }}
                        onClick={gotToPersonalDetails}
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="contained"
                        sx={{ bgcolor: "#015FB1 !important", width: "50%" }}
                        type={"submit"}
                        onClick={() => submitForm()}
                      >
                        Save
                      </Button>
                    </Stack>
                  </Form>
                );
              }}
            </Formik>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default EditPersonalDetails;
