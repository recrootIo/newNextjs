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
  // Radio,
  // RadioGroup,
  FormControl,
  // InputLabel,
  // Select,
} from "@mui/material";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
// import { useState } from "react";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch, useSelector } from "react-redux";
import { EDUCATION_LEVELS, ERROR, SUCCESS } from "@/utils/constants";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
// import { MobileDatePicker } from "@mui/x-date-pickers";
import { updateCurrentScreen } from "@/redux/slices/candidate";
import { geocodeByAddress } from "react-google-places-autocomplete";
// import { convertDate } from "@/utils/HelperFunctions";
import { openAlert } from "@/redux/slices/alert";
import candidateServices from "@/redux/services/candidate.services";
import { GetCandsPrefInfo, retrievePersonal } from "@/redux/slices/personal";
import { Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import CustomTextField from "@/components/Forms/CustomTextField";
import CustomPickers from "@/components/Forms/CustomPickers";

const FORM_VALIDATION = Yup.object().shape({
  graduate: Yup.string().required("Graduate field is required"),
  degreeName: Yup.string().required("Degree Name field is required"),
  country: Yup.string().required("Country field is required"),
  state: Yup.string().required("State field is required"),
  city: Yup.string().required("City field is required"),
  experience: Yup.number().required("Experience field is required"),
  collegeName: Yup.string().required("College Name field is required"),
  fromDate: Yup.date()
    .required("From Date field is required")
    .max(Yup.ref("toDate"), "From Date cannot exceed To Date")
    .test("future-date", "From Date cannot be a future date", function (value) {
      const toDate = this.resolve(Yup.ref("toDate"));
      if (!value || !toDate) {
        return true;
      }
      return new Date(value) <= new Date(toDate);
    }),
  toDate: Yup.date()
    .required("To Date field is required")
    .min(Yup.ref("fromDate"), "To Date cannot be less than From Date")
    .test("future-date", "To Date cannot be a future date", function (value) {
      const fromDate = this.resolve(Yup.ref("fromDate"));
      if (!value || !fromDate) {
        return true;
      }
      return new Date(value) >= new Date(fromDate);
    }),
});

const AddEducation = () => {
  const education = useSelector((state) => state.personal.education);
  const dispatch = useDispatch();

  const [INITIAL_VALUES, setInitialValues] = React.useState({
    graduate: education?.graduate || "",
    degreeName: education?.degreeName,
    country: education?.country || "",
    state: education?.state || "",
    city: education?.city || "",
    experience: education?.experience || "",
    collegeName: education?.collegeName || "",
    fromDate: education?.fromDate || "",
    toDate: education?.toDate || "",
    _id: education?._id,
  });

  const gotoHome = () => {
    dispatch(updateCurrentScreen(""));
  };

  const handleAdd = (educationDetails) => {
    if (educationDetails?._id) {
      editEducation(educationDetails);
    } else {
      addEducation(educationDetails);
    }
  };

  const addEducation = (educationDetails) => {
    candidateServices
      .addPersonalEducation(educationDetails)
      .then((res) => {
        if (res.status === 201) {
          dispatch(
            openAlert({
              type: SUCCESS,
              message: "User Education is Updated",
            })
          );
          dispatch(updateCurrentScreen(""));
          dispatch(GetCandsPrefInfo());
          dispatch(retrievePersonal());
        }
      })
      .catch((error) => {
        dispatch(
          openAlert({
            type: ERROR,
            message: error?.response?.data.message || "Something went wrong",
          })
        );
      });
  };

  const editEducation = (educationDetails) => {
    candidateServices
      .editPersonalEducation(educationDetails, educationDetails?._id)
      .then((res) => {
        if (res?.status === 201) {
          dispatch(
            openAlert({
              type: SUCCESS,
              message: "User Preferences Updated",
            })
          );
          dispatch(updateCurrentScreen(""));
          dispatch(GetCandsPrefInfo());
          dispatch(retrievePersonal());
        }
      })
      .catch((error) => {
        dispatch(
          openAlert({
            type: ERROR,
            message: error?.response?.data.message || "Something went wrong",
          })
        );
      });
  };

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setInitialValues(() => education);
  }, []);

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
          <CardContent
            sx={{
              p: { md: "50px", sm: "22px", xs: "22px" },
              paddingBottom: "100px !important",
            }}
          >
            <CustomTypography
              className="personalDetailTitle"
              sx={{
                display: "flex",
                justifyContent: "center",
                fontFamily: "Inter-bold",
                fontSize: "33px",
              }}
            >
              Add Education
            </CustomTypography>

            <Formik
              initialValues={{ ...INITIAL_VALUES }}
              validationSchema={FORM_VALIDATION}
              onSubmit={(values) => {
                handleAdd(values);
                console.log(values, "values");
              }}
            >
              {({ errors, values, setFieldValue, submitForm }) => {
                return (
                  <Form>
                    <Stack spacing={2} sx={{ mt: "50px" }}>
                      <Autocomplete
                        freeSolo
                        id="free-solo-2-demo"
                        disableClearable
                        options={EDUCATION_LEVELS}
                        sx={{ display: "flex", justifyContent: "center" }}
                        value={values.graduate}
                        name="graduate"
                        onChange={(e, a) => {
                          setFieldValue("graduate", a);
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            name="graduate"
                            label="Graduation"
                            error={errors.graduate}
                            helperText={errors.graduate}
                          />
                        )}
                      />

                      <CustomTextField label="Degree" name="degreeName" />

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
                                "city",
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
                          }}
                          spacing={2}
                          marginTop={2}
                        >
                          <CustomTextField name="country" label="country" />
                          <CustomTextField name="state" label="State" />
                          <CustomTextField name="city" label="city" />
                        </Stack>
                      )}

                      <CustomTextField
                        label="Duration(Years)"
                        name="experience"
                      />

                      <CustomTextField label="Institute" name="collegeName" />

                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: {
                            md: "row",
                            sm: "column",
                            xs: "column",
                          },
                          gap: "20px",
                          width: "100%",
                        }}
                      >
                        <CustomPickers name="fromDate" label="From" />
                        <CustomPickers name="toDate" label="To" />
                        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <MobileDatePicker
                            label="From"
                            name="fromDate"
                            sx={{ width: "100%" }}
                            value={value}
                            onChange={handleChange}
                            renderInput={(params) => (
                              <TextField {...params} sx={{ width: "100%" }} />
                            )}
                          />

                          <MobileDatePicker
                            label="To"
                            name="toDate"
                            sx={{ width: "100%" }}
                            value={value2}
                            onChange={handleChangeto}
                            renderInput={(params) => (
                              <TextField {...params} sx={{ width: "100%" }} />
                            )}
                          />
                        </LocalizationProvider> */}
                      </Box>

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
                          onClick={() => submitForm()}
                        >
                          Add
                        </Button>
                      </Stack>
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

export default AddEducation;
