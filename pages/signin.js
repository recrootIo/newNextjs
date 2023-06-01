/* eslint-disable @next/next/no-img-element */
"use client";
import {
  Backdrop,
  Box,
  Card,
  CardContent,
  Checkbox,
  CircularProgress,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { PRIMARY } from "../theme/colors";
import { CustomTypography } from "../ui-components/CustomTypography/CustomTypography";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { Visibility, VisibilityOff } from "@mui/icons-material";
// import { login } from "../slices/auth";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { login } from "@/redux/slices/auth";
import Image from "next/image";
import Cookies from "js-cookie";

const StyledInput = styled("input")({
  height: "60px",
  border: "1px solid #c2c8d0",
  borderRadius: "8px",
  width: "95%",
  fontSize: "18px",
  fontWeight: "400",
  color: "#000",
  padding: "10px",
});

import { cookies } from "next/headers";
import { openAlert } from "@/redux/slices/alert";
import { ERROR } from "@/utils/constants";
import Header from "@/components/Header";

function Signin() {
  const dispatch = useDispatch();
  const { push } = useRouter();

  const [loading, setLoading] = useState(false);
  const [showPassword, setshowPassword] = useState(false);
  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setshowPassword(!showPassword);
  };

  const redirect = null;
  const path = false;

  const handleLogin = (e) => {
    setLoading(true);
    e.preventDefault();
    dispatch(login({ values }))
      .unwrap()
      .then((originalPromiseResult) => {
        setLoading(false);
        // push("/");
        if (originalPromiseResult.User.email_is_verified === false) {
          push("/Verifymobile");
        } else if (originalPromiseResult.User.recrootUserType === "Member") {
          if (path === true) {
            push("/Pricing");
            return;
          }
          push("/");
        } else if (originalPromiseResult.User.recrootUserType === "Candidate") {
          if (originalPromiseResult?.User?.profilePercentage > 69) {
            if (redirect) {
              push(redirect);
            } else {
              push("/");
            }
          } else {
            console.log("resumeSecond");
            push("/uploadResume");
          }
          push("/");
        } else {
          push("/");
          if (path === true) {
            push("/Pricing");
            return;
          }
          if (redirect === null) {
            push("/");
          } else {
            push(redirect);
          }
        }
      })
      .catch((error) => {
        console.warn(error);
        setLoading(false);
        dispatch(
          openAlert({
            type: ERROR,
            message: "Please Check Your Email And Password",
          })
        );
      });
  };

  const handleClick = (val) => {
    if (val === "google") {
      window.location.replace("https://preprod.recroot.au/auth/google");
    } else {
      window.location.replace("https://preprod.recroot.au/auth/linkedin");
    }
  };

  return (
    <section className="signInMain">
      <Header title={"Login"} />
      <Container
        sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      >
        <Stack className="signInContent">
          <Stack sx={{ alignItems: "center", gap: "20px", padding: "10px" }}>
            <Image
              src="/whiteLogo.png"
              className="loginLogo"
              alt=""
              width="0"
              height="0"
              sizes="100vw"
            />
            <CustomTypography
              sx={{
                fontSize: "40px",
                color: "white",
                fontFamily: "Inter-Bold",
              }}
            >
              Sign Up and Find Your Dream Job
            </CustomTypography>
          </Stack>

          <Stack>
            <Card
              variant="outlined"
              sx={{
                background: "white",
                borderRadius: "20px",
                padding: { md: "30px", sm: "5px", xs: "2px" },
              }}
            >
              <CardContent>
                <Stack sx={{ alignItems: "center", gap: "20px" }}>
                  <Stack sx={{ alignItems: "center" }}>
                    <CustomTypography
                      sx={{ fontSize: "30px", fontWeight: "900" }}
                    >
                      Log in
                    </CustomTypography>
                    <Stack
                      direction={"row"}
                      sx={{ gap: "5px", flexWrap: "wrap" }}
                    >
                      <CustomTypography>
                        Log in Don’t have an account?
                      </CustomTypography>
                      <Link href={"/signup"}>
                        <CustomTypography
                          sx={{
                            color: "#034275",
                            textDecoration: "underline",
                          }}
                        >
                          Sign up
                        </CustomTypography>
                      </Link>
                    </Stack>
                  </Stack>
                  <Stack
                    sx={{ alignItems: "center", gap: "20px", width: "100%" }}
                  >
                    <button onClick={handleClick} className="linkedinButton">
                      <span>
                        <img src={"/linkedInLogo.png"} alt="" height={"30px"} />
                      </span>
                      <span style={{ marginTop: "6px" }}>
                        Log in with LinkedIn
                      </span>
                    </button>
                    <button
                      onClick={() => {
                        handleClick("google");
                      }}
                      className="linkedinButton"
                    >
                      <span>
                        <img src={"/googleLogo.png"} alt="" height={"30px"} />
                      </span>
                      <span style={{ marginTop: "1px" }}>
                        Log in with Google
                      </span>
                    </button>
                  </Stack>
                  <Divider>OR</Divider>
                  {/* <img
                      src="/signIn.png"
                      className="signInSideImage1"
                      alt=""
                      width="0"
                      height="0"
                      sizes="100vw"
                    />
                    <img
                      src="/signIn2.png"
                      className="signInSideImage2"
                      alt=""
                      width="0"
                      height="0"
                      sizes="100vw"
                    /> */}
                  <form
                    onSubmit={(e) => {
                      handleLogin(e);
                    }}
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <StyledInput
                      autoComplete="given-name"
                      name="email"
                      required
                      fullWidth
                      type="email"
                      id="email"
                      placeholder="Enter Email ID"
                      onChange={handleChange}
                    />
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={showPassword ? "text" : "password"}
                      value={values.password}
                      required
                      sx={{
                        height: "60px",
                        border: "1px solid #c2c8d0",
                        borderRadius: "8px",
                        width: "95%",
                        fontSize: "18px",
                        fontWeight: "400",
                        color: "#000",
                      }}
                      placeholder="Password"
                      name="password"
                      onChange={handleChange}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleClickShowPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                    <Stack
                      direction={"row"}
                      sx={{
                        justifyContent: "space-between",
                        width: "95%",
                        flexDirection: { md: "row", xs: "column", sm: "row" },
                      }}
                    >
                      <FormControl>
                        <FormControlLabel
                          control={
                            <Checkbox
                              // value={values.checked}
                              color="primary"
                              // checked={values.checked}
                            />
                          }
                          label={
                            <CustomTypography>Remember Me</CustomTypography>
                          }
                        />
                      </FormControl>
                      <CustomTypography>Forget Your Password</CustomTypography>
                    </Stack>
                    <button
                      style={{
                        height: "60px",
                        backgroundColor: "#015FB1",
                        borderRadius: "8px",
                        width: "95%",
                        fontSize: "18px",
                        fontWeight: "400",
                        color: "white",
                      }}
                      type="submit"
                    >
                      Log in
                    </button>
                  </form>
                  <Backdrop
                    sx={{
                      color: "#fff",
                      zIndex: (theme) => theme.zIndex.drawer + 1,
                    }}
                    open={loading}
                  >
                    <Box sx={{ display: "inline-flex", width: 50 }}>
                      <CircularProgress color="inherit" />
                      <Box
                        sx={{
                          top: 100,
                          left: 10,
                          bottom: 0,
                          right: 10,
                          position: "absolute",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <CustomTypography
                          component="div"
                          variant="h6"
                          gutterBottom
                        >
                          Loading
                        </CustomTypography>
                      </Box>
                    </Box>
                  </Backdrop>
                </Stack>
              </CardContent>
            </Card>
          </Stack>
        </Stack>
      </Container>
    </section>
  );
}

export default Signin;
