import { Box, Button, Container, Stack } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import CustomTextField from "../Forms/CustomTextField";
import * as Yup from "yup";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import http from "@/redux/http-common";
import { openAlert } from "@/redux/slices/alert";
import { ERROR, SUCCESS } from "@/utils/constants";
import axios from "axios";
import { useDispatch } from "react-redux";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const FORM_VALIDATION = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const [INITIAL_VALUES] = React.useState({
    email: "",
  });

  const handleSubmit = (email) => {
    axios
      .post("https://preprod.recroot.au/forgot-password", { email })
      .then(() => {
        dispatch(
          openAlert({
            type: SUCCESS,
            message:
              "An email has been sent to you with the link to reset your password",
          })
        );
      })
      .catch(() => {
        dispatch(
          openAlert({
            type: ERROR,
            message: "User Does Not Exist",
          })
        );
      });
  };

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "100px",
      }}
    >
      <Formik
        initialValues={{ ...INITIAL_VALUES }}
        validationSchema={FORM_VALIDATION}
        onSubmit={(values) => {
          handleSubmit(values.email);
        }}
      >
        {({ submitForm }) => {
          return (
            <Form
              style={{
                width: "100%",
                alignItems: "center",
                justifyItems: "center",
                display: "flex",
              }}
            >
              <Container>
                <Stack
                  direction={"column"}
                  sx={{
                    width: "100%",
                    alignItems: "center",
                    justifyItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: { md: "50%", sm: "100%", xs: "100%" },
                      flexDirection: "column",
                      gap: "30px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <CustomTypography
                      sx={{ fontWeight: "600", fontSize: "30px" }}
                    >
                      Reset Password Link
                    </CustomTypography>
                    <CustomTextField label="Email" name="email" />
                    <Button
                      variant="contained"
                      sx={{ bgcolor: "#015FB1 !important", width: "100%" }}
                      onClick={() => submitForm()}
                    >
                      Send Your Reset Link
                    </Button>
                  </Box>
                </Stack>
              </Container>
            </Form>
          );
        }}
      </Formik>
    </section>
  );
};

export default ForgotPassword;
