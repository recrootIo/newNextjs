"use client";
import {
  Card,
  CardContent,
  Checkbox,
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
import React, { useEffect, useRef, useState } from "react";
import { PRIMARY } from "../theme/colors";
import { CustomTypography } from "../ui-components/CustomTypography/CustomTypography";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { login } from "@/redux/slices/auth";
import Image from "next/image";
import { openAlert } from "@/redux/slices/alert";
import { ERROR , SUCCESS } from "@/utils/constants";
import axios from "axios";
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

function Signin() {
  const dispatch = useDispatch();
  const { push } = useRouter();

  const redirect = useRef();

  const [showPassword, setshowPassword] = useState(false);
  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });

  const handleClickShowPassword = () => {
    setshowPassword(!showPassword);
  };

  const handleChange = (event) => {
    const field = event.target.name;
    let value = event.target.value;

    if (field === "email") {
      value = value.toLowerCase();
    }
    setValues({ ...values, [field]: value });
  };

  useEffect(() => {
    redirect.current = localStorage.getItem("redirect");
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ values }))
      .unwrap()
      .then((originalPromiseResult) => {
        axios
        .get("https://ipapi.co/json/")
        .then((response) => {
          Cookies.set("country", response.data?.country);
        })
        if (
          originalPromiseResult.User.email_is_verified === false &&
          originalPromiseResult.User.recrootUserType !== "Member"
        ) {
          push("/Verifymobile");
          return;
        }

        if (originalPromiseResult.User.recrootUserType === "Candidate") {
          if (originalPromiseResult.User.resume.resumeFileLocation.length > 0) {
            if (redirect.current) {
              push(redirect.current);
            } else {
              push("/");
            }
          } else {
            push("/uploadResume");
          }
        } else if (
          originalPromiseResult.User.recrootUserType === "Employer" ||
          originalPromiseResult.User.recrootUserType === "Member"
        ) {
          push("/");
          dispatch(
            openAlert({
              type: SUCCESS,
              message: "You're logged in successfully!",
            })
          );
        }
        // if (originalPromiseResult.User.email_is_verified === false) {

        // } else if (originalPromiseResult.User.recrootUserType === "Member") {
        //   if (path === true) {
        //     push("/Pricing");
        //     return;
        //   }
        //   push("/");
        // } else if (originalPromiseResult.User.recrootUserType === "Candidate") {
        //   if (originalPromiseResult?.User?.profilePercentage > 69) {
        //     if (redirect) {
        //       push(redirect);
        //     } else {
        //       push("/");
        //     }
        //   } else {
        //     console.log("resumeSecond");
        //     push("/uploadResume");
        //   }
        //   push("/");
        // } else {
        //   push("/");
        //   if (path === true) {
        //     push("/Pricing");
        //     return;
        //   }
        //   if (redirect === null) {
        //     push("/");
        //   } else {
        //     push(redirect);
        //   }
        // }
      })
      .catch((error) => {
        console.warn(error);
        dispatch(
          openAlert({
            type: ERROR,
            message: "Please Check Your Email And Password",
          })
        );
        // toastyErrorFunction("Please Check Your Email And Password");
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
      <Container
        maxWidth="sm"
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
                fontSize: "30px",
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
                padding: { md: "5px", sm: "5px", xs: "2px" },
              }}
            >
              <CardContent>
                <Stack sx={{ alignItems: "center", gap: "20px" }}>
                  <Stack sx={{ alignItems: "center" }}>
                    <CustomTypography
                      sx={{ fontSize: "30px", fontWeight: "900" }}
                    >
                      Sign In
                    </CustomTypography>
                    <Stack
                      direction={"row"}
                      sx={{ gap: "5px", flexWrap: "wrap" }}
                    >
                      <CustomTypography>
                        Don’t have an account?
                      </CustomTypography>
                      <Link href={"/signup"}>
                        <CustomTypography
                          sx={{
                            color: "#034275",
                            textDecoration: "underline",
                          }}
                        >
                          Sign Up
                        </CustomTypography>
                      </Link>
                    </Stack>
                  </Stack>
                  <Stack
                    sx={{ alignItems: "center", gap: "20px", width: "100%" }}
                  >
                    <button onClick={handleClick} className="linkedinButton">
                      <span>
                        <Image
                          src={"/linkedInLogo.png"}
                          alt=""
                          height="20"
                          width="20"
                          blurDataURL="URL"
                          placeholder="blur"
                        />
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
                        <Image
                          src={"/googleLogo.png"}
                          alt=""
                          height="20"
                          width="20"
                          blurDataURL="URL"
                          placeholder="blur"
                        />
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
                      value={values.email}
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
                        padding: "10px",
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
                          label={<p>Remember Me</p>}
                        />
                      </FormControl>
                      <Link href={"/forgotPassword"}>
                        <CustomTypography>
                          Forgot Your Password ?
                        </CustomTypography>
                      </Link>
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
