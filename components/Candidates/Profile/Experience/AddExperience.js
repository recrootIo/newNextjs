"use client";
import * as React from "react";
import {
  Stack,
  Button,
  TextField,
  Container,
  // Autocomplete,
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
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch, useSelector } from "react-redux";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
} from "react-google-places-autocomplete";
import { convertDate, convertFormat } from "@/utils/HelperFunctions";
import { updateCurrentScreen } from "@/redux/slices/candidate";
import { MobileDatePicker } from "@mui/x-date-pickers";
import {
  AddExperinceAndThenGet,
  clearExperience,
  retrievePersonal,
  // EditExperinceAndGet,
  // GetCandsPrefInfo,
} from "@/redux/slices/personal";
import dayjs from "dayjs";
import candidateServices from "@/redux/services/candidate.services";
import { openAlert } from "@/redux/slices/alert";
import { ERROR, SUCCESS } from "@/utils/constants";
import * as Yup from "yup";
import CustomTextField from "@/components/Forms/CustomTextField";
import { Form, Formik } from "formik";
import CustomPickers from "@/components/Forms/CustomPickers";
import CalculatePercentage from "@/utils/CalculatePercentange";
import { ADD, UPDATE } from "@/utils/buttnTexts";

const FORM_VALIDATION = Yup.object().shape({
  companyName: Yup.string().required("Company Name Required"),
  role: Yup.string().required("Role Name Required"),
  country: Yup.string().required("Country Name Required"),
  state: Yup.string().required("State Name Required"),
  city: Yup.string().required("City Name Required"),
  experience: Yup.number().required("Experience Required"),
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

const AddExperience = () => {
  const resume = useSelector((state) => state.personal.exper);
  const dispatch = useDispatch();

  const [INITIAL_VALUES, setInitialValues] = React.useState({
    companyName: resume?.companyName,
    role: resume?.role,
    country: resume?.country,
    state: resume?.state,
    city: resume?.city,
    experience: resume?.experience,
    fromDate: convertFormat(resume?.fromDate),
    toDate: convertFormat(resume?.toDate),
    jobProfile: resume?.jobProfile,
    _id: resume?._id,
  });
  const [title, setTitle] = React.useState("Add Experience");

  const gotoHome = () => {
    dispatch(clearExperience());
    dispatch(updateCurrentScreen(""));
  };

  const addExperience = (values) => {
    if (values?._id) {
      editMyExperience(values);
    } else {
      addMyExperience(values);
    }
  };

  const editMyExperience = (values) => {
    candidateServices
      .editExperience(values, values?._id)
      .then((res) => {
        if (res?.status === 201) {
          dispatch(
            openAlert({
              type: SUCCESS,
              message: "User Experience Updated",
            })
          );
          dispatch(updateCurrentScreen(""));
          dispatch(retrievePersonal()).then((res)=>{
            if(res?.meta?.requestStatus === "fulfilled"){
              CalculatePercentage()
            }
          })
        }
      })
      .catch((error) => {
        dispatch(
          openAlert({
            type: ERROR,
            message: error?.response?.data?.message || "Something went wrong",
          })
        );
      });
  };

  React.useEffect(() => {
    setInitialValues(() => resume);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addMyExperience = (values) => {
    candidateServices
      .addExperience(values)
      .then((res) => {
        if (res.status === 201) {
          dispatch(
            openAlert({
              type: SUCCESS,
              message: "User Experience saved",
            })
          );
          dispatch(updateCurrentScreen(""));
          dispatch(retrievePersonal()).then((res)=>{
            if(res?.meta?.requestStatus === "fulfilled"){
              CalculatePercentage()
            }
          })
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
    if (resume?._id) {
      setTitle("Edit Experience");
    } else {
      setTitle("Add Experience");
    }
  }, [resume]);

  const buttonText = resume?._id ? UPDATE : ADD;

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
              {title}
            </CustomTypography>

            <Formik
              initialValues={{ ...INITIAL_VALUES }}
              validationSchema={FORM_VALIDATION}
              onSubmit={(values) => {
                addExperience(values);
                console.log(values, "values");
              }}
            >
              {({ errors, values, setFieldValue, submitForm }) => {
                return (
                  <Form>
                    <Stack spacing={2} sx={{ mt: "50px" }}>
                      <CustomTextField label="Role" name={"role"} />
                      <CustomTextField
                        name="companyName"
                        label="Company Name"
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

                      {values?.country === undefined ? (
                        ""
                      ) : (
                        <Stack
                          sx={{
                            flexDirection: {
                              md: "row",
                              sm: "column",
                              xs: "column",
                            },
                            alignItems: "center",
                            gap: "10px",
                          }}
                          marginTop={2}
                        >
                          <CustomTextField name="country" label="country" />
                          <CustomTextField name="state" label="State" />
                          <CustomTextField name="city" label="city" />
                        </Stack>
                      )}

                      <CustomTextField
                        label="Total Experience(Years)"
                        name="experience"
                      />

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
                              sx={{ width: "100%" }}
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
                              sx={{ width: "100%" }}
                              // inputFormat="MM/dd/YYYY"
                              name="toDate"
                              value={value2}
                              onChange={handleChangeto}
                              renderInput={(params) => (
                                <TextField {...params} sx={{ width: "100%" }} />
                              )}
                            />
                          </LocalizationProvider> */}
                      </Box>

                      <CustomTextField
                        label="Job Profile"
                        multiline
                        name="jobProfile"
                        rows={4}
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
                          onClick={() => submitForm()}
                        >
                          {buttonText}
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

export default AddExperience;
