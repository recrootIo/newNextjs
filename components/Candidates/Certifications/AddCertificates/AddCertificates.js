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
import {
  // DatePicker,
  LocalizationProvider,
  MobileDatePicker,
} from "@mui/x-date-pickers";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentScreen } from "@/redux/slices/candidate";
import { clearCertificate, retrievePersonal } from "@/redux/slices/personal";
import resumeService from "@/redux/services/resume.service";
import { openAlert } from "@/redux/slices/alert";
import { ERROR, SUCCESS } from "@/utils/constants";
import Image from "next/image";
import { Form, Formik } from "formik";
import CustomTextField from "@/components/Forms/CustomTextField";
import CustomPickers from "@/components/Forms/CustomPickers";
import * as YUP from "yup";
import CalculatePercentage from "@/utils/CalculatePercentange";

export const FORM_VALIDATION = YUP.object().shape({
  title: YUP.string().required("Title field Required"),
  organization: YUP.string().required("Organization field required"),
  certificate: YUP.mixed().nullable(),
  certificateName: YUP.mixed().nullable(),
  certificatepath: YUP.mixed().nullable(),
  certificateLink: YUP.mixed().nullable(),
  issueDate: YUP.date()
    .required("From Date field is required")
    .max(YUP.ref("expireDate"), "Issue Date cannot exceed To Date")
    .test(
      "future-date",
      "Issue Date cannot be a future date",
      function (value) {
        const expireDate = this.resolve(YUP.ref("expireDate"));
        if (!value || !expireDate) {
          return true;
        }
        return new Date(value) <= new Date(expireDate);
      }
    ),
  expireDate: YUP.date()
    .required("To Date field is required")
    .min(YUP.ref("issueDate"), "Expire Date cannot be less than From Date")
    .test(
      "future-date",
      "Expire Date cannot be a future date",
      function (value) {
        const issueDate = this.resolve(YUP.ref("issueDate"));
        if (!value || !issueDate) {
          return true;
        }
        return new Date(value) >= new Date(issueDate);
      }
    ),
});

const AddCertificates = ({}) => {
  const certOne = useSelector((state) => state.personal.certone);
  console.log(certOne, "certOne");
  const dispatch = useDispatch();

  const gotToCertificates = () => {
    dispatch(updateCurrentScreen(""));
    dispatch(clearCertificate());
  };

  const [INITIAL_VALUES, setInitialValues] = React.useState({
    title: certOne?.title,
    organization: certOne?.organization,
    certificate: null,
    certificateName: certOne?.certificateName,
    certificatepath: certOne?.certificatepath,
    certificateLink: certOne?.certificateLink,
    expireDate: certOne?.expireDate,
    issueDate: certOne?.issueDate,
    id: certOne?._id,
  });
  const [title, setTitle] = React.useState("Add Certificates");

  React.useEffect(() => {
    setInitialValues(certOne);
  }, [certOne]);

  const saveCertificates = (values) => {
    if (values?._id) {
      editNewCertification(values);
    } else {
      addNewCertificate(values);
    }
  };

  const addNewCertificate = (values) => {
    resumeService
      .certificatesAdd(values)
      .then((res) => {
        dispatch(
          openAlert({
            type: SUCCESS,
            message: "Certifications has been added",
          })
        );
        gotToCertificates();
        CalculatePercentage();
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

  const editNewCertification = (values) => {
    resumeService
      .certificatesEdit(values)
      .then((res) => {
        if (res?.status === 200) {
          dispatch(
            openAlert({
              type: SUCCESS,
              message: "Certifications has been updated",
            })
          );
          gotToCertificates();
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
    if (training?._id) {
      setTitle("Edit Certificates");
    } else {
      setTitle("Add Certificates");
    }
  }, [training]);

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
              onClick={() => gotToCertificates()}
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
                saveCertificates(values);
                console.log(values, "values");
              }}
            >
              {({ submitForm, setFieldValue, errors, values }) => {
                console.log(values, "values");
                return (
                  <Form>
                    <Stack spacing={2} sx={{ mt: "50px" }}>
                      <CustomTextField label="Title" name="title" />
                      <CustomTextField
                        label="Organization"
                        name="organization"
                      />
                      <Stack
                        sx={{
                          flexDirection: {
                            md: "row",
                            sm: "column",
                            xs: "column",
                          },
                          justifyContent: "space-between",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <CustomPickers name="issueDate" label="From" />
                        <CustomPickers name="expireDate" label="To" />
                      </Stack>
                      <Stack direction="row" spacing={2}>
                        <CustomTextField
                          label="Certificate link"
                          name="certificateName"
                        />
                        <Button
                          variant="outlined"
                          component="label"
                          sx={{
                            bgcolor: "transparent",
                            borderColor: "#a3c2c2",
                            width: "5%",
                          }}
                        >
                          <Image
                            src="/upload.png"
                            alt=""
                            width={20}
                            height={20}
                          />
                          <input
                            type="file"
                            accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.pdf,.jpg,.jpeg,.png"
                            hidden
                            name="certificate"
                            onChange={(e) => {
                              setFieldValue("certificate", e.target.files[0]);
                            }}
                          />
                        </Button>
                      </Stack>
                      {values?.certificate?.name && (
                        <Stack
                          direction={"row"}
                          sx={{ justifyContent: "flex-end" }}
                        >
                          <CustomTypography>
                            {values?.certificate?.name}
                          </CustomTypography>
                        </Stack>
                      )}

                      <Stack direction="row" spacing={2}>
                        <Button
                          variant="contained"
                          sx={{
                            bgcolor: "#015FB1 !important",
                            width: "50%",
                            borderRadius: "8px",
                          }}
                          onClick={gotToCertificates}
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

export default React.memo(AddCertificates);
