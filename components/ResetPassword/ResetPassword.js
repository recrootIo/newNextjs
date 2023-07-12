import React, { useState } from "react";
import {
  Box,
  Container,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { Grid, Button } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useEffect } from "react";
import { styles } from "./reset";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { openAlert } from "@/redux/slices/alert";
import { SUCCESS } from "@/utils/constants";

const FORM_VALIDATION = Yup.object({
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one uppercase character, one lowercase character, one special character, and one number"
    ),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const ResetPassword = ({ id, token }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const INITIAL_VALUES = {
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (e) => {
    axios
      .post(`http://preprod.recroot.au/reset-password/${id}/${token}`, {
        password: e.password,
      })
      .then(function (response) {
        if (response.status === 200) {
          router.push("/signin");
          dispatch(
            openAlert({
              type: SUCCESS,
              message: "Password has been updated",
            })
          );
        }
      })
      .catch(function (error) {
        console.warn(error);
      });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleMouseConfirmDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={styles.signin}>
      <Container maxWidth="xl" sx={{}}>
        <Box>
          <Formik
            initialValues={{ ...INITIAL_VALUES }}
            validationSchema={FORM_VALIDATION}
            onSubmit={handleSubmit}
          >
            {({ errors, submitForm }) => (
              <Form
                style={{
                  width: "100%",
                  alignItems: "center",
                  justifyItems: "center",
                  display: "flex",
                }}
              >
                <Grid container spacing={2} sx={styles.grid}>
                  <Grid
                    item
                    xs={12}
                    sm={8}
                    md={12}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <Typography sx={styles.resin}>
                      Reset Your Password
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sm={8}
                    md={10}
                    lg={7}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <FormControl
                      sx={{ width: { md: "70%", sm: "100%", xs: "100%" } }}
                      variant="outlined"
                    >
                      <InputLabel htmlFor="password">Password</InputLabel>
                      <Field
                        as={OutlinedInput}
                        required
                        id="password"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Enter Password"
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        error={!!errors.password}
                      />
                      {errors.password && (
                        <FormHelperText error id="accountId-error">
                          {errors.password}
                        </FormHelperText>
                      )}
                      {!errors.password && (
                        <FormHelperText
                          id="accountpAss-error"
                          sx={{ width: { sm: "400px", xs: "300px" } }}
                        >
                          Password must contain at least One uppercase
                          character, One lowercase character, One Special
                          character and One number
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sm={8}
                    md={10}
                    lg={7}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <FormControl
                      sx={{ width: { md: "70%", sm: "100%", xs: "100%" } }}
                      variant="outlined"
                    >
                      <InputLabel htmlFor="confirmPassword">
                        Confirm Password
                      </InputLabel>
                      <Field
                        as={OutlinedInput}
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle confirm-password visibility"
                              onClick={handleClickShowConfirmPassword}
                              onMouseDown={handleMouseConfirmDownPassword}
                              edge="end"
                            >
                              {showConfirmPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                      {errors.confirmPassword && (
                        <FormHelperText error id="accountId-error">
                          {errors.confirmPassword}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sm={8}
                    md={10}
                    lg={7}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: { md: "70%", sm: "100%", xs: "100%" },
                      }}
                    >
                      <Button
                        sx={{
                          bgcolor: "#015FB1 !important",
                          width: "100%",
                          color: "white",
                        }}
                        onClick={() => submitForm()}
                      >
                        Submit
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Box>
      </Container>
    </Box>
  );
};

export default ResetPassword;
