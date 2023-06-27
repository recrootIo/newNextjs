"use client";
import * as React from "react";
import {
  Box,
  Stack,
  Button,
  TextField,
  Container,
  Card,
  CardContent,
} from "@mui/material";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentScreen } from "@/redux/slices/candidate";
import { MobileDatePicker } from "@mui/x-date-pickers";
import { convertDate } from "@/utils/HelperFunctions";
import {
  clearTraining,
  // AddTrainAndThenGet,
  // EditTrainAndGet,
  retrievePersonal,
} from "@/redux/slices/personal";
import dayjs from "dayjs";
import candidateServices from "@/redux/services/candidate.services";
import { ERROR, SUCCESS } from "@/utils/constants";
import { openAlert } from "@/redux/slices/alert";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import CustomTextField from "@/components/Forms/CustomTextField";
import CustomPickers from "@/components/Forms/CustomPickers";
import CalculatePercentage from "@/utils/CalculatePercentange";
import { ADD, EDIT } from "@/utils/buttnTexts";

const FORM_VALIDATION = Yup.object().shape({
  title: Yup.string().required("Title field is required"),
  instituete: Yup.string().required("Organization field is required"),
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

const AddTraining = () => {
  const dispatch = useDispatch();
  const training = useSelector((state) => state?.personal?.training);

  const [INITIAL_VALUES, setInitialValues] = React.useState({
    title: training?.title,
    instituete: training?.instituete,
    fromDate: training?.fromDate,
    toDate: training?.toDate,
    _id: training?._id,
  });
  const [title, setTitle] = React.useState("Add Training");

  React.useEffect(() => {
    setInitialValues(INITIAL_VALUES);
  }, [training, INITIAL_VALUES]);

  const gotToTraining = () => {
    dispatch(updateCurrentScreen(""));
    dispatch(clearTraining());
  };

  const saveTrainings = (values) => {
    if (values?._id) {
      editTrainings(values);
    } else {
      addNewTraining(values);
    }
  };

  const addNewTraining = (values) => {
    candidateServices
      .addTrainings(values)
      .then((res) => {
        if (res?.status === 201) {
          dispatch(
            openAlert({
              type: SUCCESS,
              message: "New Training is added",
            })
          );
          gotToTraining();
          CalculatePercentage();
        }
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

  const editTrainings = (values) => {
    candidateServices
      .editTrainings(values, values?._id)
      .then((res) => {
        if (res?.status === 201) {
          dispatch(
            openAlert({
              type: SUCCESS,
              message: "Edited Successfully",
            })
          );
          gotToTraining();
          CalculatePercentage();
        }
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

  React.useEffect(() => {
    setInitialValues(training);
  }, [training]);

  React.useEffect(() => {
    if (training?._id) {
      setTitle("Edit Training");
    } else {
      setTitle("Add Training");
    }
  }, [training]);

  const buttonText = training?._id ? EDIT : ADD;

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
              onClick={() => gotToTraining()}
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
                saveTrainings(values);
                console.log(values, "values");
              }}
            >
              {({ submitForm }) => {
                return (
                  <Form>
                    {" "}
                    <Stack spacing={2} sx={{ mt: "50px" }}>
                      <CustomTextField label="Title" name="title" />
                      <CustomTextField label="Institute" name="instituete" />

                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: {
                            md: "row",
                            xs: "column",
                            sm: "column",
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
                    // inputFormat="MM/dd/YYYY"
                    name="fromDate"
                    value={value}
                    onChange={handleChange}
                    sx={{ width: "100%" }}
                    renderInput={(params) => (
                      <TextField {...params} sx={{ width: "100%" }} />
                    )}
                  />

                  <MobileDatePicker
                    label="To"
                    // inputFormat="MM/dd/YYYY"
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
                          onClick={gotToTraining}
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

export default React.memo(AddTraining);
